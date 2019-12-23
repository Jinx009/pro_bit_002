var app = getApp();
Page({
  data: {
  },
  onLoad: function () {

  },
  _out: function () {
    app.setSession('_session','');
    wx.redirectTo({
      url: '/pages/index/index',
    })
  },
  onReady: function () {

  },
});
