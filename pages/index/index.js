var app = getApp();
Page({
  data: {
    _m : '',
    _p : ''
  },
  onLoad:function(){

  },
  onReady: function () {
    
  },
  _mD : function(e){
    this.setData({
      _m: e.detail.value
    })
  },
  _pD : function (e) {
    this.setData({
      _p: e.detail.value
    })
  },
  _register:function(){
    wx.redirectTo({
      url: '/pages/register/register'
    })
  },
  _login: function(){
    if (this.data._m == '' || this.data._m==null){
      wx.showToast({
        title: '手机号码不能为空',
        icon: 'warn',
        duration: 1000
      })
    } else if (this.data._p == '' || this.data._p == null) {
      wx.showToast({
        title: '密码不能为空',
        icon: 'warn',
        duration: 1000
      })
    }else{
      wx.request({
        url: 'https://driver.amize.cn/front/d/pro_driver/login?mobilePhone=' + this.data._m + '&pwd=' + this.data._p,
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success: function (res) {
          console.log('1')
          if ('200' == res.data.code) {
            app.setSession('_session', ';jsessionid=' + res.header['Set-Cookie'].split(';')[0].split('=')[1]);
            console.log('2')
            wx.switchTab({
              url: '/pages/list/list'
            })
          } else {
            wx.showToast({
              title: res.data.msg,
              icon: 'warn',
              duration: 1000
            })
          }
        }
      })
    }
  }
});
