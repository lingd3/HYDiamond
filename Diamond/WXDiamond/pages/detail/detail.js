// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    diamond: null
  },

  

  onLoad: function () {
    var curDiamond = wx.getStorageSync("curDiamond")
    this.setData({
      diamond: curDiamond
    })
  },

})