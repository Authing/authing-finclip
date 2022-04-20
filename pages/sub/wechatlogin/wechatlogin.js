const app = getApp()

Page({
  data: {
    token:'',
  },

  submit() {
    wx.login({
      timeout:10000,
      success: (result) => {
        this.setData({
            token: result.code
        })
          
      },
      fail: (error) => {
        this.setData({
            token: error.errMsg
        })
      },
      complete: () => {}
    });
  }
})
