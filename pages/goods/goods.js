import { $wuxSelect } from '../../dist/index'
Page({
  goConfirm: function () {
    wx.redirectTo({
      url: '/pages/confirm/confirm'
    })
  },
  data: {
    value1: '100',
    title1: '100',
    value2: '100',
    title2: '100',
  },
  onClick1() {
    $wuxSelect('#wux-select1').open({
      value: this.data.value1,
      options: [
        {
          title: '100',
          value: '100',
        },
        {
          title: '200',
          value: '200',
        }
      ],
      onConfirm: (value, index, options) => {
        console.log('onConfirm', value, index, options)
        if (index !== -1) {
          this.setData({
            value1: value,
            title1: options[index],
          })
        }
      },
    })
  },
  onClick2() {
    $wuxSelect('#wux-select2').open({
      value: this.data.value2,
      options: [{
        title: '100',
        value: '100',
      },
      {
        title: '200',
        value: '200',
      }
      ],
      onConfirm: (value, index, options) => {
        console.log('onConfirm', value, index, options)
        if (index !== -1) {
          this.setData({
            value2: value,
            title2: options[index].title,
          })
        }
      },
    })
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