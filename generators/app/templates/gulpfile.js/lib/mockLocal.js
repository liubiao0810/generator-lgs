/**
 * @File:      是否本地mock数据逻辑
 * @Author:    花夏(liubiao01@itoxs.com)
 * @Version:   V0.0.1
 * @Date:      2016-06-16 19:08:20
 */
var fs         = require('fs');
var chalk      = require('chalk');
var _          = require('lodash');
var config     = require('../config/server');
module.exports = {

    /**
     * mockLocal 本地mock逻辑
     *
     * @return {type} description
     */
    mockLocal: function(req, res) {
        var config = require('../config');
        var base   = config.root;
        var url    = base + '/mock/' + req.method + req.url + '/index.json';
        var data   = fs.readFileSync(url);
        console.log('本地mock数据:' + chalk.green(url));
        res.write(data);
        res.end();
    },

    /**
     * mockRemote 远程服务器
     *
     */
    mockRemote: function(req, res) {
        httpProxy = require('http-proxy');
        var base  = config.remote.path;
        var proxy = httpProxy.createProxyServer({
            target: base
        });
        console.log(chalk.yellow('proxy- URL:') + chalk.green(base + req.url));
        req.headers = _.assign(req.headers, config.remote.headers);
        proxy.web(req, res);
    }
};