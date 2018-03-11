//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    slide: [{
      src: "/images/s1.png"
    },{
      src: "/images/s2.png"
    }],
    btnArea: [{
      url: "/pages/page1/page",
      src: "/images/m1.png",
      text: "日常保洁"
    },{
      url: "/pages/page2/page",
      src: "/images/m2.png",
      text: "家电清洗"
    },{
      url: "/pages/page3/page",
      src: "/images/m3.png",
      text: "空气检测治理"
    },{
      url: "/pages/page4/page",
      src: "/images/m4.png",
      text: "瓷砖美缝"
    },{
      url: "/pages/page5/page",
      src: "/images/m5.png",
      text: "新房开荒"
    },{
      url: "/pages/page6/page",
      src: "/images/m6.png",
      text: "大理石翻新结晶"
    },{
      url: "/pages/page7/page",
      src: "/images/m6.png",
      text: "家居保养"
    }]
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
