// pages/demo16/demo16.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        id: 0,
        name: "",
        value: "apple"
      },
      {
        id: 1,
        name: "🍇",
        value: "gaper"
      },
      {
        id: 2,
        name: "🍌",
        value: "bananer"
      }
    ],
    checkboxList: []
  },
  handleChange(e) {
    const checkboxList = e.detail.value
    this.setData({
      checkboxList
    })
  }
})