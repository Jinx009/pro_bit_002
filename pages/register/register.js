var app = getApp();
Page({
  data: {
    _m: '',
    _p: '',
    _c: '',
    _n: ''
  },
  onLoad: function () {

  },
  onReady: function () {

  },
  _mD: function (e) {
    this.setData({
      _m: e.detail.value
    })
  },
  _pD: function (e) {
    this.setData({
      _p: e.detail.value
    })
  },
  _cD: function (e) {
    this.setData({
      _c: e.detail.value
    })
  },
  _nD: function (e) {
    this.setData({
      _n: e.detail.value
    })
  },
  _login: function () {
    wx.redirectTo({
      url: '/pages/index/index'
    })
  },
  _register: function () {
    if (this.data._m == '' || this.data. _m == null) {
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
    } else {
      wx.request({
        url: 'https://driver.amize.cn/front/d/pro_driver/register?mobilePhone=' + this.data._m + '&pwd=' + 
        this.data._p + '&plateNumber=' + this.data._c + '&name=' + this.data._n,
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        method:'post',
        success: function (res) {
          if ('200' == res.data.code) {
            wx.showToast({
              title: '注册成功',
              icon: 'success',
              duration: 1000
            })
            wx.redirectTo({
              url: '/pages/index/index'
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
