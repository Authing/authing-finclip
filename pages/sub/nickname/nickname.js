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
    var inputValue = String(this.inputValue);

    //TODO   /api/v2/users/profile/update   nickname
  }
})
