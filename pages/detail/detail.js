var app = getApp();
Page({
  data: {
    item: {}
  },
  onLoad: function () {
  },
  _back: function () {
    wx.switchTab({
      url: 'pages/list/list',
    })
  },
  _getData: function () {
    wx.showToast({
      title: '加载中',
      icon: 'loading'
    })
    var that = this;
    wx.request({
      url: 'https://driver.amize.cn/front/d/pro_task/detail' + app.getSession('_session')+'?id='+app.getSession('_id'),
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        that.setData({
          item: res.data.data,
        })
        wx.hideToast();
      }
    })
  },
  onReady: function () {
    this._getData();
  },
  _do: function(){
    wx.request({
      url: 'https://driver.amize.cn/front/d/pro_task/changeStatus' + app.getSession('_session') + '?id=' + app.getSession('_id'),
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        if('200'==res.data.code){
          wx.showToast({
            title: '操作成功',
            icon: 'success',
            duration: 1000
          })
          _getData();
          
        }
      }
    })
  },
  _back: function(){
    wx.switchTab({
      url: '../../pages/list/list',
    })
  }
});
