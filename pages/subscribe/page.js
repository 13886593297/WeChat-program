Page({
  data: {
    text: ''
  },
  onLoad (params) {
    this.setData({
      text: params.price
    })
    console.log(params)
  }
})
