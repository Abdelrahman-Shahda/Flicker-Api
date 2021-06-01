const User = require('../model/userModel');
const Photo = require('../model/photoModel');
const mongoose = require('mongoose');
const { LogicError } = require('../error/logic-error');
const Album = require('../model/albumModel');

module.exports.getFavorites = async (req, res) => {
    const user = await User.findById(req.params.userId);
    if (!user) {
        throw new LogicError(404, 'User is not found');
    }
    favouritesArray = [];
    // user['favourites'].forEach((photoId) =>
    //     favouritesArray.push(mongoose.Types.ObjectId(photoId))
    // );
    const photos = await Photo.find({
        _id: { $in: user['favourites'] },
    })
        .populate({
            path: 'creator',
            select: ['_id', 'firstName', 'lastName'],
        })
        .exec();
    res.send({ favorites: photos });
};
module.exports.followUser = async (req, res) => {
    const user = req.user;
    const isUserExist = await User.exists({ _id: req.body.userId });
    if (!isUserExist) throw new LogicError(404, 'User not found');
    await User.findByIdAndUpdate(user._id, {
        $addToSet: { following: req.body.userId },
    });
    res.send();
};
module.exports.unfollowUser = async (req, res) => {
    const user = req.user;
    const isUserExist = await User.exists({ _id: req.body.userId });
    if (!isUserExist) throw new LogicError(404, 'User not found');
    await User.findByIdAndUpdate(user._id, {
        $pull: { following: req.body.userId },
    });
    res.send();
};
module.exports.getFollowers = async (req, res) => {
    const user = await User.findById(req.params.userId);
    if (!user) throw new LogicError(404, 'User not found');
    await user
        .populate({
             path: 'followers', 
            select:'-showCase', 
            populate:{
            path: 'numberOfFollowers'
        } })
        .execPopulate();
    const loggedInUser = req.user;
    if(loggedInUser){
        user.followers.forEach((user) => {
            for(let i =0 ;i< loggedInUser.following.length;i++){
                if(loggedInUser.following[i].toString() === user._id.toString())
                {
                    user.isFollowing = true;
                    break;
                }
            }

        })
    }
    res.send({ followers: user.followers });
};

module.exports.getFollowings = async (req, res) => {
    const user = await User.findById(req.params.userId);
    if (!user) throw new LogicError(404, 'User not found');
    await user
        .populate({
             path: 'following', 
            select:'-showCase', 
            populate:{
            path: 'numberOfFollowers'
        } })
        .execPopulate();
    const loggedInUser = req.user;
    if(loggedInUser){
        user.following.forEach((user) => {
            for(let i =0 ;i< loggedInUser.following.length;i++){
                if(loggedInUser.following[i].toString() === user._id.toString())
                {
                    user.isFollowing = true;
                    break;
                }
            }

        })
    }
    res.send({ following: user.following });
};

//Add Statistics
module.exports.getUserAbout = async (req, res) => {
    const user = await User.findById(req.params.userId)
        .populate({
            path: 'showCase.photos',
            populate: {
                path: 'creator',
                select: 'firstName lastName _id userName',
            },
        })
        .populate({
            path: 'numberOfFollowers',
        })
        .exec();
    if (!user) throw new LogicError(404, 'User not found');
    const loggedInUser = req.user;
    if(loggedInUser){
        for(let i =0 ;i< loggedInUser.following.length;i++){
            if(loggedInUser.following[i].toString() === user._id.toString())
            {
                user.isFollowing = true;
                break;
            }
        }
    }
    res.send({ user });
};

module.exports.getUserPhotoStream = async (req, res) => {
    const isUserExist = await User.exists({ _id: req.params.userId });
    if (!isUserExist) throw new LogicError(404, 'User not found');
    const photos = await Photo.find({
        creator: req.params.userId,
        isPublic: true,
    })
        .populate({
            path: 'creator',
            select: 'firstName lastName _id',
        })
        .exec();

    res.send({ photos });
};
module.exports.editCoverPhoto = async (req, res) => {
    const photo = await Photo.findById(req.body.photoId);
    if (!photo) throw new LogicError(404, 'Photo not found');

    if (!(photo.creator.toString() === req.user.id.toString())) {
        const albums = await Album.findOne({
            creator: req.user.id,
            featured: photo.id,
        });
        if (!albums)
            throw new LogicError(400, 'You cant use this photo as cover photo');
    }
    const user = req.user;
    user.coverPhotoUrl = photo.url;
    await user.save();
    res.send({});
};

module.exports.editProfilePhoto = async (req, res) => {
    const photo = await Photo.findById(req.body.photoId);
    if (!photo) throw new LogicError(404, 'Photo not found');

    if (!(photo.creator.toString() === req.user.id.toString())) {
        const albums = await Album.findOne({
            creator: req.user.id,
            featured: photo.id,
        });
        if (!albums)
            throw new LogicError(400, 'You cant use this photo as cover photo');
    }
    const user = req.user;
    user.profilePhotoUrl = photo.url;
    await user.save();
    res.send({});
};

module.exports.editInfo = async (req, res) => {
    let isValid = true;
    const validEdits = ['currentCity', 'homeTown', 'occupation'];
    Object.keys(req.body).forEach((edit) => {
        if (!validEdits.includes(edit)) isValid = false;
    });
    if (!isValid) throw new LogicError(400, 'Invalid Edit');
    const user = req.user;
    await user.updateOne({ ...req.body });
    res.send({});
};

module.exports.editShowCaseAndDescription = async (req, res) => {
    const user = req.user;
    if (!user) {
        throw new LogicError(404, 'User Not Found');
    }
    user.description = req.body.description;
    const showCase = req.body.showCase;
    if (showCase) {
        user.showCase = showCase;
    }
    await user.save();
    const userPopulated = await User.findById(user._id)
        .populate('showCase.photos')
        .exec();
    res.status(200).json({
        description: userPopulated.description,
        showCase: userPopulated.showCase,
    });
};

module.exports.searchUser = async (req, res) => {
    const users = await User.find({
        userName: {
            $regex: '.*' + req.params.searchKeyword + '.*',
            $options: 'i',
        },
    }).sort({ userName: -1 });
    const loggedInUser = req.user;
    if(loggedInUser){
        users.forEach((user) => {
            for(let i =0 ;i< loggedInUser.following.length;i++){
                if(loggedInUser.following[i].toString() === user._id.toString())
                {
                    user.isFollowing = true;
                    break;
                }
            }

        })
    }
    
    res.status(200).send({
        users,
    });
};
