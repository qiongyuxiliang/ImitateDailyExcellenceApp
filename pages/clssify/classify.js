// pages/clssify/classify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    leftBarList:[],
    selected:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'https://as-vip.missfresh.cn/as/home/categoryList',
      method :"post",
      data: { "param": {}, "common": { "stationCode": "MRYX|mryx_bj_dsbjs", "deliveryType": 1, "chromeType": 0, "addressCode": 110101, "currentLng": 116.41637, "currentLat": 39.92855, "device_id": "05ae5c20-64b2-11e9-964c-65a516be538f", "env": "web", "platform": "web", "uuid": "05ae5c20-64b2-11e9-964c-65a516be538f", "version": "8.7.0", "fromSource": "zhuye", "screenHeight": 732, "screenWidth": 412 } },
      success(res) {
        that.setData({
          leftBarList: res.data.data.categories,
        })
      },

    })
  },
 
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  /**
   * 点击选中事件
   */
  selectItem(e){
    this.setData({
      selected: e.currentTarget.dataset.index
    })
    wx.request({
      url: 'https://as-vip.missfresh.cn/as/home/category/classifyProductInfo',
      method: "post",
      data: { "param": { "categoryCode": "jsd-hb-axcc" }, "common": { "stationCode": "MRYX|mryx_bj_dsbjs", "deliveryType": 1, "chromeType": 0, "addressCode": 110101, "currentLng": 116.41637, "currentLat": 39.92855, "device_id": "05ae5c20-64b2-11e9-964c-65a516be538f", "env": "web", "platform": "web", "uuid": "05ae5c20-64b2-11e9-964c-65a516be538f", "version": "8.7.0", "fromSource": "zhuye", "screenHeight": 640, "screenWidth": 360 } },
      success(res) {
        console.log(res.data)
      },
    })
    wx.request({
      url: 'https://as-vip.missfresh.cn/as/home/category/classifyProductInfo',
      method: "post",
      data: { "param": { "categoryCode": "jsd-hb-axcc", "categoryVersion": "1556530126893", "pageType": 0, "lastProductIndex": 49 }, "common": { "stationCode": "MRYX|mryx_bj_dsbjs", "deliveryType": 1, "chromeType": 0, "addressCode": 110101, "currentLng": 116.41637, "currentLat": 39.92855, "device_id": "05ae5c20-64b2-11e9-964c-65a516be538f", "env": "web", "platform": "web", "uuid": "05ae5c20-64b2-11e9-964c-65a516be538f", "version": "8.7.0", "fromSource": "zhuye", "screenHeight": 640, "screenWidth": 360 } },
      success(res) {
        console.log(res.data)
      },
    })
    wx.request({
      url: 'https://as-vip.missfresh.cn/as/home/category/classifyProductInfo',
      method: "post",
      data: { "param": { "categoryCode": "jsd-hb-axcc", "categoryVersion": "1556530126893", "pageType": 0, "lastProductIndex": 99 }, "common": { "stationCode": "MRYX|mryx_bj_dsbjs", "deliveryType": 1, "chromeType": 0, "addressCode": 110101, "currentLng": 116.41637, "currentLat": 39.92855, "device_id": "05ae5c20-64b2-11e9-964c-65a516be538f", "env": "web", "platform": "web", "uuid": "05ae5c20-64b2-11e9-964c-65a516be538f", "version": "8.7.0", "fromSource": "zhuye", "screenHeight": 640, "screenWidth": 360 } },
      success(res) {
        console.log(res.data)
      },
    })
    wx.request({
      url: 'https://as-vip.missfresh.cn/as/home/category/classifyProductInfo',
      method: "post",
      data: { "param": { "categoryCode": "jsd-hb-axcc", "categoryVersion": "1556530126893", "pageType": 0, "lastProductIndex": 149 }, "common": { "stationCode": "MRYX|mryx_bj_dsbjs", "deliveryType": 1, "chromeType": 0, "addressCode": 110101, "currentLng": 116.41637, "currentLat": 39.92855, "device_id": "05ae5c20-64b2-11e9-964c-65a516be538f", "env": "web", "platform": "web", "uuid": "05ae5c20-64b2-11e9-964c-65a516be538f", "version": "8.7.0", "fromSource": "zhuye", "screenHeight": 640, "screenWidth": 360 } },
      success(res) {
        console.log(res.data)
      },
    })
  }
})