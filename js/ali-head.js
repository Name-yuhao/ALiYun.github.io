/**
 * Created by sanjs on 2017/6/5.
 */

//   内容对象start
var extStr1 = [
    [
        {
            title: '数据应用',
        },
        {
            name: '推荐引擎',
            text: '适用于基础服务'
        },
        {
            name: '公众趋势分析',
            text: '时刻关注您的口碑'
        },
        {
            name: '企业图谱',
            text: '透视企业关系，洞察企业风险'
        },
        {
            name: '营销引擎',
            text: '激素搭建高水准的DSP系统'
        },
        {
            name: 'API市场',
            text: '丰富的API采购服务'
        }
    ],
    [
        {
            title: '数据分析展现'
        },
        {
            name: 'DataV数据可视化',
            text: '做出领导惊喜的可视化大屏'
        },
        {
            name: 'Quick BI',
            text: '30分钟老板也能上手的BI'
        },
        {
            name: '画像分析（公测中）',
            text: '智能化的用户兴趣标签'
        },
        {
            name: '关系网络分析',
            text: '构建万物互联，询遍业务线索'
        }
    ],
    [
        {
            title: '人工智能'
        },
        {
            name: '机器学习API',
            text: '从BI到AI，人工智能触手可及'
        },
        {
            name: '语音识别与合成',
            text: '录音识别为文字，文字和成为人声'
        },
        {
            name: '人机对话',
            text: '快速构建自己的只能对话机器人'
        },
        {
            name: '印刷文字识别',
            text: '高精准的文字图像解析和识别服务'
        },
        {
            name: '人脸识别（公测中）',
            text: '人脸检测，分析和认证服务'
        }
    ],
    [
        {
            title: '大数据基础付'
        },
        {
            name: '大数据开发套件',
            text: '建设数据仓库，人省一半'
        },
        {
            name: '分析型数据库',
            text: '眨眼间迁移数据随意查询'
        },
        {
            name: 'MaxCompute',
            text: '建设数据孤岛，快速集中数据'
        },
        {
            name: '数据集成',
            text: '创建数据仓库，钱省一半'
        },
        {
            name: '流计算（公测中）',
            text: '会写SQL的流计算'
        }
    ]
]
var extStr2 = [
    [
        {
            title: '数据分析展现'
        },
        {
            name: 'DataV数据可视化',
            text: '做出领导惊喜的可视化大屏'
        },
        {
            name: 'Quick BI',
            text: '30分钟老板也能上手的BI'
        },
        {
            name: '画像分析（公测中）',
            text: '智能化的用户兴趣标签'
        },
        {
            name: '关系网络分析',
            text: '构建万物互联，询遍业务线索'
        }
    ],
    [
        {
            title: '大数据基础付'
        },
        {
            name: '大数据开发套件',
            text: '建设数据仓库，人省一半'
        },
        {
            name: '分析型数据库',
            text: '眨眼间迁移数据随意查询'
        },
        {
            name: 'MaxCompute',
            text: '建设数据孤岛，快速集中数据'
        },
        {
            name: '数据集成',
            text: '创建数据仓库，钱省一半'
        },
        {
            name: '流计算（公测中）',
            text: '会写SQL的流计算'
        }
    ],
    [
        {
            title: '数据应用',
        },
        {
            name: '推荐引擎',
            text: '适用于基础服务'
        },
        {
            name: '公众趋势分析',
            text: '时刻关注您的口碑'
        },
        {
            name: '企业图谱',
            text: '透视企业关系，洞察企业风险'
        },
        {
            name: '营销引擎',
            text: '激素搭建高水准的DSP系统'
        },
        {
            name: 'API市场',
            text: '丰富的API采购服务'
        }
    ],
    [
        {
            title: '人工智能'
        },
        {
            name: '机器学习API',
            text: '从BI到AI，人工智能触手可及'
        },
        {
            name: '语音识别与合成',
            text: '录音识别为文字，文字和成为人声'
        },
        {
            name: '人机对话',
            text: '快速构建自己的只能对话机器人'
        },
        {
            name: '印刷文字识别',
            text: '高精准的文字图像解析和识别服务'
        },
        {
            name: '人脸识别（公测中）',
            text: '人脸检测，分析和认证服务'
        }
    ]
]
var extLf1 = ["云计算", "大数据(数加)", "安全", "域名注册(万网)"]
var extLf2 = ["基础软件市场", "网站建设", "企业应用", "服务于培训", "安全市场"]
//  内容对象end
//获取全局txt内容
var keywords = getAllText($("body").find("a"))

