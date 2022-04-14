
//获取用户信息
function getCurrentUser() {
  return {
    url: '/api/v2/users/me',
    method: 'GET',
    body: {}
  }
}

async function encryptPassword(password){
  return new Promise((resolve,reject)=>{
    ft.encryptPassword({
      password: password,
      success: function(data){
        resolve(data)
      },
      fail:function(err){
        resolve(err)
      }
    })
  })
}

//邮箱注册
/**
  email : 邮箱
  password: 密码
 */
async function registerByEmail(email, password) {

  const data = await encryptPassword(password);

  return {
    url: '/api/v2/register/email',
    method: 'POST',
    body: {email: email, password: data["password"], forceLogin: true}
  }
}

module.exports = {
  getCurrentUser,
  registerByEmail
}
