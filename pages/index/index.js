//index.js
//获取应用实例
var app = getApp();
var cardTeams;

Page({
  data: {
    currentTab: 0,
    cardTeams: [{
      "viewid": "1",
      "imgsrc":"../../images/win/1.jpg",
      "price": "¥1245",
      "count": "显卡类别：入门级游戏独立显卡,处理器：Intel i5低功耗版",
      "name": "第六代处理图形音像游戏全套",

    }, {
      "viewid": "2",
        "imgsrc": "../../images/win/2.jpg",
        "price": "¥2345",
        "count": "显卡类别：入门级游戏独立显卡,处理器：Intel i5低功耗版",
        "name": "第六代处理图形音像游戏全套",

      }, {
        "viewid": "3",
        "imgsrc": "../../images/win/3.jpg",
        "price": "¥2345",
        "count": "显卡类别：入门级游戏独立显卡,处理器：Intel i5低功耗版",
        "name": "第六代处理图形音像游戏全套",

      }, {
        "viewid": "4",
        "imgsrc": "../../images/win/4.jpg",
        "price": "¥2345",
        "count": "显卡类别：入门级游戏独立显卡,处理器：Intel i5低功耗版",
        "name": "第六代处理图形音像游戏全套",

      },
      {
        "viewid": "5",
        "imgsrc": "../../images/win/5.jpg",
        "price": "¥2345",
        "count": "显卡类别：入门级游戏独立显卡,处理器：Intel i5低功耗版",
        "name": "第六代处理图形音像游戏全套",

      }]
  },


  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../indexdetails/indexdetails?index={{cardTeam.viewid}}&&what=wangting'
      //  url: '../logs/logs'
    })
  },
  onLoad: function() {
    // console.log('onLoad:' + app.globalData.domain)
    // var that = this
    // wx.request({
    //   url: '../../data/json.js',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   success: function (res) {
    //     //将获取到的json数据，存在名字叫list的这个数组中
    //     that.setData({
    //       list: res.data,
    //       //res代表success函数的事件对，data是固定的，list是数组
    //     })
    //   }
    // })
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
  }
  
})