//  header菜单栏hover呼吸效果
$("header").hover(function () {
    $(this).animate({
        backgroundColor: "#373D41"
    }, 300, "swing")
}, function () {
    $(this).animate({
        backgroundColor: "#24282C"
    }, 300, "swing")
});

//     菜单栏鼠标滑动底部小蓝条跟随，和点击小蓝条固定效果
$(".head-menu li").on("click", function () {
    $(this).addClass("btm-line").siblings().removeClass("btm-line");
}).on("mouseenter", function () {
    var num = 0
    //由于菜单栏选项每个li的宽度不固定，这里使用循环将this前面所有的li宽度相加。
    for (var i = 0; i < $(this).index(); i++) {
        num += $(".head-menu li").eq(i).width() + 20
    }
    $(".top-line").stop(true, true).animate({
        left: num,
        width: $(this).width() + 20,
    }, 300)
}).on("mouseleave", function () {
    $(".top-line").animate({
        width: 0
    }, 300)
});
//  扩展栏底部呼吸效果实现
$(".head-ext-btm").hover(function () {
    $(this).stop().animate({
        backgroundColor: "#555555"
    }, 600)
}, function () {
    $(this).stop().animate({
        backgroundColor: "#2B3034"
    }, 600)
})

// 搜索框功能实现
$(".head-search").on("click", function () {
    $(".search").show();
    $(".marker").hide()
    $(".search-box").stop().animate({
        width: 180
    }, 300, "swing", function () {
        $(".search-box").trigger("focus")
    })
})

//  搜索框获取焦点后宽度180
$(".search-box").on("focus", function () {
    $(this).stop().animate({
        width: 180
    }, 1, function () {
        $(".search").show();
        $(".marker").hide()
    })
})

//  搜索框失去焦点事件
$(".search-box").on("blur", function () {
    $(this).val("");
    $(".keywords li").fadeOut(200)
    $(this).stop().animate({
        width: 0
    }, 300, "swing", function () {
        $(".search").hide();
        $(".marker").show(100)
    })
})

//  搜索框检索内容实现
var scList = document.getElementById("keywords");
document.getElementById("searchTxt").onkeyup = function () {
    if (scList.hasChildNodes()) {
        scList.innerHTML = "";
    }
    var temp = [];
    for (var i = 0; i < keywords.length; i++) {
        if (keywords[i].indexOf(this.value) == 0) {
            temp.push(keywords[i]);
        }
    }
    if (this.value.length == 0 || temp.length == 0) {
        scList.innerHTML = "";
        return;
    }
    for (var j = 0; j < temp.length; j++) {
        var li = document.createElement("li");
        li.innerHTML = temp[j];
        scList.appendChild(li);
    }
    //  给keywords添加事件 设置鼠标划过样式，增加点击设置内容到搜索框，并隐藏keywords栏目
    $(".keywords li").on("click", function () {
        $(".search-box").trigger("focus")
        $(".keywords li").fadeOut(100)
        $(".search-box").val($(this).text());
    }).on("mouseenter", function () {
        $(this).animate({
            backgroundColor: "#28D0E9"
        }, 100).siblings().stop().animate({
            backgroundColor: "#40484D"
        }, 100)
    })
}

//  菜单栏产品选项鼠标移入显示扩展栏
$(".head-menu-cp").on("mouseenter", function () {
    showExt(extStr1, extLf1)
})
//  菜单栏产品选项鼠标移入显示扩展栏
$(".head-menu-fa").on("mouseenter", function () {
    showExt(extStr1, extLf2)
})
//  菜单栏产品选项鼠标移入显示扩展栏
$(".head-menu-sc").on("mouseenter", function () {
    showExt(extStr2, extLf2)
})
//  菜单栏产品选项鼠标移入显示扩展栏
$(".head-menu-dsj").on("mouseenter", function () {
    showExt(extStr1, extLf1)
})
//  菜单栏产品选项鼠标移入显示扩展栏
$(".head-menu-sq").on("mouseenter", function () {
    showExt(extStr2, extLf2)
})
//  菜单栏产品选项鼠标移入显示扩展栏
$(".head-menu-zc").on("mouseenter", function () {
    showExt(extStr1, extLf1)
})
//  菜单栏产品选项鼠标移入显示扩展栏
$(".head-menu-hb").on("mouseenter", function () {
    showExt(extStr2, extLf1)
})

