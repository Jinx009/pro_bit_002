var app = getApp();
Page({
  data: {
    list:[]
  },
  onLoad: function () {
    this._getData();
  },
  _goDetail:function(e){
    var id = e.currentTarget.dataset.id;
    app.setSession('_id',id);
    wx.redirectTo({
      url: '../../pages/detail/detail'
    })
  },
  _getData: function(){
      wx.showToast({
        title: '加载中',
        icon: 'loading'
      })
      var that = this;
      wx.request({
        url: 'https://driver.amize.cn/front/d/pro_task/waitList' + app.getSession('_session'),
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success: function (res) {
          if(res.data.code=='200'){
            that.setData({
              list: res.data.data,
            })
            wx.hideToast();
          }else{
            wx.redirectTo({
              url: '/pages/index/index'
            })
          }
        }
      })
  },
  onReady: function () {
   
  },
});
