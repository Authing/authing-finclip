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
  
  onLoad: function () {
    var _this = this

    wx.showToast({title: '加载中', icon: 'loading', duration: 10000});

    let getUser = app.guard.getCurrentUser();
    ft.guardRequest({
      url: getUser.url,
      body: getUser.body,
      method: getUser.method,
      success: function (res) {
        _this.setData({
          imageUrl:res.photo,
          userInfoItems:[
            res.username,
            res.id,
            res.email,
            res.phone,
            res.token
          ]
        })

        console.log("调用guardRequest success");
        wx.hideToast();
      },
      fail: function (res) {
        console.log("调用guardRequest fail");
        console.log(JSON.stringify(res["errMsg"]));
        wx.hideToast();
      }
    });

    var password = '123456'
    ft.encryptPassword({
      password: password,
      success: function (res) {
        console.log("调用encryptPassword success");
        console.log(JSON.stringify(res["password"]));
        wx.hideToast();
      },
      fail: function (res) {
        console.log("调用encryptPassword fail");
      }
    })

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
