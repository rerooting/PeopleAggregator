peopleaggregator_api_desc = {"name": "PeopleAggregator API", "methods": {"peopleaggregator.getMessages": {"argstyle": "named", "return": {"content": {"messages": {"item": {"content": {"content": {"default": "", "type": "string"}, "title": {"type": "string"}, "id": {"type": "string"}, "recipients": {"item": {"content": {"login": {"type": "string"}}, "type": "hash", "allow_extra_keys": 0}, "type": "array"}, "sender": {"content": {"id": {"type": "string"}}, "type": "hash", "allow_extra_keys": 0}}, "type": "hash", "allow_extra_keys": 0}, "type": "array"}, "success": {"type": "boolean"}}, "type": "hash", "allow_extra_keys": 0}, "args": {"authToken": {"type": "string"}, "detailLevel": {"default": "all", "values": ["all", "summary"], "type": "enum"}, "folder": {"type": "string"}, "resultsPerPage": {"default": 10, "max": 100, "type": "int", "min": 10}, "page": {"default": 1, "type": "int", "min": 1}}, "type": "get"}, "peopleaggregator.getContent": {"argstyle": "named", "return": {"content": {"totalPages": {"type": "int"}, "success": {"type": "boolean"}, "items": {"item": {"content": {"url": {"type": "string"}, "content": {"default": "", "type": "string"}, "id": {"type": "string"}, "title": {"type": "string"}}, "type": "hash", "allow_extra_keys": 0}, "type": "array"}, "detailLevel": {"default": "all", "values": ["all", "content", "summary"], "type": "enum"}, "resultsPerPage": {"type": "int"}, "msg": {"type": "string"}, "totalResults": {"type": "int"}, "page": {"type": "int"}}, "type": "hash", "allow_extra_keys": 0}, "args": {"detailLevel": {"default": "all", "values": ["all", "content", "summary"], "type": "enum"}, "resultsPerPage": {"default": 10, "max": 100, "type": "int", "min": 10}, "page": {"default": 1, "type": "int", "min": 1}, "context": {"type": "string"}}, "type": "get"}, "metaWeblog.editPost": {"argstyle": "positional", "return": {"type": "boolean"}, "args": {"password": {"type": "string"}, "login": {"type": "string"}, "postid": {"type": "string"}, "post": {"content": {"link": {"default": "", "type": "string"}, "description": {"type": "string"}, "title": {"default": "", "type": "string"}}, "type": "hash", "allow_extra_keys": 1}, "publish": {"type": "boolean"}}, "type": "post", "argorder": ["postid", "login", "password", "post", "publish"]}, "peopleaggregator.newGroup": {"argstyle": "named", "return": {"content": {"id": {"type": "string"}, "success": {"type": "boolean"}}, "type": "hash", "allow_extra_keys": 0}, "args": {"authToken": {"type": "string"}, "category": {"type": "string"}, "registrationType": {"values": ["open", "moderated", "invite"], "type": "enum"}, "description": {"type": "string"}, "tags": {"type": "string"}, "image": {"type": "string"}, "accessType": {"values": ["public", "members"], "type": "enum"}, "moderationType": {"values": ["direct", "moderated"], "type": "enum"}, "name": {"type": "string"}}, "type": "post"}, "peopleaggregator.findGroup": {"argstyle": "named", "return": {"content": {"groups": {"item": {"content": {"id": {"type": "string"}, "name": {"type": "string"}}, "type": "hash", "allow_extra_keys": 0}, "type": "array"}, "success": {"type": "boolean"}}, "type": "hash", "allow_extra_keys": 0}, "args": {"name": {"type": "string"}}, "type": "post"}, "peopleaggregator.echo": {"argstyle": "named", "return": {"content": {"echoText": {"type": "string"}, "success": {"type": "boolean"}}, "type": "hash", "allow_extra_keys": 0}, "args": {"echoText": {"type": "string"}}, "type": "get"}, "peopleaggregator.newPersona": {"argstyle": "named", "return": {"content": {"persona_id": {"type": "int"}, "success": {"type": "boolean"}}, "type": "hash", "allow_extra_keys": 0}, "args": {"authToken": {"type": "string"}, "persona_service_id": {"type": "int"}, "configuration": {"type": "string"}, "name": {"type": "string"}, "sequence": {"type": "int"}}, "type": "post"}, "peopleaggregator.exceptionTest": {"argstyle": "named", "return": {"content": {"success": {"type": "boolean"}}, "type": "hash", "allow_extra_keys": 0}, "args": {}, "type": "get"}, "peopleaggregator.getGroups": {"argstyle": "named", "return": {"content": {"success": {"type": "boolean"}, "totalPages": {"type": "int"}, "resultsPerPage": {"default": 100, "type": "int"}, "groups": {"item": {"content": {"memberCount": {"type": "int"}, "url": {"type": "string"}, "id": {"type": "string"}, "name": {"type": "string"}}, "type": "hash", "allow_extra_keys": 0}, "type": "array"}, "msg": {"type": "string"}, "totalResults": {"type": "int"}, "page": {"type": "int"}}, "type": "hash", "allow_extra_keys": 0}, "args": {"resultsPerPage": {"default": 100, "max": 100, "type": "int", "min": 10}, "page": {"default": 1, "type": "int", "min": 1}, "context": {"default": "global", "type": "string"}}, "type": "get"}, "blogger.getUserInfo": {"argstyle": "positional", "return": {"content": {"firstname": {"type": "string"}, "url": {"type": "string"}, "lastname": {"type": "string"}, "userid": {"type": "string"}, "nickname": {"type": "string"}, "email": {"type": "string"}}, "type": "hash", "allow_extra_keys": 0}, "args": {"appkey": {"type": "string"}, "login": {"type": "string"}, "password": {"type": "string"}}, "type": "get", "argorder": ["appkey", "login", "password"]}, "peopleaggregator.sendMessage": {"argstyle": "named", "return": {"content": {"success": {"type": "boolean"}}, "type": "hash", "allow_extra_keys": 0}, "args": {"authToken": {"type": "string"}, "content": {"type": "string"}, "recipients": {"type": "string"}, "title": {"type": "string"}}, "type": "post"}, "peopleaggregator.getUserProfile": {"argstyle": "named", "return": {"content": {"profile": {"content": {"general": {"content": {"dob": {"optional": true, "type": "date"}}, "type": "hash", "allow_extra_keys": 1}}, "type": "hash", "allow_extra_keys": 1}, "name": {"type": "string"}, "success": {"type": "boolean"}, "url": {"type": "string"}, "login": {"type": "string"}, "id": {"type": "string"}}, "type": "hash", "allow_extra_keys": 0}, "args": {"login": {"type": "string"}}, "type": "get"}, "peopleaggregator.echoPost": {"argstyle": "named", "return": {"content": {"echoText": {"type": "string"}, "success": {"type": "boolean"}}, "type": "hash", "allow_extra_keys": 0}, "args": {"echoText": {"type": "string"}}, "type": "post"}, "metaWeblog.deletePost": {"alias": "blogger.deletePost"}, "peopleaggregator.getUserRelations": {"argstyle": "named", "return": {"content": {"success": {"type": "boolean"}, "relations": {"item": {"content": {"url": {"type": "string"}, "login": {"type": "string"}, "relation": {"values": ["havent met", "acquaintance", "relation", "good relation", "best relation"], "type": "enum"}, "id": {"type": "string"}, "image": {"content": {"url": {"type": "string"}, "width": {"type": "int"}, "height": {"type": "int"}}, "optional": true, "type": "hash", "allow_extra_keys": 0}}, "type": "hash", "allow_extra_keys": 0}, "type": "array"}, "totalPages": {"type": "int"}, "resultsPerPage": {"default": 100, "type": "int"}, "msg": {"type": "string"}, "login": {"type": "string"}, "totalResults": {"type": "int"}, "page": {"type": "int"}}, "type": "hash", "allow_extra_keys": 0}, "args": {"profileImageSize": {"default": "full", "values": ["50x50", "127x135", "full"], "type": "enum"}, "login": {"type": "string"}, "resultsPerPage": {"default": 100, "max": 100, "type": "int", "min": 10}, "page": {"default": 1, "type": "int", "min": 1}}, "type": "get"}, "peopleaggregator.deleteGroup": {"argstyle": "named", "return": {"content": {"success": {"type": "boolean"}}, "type": "hash", "allow_extra_keys": 0}, "args": {"authToken": {"type": "string"}, "id": {"type": "string"}}, "type": "post"}, "peopleaggregator.getPersonas": {"argstyle": "named", "return": {"content": {"success": {"type": "boolean"}, "personas": {"item": {"content": {"user_id": {"type": "int"}, "name": {"type": "string"}, "sequence": {"type": "int"}, "persona_service_id": {"type": "int"}, "configuration": {"type": "string"}, "persona_id": {"type": "int"}}, "type": "hash", "allow_extra_keys": 0}, "type": "array"}}, "type": "hash", "allow_extra_keys": 0}, "args": {"authToken": {"type": "string"}}, "type": "get"}, "peopleaggregator.listAds": {"argstyle": "named", "return": {"content": {"msg": {"type": "string"}, "ads": {"item": {"content": {"description": {"type": "string"}, "title": {"type": "string"}, "url": {"optional": true, "type": "string"}, "image": {"content": {"url": {"type": "string"}, "width": {"type": "int"}, "height": {"type": "int"}}, "optional": true, "type": "hash", "allow_extra_keys": 0}, "javascript": {"optional": true, "type": "string"}, "id": {"type": "string"}, "orientation": {"type": "string"}}, "type": "hash", "allow_extra_keys": 0}, "type": "array"}, "success": {"type": "boolean"}}, "type": "hash", "allow_extra_keys": 0}, "args": {"page_type": {"default": "homepage", "values": ["homepage", "user_public", "group"], "type": "enum"}}, "type": "get"}, "metaWeblog.getUserInfo": {"alias": "blogger.getUserInfo"}, "peopleaggregator.getAlbums": {"argstyle": "named", "return": {"content": {"albums": {"item": {"content": {"access": {"values": ["read", "write"], "type": "enum"}, "created": {"optional": true, "type": "string"}, "type": {"item": {"values": ["image", "audio", "video"], "type": "enum"}, "type": "array"}, "id": {"type": "string"}, "title": {"type": "string"}}, "type": "hash", "allow_extra_keys": 0}, "type": "array"}, "success": {"type": "boolean"}}, "type": "hash", "allow_extra_keys": 0}, "args": {"authToken": {"optional": true, "type": "string"}, "context": {"default": "user", "type": "string"}}, "type": "get"}, "peopleaggregator.checkToken": {"argstyle": "named", "return": {"content": {"login": {"type": "string"}, "success": {"type": "boolean"}, "tokenLifetime": {"type": "int"}}, "type": "hash", "allow_extra_keys": 0}, "args": {"authToken": {"type": "string"}}, "type": "get"}, "peopleaggregator.getUserRelation": {"argstyle": "named", "return": {"content": {"msg": {"type": "string"}, "relation": {"values": ["havent met", "acquaintance", "relation", "good relation", "best relation"], "type": "enum"}, "success": {"type": "boolean"}}, "type": "hash", "allow_extra_keys": 0}, "args": {"login": {"type": "string"}, "relation_login": {"type": "string"}}, "type": "get"}, "peopleaggregator.getFolders": {"argstyle": "named", "return": {"content": {"folders": {"item": {"content": {"name": {"type": "string"}}, "type": "hash", "allow_extra_keys": 0}, "type": "array"}, "success": {"type": "boolean"}}, "type": "hash", "allow_extra_keys": 0}, "args": {"authToken": {"type": "string"}}, "type": "get"}, "metaWeblog.getCategories": {"argstyle": "positional", "return": {"item": {"content": {"htmlUrl": {"type": "string"}, "rssUrl": {"type": "string"}, "description": {"type": "string"}, "categoryId": {"type": "string"}, "categoryName": {"type": "string"}}, "type": "hash", "allow_extra_keys": 0}, "type": "array"}, "args": {"login": {"type": "string"}, "password": {"type": "string"}, "blogid": {"type": "string"}}, "type": "get", "argorder": ["blogid", "login", "password"]}, "peopleaggregator.newUser": {"argstyle": "named", "return": {"content": {"msg": {"type": "string"}, "id": {"type": "string"}, "success": {"type": "boolean"}}, "type": "hash", "allow_extra_keys": 0}, "args": {"firstName": {"type": "string"}, "adminPassword": {"type": "string"}, "lastName": {"type": "string"}, "login": {"type": "string"}, "password": {"type": "string"}, "email": {"type": "string"}, "homeNetwork": {"default": "default", "type": "string"}}, "type": "post"}, "peopleaggregator.deleteFile": {"argstyle": "named", "return": {"content": {"success": {"type": "boolean"}}, "type": "hash", "allow_extra_keys": 0}, "args": {"authToken": {"type": "string"}, "id": {"type": "string"}}, "type": "post"}, "peopleaggregator.getBoardMessages": {"argstyle": "named", "return": {"content": {"success": {"type": "boolean"}, "messages": {"item": {"content": {"content": {"type": "string"}, "author": {"content": {"id": {"type": "string"}, "name": {"optional": true, "type": "string"}}, "type": "hash", "allow_extra_keys": 0}, "created": {"type": "string"}, "id": {"type": "string"}, "title": {"type": "string"}}, "type": "hash", "allow_extra_keys": 0}, "type": "array"}, "resultsPerPage": {"type": "int"}, "totalPages": {"type": "int"}, "page": {"type": "int"}, "totalMessages": {"type": "int"}}, "type": "hash", "allow_extra_keys": 0}, "args": {"authToken": {"default": "", "type": "string"}, "resultsPerPage": {"default": 100, "max": 100, "type": "int", "min": 10}, "page": {"default": 1, "type": "int", "min": 1}, "context": {"type": "string"}}, "type": "get"}, "metaWeblog.getPost": {"argstyle": "positional", "return": {"content": {"permaLink": {"type": "string"}, "description": {"type": "string"}, "title": {"type": "string"}, "userid": {"type": "string"}, "dateCreated": {"type": "datetime"}, "link": {"type": "string"}, "postid": {"type": "string"}}, "type": "hash", "allow_extra_keys": 0}, "args": {"password": {"type": "string"}, "login": {"type": "string"}, "postid": {"type": "string"}}, "type": "get", "argorder": ["postid", "login", "password"]}, "peopleaggregator.editUserRelation": {"argstyle": "named", "return": {"content": {"msg": {"type": "string"}, "success": {"type": "boolean"}}, "type": "hash", "allow_extra_keys": 0}, "args": {"authToken": {"type": "string"}, "login": {"type": "string"}, "relation": {"values": ["havent met", "acquaintance", "relation", "good relation", "best relation"], "type": "enum"}}, "type": "post"}, "blogger.deletePost": {"argstyle": "positional", "return": {"type": "boolean"}, "args": {"appkey": {"type": "string"}, "password": {"type": "string"}, "login": {"type": "string"}, "postid": {"type": "string"}, "publish": {"type": "boolean"}}, "type": "post", "argorder": ["appkey", "postid", "login", "password", "publish"]}, "blogger.getUsersBlogs": {"argstyle": "positional", "return": {"item": {"content": {"url": {"type": "string"}, "isAdmin": {"type": "boolean"}, "blogid": {"type": "string"}, "blogName": {"type": "string"}}, "type": "hash", "allow_extra_keys": 0}, "type": "array"}, "args": {"appkey": {"type": "string"}, "login": {"type": "string"}, "password": {"type": "string"}}, "type": "get", "argorder": ["appkey", "login", "password"]}, "peopleaggregator.newUserRelation": {"argstyle": "named", "return": {"content": {"msg": {"type": "string"}, "success": {"type": "boolean"}}, "type": "hash", "allow_extra_keys": 0}, "args": {"authToken": {"type": "string"}, "login": {"type": "string"}, "relation": {"values": ["havent met", "acquaintance", "relation", "good relation", "best relation"], "type": "enum"}}, "type": "post"}, "peopleaggregator.leaveGroup": {"argstyle": "named", "return": {"content": {"success": {"type": "boolean"}}, "type": "hash", "allow_extra_keys": 0}, "args": {"authToken": {"type": "string"}, "id": {"type": "string"}}, "type": "post"}, "peopleaggregator.getFriendAddresses": {"argstyle": "named", "return": {"content": {"msg": {"type": "string"}, "success": {"type": "boolean"}, "contacts": {"item": {"content": {"UserName": {"type": "string"}, "Email": {"type": "string"}}, "type": "hash", "allow_extra_keys": 0}, "type": "array"}}, "type": "hash", "allow_extra_keys": 0}, "args": {"password": {"type": "string"}, "login": {"type": "string"}, "serviceName": {"type": "string"}}, "type": "get"}, "peopleaggregator.countPersonas": {"argstyle": "named", "return": {"content": {"count": {"type": "int"}, "success": {"type": "boolean"}}, "type": "hash", "allow_extra_keys": 0}, "args": {"authToken": {"type": "string"}}, "type": "get"}, "blogger.getRecentPosts": {"argstyle": "positional", "return": {"item": {"content": {"content": {"type": "string"}, "postid": {"type": "string"}, "userid": {"type": "string"}, "dateCreated": {"type": "datetime"}}, "type": "hash", "allow_extra_keys": 0}, "type": "array"}, "args": {"appkey": {"type": "string"}, "login": {"type": "string"}, "password": {"type": "string"}, "blogid": {"type": "string"}, "n_posts": {"max": 50, "type": "int"}}, "type": "get", "argorder": ["appkey", "blogid", "login", "password", "n_posts"]}, "peopleaggregator.getCategories": {"argstyle": "named", "return": {"content": {"msg": {"type": "string"}, "totalResults": {"type": "int"}, "categories": {"item": {"content": {"groupCount": {"type": "int"}, "id": {"type": "string"}, "name": {"type": "string"}}, "type": "hash", "allow_extra_keys": 0}, "type": "array"}, "success": {"type": "boolean"}}, "type": "hash", "allow_extra_keys": 0}, "args": {}, "type": "get"}, "peopleaggregator.getFiles": {"argstyle": "named", "return": {"content": {"files": {"item": {"content": {"author": {"type": "string"}, "created": {"optional": true, "type": "string"}, "url": {"optional": true, "type": "string"}, "title": {"type": "string"}, "height": {"optional": true, "type": "int"}, "content": {"type": "string"}, "width": {"optional": true, "type": "int"}, "type": {"values": ["image", "audio", "video"], "type": "enum"}, "id": {"type": "string"}}, "type": "hash", "allow_extra_keys": 0}, "type": "array"}, "success": {"type": "boolean"}}, "type": "hash", "allow_extra_keys": 0}, "args": {"authToken": {"type": "string"}, "context": {"type": "string"}}, "type": "get"}, "peopleaggregator.getPersona": {"argstyle": "named", "return": {"content": {"persona": {"content": {"user_id": {"type": "int"}, "name": {"type": "string"}, "sequence": {"type": "int"}, "persona_service_id": {"type": "int"}, "configuration": {"type": "string"}, "persona_id": {"type": "int"}}, "type": "hash", "allow_extra_keys": 0}, "success": {"type": "boolean"}}, "type": "hash", "allow_extra_keys": 0}, "args": {"authToken": {"type": "string"}, "index": {"type": "int"}}, "type": "get"}, "metaWeblog.getRecentPosts": {"argstyle": "positional", "return": {"item": {"content": {"permaLink": {"type": "string"}, "description": {"type": "string"}, "title": {"type": "string"}, "userid": {"type": "string"}, "dateCreated": {"type": "datetime"}, "link": {"type": "string"}, "postid": {"type": "string"}, "categories": {"item": {"type": "string"}, "type": "array"}}, "type": "hash", "allow_extra_keys": 0}, "type": "array"}, "args": {"login": {"type": "string"}, "password": {"type": "string"}, "blogid": {"type": "string"}, "n_posts": {"max": 50, "type": "int"}}, "type": "get", "argorder": ["blogid", "login", "password", "n_posts"]}, "peopleaggregator.newBoardMessage": {"argstyle": "named", "return": {"content": {"id": {"type": "string"}, "success": {"type": "boolean"}}, "type": "hash", "allow_extra_keys": 0}, "args": {"authToken": {"default": "", "type": "string"}, "content": {"type": "string"}, "allowAnonymous": {"default": true, "type": "boolean"}, "context": {"type": "string"}, "title": {"type": "string"}}, "type": "post"}, "peopleaggregator.login": {"argstyle": "named", "return": {"content": {"authToken": {"type": "string"}, "success": {"type": "boolean"}, "tokenLifetime": {"type": "int"}}, "type": "hash", "allow_extra_keys": 0}, "args": {"login": {"type": "string"}, "password": {"type": "string"}}, "type": "post"}, "peopleaggregator.joinGroup": {"argstyle": "named", "return": {"content": {"joinState": {"values": ["joined", "in_moderation"], "type": "enum"}, "success": {"type": "boolean"}}, "type": "hash", "allow_extra_keys": 0}, "args": {"authToken": {"type": "string"}, "id": {"type": "string"}}, "type": "post"}, "peopleaggregator.deleteUserRelation": {"argstyle": "named", "return": {"content": {"msg": {"type": "string"}, "success": {"type": "boolean"}}, "type": "hash", "allow_extra_keys": 0}, "args": {"authToken": {"type": "string"}, "login": {"type": "string"}}, "type": "post"}, "peopleaggregator.errorTest": {"argstyle": "named", "return": {"content": {"success": {"type": "boolean"}}, "type": "hash", "allow_extra_keys": 0}, "args": {}, "type": "get"}, "peopleaggregator.deletePersona": {"argstyle": "named", "return": {"content": {"success": {"type": "boolean"}}, "type": "hash", "allow_extra_keys": 0}, "args": {"authToken": {"type": "string"}, "index": {"type": "int"}}, "type": "post"}, "peopleaggregator.newContent": {"argstyle": "named", "return": {"content": {"url": {"type": "string"}, "msg": {"type": "string"}, "errors": {"item": {"content": {"msg": {"type": "string"}, "code": {"type": "string"}}, "type": "hash", "allow_extra_keys": 1}, "type": "array"}, "id": {"type": "string"}, "success": {"type": "boolean"}}, "type": "hash", "allow_extra_keys": 0}, "args": {"authToken": {"type": "string"}, "tags": {"type": "string"}, "trackbacks": {"default": "", "type": "string"}, "title": {"type": "string"}, "content": {"default": "", "type": "string"}, "context": {"default": "", "type": "string"}}, "type": "post"}, "blogger.newPost": {"argstyle": "positional", "return": {"type": "string"}, "args": {"appkey": {"type": "string"}, "publish": {"type": "boolean"}, "content": {"type": "string"}, "login": {"type": "string"}, "password": {"type": "string"}, "blogid": {"type": "string"}}, "type": "post", "argorder": ["appkey", "blogid", "login", "password", "content", "publish"]}, "peopleaggregator.newFile": {"argstyle": "named", "return": {"content": {"url": {"type": "string"}, "id": {"type": "string"}, "success": {"type": "boolean"}}, "type": "hash", "allow_extra_keys": 0}, "args": {"authToken": {"type": "string"}, "access": {"default": "nobody", "values": ["nobody", "everybody", "relations"], "type": "enum"}, "title": {"type": "string"}, "url": {"optional": true, "type": "string"}, "data": {"optional": true, "type": "binary"}, "tags": {"default": "", "type": "string"}, "filename": {"optional": true, "type": "string"}, "content": {"type": "string"}, "context": {"type": "string"}, "type": {"default": "image", "values": ["image", "audio", "video"], "type": "enum"}}, "type": "post"}, "peopleaggregator.getUserList": {"argstyle": "named", "return": {"content": {"users": {"item": {"content": {"login": {"type": "string"}, "id": {"type": "string"}, "image": {"content": {"url": {"type": "string"}, "width": {"type": "int"}, "height": {"type": "int"}}, "optional": true, "type": "hash", "allow_extra_keys": 0}}, "type": "hash", "allow_extra_keys": 0}, "type": "array"}, "success": {"type": "boolean"}, "resultsPerPage": {"type": "int"}, "totalPages": {"type": "int"}, "totalUsers": {"type": "int"}, "page": {"type": "int"}}, "type": "hash", "allow_extra_keys": 0}, "args": {"profileImageSize": {"default": "none", "values": ["none", "50x50", "127x135", "full"], "type": "enum"}, "resultsPerPage": {"default": 100, "max": 100, "type": "int", "min": 10}, "page": {"default": 1, "type": "int", "min": 1}}, "type": "get"}, "metaWeblog.getUsersBlogs": {"alias": "blogger.getUsersBlogs"}, "metaWeblog.newPost": {"argstyle": "positional", "return": {"type": "string"}, "args": {"post": {"content": {"link": {"default": "", "type": "string"}, "description": {"type": "string"}, "title": {"default": "", "type": "string"}}, "type": "hash", "allow_extra_keys": 1}, "login": {"type": "string"}, "password": {"type": "string"}, "blogid": {"type": "string"}, "publish": {"type": "boolean"}}, "type": "post", "argorder": ["blogid", "login", "password", "post", "publish"]}}}
