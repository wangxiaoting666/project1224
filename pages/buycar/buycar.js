// pages/shopcart/shopcart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    'iscart': false, //控制购物车有没有数据
    'goodList': [
      {
        'cover': '../../images/win/1.jpg',
        'rank': "intel酷睿5000",
        'icon': "/images/details/CPU.png",
        'name': "CPU",
        'isbn': '9787535482051',
        'desc': '华硕TFFT-687TFYT 高帮配置无线网卡-1322FTF',
        'price': 99,
        'count': 1,
        'checked': false
      },
      {
        'cover': '../../images/win/2.jpg',
        'rank': "intel酷睿5000",
        'icon': "/images/details/zhuban.png",
        'name': "主板",
        'isbn': '9787540455958',
        'desc': '影驰TFFT-687TFYT 高帮配置无线网卡-1322FTF',
        'price': 132,
        'count': 1,
        'checked': false
      },
      {
        'cover': '../../images/win/3.jpg',
        'rank': "intel酷睿5000",
        'icon': "/images/details/neicun.png",
        'name': "内存",
        'isbn': '9787539982830',
        'desc': '华硕TFFT-687TFYT 高帮配置无线网卡-1322FTF',
        'price': 34,
        'count': 1,
        'checked': false
      },
      {
        'cover': '../../images/win/1.jpg',
        'rank': "intel酷睿5000",
        'icon': "/images/details/ssd.png",
        'name': "SSD",
        'isbn': '9787550013247',
        'desc': '华硕TFFT-687TFYT 高帮配置无线网卡-1322FTF',
        'price': 69,
        'count': 1,
        'checked': false
      },
      {
        'cover': '../../images/win/2.jpg',
        'rank': "intel酷睿5000",
        'icon': "/images/details/xianka.png",
        'name': "显卡",
        'isbn': '9787208061644',
        'desc': '华硕TFFT-687TFYT 高帮配置无线网卡-1322FTF',
        'price': 999,
        'count': 1,
        'checked': false
      }, {
        'cover': '../../images/win/2.jpg',
        'rank': "intel酷睿5000",
        'icon': "/images/details/jixiang.png",
        'name': "机箱",
        'isbn': '9787208061644',
        'desc': '华硕TFFT-687TFYT 高帮配置无线网卡-1322FTF',
        'price': 999,
        'count': 1,
        'checked': false
      }, {
        'cover': '../../images/win/2.jpg',
        'rank': "intel酷睿5000",
        'icon': "/images/details/dianyuan.png",
        'name': "电源",
        'isbn': '9787208061644',
        'desc': '华硕TFFT-687TFYT 高帮配置无线网卡-1322FTF',
        'price': 999,
        'count': 1,
        'checked': false
      }, {
        'cover': '../../images/win/2.jpg',
        'rank': "intel酷睿5000",
        'icon': "/images/details/xianshiqi.png",
        'name': "显示器",
        'isbn': '9787208061644',
        'desc': '华硕TFFT-687TFYT 高帮配置无线网卡-1322FTF',
        'price': 999,
        'count': 1,
        'checked': false
      }, {
        'cover': '../../images/win/2.jpg',
        'rank': "intel酷睿5000",
        'icon': "/images/details/jianpan.png",
        'name': "键鼠套",
        'isbn': '9787208061644',
        'desc': '华硕TFFT-687TFYT 高帮配置无线网卡-1322FTF',
        'price': 999,
        'count': 1,
        'checked': false
      }
    ],
    'checkAll': false,
    'totalCount': 0,
    'totalPrice': 0,
  },

  //事件处理函数
  bindViewTap: function () {

    //3:跳转到tabBar页面（底部导航）
    //这种方法通常  是遇到wx.navigateTo 不跳转问题的时候（大多数是跳的底部的导航，所以没有反应）
    // wx.switchTab({
    //   url: '../mydep/mydep'
    // })

    wx.navigateTo({
      url: '../mydep/mydep'
    })
    wx.showToast({
      title: '配置成功',
      icon: 'succes',
      duration: 1000,
      mask: true
    })
  },
  /**
   * 删除购物车当前商品
   */
  deleteList(e) {
    const index = e.currentTarget.dataset.index;
    let goodList = this.data.goodList;
    goodList.splice(index, 1);
    this.setData({
      goodList: goodList
    });
    if (!goodList.length) {
      this.setData({
        iscart: true
      });
    } else {
      this.calculateTotal();
    }
  },

  /**
   * 计算商品总数
   */
  calculateTotal: function () {
    var goodList = this.data.goodList;
    var totalCount = 0;
    var totalPrice = 0;
    for (var i = 0; i < goodList.length; i++) {
      var good = goodList[i];
      if (good.checked) {
        totalCount += good.count;
        totalPrice += good.count * good.price;
      }
    }
    totalPrice = totalPrice.toFixed(2);
    this.setData({
      'totalCount': totalCount,
      'totalPrice': totalPrice
    })
  },

  /**
   * 用户点击商品减1
   */
  subtracttap: function (e) {
    var index = e.target.dataset.index;
    var goodList = this.data.goodList;
    var count = goodList[index].count;
    if (count <= 1) {
      return;
    } else {
      goodList[index].count--;
      this.setData({
        'goodList': goodList
      });
      this.calculateTotal();
    }
  },

  /**
   * 用户点击商品加1
   */
  addtap: function (e) {
    var index = e.target.dataset.index;
    var goodList = this.data.goodList;
    var count = goodList[index].count;
    goodList[index].count++;
    this.setData({
      'goodList': goodList
    });
    this.calculateTotal();
  },
  /**
   * 用户选择购物车商品
   */
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value);
    var checkboxItems = this.data.goodList;
    var values = e.detail.value;
    for (var i = 0; i < checkboxItems.length; ++i) {
      checkboxItems[i].checked = false;
      for (var j = 0; j < values.length; ++j) {
        if (checkboxItems[i].isbn == values[j]) {
          checkboxItems[i].checked = true;
          break;
        }
      }
    }

    var checkAll = false;
    if (checkboxItems.length == values.length) {
      checkAll = true;
    }

    this.setData({
      'goodList': checkboxItems,
      'checkAll': checkAll
    });
    this.calculateTotal();
  },

  /**
   * 用户点击全选
   */
  selectalltap: function (e) {
    // console.log('用户点击全选，携带value值为：', e.detail.value);
    var value = e.detail.value;
    var checkAll = false;
    if (value && value[0]) {
      checkAll = true;
    }

    var goodList = this.data.goodList;
    for (var i = 0; i < goodList.length; i++) {
      var good = goodList[i];
      good['checked'] = checkAll;
    }

    this.setData({
      'checkAll': checkAll,
      'goodList': goodList
    });
    this.calculateTotal();
  },

  /**
 * 生命周期函数--监听页面加载
 */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.calculateTotal();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },


})
