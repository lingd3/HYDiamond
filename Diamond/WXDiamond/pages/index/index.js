//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    shapes: [
      { image: '/images/round.jpeg', shapeName: '圆形' }, 
      { image: '/images/princess.jpeg', shapeName: '公主方' },
      { image: '/images/heart.jpeg', shapeName: '心形' },
      { image: '/images/cushion.jpeg', shapeName: '垫形' },
      { image: '/images/oval.jpeg', shapeName: '椭圆' },
      { image: '/images/pear.jpeg', shapeName: '梨形' },
      { image: '/images/radiant.jpeg', shapeName: '雷迪恩' },
      { image: '/images/emerald.jpeg', shapeName: '祖母绿' },
      { image: '/images/triangle.jpeg', shapeName: '三角形' },
      { image: '/images/marquise.jpeg', shapeName: '马眼形' },
    ],
    colors: [
      { color: 'D', select: false }, { color: 'E', select: false },
      { color: 'F', select: false }, { color: 'G', select: false },
      { color: 'H', select: false }, { color: 'I', select: false },
      { color: 'J', select: false }, { color: 'K', select: false },
      { color: 'L', select: false }, { color: 'M', select: false },
      
    ],
    clarities: [
      { clarity: 'FL', select: false }, { clarity: 'IF', select: false }, 
      { clarity: 'VVS1', select: false }, { clarity: 'VVS2', select: false }, 
      { clarity: 'VS1', select: false }, { clarity: 'VS2', select: false }, 
      { clarity: 'SI1', select: false }, { clarity: 'SI2', select: false }, 
      { clarity: 'I1', select: false }, 
    ],
    cuts: [
      { cut: 'EX', select: false }, { cut: 'VG', select: false },
      { cut: 'GD', select: false },
    ],
    polishs: [
      { polish: 'EX', select: false }, { polish: 'VG', select: false },
      { polish: 'GD', select: false },
    ],
    symmetries: [
      { symmetry: 'EX', select: false }, { symmetry: 'VG', select: false },
      { symmetry: 'GD', select: false },
    ],
    fluorescences: [
      { fluorescence: 'N', select: false }, { fluorescence: 'VSL', select: false },
      { fluorescence: 'F', select: false }, { fluorescence: 'M', select: false },
      { fluorescence: 'S', select: false },
    ],
    carat1: '', carat2: '', price1: '', price2: '', 
  },

  changeImage: function(e) {
    var self = this
    var index = e.currentTarget.dataset.index
    var oldImage = self.data.shapes[index].image
    if (oldImage.slice(-6) != "2.jpeg") {
      var newImage = oldImage.slice(0, -5) + "2.jpeg"
      self.data.shapes[index].image = newImage
    }
    else {
      var newImage = oldImage.slice(0, -6) + ".jpeg"
      self.data.shapes[index].image = newImage
    }
    self.setData({
      shapes: self.data.shapes
    })
  },
  changeColor: function(e) {
    self = this
    var index = e.currentTarget.dataset.index
    if (self.data.colors[index].select==true) self.data.colors[index].select = false
    else self.data.colors[index].select = true
    self.setData({
      colors: self.data.colors
    })
  },
  changeClarity: function (e) {
    var self = this
    var index = e.currentTarget.dataset.index
    if (self.data.clarities[index].select == true) self.data.clarities[index].select = false
    else self.data.clarities[index].select = true
    self.setData({
      clarities: self.data.clarities
    })
  },
  changeCut: function (e) {
    var self = this
    var index = e.currentTarget.dataset.index
    if (self.data.cuts[index].select == true) self.data.cuts[index].select = false
    else self.data.cuts[index].select = true
    self.setData({
      cuts: self.data.cuts
    })
  },
  changePolish: function (e) {
    var self = this
    var index = e.currentTarget.dataset.index
    if (self.data.polishs[index].select == true) self.data.polishs[index].select = false
    else self.data.polishs[index].select = true
    self.setData({
      polishs: self.data.polishs
    })
  },
  changeSymmetry: function (e) {
    var self = this
    var index = e.currentTarget.dataset.index
    if (self.data.symmetries[index].select == true) self.data.symmetries[index].select = false
    else self.data.symmetries[index].select = true
    self.setData({
      symmetries: self.data.symmetries
    })
  },
  changeFluorescence: function (e) {
    var self = this
    var index = e.currentTarget.dataset.index
    if (self.data.fluorescences[index].select == true) self.data.fluorescences[index].select = false
    else self.data.fluorescences[index].select = true
    self.setData({
      fluorescences: self.data.fluorescences
    })
  },

  carat1Input: function(e) {
    this.setData({
      carat1: e.detail.value
    })
  },
  carat2Input: function (e) {
    this.setData({
      carat2: e.detail.value
    })
  },
  price1Input: function (e) {
    this.setData({
      price1: e.detail.value
    })
  },
  price2Input: function (e) {
    this.setData({
      price2: e.detail.value
    })
  },

  reset: function() {
    var self = this
    var colors = self.data.colors
    var clarities = self.data.clarities
    var cuts = self.data.cuts
    var polishs = self.data.polishs
    var symmetries = self.data.symmetries
    var fluorescences = self.data.fluorescences
    self.data.shapes = [
      { image: '/images/round.jpeg', shapeName: '圆形' },
      { image: '/images/princess.jpeg', shapeName: '公主方' },
      { image: '/images/heart.jpeg', shapeName: '心形' },
      { image: '/images/cushion.jpeg', shapeName: '垫形' },
      { image: '/images/oval.jpeg', shapeName: '椭圆' },
      { image: '/images/pear.jpeg', shapeName: '梨形' },
      { image: '/images/radiant.jpeg', shapeName: '雷迪恩' },
      { image: '/images/emerald.jpeg', shapeName: '祖母绿' },
      { image: '/images/triangle.jpeg', shapeName: '三角形' },
      { image: '/images/marquise.jpeg', shapeName: '马眼形' },
    ]
    for (var i = 0; i < colors.length; i++) colors[i].select = false
    for (var i = 0; i < clarities.length; i++) clarities[i].select = false
    for (var i = 0; i < cuts.length; i++) cuts[i].select = false
    for (var i = 0; i < polishs.length; i++) polishs[i].select = false
    for (var i = 0; i < symmetries.length; i++) symmetries[i].select = false
    for (var i = 0; i < fluorescences.length; i++) fluorescences[i].select = false

    self.setData({
      shapes: self.data.shapes,
      colors: self.data.colors,
      clarities: self.data.clarities,
      cuts: self.data.cuts,
      polishs: self.data.polishs,
      symmetries: self.data.symmetries,
      fluorescences: self.data.fluorescences,
      carat1: '', carat2: '', price1: '', price2: '',
    })
  },

  contact: function() {
    wx.navigateTo({
      url: '/pages/contact/contact',
    })
  },

  search: function() {
    var self = this
    var shapes = self.data.shapes
    var colors = self.data.colors
    var clarities = self.data.clarities
    var cuts = self.data.cuts
    var polishs = self.data.polishs
    var symmetries = self.data.symmetries
    var fluorescences = self.data.fluorescences
    var carat1 = self.data.carat1
    var carat2 = self.data.carat2
    var price1 = self.data.price1
    var price2 = self.data.price2
    var query = ""

    var condition = ""
    for (var i = 0; i < shapes.length; i++) {
      if (shapes[i].image.slice(-6) == "2.jpeg") condition += shapes[i].shapeName+","
    }
    if (condition != "") query += "shape=" + condition + "&"

    condition = ""
    for (var i = 0; i < colors.length; i++) {
      if (colors[i].select) condition += colors[i].color+","
    }
    if (condition != "") query += "color=" + condition + "&"

    condition = ""
    for (var i = 0; i < clarities.length; i++) {
      if (clarities[i].select) condition += clarities[i].clarity + ","
    }
    if (condition != "") query += "clarity=" + condition + "&"

    condition = ""
    for (var i = 0; i < cuts.length; i++) {
      if (cuts[i].select) condition += cuts[i].cut + ","
    }
    if (condition != "") query += "cut=" + condition + "&"

    condition = ""
    for (var i = 0; i < polishs.length; i++) {
      if (polishs[i].select) condition += polishs[i].polish + ","
    }
    if (condition != "") query += "polish=" + condition + "&"

    condition = ""
    for (var i = 0; i < symmetries.length; i++) {
      if (symmetries[i].select) condition += symmetries[i].symmetry + ","
    }
    if (condition != "") query += "symmetry=" + condition + "&"

    condition = ""
    for (var i = 0; i < fluorescences.length; i++) {
      if (fluorescences[i].select) condition += fluorescences[i].fluorescence + ","
    }
    if (condition != "") query += "fluorescence=" + condition + "&"

    if (carat1 != "") query += "carat1=" + carat1 + "&"
    if (carat2 != "") query += "carat2=" + carat2 + "&"
    if (price1 != "") query += "price1=" + price1 + "&"
    if (price2 != "") query += "price2=" + price2

    var searchUrl = app.globalData.host + query

    wx.request({
      url: searchUrl,
      method: 'GET',
      success: function(res) {
        wx.setStorageSync("diamonds", res.data.data)
        wx.setStorageSync("query", query)
        wx.redirectTo({
          url: '/pages/result/result',
        })
      },
      fail: function() {
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

  chooseCarat: function() {
    var self = this
    wx.showActionSheet({
      itemList: ['0.10-0.29', '0.30-0.59', '0.60-0.99', '1.00-20.0'],
      success: function (res) {
        var index = res.tapIndex
        if (index == 0) {
          self.setData({
            carat1: '0.10',
            carat2: '0.29'
          })
        }
        else if (index == 1) {
          self.setData({
            carat1: '0.30',
            carat2: '0.59'
          })
        }
        else if (index == 2) {
          self.setData({
            carat1: '0.60',
            carat2: '0.99'
          })
        }
        else {
          self.setData({
            carat1: '1.00',
            carat2: '20.0'
          })
        }
      }
    })
  },

  choosePrice: function () {
    var self = this
    wx.showActionSheet({
      itemList: ['1500以下', '1500-3000', '3000-6000', '6000-1万',
        '1万-5万', '5万以上'],
      success: function (res) {
        var index = res.tapIndex
        if (index == 0) {
          self.setData({
            price1: '0',
            price2: '1500'
          })
        }
        if (index == 1) {
          self.setData({
            price1: '1500',
            price2: '3000'
          })
        }
        if (index == 2) {
          self.setData({
            price1: '3000',
            price2: '6000'
          })
        }
        if (index == 3) {
          self.setData({
            price1: '6000',
            price2: '10000'
          })
        }
        if (index == 4) {
          self.setData({
            price1: '10000',
            price2: '50000'
          })
        }
        if (index == 5) {
          self.setData({
            price1: '50000',
            price2: ''
          })
        }
      }
    })
  },

  onLoad: function () {

  }

})
