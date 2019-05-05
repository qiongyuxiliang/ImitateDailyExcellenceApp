// pages/productDetail/productDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    products:{},
    autoplay:true,
    interval:3000,
    duration:2000,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    var that = this;
    wx.request({
      url: 'https://as-vip.missfresh.cn/as/item/productDetail',
      method:'post',
      data: { "param": { "sku": options.productId }, "common": { "stationCode": "MRYX|mryx_bj_dsbjs", "deliveryType": 1, "chromeType": 0, "addressCode": 110101, "currentLng": 116.41637, "currentLat": 39.92855, "device_id": "b2c05f00-6843-11e9-b8f9-59469261f3f2", "env": "web", "platform": "web", "uuid": "b2c05f00-6843-11e9-b8f9-59469261f3f2", "version": "8.7.0", "fromSource": "zhuye", "screenHeight": 640, "screenWidth": 360 } },
      success(res){
        console.log(res.data.data)
        that.setData({
          products: res.data.data

        })
      }

    })
    // 获取推荐商品的数据
    wx.request({
      url: 'https://as-vip.missfresh.cn/as/item/getReSkus?device_id=05ae5c20-64b2-11e9-964c-65a516be538f&env=web&platform=web&uuid=05ae5c20-64b2-11e9-964c-65a516be538f&version=8.7.0&fromSource=zhuye&screen_height=411&screen_width=731',
      method:'post',
      data: { "sku": options.productId, "from": "product" },
      success(res){
        console.log(res)

      }

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

  }
})