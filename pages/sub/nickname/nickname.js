// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    name:'',
    inputValue:''
  },
  onLoad() {
    // var _this = this
    // ft.getUserNickName({
    //   success: function (res) {
    //       _this.setData({
    //         name:res.nickname
    //       })
    //       console.log("调用getUserInfo success");
    //       console.log(JSON.stringify(res));
    //   },
    //   fail: function (res) {
    //       console.log("调用getUserInfo fail");
    //       console.log(JSON.stringify(res["errMsg"]));
    //   }
    // })

    //TODO 获取昵称

  },
  bindKeyInput(e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  // 提交
  submit() {
    var inputValue = String(this.data.inputValue);

    var _this = this;
    wx.showLoading({title: '提交中', duration: 10000});
      
    let nickName = app.guard.updateProfile({nickname: inputValue});
    console.log(nickName);
    ft.guardRequest({
      url: nickName.url,
      body: nickName.body,
      method: nickName.method,
      success: function (res) {
        wx.hideLoading();
        wx.showToast({title: '提交成功'});
        console.log("updateProfile success");
      },
      fail: function (res) {        
        wx.hideLoading();
        wx.showToast({title: '提交失败', icon: 'error'});
        console.log("updateProfile fail");
        console.log(res.errMsg);
      }
    });
  }
})
