// pages/searchPage/searchPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    products:[],
    hotSearch:[],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    wx.request({
      url: 'https://as-vip.missfresh.cn/v3/product/searchhotwords/',
      method:'get',
      header:{
        'x-region': '{ "station_code": "MRYX|mryx_bj_dsbjs", "delivery_type": 1, "chrome_type": 0, "address_code": 110101 }'
      },
      data: 'device_id=05ae5c20-64b2-11e9-964c-65a516be538f&env=web&platform=web&uuid=05ae5c20-64b2-11e9-964c-65a516be538f&access_token=QWJRV2pnK3c2WlRKYXN3eXlnVUJNMXA0cCtQRUR0clhWN2g0NWJ5ZjMzUHNVM0NkVmdLVkdhbDNkSWFEYmQ2MQ%3D%3D&version=8.7.0&fromSource=zhuye&screen_height=360&screen_width=640',
      success(res){
        console.log(res)
        that.setData({
          products:res.data.like_result.product_list,
          hotSearch:res.data.data,
        })
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

  },
  // 自定义的方法

})