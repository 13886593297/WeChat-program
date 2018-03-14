const util = require('../../utils/util.js')


Page({
  data: {
    item: "",
    price: "",
    date: "",
    time: "",
    startDate: "",
    startTime: "",
    endDate: "",
    userName: "",
    telNumber: "",
    userAddr: ""
  },
  onLoad(params) {
    this.setData({
      item: params.item,
      price: params.price,
      date: util.formatTime(new Date()).split(" ")[0],
      time: util.formatTime(new Date()).split(" ")[1],
      startDate: util.formatTime(new Date()).split(" ")[0],
      startTime: util.formatTime(new Date()).split(" ")[1],
      endDate: util.formatTime(new Date()).split(" ")[2]
    })
    console.log(params)
  },
  getUserAddr() {
    let _this = this;
    wx.chooseAddress({
      success: function(res) {
        _this.setData({
          userName: res.userName,
          telNumber: res.telNumber,
          userAddr: res.provinceName == res.cityName ? res.cityName + res.countyName + res.detailInfo : res.provinceName + res.cityName + res.countyName + res.detailInfo
        })
      }
    })
  },
  bindDateChange: function(e) {
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function(e) {
    this.setData({
      time: e.detail.value
    })
  },
  formSubmit() {
    wx.requestPayment({
      'timeStamp': Date.now().toString(),
      'nonceStr': '',
      'package': 'prepay_id=wxdd758302d5c462c8',
      'signType': 'MD5',
      'paySign': 'MD5(appId=wxdd758302d5c462c8)',
      'success': function(res) {},
      'fail': function(res) {}
    })
  }
})