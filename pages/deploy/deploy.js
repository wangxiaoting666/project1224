// pages/leftSwiperDel/index.js
Page({
  data: {
    showModalStatus: false
  },
  onLoad: function(options) {
    // 页面初始化 options为页面跳转所带来的参数

    this.tempData();
  },
  // 自定义弹框
  // deployed: function() {
  //   wx.navigateTo({
  //     url: '../buycar/buycar'
  //     //  url: '../logs/logs'
  //   })
  // },
 

  //测试临时数据
  tempData: function() {
    var list = [{
        rank: "intel酷睿5000",
        txtStyle: "",
        icon: "/images/details/CPU.png",
        name: "CPU",
        pace: "¥151",


      },
      {
        rank: "intel酷睿5000",
        txtStyle: "",
        icon: "/images/details/zhuban.png",
        name: "主板",
        pace: "¥151",

      },
      {
        rank: "intel酷睿5000",
        txtStyle: "",
        icon: "/images/details/neicun.png",
        name: "内存",
        pace: "¥141",

      },
      {
        rank: "intel酷睿5000",
        txtStyle: "",
        icon: "/images/details/ssd.png",
        name: "SSD",
        pace: "¥121",

      },
      {
        rank: "intel酷睿5000",
        txtStyle: "",
        icon: "/images/details/xianka.png",
        name: "显卡",
        pace: "¥151",

      },
      {
        rank: "intel酷睿5000",
        txtStyle: "",
        icon: "/images/details/jixiang.png",
        name: "机箱",
        pace: "¥151",

      },
      {
        rank: "intel酷睿5000",
        txtStyle: "",
        icon: "/images/details/dianyuan.png",
        name: "电源",
        pace: "¥11",

      },
      {
        rank: "intel睿50",
        txtStyle: "",
        icon: "/images/details/xianshiqi.png",
        name: "显示器",
        pace: "¥151",
      },
      {
        rank: "intel5000",
        txtStyle: "",
        icon: "/images/details/jianpan.png",
        name: "键鼠套",
        pace: "¥151",

      },
    ]

    //
    this.setData({
      list: list
    });
  },

  // 弹框
  powerDrawer: function(e) {

    wx.navigateTo({
     url: '../buycar/buycar'
   
    })
  },


})