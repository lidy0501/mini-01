//app.js
App({

  /**
   * 应用第一次启动的时候就会触发
   * 可用于应用第一次启动的时候获取用户的个人信息
   */
  onLaunch: function () {
    console.log('onLaunch')
    // // 展示本地存储能力
    // var logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)

    // // 登录
    // wx.login({
    //   success: res => {
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //   }
    // })
    // // 获取用户信息
    // wx.getSetting({
    //   success: res => {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.getUserInfo({
    //         success: res => {
    //           // 可以将 res 发送给后台解码出 unionId
    //           this.globalData.userInfo = res.userInfo

    //           // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //           // 所以此处加入 callback 以防止这种情况
    //           if (this.userInfoReadyCallback) {
    //             this.userInfoReadyCallback(res)
    //           }
    //         }
    //       })
    //     }
    //   }
    // }) 
  },

  /**
   * 应用被用户看到时触发
   * 可用于对应用的数据或页面效果进行重置
   */
  onShow: function() {
    console.log('onShow')
  },

  /**
   * 用户看不到应用的时候触发
   * 可用于暂定或清除定时器
   */
  onHide: function() {
    console.log('onHide')
  },

  /**
   * 应用的代码发生了报错的时候触发 
   * 用处：在应用发生代码报错的时候，收集用户的错误信息，通过一部请求，将错误信息发送后台去
   */
  onError: function (err) {
    console.log('onError')
    console.log(err)
  },

  /**
   * 页面找不到机会触发
   * 应用第一次启动的时候，如果找不到第一个入口页面才会触发
   * 用处：如果页面不存在了，通过js的方式来重新跳转页面，调到第二个首页：wx.navigateTo
   */
  onPageNotFound() {
    console.log('onPageNotFound');
    wx.navigateTo({
      url: '/pages/demo09/demo09',
      success: (result)=>{
        
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },


  globalData: {
    userInfo: null
  }
})