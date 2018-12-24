// pages/leftSwiperDel/index.js
Page({
  data: {
    currentTab: 0
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数

    this.tempData();
  },

  //测试临时数据
  tempData: function () {
    var list = [
      {
        rank: "CPU",
       obj: "芯片型号",
        objs: "NADIYHHDSHFI",
        name: "intel酷睿500+",
        pace: "236.00",


      },
      {
        rank: "主板",
       
        obj: "显存容量",
        objs: "NADIYHHDSHFI",
        name: "影驰RDTFY+8980",
        pace: "450",

      },
      {
        rank: "内存",
        obj: "输出接口",
        objs: "NADIYHHDSHFI",
       
        name: "华硕7689+DRDT",
        pace: "245",

      },
      {
        rank: "硬盘",
        txtStyle: "",
        obj: "显存类型",
        objs: "NADIYHHDSHFI",
        name: "希捷ssss+90808",
        pace: "217",

      },

   
     
  ]



    //
    this.setData({
      list: list
    });
  },
  //滑动切换
  swiperTab: function (e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },
  //点击切换 
  clickTab: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  // 自定义分享
  onShareAppMessage: function () {

    return {

      title: '我的配置单',

      desc: '分享我的配置单',

      path: '/page/index?id=123'

    }

  }

})