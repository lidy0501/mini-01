// pages/demo04/demo04.js
Page({
  data: {
    num: 0
  },
  handleInput(e) {
    //console.log(e.detail.value)
    this.setData({
      num: e.detail.value
    })
  },
  handleTap(e) {
    //console.log(e.target.dataset.operation)
    const {operation} = e.currentTarget.dataset
    this.setData({
      num: this.data.num + operation
    })
  }
})