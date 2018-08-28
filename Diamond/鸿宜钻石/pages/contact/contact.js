// pages/contact/contact.js
Page({

  data: {
  
  },

  copy: function () {
    if (wx.setClipboardData) {
      wx.setClipboardData({
        data: 'aaaa6666888888',
        success: function (res) {
          wx.showToast({
            title: '内容复制成功！',
            icon: 'success',
            duration: 1000
          })
        }
      })
    }
    else {
      wx.showModal({
        title: '提示',
        content: '您的微信版本太低，请升级',
      })
    }
  },

  call: function() {
    wx.makePhoneCall({
      phoneNumber: '13531936398'
    })
  },

  onLoad: function (options) {

  },

})