// 鼠标离开body隐藏扩展栏
$("body").on("mouseleave", function () {
    hideExt()
})
// 鼠标移出扩展栏范围隐藏扩展栏功能实现
$(".head-ext").on("mouseleave", function () {
    hideExt()
})
//  扩展栏地部向上按钮功能实现点击隐藏扩展栏
$(".head-ext-btm img").on("click", function () {
    hideExt()
})

/**
 * //  产品扩展栏左侧列表hover效果实现
 */
function lfSetEvent() {
    $(".head-ext-cpLf li").on("mouseenter", function () {
        $(this).animate({
            backgroundColor: "#00C1DE"
        }, 150).siblings().animate({
            backgroundColor: "#272B30"
        }, 150);
        if ($(this).index() % 2 == 0)
            extText(extStr2, $(".head-ext-cpLr"))
        else {
            extText(extStr1, $(".head-ext-cpLr"))
        }
        curSetEvent()
    });
}
/** 封装的一个用于更新扩展栏hover效果的事件注册函数
 */
function curSetEvent() {
    $(".head-ext-cpLr li").on("mouseenter", function () {
        $(this).addClass("curr").animate({
            backgroundColor: "#00C1DE"
        }, 80)
    })
    $(".head-ext-cpLr li").on("mouseleave", function () {
        $(".head-ext-cpLr li").stop().removeClass("curr").animate({
            backgroundColor: "#303639"
        }, 80);
    })
}

/**
 * 封装的一个隐藏扩展栏的函数
 */
function hideExt() {
    $(".head-ext").animate({
        height: 0
    }, 400);
    $(".head-ext-wrap").hide()
    $(".head-ext-btm").hide()
}

/**
 * 封装的一个扩展栏的显示效果函数
 * @param extStr
 * @param extLf
 */
function showExt(extStr, extLf) {
    $(".head-ext").stop(true, true).animate({
        height: 680
    }, 400);
    $(".head-ext-cpLr").html("")
    extText(extStr, $(".head-ext-cpLr"))
    extLfText(extLf, $(".head-ext-cpLf"))
    lfSetEvent()
    curSetEvent()
    $(".head-ext-wrap").fadeIn(400)
    $(".head-ext-btm").fadeIn(400)
}

/**
 *封装的扩展栏自动填入内容的函数
 * @param obj   内容对象
 * @param ele   要写入的父节点
 */
function extText(obj, ele) {
    var arr = []
    for (var i = 0; i < obj.length; i++) {
        var newArr = []
        for (var j = 0; j < obj[i].length; j++) {
            if (j == 0) {
                var ulStr = '<ul class="fl"><h3>' + obj[i][j].title + '</h3>'
            } else {
                newArr.push('<li>' + obj[i][j].name + '<a href="">' + obj[i][j].text + '</a></li>')
            }
        }
        ulStr += newArr.join("") + '</ul>';
        arr.push(ulStr)
    }
    ele.html(arr.join(""))
};

/**
 * 封装的一个扩展栏左侧栏目内容填充函数
 * @param obj
 * @param ele
 */
function extLfText(obj, ele) {
    var arr = [];
    for (var i = 0; i < obj.length; i++) {
        arr.push('<li>' + obj[i] + '</li>')
    }
    ele.html(arr.join(""))
}

/**
 * 封装了一个获取页面所有文本内容的函数
 * @param ele
 * @returns {Array}
 */
function getAllText(ele) {
    var textArr = []
    for (var i = 0; i < ele.length; i++) {
        textArr.push(ele.eq(i).text())
    }
    return textArr
}

//封装了一个简单的判断屏幕大小调整结构的函数
(function () {
    var w = $(window).width()
    if (w < 1400) {
        $(".head-iconfont").hide()
    }
}())
