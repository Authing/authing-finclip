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
        ft.guardRequest({
          url: register.url,
          body: register.body,
          method: register.method,
          success: function (res) {
            console.log("registerByEmail success");
          },
          fail: function (res) {
            console.log("registerByEmail fail");
          console.log(res.errMsg);
          }
        });
    },

    getCurrentUser(){
      let getUser = app.guard.getCurrentUser();
      ft.guardRequest({
        url: getUser.url,
        body: getUser.body,
        method: getUser.method,
        success: function (res) {
          _this.setData({
            imageUrl:res.data.photo,
            userInfoItems:[
              res.data.username,
              res.data.id,
              res.data.email,
              res.data.phone,
              res.data.token
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

    setCustomUserData(){
      let customData = app.guard.setCustomUserData({'name':'123','sex':'456'});
      ft.guardRequest({
        url: customData.url,
        body: customData.body,
        method: customData.method,
        success: function (res) {
          console.log("setCustomUserData success");
        },
        fail: function (res) {
          console.log("setCustomUserData fail");
          console.log(res.errMsg);
        }
      });
    },

  },


  onLoad: function () {

    var _this = this

    this.methods.getCurrentUser();

    this.methods.handleRegisterByEmail();

    this.methods.setCustomUserData();

  },
  
})
