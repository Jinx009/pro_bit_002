import Toast from '../../dist/toast/toast';
var times = require('time.js');
//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '欢迎',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    active: 0,
    activeArea: 0
  },
  onLoad: function () {
    //this._getData();
  },
  onChangeArea(event) {
    wx.showToast({
      title: `切换到标签 ${event.detail.name}`,
      icon: 'none',
    });
  },
  goLogin(){
    wx.redirectTo({
      url: '../login/index',
    })
  },
  onChangeSelect(event) {
    const { picker, value, index } = event.detail;
    Toast(`当前值：${value}, 当前索引：${index}`);
  },
  onChange(event) {
    // event.detail 的值为当前选中项的索引
    this.setData({ active: event.detail });
    if (event.detail == '1') {
      wx.redirectTo({
        url: '../me/index',
      })
    }
    if (event.detail == '2') {
      wx.redirectTo({
        url: '../about/index',
      })
    }
  },
})
