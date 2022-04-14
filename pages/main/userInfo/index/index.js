const app = getApp()

Page({
  
  data: {
    userInfoTitles:[
      "昵称",
      "Id",
      "邮箱",
      "手机号",
      "token"
    ],
    userInfoItems:[],
    imageUrl:""
  },

  
  methods: {
    async handleRegisterByEmail(){
        let register = await app.guard.registerByEmail('123@.com','123456');
        console.log(register);
        ft.guardRequest({
          url: register.url,
          body: register.body,
          method: register.method,
          success: function (res) {
            console.log("registerByEmail success");
            wx.hideToast();
          },
          fail: function (res) {
            console.log("registerByEmail fail");
            console.log(JSON.stringify(res["errMsg"]));
            wx.hideToast();
          }
        });
    }
  },


  onLoad: function () {

    var _this = this

    wx.showToast({title: '加载中', icon: 'loading', duration: 10000});

    // let getUser = app.guard.getCurrentUser();
    // ft.guardRequest({
    //   url: getUser.url,
    //   body: getUser.body,
    //   method: getUser.method,
    //   success: function (res) {
    //     _this.setData({
    //       imageUrl:res.photo,
    //       userInfoItems:[
    //         res.username,
    //         res.id,
    //         res.email,
    //         res.phone,
    //         res.token
    //       ]
    //     })

    //     console.log("getCurrentUser success");
    //     wx.hideToast();
    //   },
    //   fail: function (res) {
    //     console.log("getCurrentUser fail");
    //     console.log(JSON.stringify(res["errMsg"]));
    //     wx.hideToast();
    //   }
    // });


    this.methods.handleRegisterByEmail()

  
 

    // ft.getCurrentUser({
    // success: function (res) {
    //     _this.setData({
    //       imageUrl:res.photo,
    //       userInfoItems:[
    //         res.username,
    //         res.userId,
    //         res.email,
    //         res.phone,
    //         res.token
    //       ]
    //     })
    //     console.log("调用getCurrentUser success");
    //     console.log(JSON.stringify(res));
    // },
    // fail: function (res) {
    //     console.log("调用getCurrentUser fail");
    //     console.log(JSON.stringify(res["errMsg"]));
    // }
    // })

  },
  
})
