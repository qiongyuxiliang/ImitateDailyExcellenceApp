// pages/buyCart/buyCart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://as-vip.missfresh.cn/as/item/getReSkus?device_id=05ae5c20-64b2-11e9-964c-65a516be538f&env=web&platform=web&uuid=05ae5c20-64b2-11e9-964c-65a516be538f&version=8.8.0&fromSource=zhuye&screen_height=360&screen_width=640',
      method:'post',
      data: '{ "from": "cart" }',
      header:{
        'x-region': { "station_code": "MRYX|mryx_bj_dsbjs", "delivery_type": 1, "chrome_type": 0, "address_code":110101 },
        'cookie': 'smidV2=201904261402081f517091fbe9f8287838d1af8c220305002d4e48d8cf0c5d0; _fmdata=M8pKfvcgmZA1uOXfFH6%2F36XLtKD0taCmtJBDxdGmh6prxb9hPInSI8CU8ha1EZxRmuiWho5GMYwT2G7mJRgTdF5E5eqGv3tMiYc8DLlnLGk%3D'
      },
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
// 数组随机排序
// (arr) => arr.slice().sort(() => Math.random() - 0.5)