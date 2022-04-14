
//获取用户信息
function getCurrentUser() {
  return {
    url: '/api/v2/users/me',
    method: 'GET',
    body: {}
  }
}

module.exports = {
  getCurrentUser
}
