Page({
  goList: function () {
    wx.redirectTo({
      url: '/pages/list/list'
    })
  },
  onChange(e) {
    console.log('onChange', e)
    this.setData({
      error: isTel(e.detail.value),
      value: e.detail.value,
    })
  },
  onFocus(e) {
    this.setData({
      error: isTel(e.detail.value),
    })
    console.log('onFocus', e)
  },
  onBlur(e) {
    this.setData({
      error: isTel(e.detail.value),
    })
    console.log('onBlur', e)
  },
  onConfirm(e) {
    console.log('onConfirm', e)
  },
  onClear(e) {
    console.log('onClear', e)
    this.setData({
      error: true,
      value: '',
    })
  },
  onError() {
    wx.showModal({
      title: 'Please enter 11 digits',
      showCancel: !1,
    })
  },
})