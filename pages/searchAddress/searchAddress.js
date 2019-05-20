// pages/searchAddress/searchAddress.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressList: {},
    searchKey: '',

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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
  searchKey: function(e) {
    var that = this;
    if (e && e.detail && e.detail.value) {
      this.setData({
        searchKey: e.detail.value
      })
    }

    wx.request({
      url: 'https://apis.map.qq.com/ws/place/v1/suggestion',
      data: {
        key: 'IBKBZ-EWKH4-AZZUL-DAOBQ-HBWP2-JJFD7',
        output: 'jsonp',
        timeout: '3000',
        region: '北京市',
        region_fix: '1',
        policy: ' 1',
        keyword: that.data.searchKey,
        callback: 'zhang'
      },
      method: 'get',
      success(res) {
        // console.log(res.data)
        // function ClearBr(key) {
        //   key = key.replace(/<\/?.+?>/g, "");
        //   key = key.replace(/[\r\n]/g, "");
        //   return key;
        // } 
        // var tempStr = ClearBr(res.data);
        function arrange(str, before, after) {
          var reg = new RegExp(before, "g");
          return str.replace(reg, after);
        }
        var data = arrange(res.data, 'zhang&&zhang', '');
        that.setData({
          addressList: JSON.parse(data.replace(/^\(|\)$/g, ''))
        })
        console.log(JSON.parse(data.replace(/^\(|\)$/g, '')))
      }
    })
  },
  clear: function(e) {
    this.setData({
      searchKey: ''
    })
    this.searchKey();
  }

})