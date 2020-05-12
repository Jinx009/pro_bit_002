import Toast from '../../dist/toast/toast';
//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '欢迎',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    active: 0
  },
  login:function(){
    wx.redirectTo({
      url: '../me/index',
    })
  },
  onLoad: function () {

  }
})
