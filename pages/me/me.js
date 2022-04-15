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



  methods: {

    // async handleRegisterByEmail(){
    //     let register = await app.guard.registerByEmail('123@.com','123456');
    //     ft.guardRequest({
    //       url: register.url,
    //       body: register.body,
    //       method: register.method,
    //       success: function (res) {
    //         console.log("registerByEmail success");
    //       },
    //       fail: function (res) {
    //         console.log("registerByEmail fail");
    //       console.log(res.errMsg);
    //       }
    //     });
    // },

    getCurrentUser(){
      var _this = this;
      let getUser = app.guard.getCurrentUser();
      ft.guardRequest({
        url: getUser.url,
        body: getUser.body,
        method: getUser.method,
        success: function (res) {
          _this.setData({
            photo: res.data.photo,
            idToken: res.data.token,
            userInfoItems:[
              res.data.nickname,
              res.data.name,
              res.data.username,
              res.data.phone,
              res.data.email,            
              ]
          })

          console.log("getCurrentUser success");
        },
        fail: function (res) {          
          console.log("getCurrentUser fail");
          console.log(res.errMsg);
        }
      });
    },

    // setCustomUserData(){
    //   let customData = app.guard.setCustomUserData({'name':'123','sex':'456'});
    //   ft.guardRequest({
    //     url: customData.url,
    //     body: customData.body,
    //     method: customData.method,
    //     success: function (res) {
    //       console.log("setCustomUserData success");
    //     },
    //     fail: function (res) {
    //       console.log("setCustomUserData fail");
    //       console.log(res.errMsg);
    //     }
    //   });
    // },

  },

  onLoad: function () {
  },

  onShow: function () {

    this.methods.getCurrentUser.apply(this,null);

  },
})
