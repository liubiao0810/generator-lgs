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
            },
            pagesdata: {
                options: {},
                data: {
                    pageCurNum: 1, // 当前页数
                    totalPages: 10, // 总页数
                    pageSize: 20, // 每页显示的数量
                    totalMsg: '', // 总共数据展示信息
                    startPage: 1 // 开始页
                }
            }
        };
    },
    events: {
        
    },
    components: {
        'v-select': require('../components/v-select/'),
        'v-pages': require('../components/v-pages/')
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
        },
        alert: function () {
            swal("hello LGS!")
        },
        prompt: function () {
            swal({
                title: "输入框来了",
                text: "这里可以输入并确认:",
                type: "input",
                showCancelButton: true,
                closeOnConfirm: false,
                animation: "slide-from-top",
                inputPlaceholder: "填点东西到这里面吧"
            }, function(inputValue) {
                if (inputValue === false) return false;
                if (inputValue === "") {
                    swal.showInputError("请输入!");
                    return false;
                }
                swal("棒极了!", "您填写的是: " + inputValue, "success");
            });
        },
        confirm: function () {
            swal({
                title: "Are you sure?",
                text: "Your will not be able to recover this imaginary file!",
                type: "info",
                showCancelButton: true,
                closeOnConfirm: false
            },
            function() {
                swal("Deleted!", "Your imaginary file has been deleted.", "success");
            });
        }
    }
});