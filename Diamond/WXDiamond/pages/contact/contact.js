// pages/contact/contact.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  copy: function () {
    if (wx.setClipboardData) {
      wx.setClipboardData({
        data: 'Ry_Jewellry',
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
      phoneNumber: '13413908995'
    })
  },

  onLoad: function (options) {
  
  },

})