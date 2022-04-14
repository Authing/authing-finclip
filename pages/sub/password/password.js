// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    inputValue1:'',
    inputValue2:'',
    inputValue3:''
  },
  onLoad() {

  },
  bindKeyInput1(e) {
    this.setData({
      inputValue1: e.detail.value
    })
  },
  bindKeyInput2(e) {
    this.setData({
      inputValue2: e.detail.value
    })
  },
  bindKeyInput3(e) {
    this.setData({
      inputValue3: e.detail.value
    })
  },
  // 提交
  submit() {
    var inputValue1 = String(this.inputValue1);

   //TODO   /api/v2/password/update"   newPassword oldPassword
    
  }
})
