// pages/demo15/demo15.js
Page({
  data: {
    gender: ""
  },
  handleChange(e) {
    let gender = e.detail.value
    this.setData({
      gender   // 等价于   gender:gender
    })
  }
})