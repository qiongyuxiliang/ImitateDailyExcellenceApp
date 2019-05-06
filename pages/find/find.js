// pages/find/find.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    catagoryBar: [],
    selectedIndex: 0,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    wx.request({
      url: 'https://as-vip.missfresh.cn/as/disc/index/list',
      data: "device_id=05ae5c20-64b2-11e9-964c-65a516be538f&env=web&platform=web&uuid=05ae5c20-64b2-11e9-964c-65a516be538f&version=8.2.0&screen_height=411&screen_width=731",
      method: 'get',
     
      success(res) {
        that.setData({
          catagoryBar: res.data.data.categorys
        })
        console.log(res.data.data.categorys)
      }
    })
    wx.request({
      url: 'https://as-vip.missfresh.cn/as/disc/index/multiLis',
      data: "device_id=05ae5c20-64b2-11e9-964c-65a516be538f&env=web&platform=web&uuid=05ae5c20-64b2-11e9-964c-65a516be538f&version=8.2.0&screen_height=411&screen_width=731&category=1",
      method:'get',
      header: { cookie: 'smidV2 = 201904261402081f517091fbe9f8287838d1af8c220305002d4e48d8cf0c5d0; _fmdata=M8pKfvcgmZA1uOXfFH6 % 2F36XLtKD0taCmtJBDxdGmh6prxb9hPInSI8CU8ha1EZxRRngCnLSZ0nq% 2FkA9BrpF0xxbenlcVuSraBblbPMYwTBw% 3D; __dis_home_ref_v2=1',
        authority: 'as - vip.missfresh.cn',
        'x-region': '{ "station_code": "MRYX|mryx_bj_dsbjs", "address_code": 110101 }'},
      success(res){
        console.log(res)
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

  switchBar: function(e) {
    this.setData({
      selectedIndex: e.currentTarget.dataset.index,
    })
    console.log(e)
  }
})