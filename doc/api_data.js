define({ "api": [
  {
    "type": "post",
    "url": "/album/addPhoto",
    "title": "Add photo to album",
    "name": "Add_photo_to_album",
    "group": "Album",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "photoId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "albumId",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    photoId : \"5349b4ddd2781d08c09890f4\"\n    albumId : \"5349b4ddd2781d08c09890f4\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    message : \"Photo added successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "Photo",
            "description": "<p>Not Found</p>"
          },
          {
            "group": "404",
            "optional": false,
            "field": "Album",
            "description": "<p>Not Found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n     \"message\": \"Photo Not Found\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n     \"message\": \"Album Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc/apiDoc/album.js",
    "groupTitle": "Album",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users access-token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer asdasdkasdliuaslidas\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/album/createAlbum",
    "title": "Create a new album",
    "name": "Create_Album",
    "group": "Album",
    "version": "1.0.0",
    "description": "<p>Create a new album</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "albumTitle",
            "description": "<p>title for the new album</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "albumDescription",
            "description": "<p>description for the new album</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"albumTitle\": \"Paris Pics\",\n  \"albumDescription\": \"Pics of Paris 2019\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc/apiDoc/album.js",
    "groupTitle": "Album",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users access-token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer asdasdkasdliuaslidas\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/album/:albumId",
    "title": "Delete an album",
    "name": "Create_Album",
    "group": "Album",
    "version": "1.0.0",
    "description": "<p>Delete an existing album</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "albumId",
            "description": "<p>Album Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "AlbumNotFound",
            "description": "<p>The id of the album wasn't found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": {\n     \"message\": \"Album Not Found\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc/apiDoc/album.js",
    "groupTitle": "Album",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users access-token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer asdasdkasdliuaslidas\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "patch",
    "url": "/album/:albumId",
    "title": "Edit an album",
    "name": "Edit_Album",
    "group": "Album",
    "version": "1.0.0",
    "description": "<p>Edit Title and/or description of an album</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "albumId",
            "description": "<p>Album to be edited</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>New title for the album</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>New description for the album</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"title\": \"Championship Photos\",\n    \"description\": \"Semi-final photos\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "AlbumNotFound",
            "description": "<p>The id of the album wasn't found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": {\n     \"message\": \"Album Not Found\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc/apiDoc/album.js",
    "groupTitle": "Album",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users access-token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer asdasdkasdliuaslidas\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/album/:albumId",
    "title": "Get album media",
    "name": "Get_Album_Media",
    "group": "Album",
    "version": "1.0.0",
    "description": "<p>Get album media</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "albumId",
            "description": "<p>Album to view its media</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "media",
            "description": "<p>An array of objects containing the photos with its data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"media\": [\n     {\n         \"_id\": \"5349b4ddd2781d08c09890f4\",\n            \"tags\": [\"Tower\",\"Egypt\"],\n            \"views\": 1023,\n            \"favouritesNum\": 1023,\n            \"commentsNum\": 1023,\n            \"creator\": {\n                \"firstName\": \"Ahmed\",\n                \"lastName\": \"Ibrahim\"\n            },\n         'url': '',\n         'title': 'Cairo Tower',\n         'description': 'Cairo tower at the sunset'\n     },\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": {\n     \"message\": \"Album Not Found\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc/apiDoc/album.js",
    "groupTitle": "Album"
  },
  {
    "type": "post",
    "url": "/album/removePhoto",
    "title": "Remove photo from album",
    "name": "Remove_photo_from_album",
    "group": "Album",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "photoId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "albumId",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    photoId : \"5349b4ddd2781d08c09890f4\"\n    albumId : \"5349b4ddd2781d08c09890f4\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    message : \"Photo removed successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "Photo",
            "description": "<p>Not Found</p>"
          },
          {
            "group": "404",
            "optional": false,
            "field": "Album",
            "description": "<p>Not Found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n     \"message\": \"Photo Not Found\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n     \"message\": \"Album Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc/apiDoc/album.js",
    "groupTitle": "Album",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users access-token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer asdasdkasdliuaslidas\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "E:\\University\\Software\\Project\\Code\\doc\\main.js",
    "groupTitle": "E:\\University\\Software\\Project\\Code\\doc\\main.js",
    "name": ""
  },
  {
    "type": "post",
    "url": "/gallery/addPhoto",
    "title": "Add photo to gallery",
    "name": "Add_photo_to_gallery",
    "group": "Gallery",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "photoId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "galleryId",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    photoId : \"5349b4ddd2781d08c09890f4\"\n    galleryId : \"5349b4ddd2781d08c09890f4\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    message : \"Photo added successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "Photo",
            "description": "<p>Not Found</p>"
          },
          {
            "group": "404",
            "optional": false,
            "field": "gallery",
            "description": "<p>Not Found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n     \"message\": \"Photo Not Found\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n     \"message\": \"gallery Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc/apiDoc/gallery.js",
    "groupTitle": "Gallery",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users access-token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer asdasdkasdliuaslidas\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/gallery/removePhoto",
    "title": "Remove photo from gallery",
    "name": "Remove_photo_from_gallery",
    "group": "Gallery",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "photoId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "galleryId",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    photoId : \"5349b4ddd2781d08c09890f4\"\n    galleryId : \"5349b4ddd2781d08c09890f4\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    message : \"Photo removed successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "Photo",
            "description": "<p>Not Found</p>"
          },
          {
            "group": "404",
            "optional": false,
            "field": "gallery",
            "description": "<p>Not Found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n     \"message\": \"Photo Not Found\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n     \"message\": \"gallery Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc/apiDoc/gallery.js",
    "groupTitle": "Gallery",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users access-token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer asdasdkasdliuaslidas\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/group/createGroup",
    "title": "Create new group",
    "name": "Create_New_Group",
    "group": "Group",
    "version": "1.0.0",
    "description": "<p>Creating a new group by an authenticated user</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>User id to be saved as the creator's id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "groupName",
            "description": "<p>Name for the group to be created</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>Description for the group to be created</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"userId\": \"5349b4ddd2781d08c09890f4\",\n  \"groupName\": \"Paris\"\n  \"description\": \"Paris pics 2019\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc/apiDoc/group.js",
    "groupTitle": "Group",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users access-token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer asdasdkasdliuaslidas\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/group/media/:groupId",
    "title": "Get the group Media",
    "name": "Get_Group's_media",
    "group": "Group",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "groupId",
            "description": "<p>The ID of the group that you want to view it's members</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"groupId\": \"5349b4ddd2781d08c09890f4\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    images : [\n             {\n               _id:''\n               url : String\n               title : String\n               creator : String\n               favouritesNum : Number\n               commentsNum : Number\n             },\n             {\n               _id:''\n               url : String\n               title : String\n               creator : String\n               favouritesNum : Number\n               commentsNum : Number\n             }\n              ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "This",
            "description": "<p>group is not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"message\" : \"Group Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc/apiDoc/group.js",
    "groupTitle": "Group"
  },
  {
    "type": "post",
    "url": "/group/invitePhoto",
    "title": "Invite Photo to Group",
    "name": "Invite_Photo_to_Group",
    "group": "Group",
    "version": "1.0.0",
    "description": "<p>Invite Photo to join a group</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "photoId",
            "description": "<p>PhotoId to invite</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "groupId",
            "description": "<p>Group to which Photo will be invited to</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"photoId\": \"5349b4ddd2781d08c09890f4\",\n    \"groupId\": \"5349b4ddd2781d08c09890f4\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "PhotoNotFound",
            "description": "<p>The Photo isn't found</p>"
          },
          {
            "group": "404",
            "optional": false,
            "field": "GroupNotFound",
            "description": "<p>The Group isn't found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": {\n     \"message\": \"Photo Not Found\"\n   }\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": {\n     \"message\": \"Group Not Found\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc/apiDoc/group.js",
    "groupTitle": "Group",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users access-token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer asdasdkasdliuaslidas\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/group/inviteUser",
    "title": "Invite User to Group",
    "name": "Invite_User_to_Group",
    "group": "Group",
    "version": "1.0.0",
    "description": "<p>Invite user to join a group</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>userId to invite</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "groupId",
            "description": "<p>Group to which user will be invited to</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"userId\": \"5349b4ddd2781d08c09890f4\",\n    \"groupId\": \"5349b4ddd2781d08c09890f4\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The User isn't found</p>"
          },
          {
            "group": "404",
            "optional": false,
            "field": "GroupNotFound",
            "description": "<p>The Group isn't found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": {\n     \"message\": \"User Not Found\"\n   }\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": {\n     \"message\": \"Group Not Found\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc/apiDoc/group.js",
    "groupTitle": "Group",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users access-token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer asdasdkasdliuaslidas\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/group/join",
    "title": "Join Group",
    "name": "Join_Group",
    "group": "Group",
    "version": "1.0.0",
    "description": "<p>Join A group</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>userId that wants to join the group</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "groupId",
            "description": "<p>Group to which user will be added</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"userId\": \"5349b4ddd2781d08c09890f4\",\n    \"groupId\": \"5349b4ddd2781d08c09890f4\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The User isn't found</p>"
          },
          {
            "group": "404",
            "optional": false,
            "field": "GroupNotFound",
            "description": "<p>The Group isn't found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": {\n     \"message\": \"Photo Not Found\"\n   }\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": {\n     \"message\": \"Group Not Found\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc/apiDoc/group.js",
    "groupTitle": "Group",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users access-token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer asdasdkasdliuaslidas\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/group/leave",
    "title": "Leave Group",
    "name": "Leave_Group",
    "group": "Group",
    "version": "1.0.0",
    "description": "<p>Leave A group</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>userId that wants to leave the group</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "groupId",
            "description": "<p>Group to which user will leave</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"userId\": \"5349b4ddd2781d08c09890f4\",\n    \"groupId\": \"5349b4ddd2781d08c09890f4\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The User isn't found</p>"
          },
          {
            "group": "404",
            "optional": false,
            "field": "GroupNotFound",
            "description": "<p>The Group isn't found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": {\n     \"message\": \"Photo Not Found\"\n   }\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": {\n     \"message\": \"Group Not Found\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc/apiDoc/group.js",
    "groupTitle": "Group",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users access-token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer asdasdkasdliuaslidas\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/group/editUserAccess",
    "title": "Promote/Demote Member",
    "name": "Promote_Member",
    "group": "Group",
    "version": "1.0.0",
    "description": "<p>Promote Member to moderator or admin</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>Member to be promoted</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "groupId",
            "description": "<p>Group in which the member will be promoted</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "newRole",
            "description": "<p>New Role Of the Member</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"userId\": \"5349b4ddd2781d08c09890f4\",\n    \"groupId\": \"5349b4ddd2781d08c09890f4\",\n    \"newRole\": \"admin\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The User isn't found</p>"
          },
          {
            "group": "404",
            "optional": false,
            "field": "GroupNotFound",
            "description": "<p>The Group isn't found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": {\n     \"message\": \"User Not Found\"\n   }\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": {\n     \"message\": \"Group Not Found\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc/apiDoc/group.js",
    "groupTitle": "Group",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users access-token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer asdasdkasdliuaslidas\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/group/search",
    "title": "Search on Groups",
    "name": "Search_on_Groups",
    "group": "Group",
    "version": "1.0.0",
    "description": "<p>Searching for a certain group</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>Search by name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>Search by description</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"name\": \"paris\",\n}",
          "type": "json"
        },
        {
          "title": "Request-Example:",
          "content": "{\n  \"description\": \"Paris pics 2019\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "groups",
            "description": "<p>An array of objects containing groups data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"group\": [\n    \"groupId\": \"5349b4ddd2781d08c09890f4\",\n    \"description\": \"Paris pics 2019\",\n    \"creator\": \"8949b4ddd2781d08c0989673\",\n    \"admins\": [\"6549b4ddd2781d08c0989323\",\"2349b4ddd2781d08c0989101\"]\n    \"moderators\": [\"4649b4ddd2781d08c0989321\",\"7049b4ddd2781d08c0989104\"]\n    \"members\": [\"2879b4ddd2781d08c0989020\",\"9049b4ddd2781d08c0989100\"]\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc/apiDoc/group.js",
    "groupTitle": "Group"
  },
  {
    "type": "get",
    "url": "/group/members/:groupId",
    "title": "View Group's members",
    "name": "View_Group's_members",
    "group": "Group",
    "description": "<p>Returns all the members of a certain group</p>",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "groupId",
            "description": "<p>The ID of the group that you want to view it's members</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"groupId\": \"5349b4ddd2781d08c09890f4\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    members : [\n             {\n               _id:''\n               userType : String\n               firstName : String\n               lastName : String\n             },\n             {\n               _id:'',\n               userType : String\n               firstName : String\n               lastName : String\n             }\n              ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "This",
            "description": "<p>group is not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"message\" : \"Group Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc/apiDoc/group.js",
    "groupTitle": "Group",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users access-token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer asdasdkasdliuaslidas\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/photo/addToGroup",
    "title": "Add Photo To Group",
    "name": "Add_Photo_To_Group",
    "group": "Photo",
    "version": "1.0.0",
    "description": "<p>Add Photo To Group in which User is admin</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "photoId",
            "description": "<p>Photo to be added to group</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "groupId",
            "description": "<p>Group to which photo will be added</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"photoId\": \"5349b4ddd2781d08c09890f4\",\n    \"groupId\": \"5349b4ddd2781d08c09890f4\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "PhotoNotFound",
            "description": "<p>The Photo isn't found</p>"
          },
          {
            "group": "404",
            "optional": false,
            "field": "GroupNotFound",
            "description": "<p>The Group isn't found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": {\n     \"message\": \"Photo Not Found\"\n   }\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": {\n     \"message\": \"Group Not Found\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc/apiDoc/photo.js",
    "groupTitle": "Photo",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users access-token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer asdasdkasdliuaslidas\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/photo/addTags",
    "title": "Add Tags",
    "name": "Add_Tags",
    "group": "Photo",
    "version": "1.0.0",
    "description": "<p>Add more tags to a media</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "photoId",
            "description": "<p>ID of the photo to add tags to</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tag",
            "description": "<p>The text to be added as a tag</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    photoId: \"asdn574hfjjhdfu74sdknfn\"\n    tag: \"Sunset\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "PhotoNotFound",
            "description": "<p>The id of the photo wasn't found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": {\n     \"message\": \"Photo Not Found\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc/apiDoc/photo.js",
    "groupTitle": "Photo",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users access-token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer asdasdkasdliuaslidas\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/photo/addToFavorites",
    "title": "Add to Favorites",
    "name": "Add_to_Favorites",
    "group": "Photo",
    "version": "1.0.0",
    "description": "<p>Add a photo to favorites</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "photoId",
            "description": "<p>ID of the photo to be added to favorites</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    photoId: \"asdn574hfjjhdfu74sdknfn\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "PhotoNotFound",
            "description": "<p>The id of the photo wasn't found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": {\n     \"message\": \"Photo Not Found\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc/apiDoc/photo.js",
    "groupTitle": "Photo",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users access-token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer asdasdkasdliuaslidas\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/photo/allowCommenting",
    "title": "Allow Commenting",
    "name": "Allow_commenting",
    "group": "Photo",
    "version": "1.0.0",
    "description": "<p>Allow comments</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "photoId",
            "description": "<p>ID of the photo whose privacy is to be adjusted</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    photoId: \"5349b4ddd2781d08c09890f4\"\n    isPublic: true\n}",
          "type": "json"
        },
        {
          "title": "Request-Example:",
          "content": "{\n    photoId: \"5349b4ddd2781d08c09890f4\"\n    allowCommenting: false\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "PhotoNotFound",
            "description": "<p>The id of the photo wasn't found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n    {\n      \"error\": {\n         \"message\": \"Photo Not Found\"\n       }\n    }\n \n/**",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": {\n     \"message\": \"Photo Not Found\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc/apiDoc/photo.js",
    "groupTitle": "Photo",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users access-token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer asdasdkasdliuaslidas\"\n}",
          "type": "json"
        },
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer asdasdkasdliuaslidas\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/photo/comment",
    "title": "Comment on Photo",
    "name": "Comment_On_a_photo",
    "group": "Photo",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>The Comment to be added</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "photoId",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    photoId : \"5349b4ddd2781d08c09890f4\",\n    comment : \"Awesome\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    message : \"Comment Added Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "Photo",
            "description": "<p>Not Found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n     \"message\": \"Photo Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc/apiDoc/photo.js",
    "groupTitle": "Photo"
  },
  {
    "type": "delete",
    "url": "/photo",
    "title": "Delete Photo",
    "name": "Delete_Photo",
    "group": "Photo",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "photoId",
            "description": "<p>Photo to be deleted</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    photoId : \"5349b4ddd2781d08c09890f4\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    message : \"Photo with ID 5349b4ddd2781d08c09890f4 is deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "Photo",
            "description": "<p>Not Found</p>"
          },
          {
            "group": "404",
            "optional": false,
            "field": "User",
            "description": "<p>not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n     \"message\": \"Photo Not Found\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"message\": \"This user is not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc/apiDoc/photo.js",
    "groupTitle": "Photo",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users access-token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer asdasdkasdliuaslidas\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/photo/editPhotoLicense",
    "title": "Edit License of a photo",
    "name": "Edit_License_of_a_photo",
    "group": "Photo",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "License",
            "description": "<p>Type of license you want</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "photoId",
            "description": "<p>photoId to change its license</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"license\" : \"All rights reserved\",\n     \"photoId\": \"safasfasdfae34q32qwe\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "image",
            "description": "<p>not found</p>"
          },
          {
            "group": "404",
            "optional": false,
            "field": "User",
            "description": "<p>not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"message\": \"This image is not found\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"message\": \"This user is not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc/apiDoc/photo.js",
    "groupTitle": "Photo",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users access-token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer asdasdkasdliuaslidas\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/photo/search/:searchText",
    "title": "Search by license",
    "name": "Search_by_license",
    "group": "Photo",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "searchText",
            "description": "<p>Text to search by</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"searchText\" : \"All rights reserved\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    photos : [\n              {\n               url : String\n               title : String\n               creator : String\n               favouritesNum : Number\n               commentsNum : Number\n              },\n              {\n               url : String\n               title : String\n               creator : String\n               favouritesNum : Number\n               commentsNum : Number\n              },\n              {\n               url : String\n               title : String\n               creator : String\n               favouritesNum : Number\n               commentsNum : Number\n              },\n             ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc/apiDoc/photo.js",
    "groupTitle": "Photo"
  },
  {
    "type": "get",
    "url": "/photo/searchPhotos/:searchText",
    "title": "Search Photos",
    "name": "Search_on_Photos",
    "group": "Photo",
    "version": "1.0.0",
    "description": "<p>Search on photos using tags or title</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "searchText",
            "description": "<p>The text to search with</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   searchText: \"Eiffel Tower\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "media",
            "description": "<p>An array of objects containing the photos with its data</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "photo",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photo._id",
            "description": "<p>Image Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photo.url",
            "description": "<p>Image Url</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photo.title",
            "description": "<p>Image title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photo.description",
            "description": "<p>Image description</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "photo.tags",
            "description": "<p>Image tags</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "photo.views",
            "description": "<p>Image number of views</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "photo.favouritesNum",
            "description": "<p>Image number of favourites</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "photo.commentsNum",
            "description": "<p>Image number of comments</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "photo.creator",
            "description": "<p>Image user Creator</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photo.creator.firstName",
            "description": "<p>User Creator firstName</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photo.creator.lastName",
            "description": "<p>User Creator lastName</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"media\": [\n     {\n            \"_id\": \"5349b4ddd2781d08c09890f4\",\n            \"tags\": [\"Tower\",\"Egypt\"],\n            \"views\": 1023,\n            \"favouritesNum\": 1023,\n            \"commentsNum\": 1023,\n            \"creator\": {\n                \"firstName\": \"Ahmed\",\n                \"lastName\": \"Ibrahim\"\n            },\n            \"url\": '',\n            \"title\": 'Cairo Tower',\n            \"description\": 'Cairo tower at the sunset'\n     },\n  ],\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n  \"_id\": \"5349b4ddd2781d08c09890f4\",\n  \"title\": \"Cat\",\n  \"description\": \"image description\",\n  \"tags\": [\"cat\",\"animals\"],\n  \"photoUrl\": 'https://www.google.com/photo'\n  \"views\": 1023,\n  \"favouritesNum\": 1023,\n  \"commentsNum\": 1023,\n  \"creator\": {\n     \"firstName\": \"Abdelrahman\",\n     \"lastName\": \"Shahda\"\n   },\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "PhotoNotFound",
            "description": "<p>The id of the photo wasn't found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": {\n     \"message\": \"Photo Not Found\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc/apiDoc/photo.js",
    "groupTitle": "Photo"
  },
  {
    "type": "get",
    "url": "/photo/whoFavortied/:photoId",
    "title": "See who favorited",
    "name": "See_who_favorited",
    "group": "Photo",
    "version": "1.0.0",
    "description": "<p>View who made a certain media favorite</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "photoId",
            "description": "<p>ID of the photo</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    photoId: \"asdn574hfjjhdfu74sdknfn\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]]",
            "optional": false,
            "field": "user",
            "description": "<p>Array of users who made the media favorite</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"user\":[\n         {\n             _id:'',\n             firstName:'',\n             lastName:''\n}\n]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "PhotoNotFound",
            "description": "<p>The id of the photo wasn't found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": {\n     \"message\": \"Photo Not Found\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc/apiDoc/photo.js",
    "groupTitle": "Photo"
  },
  {
    "type": "post",
    "url": "/photo/upload",
    "title": "Upload a photo",
    "name": "Upload_Photo",
    "group": "Photo",
    "version": "1.0.0",
    "description": "<p>Upload a photo by an authenticated user</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "photo",
            "description": "<p>A binary object containing the uploaded photo</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isPublic",
            "description": "<p>Boolean to control if it's a public or a private photo</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title for the uploaded photo</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "allowCommenting",
            "description": "<p>Boolean to allow for commenting on the photo</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contentType",
            "description": "<p>Type of the uploaded Photo</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "license",
            "description": "<p>License of the photo</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "safety",
            "description": "<p>Safety of the photo</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description for the uploaded photo</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"photo\" : <binary data>,\n  \"isPublic\": true,\n  \"title\": \"Cairo Tower\",\n  \"allowCommenting\": true,\n   \"license\": \"\",\n   \"contentType\":'',\n   \"safetyOption\":'',\n  \"description\": \"A photo of Cairo tower at the sunset\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc/apiDoc/photo.js",
    "groupTitle": "Photo",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users access-token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer asdasdkasdliuaslidas\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/tag/:id",
    "title": "Get tag media",
    "name": "Get_Tag_Media",
    "group": "Tag",
    "version": "1.0.0",
    "description": "<p>Get tag media</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Tag to view its media</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "media",
            "description": "<p>An array of objects containing the photos with its data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"media\": [\n     {\n            \"_id\": \"5349b4ddd2781d08c09890f4\",\n            \"tags\": [\"Tower\",\"Egypt\"],\n            \"views\": 1023,\n            \"favouritesNum\": 1023,\n            \"commentsNum\": 1023,\n            \"creator\": {\n                \"firstName\": \"Ahmed\",\n                \"lastName\": \"Ibrahim\"\n            },\n            \"url\": '',\n            \"title\": 'Cairo Tower',\n            \"description\": 'Cairo tower at the sunset'\n     },\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": {\n     \"message\": \"Tag Not Found\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc/apiDoc/tag.js",
    "groupTitle": "Tag"
  },
  {
    "type": "get",
    "url": "/tag/trending",
    "title": "Get trending tags",
    "name": "Get_Trending_Tags",
    "group": "Tag",
    "version": "1.0.0",
    "description": "<p>View trending tags</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "trendingTags",
            "description": "<p>An array of objects containing tags data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"trendingTags\": [\n         {\n             \"_id\": \"5349b4ddd2781d08c09890f4\",\n             \"count\": 120,\n             \"name\": \"nature\"\n         }\n     ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc/apiDoc/tag.js",
    "groupTitle": "Tag"
  },
  {
    "type": "post",
    "url": "/user/editCoverPhoto",
    "title": "Edit Cover Photo",
    "name": "Change_User's_Cover_Photo",
    "group": "User",
    "version": "1.0.0",
    "description": "<p>Return User's Camera Roll</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "photoId",
            "description": "<p>Photo to set as cover photo</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    photoId: \"5349b4ddd2781d08c09890f4\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "PhotoNotFound",
            "description": "<p>The id of the Photo wasn't found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": {\n     \"message\": \"Photo Not Found\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc/apiDoc/user.js",
    "groupTitle": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users access-token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer asdasdkasdliuaslidas\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/user/changePassword",
    "title": "Change Password",
    "name": "Change_User's_Password",
    "group": "User",
    "version": "1.0.0",
    "description": "<p>Change User's Password</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "newPass",
            "description": "<p>New Password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"newPass\": \"5349b4ddd2781d08c09890f4\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc/apiDoc/user.js",
    "groupTitle": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users access-token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer asdasdkasdliuaslidas\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/users/:userId",
    "title": "Edit Showcase and Description",
    "name": "Edit_Showcase_and_Description",
    "group": "User",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>The user's Description</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Showcase",
            "description": "<p>The user's Showcase</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    desciption : \"Photos are my passion\"\n    showcase : \"a glimpse of my life\"\n}",
          "type": "type"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    message : \"Changed Successfully\"\n}",
          "type": "type"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "This",
            "description": "<p>user is not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"message\" : \"User Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc/apiDoc/user.js",
    "groupTitle": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users access-token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer asdasdkasdliuaslidas\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/user/login",
    "title": "Login using Facebook",
    "name": "Facebook_Login",
    "group": "User",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "loginType",
            "description": "<p>a string containing type of login ex:&quot;Facebook&quot;</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    loginType : \"Facebook\"\n}",
          "type": "type"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    {\n      status: 'connected', The person is logged into Facebook, and has logged into your webpage.\n                           not_authorized    The person is logged into Facebook, but has not logged into your webpage.\n                           unknown   The person is not logged into Facebook, so you don't know if they have logged into your webpage.\n      authResponse: {\n      accessToken: '{access-token}',   An access token for the person using the webpage\n      expiresIn:'{unix-timestamp}',    A UNIX time stamp when the token expires. Once the token expires, the person will need to login again.\n      reauthorize_required_in:'{seconds-until-token-expires}',   The amount of time before the login expires, in seconds, and the person will need to login again.\n      signedRequest:'{signed-parameter}',    A signed parameter that contains information about the person using your webpage.\n      userID:'{user-id}'   The ID of the person using your webpage.\n  }\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc/apiDoc/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/follow",
    "title": "Follow a User",
    "name": "Follow_User",
    "group": "User",
    "version": "1.0.0",
    "description": "<p>Follow a user</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>User to follow</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"userId\": \"asdasdasd2323423\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the user wasn't found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": {\n     \"message\": \"User Not Found\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc/apiDoc/user.js",
    "groupTitle": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users access-token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer asdasdkasdliuaslidas\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/user/followUser",
    "title": "Follow User",
    "name": "Follow_User",
    "group": "User",
    "version": "1.0.0",
    "description": "<p>Following a user.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>User to show albums for</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's Email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User's Password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>User's First Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>User's Last Name</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "age",
            "description": "<p>User's Age</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>The ID of the user to be followed</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{    \n      \"email\": \"user@email.com\",\n      \"firstName\": \"User\",\n     \"lastName\": \"User\",\n      \"age\": 18,      \n    }",
          "type": "json"
        },
        {
          "title": "Request-Example:",
          "content": "{\n      \"userId\": \"5349b4ddd2781d08c09890f4\"\n    }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "albums",
            "description": "<p>An array of objects containing the groups with its data</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.email",
            "description": "<p>User's Email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.firstName",
            "description": "<p>User's First Name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.lastName",
            "description": "<p>User's Last Name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.accessToken",
            "description": "<p>User's Access Token</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.age",
            "description": "<p>User's Age</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user._id",
            "description": "<p>User's Id</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.followers",
            "description": "<p>User's Followers</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.following",
            "description": "<p>User's Following</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 201 OK\n{\n    \"_id\": \"5349b4ddd2781d08c09890f4\",\n    \"email\": \"user@email.com\",\n    \"firstName\": \"User\",\n   \"lastName\": \"User\",\n    \"accessToken\": \"skdnksd7474g3kdbjfhf34\",\n    \"age\": 18,\n    \"followers\": 63,\n    \"following\": 55,\n    \n  }",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 Success\n{\n    \n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"albums\": [\n     {\n         \"_id\": \"5349b4ddd2781d08c09890f4\",\n            \"title\": \"Paris pics\",\n            \"description\": \"Paris pics 2019\"\n            \"creator\": \"2149b4ddd2781d08c09890a1\",\n            \"views\": 1023,\n            \"images\": [\"8349b4ddd2781d08c0989111\",\"8249b4ddd2781d08c0989000\"],\n     },\n  ]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n    {\n      \"error\": {\n         \"message\": \"User Not Found\"\n       }\n    }\n\n/   \n//////////////////////////////// KARIM ///////////////////////////////////  \n/**",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Failed\n    {\n      \"error\": {\n         \"message\": \"User Already Exists\"\n       }\n    }\n/\n /**",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Failed\n{\n  \"error\": {\n     \"message\": \"User Not Found\"\n   }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "UserExists",
            "description": "<p>The Email is already registered</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the user wasn't found</p>"
          },
          {
            "group": "404",
            "optional": false,
            "field": "User",
            "description": "<p>Not Found</p>"
          }
        ]
      }
    },
    "filename": "./doc/apiDoc/user.js",
    "groupTitle": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users access-token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer asdasdkasdliuaslidas\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/user/forgetPassword",
    "title": "Forget Password",
    "name": "Forget_Password",
    "group": "User",
    "version": "1.0.0",
    "description": "<p>Send User Code to Reset password</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email whose password was forgetten</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    email: \"test@test.com\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User wasn't found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": {\n     \"message\": \"User Not Found\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc/apiDoc/user.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/messages/me",
    "title": "Get My Messages",
    "name": "Get_My_Messages",
    "group": "User",
    "version": "1.0.0",
    "description": "<p>Get My Messages</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "messages",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "messages._id",
            "description": "<p>Message Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "messages.title",
            "description": "<p>Message title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "messsages.text",
            "description": "<p>Message text</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "messages.sender",
            "description": "<p>Message Sender</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "messages.sender.firstName",
            "description": "<p>Message Sender firstName</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "messages.sender.lastName",
            "description": "<p>Message Sender lastName</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "messages.receiver",
            "description": "<p>Message Receiver</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "messages.receiver.firstName",
            "description": "<p>Message Receiver firstName</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "messages.receiver.lastName",
            "description": "<p>Message Receiver lastName</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n[{\n    \"_id\": \"5349b4ddd2781d08c09890f4\",\n    \"title\": \"Cat\",\n    \"text\": \"Hi Man\",\n    \"sender\": {\n       \"firstName\": \"Abdelrahman\",\n       \"lastName\": \"Shahda\"\n     },\n    \"receiver\": {\n       \"firstName\": \"Abdelrahman\",\n       \"lastName\": \"Shahda\"\n     },\n  }]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the user wasn't found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": {\n     \"message\": \"User Not Found\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc/apiDoc/user.js",
    "groupTitle": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users access-token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer asdasdkasdliuaslidas\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/user/fav/:userId",
    "title": "Get Favorites",
    "name": "Get_User_Favorites",
    "group": "User",
    "version": "1.0.0",
    "description": "<p>View user's favorites</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>User to show favorites for</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "favorites",
            "description": "<p>An array of objects containing the photos with its data</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"favorites\": [\n     {\n            \"_id\": \"5349b4ddd2781d08c09890f4\",\n            \"tags\": [\"Tower\",\"Egypt\"],\n            \"views\": 1023,\n            \"favouritesNum\": 1023,\n            \"commentsNum\": 1023,\n            \"creator\": {\n                \"firstName\": \"Ahmed\",\n                \"lastName\": \"Ibrahim\"\n            },\n            \"url\": '',\n            \"title\": 'Cairo Tower',\n            \"description\": 'Cairo tower at the sunset'\n     },\n  ]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": {\n     \"message\": \"User Not Found\"\n   }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the user wasn't found</p>"
          }
        ]
      }
    },
    "filename": "./doc/apiDoc/user.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/followers/:userId",
    "title": "Get the followers of a certain User",
    "name": "Get_User_Followers",
    "group": "User",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>ID of User which is required to show his followers</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    userId : \"5349b4ddd2781d08c09890f4\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Success\n{\n    followers : [\n                 {\n                   userId : String\n                   firstName : String\n                   lastName : String\n                 },\n                 {\n                   userId : String\n                   firstName : String\n                   lastName : String\n                 },\n                ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "This",
            "description": "<p>user is not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"message\" : \"User Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc/apiDoc/user.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/followings/:userId",
    "title": "Get the followings of a certain User",
    "name": "Get_User_Followings",
    "group": "User",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>ID of User which is required to show his followings</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    userId : \"5349b4ddd2781d08c09890f4\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Success\n{\n    following : [\n                 {\n                   userId : String\n                   firstName : String\n                   lastName : String\n                 },\n                 {\n                   userId : String\n                   firstName : String\n                   lastName : String\n                 },\n                ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "This",
            "description": "<p>user is not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"message\" : \"User Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc/apiDoc/user.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/groups/:userId",
    "title": "Get Groups",
    "name": "Get_User_Groups",
    "group": "User",
    "version": "1.0.0",
    "description": "<p>View user's groups</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>User to show groups for</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "groups",
            "description": "<p>An array of objects containing the groups with its data</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"groups\": [\n     {\n         \"_id\": \"5349b4ddd2781d08c09890f4\",\n            \"admins\": [\"4349b4ddd2781d08c0989da9\",\"3249b4ddd2781d08c0989f21\"],\n            \"creator\": \"2149b4ddd2781d08c09890a1\",\n            \"moderators\": [\"9349b4ddd2781d08c0989555\",\"6249b4ddd2781d08c0989222\"],\n            \"members\": [\"8349b4ddd2781d08c0989111\",\"8249b4ddd2781d08c0989000\"],\n            \"description\": 'Paris'\n     },\n  ]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": {\n     \"message\": \"User Not Found\"\n   }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the user wasn't found</p>"
          }
        ]
      }
    },
    "filename": "./doc/apiDoc/user.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/photostream/:userId",
    "title": "User Photostream",
    "name": "Get_User_Photostream",
    "group": "User",
    "version": "1.0.0",
    "description": "<p>Return a certain User photostream</p>",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    userId: \"5349b4ddd2781d08c09890f4\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the user wasn't found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": {\n     \"message\": \"User Not Found\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc/apiDoc/user.js",
    "groupTitle": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "photo",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photo._id",
            "description": "<p>Image Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photo.url",
            "description": "<p>Image Url</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photo.title",
            "description": "<p>Image title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photo.description",
            "description": "<p>Image description</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "photo.tags",
            "description": "<p>Image tags</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "photo.views",
            "description": "<p>Image number of views</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "photo.favouritesNum",
            "description": "<p>Image number of favourites</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "photo.commentsNum",
            "description": "<p>Image number of comments</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "photo.creator",
            "description": "<p>Image user Creator</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photo.creator.firstName",
            "description": "<p>User Creator firstName</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photo.creator.lastName",
            "description": "<p>User Creator lastName</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n  \"_id\": \"5349b4ddd2781d08c09890f4\",\n  \"title\": \"Cat\",\n  \"description\": \"image description\",\n  \"tags\": [\"cat\",\"animals\"],\n  \"photoUrl\": 'https://www.google.com/photo'\n  \"views\": 1023,\n  \"favouritesNum\": 1023,\n  \"commentsNum\": 1023,\n  \"creator\": {\n     \"firstName\": \"Abdelrahman\",\n     \"lastName\": \"Shahda\"\n   },\n}]",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/user/login",
    "title": "Login a User",
    "name": "Login_User",
    "group": "User",
    "version": "1.0.0",
    "description": "<p>Login into a user account</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username credential</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password credential</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"username\": \"AhmedIbrahim\",\n  \"password\": \"123\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": "<p>Returning the access-token to the user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"Token\": \"asdasdkasdliuaslidas\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Wrong user credentials</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": {\n     \"message\": \"Invalid Credentials\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc/apiDoc/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/sendMessage",
    "title": "Message User",
    "name": "Message_User",
    "group": "User",
    "version": "1.0.0",
    "description": "<p>Message Another User</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>User to send message to</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Message Title</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>Message text</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"userId\": \"asdasdasd2323423\",\n  \"text\": \"Hi there!\",\n  \"title\": \"Message\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the user wasn't found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": {\n     \"message\": \"User Not Found\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc/apiDoc/user.js",
    "groupTitle": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users access-token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer asdasdkasdliuaslidas\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/user/search/:username",
    "title": "Search on user //username is the keyword you want to search for",
    "name": "Search_on_user",
    "group": "User",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>any word to be matched with user names in the DB</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    username : \"Ghallab\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Success\n{\n    users : [{\n               _id : String,\n               firstName : String,\n               lastName : String\n             },\n             {\n               _id : String,\n               firstName : String,\n               lastName : String\n             },\n            ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc/apiDoc/user.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/about/:userId",
    "title": "Show About",
    "name": "Show_User's_About",
    "group": "User",
    "version": "1.0.0",
    "description": "<p>Showing the about page of a user.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>The ID of the user to show their about page</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n      \"userId\": \"5349b4ddd2781d08c09890f4\"\n    }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "showcase",
            "description": "<p>An array of objects containing the photos with its data</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>User Description</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "statistics",
            "description": "<p>User's Statistics</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"showcase\": [\n     {\n            \"_id\": \"5349b4ddd2781d08c09890f4\",\n            \"tags\": [\"Tower\",\"Egypt\"],\n            \"views\": 1023,\n            \"favouritesNum\": 1023,\n            \"commentsNum\": 1023,\n            \"creator\": {\n                \"firstName\": \"Ahmed\",\n                \"lastName\": \"Ibrahim\"\n            },\n            \"url\": '',\n            \"title\": 'Cairo Tower',\n            \"description\": 'Cairo tower at the sunset'\n     },\n  ],\n    \"description\": \"A talented photographer\",\n    \"statistics\": \n            {\n                \"views\": 27\n                \"faves\": 9\n                \"groups\": 10\n            }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "User",
            "description": "<p>Not Found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Failed\n{\n  \"error\": {\n     \"message\": \"User Not Found\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc/apiDoc/user.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/cameraRoll/:userId",
    "title": "User Camera Roll",
    "name": "Show_User_Camera_Roll",
    "group": "User",
    "version": "1.0.0",
    "description": "<p>Return User's Camera Roll</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>The ID of the user to show their galleries</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n      \"userId\": \"5349b4ddd2781d08c09890f4\"\n    }",
          "type": "json"
        },
        {
          "title": "Request-Example:",
          "content": "{\n    userId: \"5349b4ddd2781d08c09890f4\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "galleries",
            "description": "<p>An array of objects containing the galleries of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "cameraRoll",
            "description": "<p>An array of objects containing the photos with its data</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "photo",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photo._id",
            "description": "<p>Image Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photo.url",
            "description": "<p>Image Url</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photo.title",
            "description": "<p>Image title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photo.description",
            "description": "<p>Image description</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "photo.tags",
            "description": "<p>Image tags</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "photo.views",
            "description": "<p>Image number of views</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "photo.favouritesNum",
            "description": "<p>Image number of favourites</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "photo.commentsNum",
            "description": "<p>Image number of comments</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "photo.creator",
            "description": "<p>Image user Creator</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photo.creator.firstName",
            "description": "<p>User Creator firstName</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photo.creator.lastName",
            "description": "<p>User Creator lastName</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"gallery\": [\n     {\n            \"_id\": \"5349b4ddd2781d08c09890f4\",\n            \"views\": 1023,\n            \"commentsNum\": 1023,\n            \"creator\": {\n                \"firstName\": \"Ahmed\",\n                \"lastName\": \"Ibrahim\"\n            },\n            \"title\": 'Cairo Tower',\n            \"description\": 'Cairo tower at the sunset'\n            \"itemsNum\": 27\n     },            \n  ],\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"cameraRoll\": [\n     {\n          \"_id\": \"5349b4ddd2781d08c09890f4\",\n            \"tags\": [\"Tower\",\"Egypt\"],\n            \"views\": 1023,\n            \"favouritesNum\": 1023,\n            \"commentsNum\": 1023,\n            \"creator\": {\n                \"firstName\": \"Ahmed\",\n                \"lastName\": \"Ibrahim\"\n            },\n            \"url\": '',\n            \"title\": 'Cairo Tower',\n            \"description\": 'Cairo tower at the sunset'\n     },\n  ],\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n  \"_id\": \"5349b4ddd2781d08c09890f4\",\n  \"title\": \"Cat\",\n  \"description\": \"image description\",\n  \"tags\": [\"cat\",\"animals\"],\n  \"photoUrl\": 'https://www.google.com/photo'\n  \"views\": 1023,\n  \"favouritesNum\": 1023,\n  \"commentsNum\": 1023,\n  \"creator\": {\n     \"firstName\": \"Abdelrahman\",\n     \"lastName\": \"Shahda\"\n   },\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "User",
            "description": "<p>Not Found</p>"
          },
          {
            "group": "404",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the user wasn't found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Failed\n    {\n      \"error\": {\n         \"message\": \"User Not Found\"\n       }\n    }\n/\n /**",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": {\n     \"message\": \"User Not Found\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc/apiDoc/user.js",
    "groupTitle": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users access-token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer asdasdkasdliuaslidas\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/user/unfollowUser",
    "title": "Unfollow User",
    "name": "Unfollow_User",
    "group": "User",
    "version": "1.0.0",
    "description": "<p>Following a user.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>The ID of the user to be unfollowed</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n      \"userId\": \"5349b4ddd2781d08c09890f4\"\n    }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 Success\n{\n    \n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "User",
            "description": "<p>Not Found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Failed\n{\n  \"error\": {\n     \"message\": \"User Not Found\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc/apiDoc/user.js",
    "groupTitle": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users access-token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer asdasdkasdliuaslidas\"\n}",
          "type": "json"
        }
      ]
    }
  }
] });