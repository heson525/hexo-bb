'use strict';

var ejs = require('./node_modules/ejs');
var path = require('path');

hexo.extend.generator.register('bb', function (locals) {

    var contents = ejs.renderFile(path.join(__dirname, 'templates/bb.ejs'), {
        bbappId: this.config.bb.appId,
        bbappKey: this.config.bb.appKey,
        limit: this.config.bb.limit,
        content: this.config.bb.content,
        bbserverURLs: this.config.bb.serverURLs
    }, function (err, result) {
        if (err) console.log(err);
        console.log("哔哔页面已生成！");
        return result;
    });
    
    return {
        path: this.config.bb.path + '/index.html',
        data: {
            title: this.config.bb.title,
            content: contents
        },
        layout: ['page', 'post']
    }
});

