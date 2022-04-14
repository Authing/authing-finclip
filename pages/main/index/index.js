Page({

  /**
   * 页面的初始数据
   */
  data: {
    Titles:[
      "获取用户信息",
      "获取 AccessToken"
    ],
  },

  goUserInfo: function(event){
    let value = event.currentTarget.dataset.value;

    if (value == 0) {
     wx.navigateTo({url: '../userInfo/index/index'});
    }else if (value  == 1){
     wx.navigateTo({url: '../getToken/index/index'});
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

})