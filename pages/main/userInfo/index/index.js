const app = getApp()

Page({
  
  data: {
    userInfoTitles:[
      "昵称",
      "userId",
      "email",
      "phone",
      "token"
    ],
    userInfoItems:[],
    imageUrl:""
  },
  
  onLoad: function () {
    var _this = this

    wx.showToast({title: '加载中', icon: 'loading', duration: 10000});

    ft.getCurrentUser({
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
        console.log("调用getCurrentUser success");
        console.log(JSON.stringify(res));
        wx.hideToast();
    },
    fail: function (res) {
        console.log("调用getCurrentUser fail");
        console.log(JSON.stringify(res["errMsg"]));
        wx.hideToast();
    }
    })
    

  },
  
})
