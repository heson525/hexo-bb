'use strict';

var ejs = require('./node_modules/ejs');
var path = require('path');


hexo.extend.filter.register('before_generate', function () {
    console.log("this is from HEXO-BB:");
});


hexo.extend.generator.register('bb', function (locals) {

    var contents = ejs.renderFile(path.join(__dirname, 'templates/bb.ejs'), {
        bbappId: this.config.bb.appId,
        bbappKey: this.config.bb.appKey,
        bbserverURLs: this.config.bb.serverURLs
    }, function (err, result) {
        if (err) console.log(err);
        return result;
    });
    
    return {
        path: 'bb/index.html',
        data: {
            title: this.config.bb.title,
            content: contents
        },
        layout: ['page', 'post']
    }
});

