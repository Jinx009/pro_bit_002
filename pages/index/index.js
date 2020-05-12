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
    active:0
  },
  onChange(event) {
    if(event.detail=='1'){
      wx.redirectTo({
        url: '../me/index',
      })
    }
    if (event.detail == '2') {
      wx.redirectTo({
        url: '../about/index',
      })
    }
    this.setData({ active: event.detail });
  },
  formatDate(date) {
    if(date!=''){
      date = new Date(date);
    }else{
      date = new Date();
    }
    wx.setStorage({
      key: 'selectDate',
      data: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    })
    wx.redirectTo({
      url: '../select/index',
    })
    // return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  },
  onConfirm(event) {
    this.setData({
      show: false,
      date: this.formatDate(event.detail),
    });
  },
  onLoad: function () {  
  //   wx.login({
  //     success(res) {
  //       if (res.code) {
  //         //发起网络请求
  //         wx.request({
  //           url: 'https://iot.zhanway.com/wxapp/login',
  //           data: {
  //             code: res.code
  //           },
  //           success: function (res) {
  //             if (res.data.code == '200') {
  //               wx.setStorage({
  //                 key: 'openid',
  //                 data: res.data.data
  //               })
  //             } 
  //           }
  //         })
  //       } else {
  //         console.log('登录失败！' + res.errMsg)
  //       }
  //     }
  //   })
  }
})
