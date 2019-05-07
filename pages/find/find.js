// pages/find/find.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    catagoryBar: [],
    selectedIndex: 0,
    detailContent:{},

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
      url: 'https://as-vip.missfresh.cn/as/disc/index/multiLis?device_id=05ae5c20-64b2-11e9-964c-65a516be538f&env=web&platform=web&uuid=05ae5c20-64b2-11e9-964c-65a516be538f&version=8.2.0&fromSource=zhuye&screen_height=600&screen_width=960&category=1',
      method: 'get',
      // data: "device_id=05ae5c20-64b2-11e9-964c-65a516be538f&env=web&platform=web&uuid=05ae5c20-64b2-11e9-964c-65a516be538f&version=8.2.0&fromSource=zhuye&screen_height=600&screen_width=960&category=1",
     
      success(res){
        console.log(res)
       that.setData({
         detailContent:res
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

  switchBar: function(e) {
    this.setData({
      selectedIndex: e.currentTarget.dataset.index,
    })
    console.log(e)
  }
})