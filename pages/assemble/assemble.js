Page({
  data: {
    currentTab: 0,
    cardTeams: [{
      "viewid": "1",
      "imgsrc": "../../images/win/1.jpg",
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



  onReady: function () {
    this.animation = wx.createAnimation()
  },
  translate: function () {
    this.setData({
      isRuleTrue: true
    })
    this.animation.translate(-245, 0).step()
    this.setData({ animation: this.animation.export() })
  },

  success: function () {
    this.setData({
      isRuleTrue: false
    })
    this.animation.translate(0, 0).step()
    this.setData({ animation: this.animation.export() })
    wx.showToast({
      title: '配置成功',
      icon: 'succes',
      duration: 1000,
      mask: true
    })
  },
  tryDriver: function () {
    this.setData({
      background: "#89dcf8"
    })
  },
  deploy: function () {
    wx.navigateTo({
      url: '../deploy/deploy'
      //  url: '../logs/logs'
    })
  }
})