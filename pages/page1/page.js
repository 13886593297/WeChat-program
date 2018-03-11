//获取应用实例
const app = getApp()

Page({
  data: {
    items: [{
      img: "/images/m1.png",
      name: "家居保洁",
      value: "3-5元/平方"
    },{
      img: "/images/m1.png",
      name: "玻璃清洗",
      value: "10-12/平方"
    },{
      img: "/images/m1.png",
      name: "灯饰清洗",
      value: "100/盏起"
    }],
    price: 0,
    disabled: true,
    item: ''
  },
  formSubmit: function(e) {
    wx.navigateTo({
      url: "/pages/subscribe/page?price=" + this.data.item + this.data.price
    })
  },
  checkboxChange: function(e) {
    if (e.detail.value.length > 0) {
      this.setData({disabled: false})
    } else {
      this.setData({disabled: true})
    }
    this.data.item = e.detail.value;
    this.setData({ price: e.detail.value.length * 100 }) 
  }
})