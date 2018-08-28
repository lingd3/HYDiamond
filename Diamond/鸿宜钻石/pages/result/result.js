// pages/result/result.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    titles: ['形状', '重量', '颜色', '净度', '切工', '价格', '更多'],
    diamonds: [],
    page: 0, //设置加载的第几次，默认是第一次
    hasMore: false, // 加载更多
  },

  contact: function () {
    wx.navigateTo({
      url: '/pages/contact/contact',
    })
  },

  toDetail: function(e) {
    var self = this
    var index = e.currentTarget.dataset.index
    var curDiamond = self.data.diamonds[index]
    wx.setStorageSync("curDiamond", curDiamond)
    wx.navigateTo({
      url: '/pages/detail/detail',
    })
  },

  toReturn: function () {
    wx.redirectTo({
      url: '/pages/index/index',
    })
  },

  search: function () {
    var self = this
    console.log('search')
    var query = wx.getStorageSync("query")
    var searchUrl = app.globalData.host + '/query?' + query
    
    console.log(searchUrl)
    wx.request({
      url: searchUrl,
      method: 'GET',
      success: function (res) {
        self.setData({
          diamonds: res.data.data
        })
      },
      fail: function () {
        wx.showModal({
          title: 'Error',
          content: '搜索出现异常，请与客服联系',
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击确定')
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })
      }
    })
  },

  onLoad: function () {
    var diamond_data = wx.getStorageSync("diamonds")
    this.setData({
      diamonds: diamond_data
    })
  },

  onReachBottom(e) {
    var self = this
    console.log('--------下拉刷新-------')
    var query = wx.getStorageSync("query")
    var searchUrl = app.globalData.host + '/query?' + query + 'page=' + self.data.page

    //在标题栏中显示加载
    wx.showNavigationBarLoading()
    wx.request({
      url: searchUrl,
      method: 'GET',
      success: function (res) {
        var oldDiamonds = self.data.diamonds
        var diamond_data = oldDiamonds.concat(res.data.data)
        console.log(self.data.page)
        self.setData({
          page: self.data.page+1,
          diamonds: diamond_data
        })
      },
      complete: function() {
        //完成加载
        wx.hideNavigationBarLoading()
      }
    })
  }

})