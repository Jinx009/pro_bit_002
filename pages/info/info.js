const isTel = (value) => !/^1[34578]\d{9}$/.test(value)
import { $wuxSelect } from '../../dist/index'
Page({
  goGoods: function () {
    wx.redirectTo({
      url: '/pages/goods/goods'
    })
  },
  data: {
    value1: '',
    title1: '',
    value2: '',
    title2: '',
  },
  onClick1() {
    $wuxSelect('#wux-select1').open({
      value: this.data.value1,
      options: [
        '三年一班',
        '三年二班',
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
        title: '女',
        value: '1',
      },
      {
        title: '男',
        value: '0',
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
})