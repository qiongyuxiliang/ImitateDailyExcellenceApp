// pages/searchPage/searchPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isSearch: false,
    products: [],
    hotSearch: [],
    searchHotWord: '',
    searchContent: '',
    searchHistory: [],
    sendTimeImage: '',

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 本地搜索记录
    var searchHistory = wx.getStorageSync('searchHistory') || [];
    this.setData({
      searchHistory: searchHistory,
      searchHotWord: options.searchHotWord,
      // searchContent: options.searchHotWord,
    })

    var that = this;
    wx.request({
      url: 'https://as-vip.missfresh.cn/v3/product/searchhotwords/',
      method: 'get',
      header: {
        'x-region': '{ "station_code": "MRYX|mryx_bj_dsbjs", "delivery_type": 1, "chrome_type": 0, "address_code": 110101 }'
      },
      data: 'device_id=05ae5c20-64b2-11e9-964c-65a516be538f&env=web&platform=web&uuid=05ae5c20-64b2-11e9-964c-65a516be538f&access_token=QWJRV2pnK3c2WlRKYXN3eXlnVUJNMXA0cCtQRUR0clhWN2g0NWJ5ZjMzUHNVM0NkVmdLVkdhbDNkSWFEYmQ2MQ%3D%3D&version=8.7.0&fromSource=zhuye&screen_height=360&screen_width=640',
      success(res) {
        console.log(res)
        that.setData({
          products: res.data.like_result.product_list,
          hotSearch: res.data.data,
        })
      }
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  // 自定义的方法
  onSearchContent: function(e) {
    var that = this;
    console.log(e)
    if (e && e.currentTarget.dataset.text) {
      this.setData({
        searchContent: e.currentTarget.dataset.text
      })
    } else if (e) {
      this.setData({
        searchContent: e
      })
    }
    console.log(this.data.searchContent)
    if (!this.data.searchContent.replace(/^\s*|\s*$/g, "")) {
      this.setData({
        searchContent: this.data.searchHotWord
      })

    }
    // 在历史记录点击链接  不增加历史记录
    if (!e || (e && !e.currentTarget.dataset.type)) {
      var searchHistory = wx.getStorageSync('searchHistory') || [];
      searchHistory.unshift(this.data.searchContent);
      wx.setStorageSync('searchHistory', searchHistory);
      this.setData({
        searchHistory: searchHistory
      })
    }

    wx.request({
      url: 'https://as-vip.missfresh.cn/search/',
      data: {
        'device_id': 'b2c05f00-6843-11e9-b8f9-59469261f3f2',
        'env': 'web',
        'platform': 'web',
        'uuid': 'b2c05f00-6843-11e9-b8f9-59469261f3f2',
        'access_token': 'QWJRV2pnK3c2WlRKYXN3eXlnVUJNOG5UTVpSU1AzdHU1dVBKSThyQ1praGVzR1hobzQ2MEZrV1E1QnlQYkhsMg==',
        ' version': '8.7.0',
        'fromSource': 'zhuye',
        'screen_height': 360,
        'screen_width': 640,
        'kw': that.data.searchContent
      },
      header: {
        'x-region': '{ "station_code": "MRYX|mryx_bj_dsbjs", "delivery_type": 1, "chrome_type": 0, "address_code": 110101 }'
      },
      method: 'get',
      success(res) {
        console.log(res)
        that.setData({
          products: res.data.data[0].active_item,
          sendTimeImage: res.data.data[0].trans_type_image,
          isSearch: true
        })
      }
    })
  },
  bindinput: function(e) {
    var that = this;
    this.setData({
      searchContent: e.detail.value
    })
    if (this.data.searchContent.length == 0) {
      wx.request({
        url: 'https://as-vip.missfresh.cn/v3/product/searchhotwords/',
        method: 'get',
        header: {
          'x-region': '{ "station_code": "MRYX|mryx_bj_dsbjs", "delivery_type": 1, "chrome_type": 0, "address_code": 110101 }'
        },
        data: 'device_id=05ae5c20-64b2-11e9-964c-65a516be538f&env=web&platform=web&uuid=05ae5c20-64b2-11e9-964c-65a516be538f&access_token=QWJRV2pnK3c2WlRKYXN3eXlnVUJNMXA0cCtQRUR0clhWN2g0NWJ5ZjMzUHNVM0NkVmdLVkdhbDNkSWFEYmQ2MQ%3D%3D&version=8.7.0&fromSource=zhuye&screen_height=360&screen_width=640',
        success(res) {
          console.log(res)
          that.setData({
            products: res.data.like_result.product_list,
            hotSearch: res.data.data,
          })
        }
      })
      this.setData({
        isSearch: false
      })
    }
  },
  searchFun: function() {
    this.onSearchContent();
  },
  // 清除搜索记录
  clearSearchHistory: function() {
    wx.removeStorageSync('searchHistory');
    this.setData({
      searchHistory: []
    })
  },
  // 返回上一个页面
  searchBack: function(e) {
    wx.switchTab({
      url: '../index/index',
    })
  }

})