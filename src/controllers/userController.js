/**
 * User Controller Module contains User's route handler
 * @module controlles/user
 */

/**
 * User Model
 * @const
 */
const User = require('../model/userModel');

/**
 * Photo Model
 * @const
 */
const Photo = require('../model/photoModel');
/**
 * Album Model
 * @const
 */
const Album = require('../model/albumModel');

/**
 * LogicError Class used to throw logical error in route handlers
 * @const
 */
const { LogicError } = require('../error/logicError');

/**
 * A function that is used to Get User's Favourites.
 * @param {Object} req - The request passed.
 * @param {Object} res - The respond sent
 * @function
 */
module.exports.getFavorites = async (req, res) => {

    //Check if user exists
    const user = await User.findById(req.params.userId);
    if (!user) {
        throw new LogicError(404, 'User is not found');
    }
    favouritesArray = [];

    //Get User Favoruites
    const photos = await Photo.find({
        _id: { $in: user['favourites'] },
    })
        .populate({
            path: 'creator',
        })
        .populate({
            path: 'tags',
        })
        .exec();
    
    //Populate loggedIN USer isFavourite
    if (req.user) {
        for (let i = 0; i < photos.length; i++) {
            req.user.favourites.forEach((id) => {
                if (id.toString() === photos[i].id.toString())
                    photos[i].isFavourite = true;
            });
        }
    }
    res.send({ favorites: photos });
};

/**
 * A function that is used to Follow Another User.
 * @param {Object} req - The request passed.
 * @param {Object} res - The respond sent
 * @function
 */
module.exports.followUser = async (req, res) => {

    //Check if user exists and that the loggedIn user isnt follwoing himself
    const user = req.user;
    if (user._id.toString() === req.body.userId)
        throw new LogicError(400, "You Can't Follow yourself");
    const isUserExist = await User.exists({ _id: req.body.userId });
    if (!isUserExist) throw new LogicError(404, 'User not found');

    //Update user followings
    await User.findByIdAndUpdate(user._id, {
        $addToSet: { following: req.body.userId },
    });
    res.send();
};

/**
 * A function that is used to Unfollow User.
 * @param {Object} req - The request passed.
 * @param {Object} res - The respond sent
 * @function
 */
module.exports.unfollowUser = async (req, res) => {
    const user = req.user;

    //Check iF user exists
    const isUserExist = await User.exists({ _id: req.body.userId });
    if (!isUserExist) throw new LogicError(404, 'User not found');

    //Remove userId from following array
    await User.findByIdAndUpdate(user._id, {
        $pull: { following: req.body.userId },
    });
    res.send();
};

/**
 * A function that is used to Get Followers.
 * @param {Object} req - The request passed.
 * @param {Object} res - The respond sent
 * @function
 */
module.exports.getFollowers = async (req, res) => {

    //Check that user exists
    const user = await User.findById(req.params.userId);
    if (!user) throw new LogicError(404, 'User not found');
    await user
        .populate({
            path: 'followers',
            select: '-showCase',
            populate: [
                {
                    path: 'numberOfFollowers',
                },
                {
                    path: 'numberOfPhotos',
                },
            ],
        })
        .execPopulate();

    //Populate isFollowing for loggedIn User
    const loggedInUser = req.user;
    if (loggedInUser) {
        user.followers.forEach((user) => {
            for (let i = 0; i < loggedInUser.following.length; i++) {
                if (
                    loggedInUser.following[i].toString() === user._id.toString()
                ) {
                    user.isFollowing = true;
                    break;
                }
            }
        });
    }
    res.send({ followers: user.followers });
};

/**
 * A function that is used to Get Follwoings.
 * @param {Object} req - The request passed.
 * @param {Object} res - The respond sent
 * @function
 */
module.exports.getFollowings = async (req, res) => {

    //Check if user exists
    const user = await User.findById(req.params.userId);
    if (!user) throw new LogicError(404, 'User not found');
    await user
        .populate({
            path: 'following',
            select: '-showCase',
            populate: [
                {
                    path: 'numberOfFollowers',
                },
                {
                    path: 'numberOfPhotos',
                },
            ],
        })
        .execPopulate();

    //Populate LoogedIn User isFollowing
    const loggedInUser = req.user;
    if (loggedInUser) {
        user.following.forEach((user) => {
            for (let i = 0; i < loggedInUser.following.length; i++) {
                if (
                    loggedInUser.following[i].toString() === user._id.toString()
                ) {
                    user.isFollowing = true;
                    break;
                }
            }
        });
    }
    res.send({ following: user.following });
};

/**
 * A function that is used to Get User About.
 * @param {Object} req - The request passed.
 * @param {Object} res - The respond sent
 * @function
 */
module.exports.getUserAbout = async (req, res) => {

    //Check if user exists
    const user = await User.findById(req.params.userId)
        .populate({
            path: 'showCase.photos',
            populate: [
                {
                    path: 'creator',
                    select: 'firstName lastName _id userName',
                },
                {
                    path: 'tags',
                },
            ],
        })
        .populate({
            path: 'numberOfFollowers',
        })
        .populate({
            path: 'numberOfPhotos',
        })
        .exec();
    if (!user) throw new LogicError(404, 'User not found');

    //Populate loggedIn User isFollowing
    const loggedInUser = req.user;
    if (loggedInUser) {
        for (let i = 0; i < loggedInUser.following.length; i++) {
            if (loggedInUser.following[i].toString() === user._id.toString()) {
                user.isFollowing = true;
                break;
            }
        }
    }
    res.send({ user });
};

