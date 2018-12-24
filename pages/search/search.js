Page({
  data: {
    // 搜索框状态
    inputShowed: false,
    // 搜索框值
    inputVal: "",
    //搜索渲染推荐数据
list: [
  { name: "第六代处理图形音像游戏全套" },
  { name: "显卡类别：入门级游戏独立显卡,处理器：Intel i5低功耗版" },
  { name: "卡类别：入门级游戏独立显" },
  { name: "处理器：Intel i5低功耗版" },
  { name: "类别：入门级游" },
  { name: "卡类别：入门级游戏独立显卡,处理" },
  { name: "六代处理图形音像游" },
  { name: "六代处理图形音像游" },
  { name: "卡类别：入门级游戏独立显卡,处理" },
  { name: "类别：入门级游" }
]
},
// 显示搜索框
showInput: function () {
this.setData({
inputShowed: true
});
},
// 隐藏搜索框样式
hideInput: function () {
this.setData({
inputVal: "",
inputShowed: false
});
},
// 清除搜索框值
clearInput: function () {
this.setData({
inputVal: ""
});
},
// 获取搜索框值
inputTyping: function (e) {
this.setData({
inputVal: e.detail.value
});
console.log(this.data.inputVal);
},
// 获取选中推荐列表中的值
btn_name: function (res) {
console.log(res.currentTarget.dataset.index, res.currentTarget.dataset.name);
}
});