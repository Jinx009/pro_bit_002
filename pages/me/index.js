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
    active: 1,
  },
  onLoad: function () {
  },
  onChange(event) {
    // event.detail 的值为当前选中项的索引
    this.setData({ active: event.detail });
    if (event.detail == '0') {
      wx.redirectTo({
        url: '../index/index',
      })
    }
    if (event.detail == '2') {
      wx.redirectTo({
        url: '../about/index',
      })
    } 
  },

})