/**
 * A function that is used to Get User's PhotoStream.
 * @param {Object} req - The request passed.
 * @param {Object} res - The respond sent
 * @function
 */
module.exports.getUserPhotoStream = async (req, res) => {

    //Check id user exists
    const isUserExist = await User.exists({ _id: req.params.userId });
    if (!isUserExist) throw new LogicError(404, 'User not found');

    //Fetch photos created by user
    const photos = await Photo.find({
        creator: req.params.userId,
        isPublic: true,
    })
        .populate({
            path: 'tags',
        })
        .populate({
            path: 'creator',
        })
        .exec();

    res.send({ photos });
};

/**
 * A function that is used to Edit Cover Photo.
 * @param {Object} req - The request passed.
 * @param {Object} res - The respond sent
 * @function
 */
module.exports.editCoverPhoto = async (req, res) => {

    //Check that Photo exists
    const photo = await Photo.findById(req.body.photoId);
    if (!photo) throw new LogicError(404, 'Photo not found');

    //Check that the photo is uploaded by the user or is in his albums
    if (!(photo.creator.toString() === req.user.id.toString())) {
        const albums = await Album.findOne({
            creator: req.user.id,
            featured: photo.id,
        });
        if (!albums)
            throw new LogicError(400, 'You cant use this photo as cover photo');
    }

    //Update User's Cover Photo
    const user = req.user;
    user.coverPhotoUrl = photo.url;
    await user.save();
    res.send({});
};

/**
 * A function that is used to Edit User's ProfilePhoto.
 * @param {Object} req - The request passed.
 * @param {Object} res - The respond sent
 * @function
 */
module.exports.editProfilePhoto = async (req, res) => {

    //Check that Photo exists
    const photo = await Photo.findById(req.body.photoId);
    if (!photo) throw new LogicError(404, 'Photo not found');

    //Check that the photo is uploaded by the user or is in his albums
    if (!(photo.creator.toString() === req.user.id.toString())) {
        const albums = await Album.findOne({
            creator: req.user.id,
            featured: photo.id,
        });
        if (!albums)
            throw new LogicError(400, 'You cant use this photo as cover photo');
    }

    //Update User Profile
    const user = req.user;
    user.profilePhotoUrl = photo.url;
    await user.save();
    res.send({});
};

/**
 * A function that is used to Edit User Info.
 * @param {Object} req - The request passed.
 * @param {Object} res - The respond sent
 * @function
 */
module.exports.editInfo = async (req, res) => {

    //Check if the edit is from allowed Changes
    let isValid = true;
    const validEdits = ['currentCity', 'homeTown', 'occupation'];
    Object.keys(req.body).forEach((edit) => {
        if (!validEdits.includes(edit)) isValid = false;
    });
    if (!isValid) throw new LogicError(400, 'Invalid Edit');

    //Update User
    const user = req.user;
    await user.updateOne({ ...req.body });
    res.send({});
};

/**
 * A function that is used to Edit ShowCase
 * @param {Object} req - The request passed.
 * @param {Object} res - The respond sent
 * @function
 */
module.exports.editShowCaseAndDescription = async (req, res) => {
    const user = await User.findById(req.params.userId);
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

/**
 * A function that is used to Search for a user using his userName.
 * @param {Object} req - The request passed.
 * @param {Object} res - The respond sent
 * @function
 */
module.exports.searchUser = async (req, res) => {

    //Search for the user using regular expression
    const users = await User.find({
        userName: {
            $regex: '.*' + req.params.searchKeyword + '.*',
            $options: 'i',
        },
    })
        .populate({
            path: 'numberOfFollowers',
        })
        .populate({
            path: 'numberOfPhotos',
        })
        .sort({ userName: -1 });

    //Populate isFollwoing For LoggedIN User
    const loggedInUser = req.user;
    if (loggedInUser) {
        users.forEach((user) => {
            for (let i = 0; i < loggedInUser.following.length; i++) {
                if (
                    loggedInUser.following[i].toString() === user._id.toString()
                ) {
                    user.isFollowing = true;
                    break;
                }
            }
        });
    }

    res.status(200).send({
        users,
    });
};
/**
 * A function that is used to Get a User's Albums
 * @param {Object} req - The request passed.
 * @param {Object} res - The respond sent
 * @function
 */
module.exports.viewUserAlbums = async (req, res) => {
    const userId = req.params.userId;
    const albums = await Album.find({ creator: userId });
    res.status(200).send({ albums });
};

/**
 * A function that is used to LoggedIn User CamerRoll.
 * @param {Object} req - The request passed.
 * @param {Object} res - The respond sent
 * @function
 */
module.exports.viewCameraRoll = async (req, res) => {
    const photos = await Photo.find({
        creator: req.user._id,
    }).populate({
        path: 'creator',
    });

    res.status(200).send({ cameraRoll: photos });
};
