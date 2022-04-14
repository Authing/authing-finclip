// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    list: [
        {
          title: '昵称',
          page: 'nickname'
        }, 
        {
          title: '姓名',
          page: 'name'
        }, 
        {
          title: '用户名',
          page: 'username'
        }, 
        {
          title: '手机号',
          page: 'phone'
        }, 
        {
          title: '邮箱',
          page: 'email'
        }
      ],
      photo:'',
      userInfoItems: [],
      idToken: ''
  },
  onLoad() {
    this.setData({
    
    })
  },
  onShow() {
    // var _this = this
    // ft.getCurrentUser({
    //   success: function (res) {
    //       _this.setData({
    //         photo:res.photo,
    //         userInfoItems:[
    //           res.nickname,
    //           res.name,
    //           res.username,
    //           res.phone_number,
    //           res.email
    //         ]
    //       })
    //       console.log("调用getUserInfo success");
    //       console.log(JSON.stringify(res));
    //   },
    //   fail: function (res) {
    //       console.log("调用getUserInfo fail");
    //       console.log(JSON.stringify(res["errMsg"]));
    //   }
    // })

    //TODO 获取用户数据
  }

})
