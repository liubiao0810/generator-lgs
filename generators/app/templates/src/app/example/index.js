/**
 * @File:      示例页面
 * @Author:    花夏(liubiao01@itoxs.com)
 * @Version:   V0.0.1
 * @Date:      2016-06-05 19:35:07
 */
var Vue = require('vue');
require('./index.css');
module.exports = Vue.extend({
    ready: function () {
        
    },
    template: require('./index.tpl.html'),
    data: function () {
        return {
            selectKind: {
                inputName: 'kindId', // 选择的name字段
                defaultText: '不限品类', // 默认请选择
                checked: -1, // 选中value值
                data: [
                    {
                        text: '不限品类',
                        value: -1
                    },
                    {
                        text: '家政服务',
                        value: 927
                    },
                    {
                        text: '丽人',
                        value: 0
                    },
                    {
                        text: '婚纱摄影',
                        value: 565
                    },
                    {
                        text: '鲜花',
                        value: 930
                    },
                    {
                        text: '教育',
                        value: 375
                    },
                    {
                        text: '汽车养护',
                        value: 706
                    },
                    {
                        text: '其他',
                        value: 316
                    }
                ] // 数据
            }
        };
    },
    events: {
        
    },
    components: {
        'v-select': require('../components/v-select/')
    },
    methods: {
        click: function () {
            $.ajax({
                type: 'get',
                url: 'example',
                dataType: 'json',
                success: function (json) {
                    console.log(json);
                }
            });
        }
    }
});