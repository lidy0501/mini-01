// pages/demo18/demo18.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad')
    /**
     * 可用于发送一部请求，初始化页面数据
     */
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onShow')
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onReady')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('onHide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('onUnload')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('onPullDownRefresh')
  },

  /**
   * 页面上拉触底事件的处理函数
   * 需要让页面出现上下滚滚动才行
   */
  onReachBottom: function () {
    console.log('onReachBottom')
    // 可用于上拉加载下一页数据
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log('onShareAppMessage')
  },

  /**
   * 页面滚定触发
   */
  onPageScroll() {
    console.log('onpageScroll')
  },

  /**
   * 页面尺寸发生变化时触发
   * x小程序发生横屏，竖屏切换时触发
   */
  onResize() {
    console.log('onResize')
  },

  /**
   * 必须要求当前页面也是tabbary页面，点击自己的tabitem 的时候才触发
   */
  onTabItemTap() {
    console.log('onTabItemTap')
  }
})