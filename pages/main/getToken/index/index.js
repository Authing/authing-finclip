const app = getApp()

Page({
  
  data: {
    userInfoTitles:[
      "AccessToken"
    ],
    userInfoItems:[],
  },
  
  onLoad: function () {
    var _this = this

    wx.showToast({title: '加载中', icon: 'loading', duration: 10000});

    ft.getAccessToken({
    success: function (res) {
        _this.setData({
          imageUrl:res.photo,
          userInfoItems:[
            res.username,
            res.userId,
            res.email,
            res.phone,
            res.token
          ]
        })
        console.log("调用getAccessToken success");
        console.log(JSON.stringify(res));
        wx.hideToast();
    },
    fail: function (res) {
        console.log("调用getAccessToken fail");
        console.log(JSON.stringify(res["errMsg"]));
        wx.hideToast();
    }
    })
  },
  
})
