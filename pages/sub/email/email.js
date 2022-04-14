// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    name:'',
    inputValue:''
  },
  onLoad() {
    //var _this = this
    // ft.getUserName({
    //   success: function (res) {
    //       _this.setData({
    //         name:res.name
    //       })
    //       console.log("调用ggetUserName success");
    //       console.log(JSON.stringify(res));
    //   },
    //   fail: function (res) {
    //       console.log("调用getUserName fail");
    //       console.log(JSON.stringify(res["errMsg"]));
    //   }
    // })

    //TODO 获取邮箱
  },
  bindKeyInput(e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  // 提交
  submit() {
    var inputValue = String(this.inputValue);

    //TODO "/api/v2/users/email/unbind"

    //TODO "/api/v2/users/email/bind" email、emailCode
  
  }
})
