// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    validPhoneNum: 0,
    isPhoneValid: true,
    radioSelected: false,
    initNull: false,
    validNum:null,
    gutter:false,
    timer:60,
    setInter:'',//存储计时器
    // 按钮的可点击
    isactived:false,
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
    //获得popup组件
    this.popup = this.selectComponent("#popup");
  },
  showPopup() {
    if (!this.data.nitNull) {
      wx.showToast({
        title: '手机号不可为空！',
        icon: 'none',
      })
    } else {
      this.popup.showPopup();
    }
  },
  startSetInter: function () {
    var that = this;
    //将计时器赋值给setInter
    that.data.setInter = setInterval(
      function () {
        console.log(111)
        if(that.data.timer>0){
          that.setData({ timer: that.data.timer - 1, gutter: true,});
        }else{
          that.setData({
            gutter: false,
          })
          that.endSetInter();
        }
      }, 1000);
  },
  endSetInter: function () {
    var that = this;
    //清除计时器  即清除setInter
    clearInterval(that.data.setInter)
  },
  //取消事件
  _error() {
    console.log('你点击了取消');
    this.popup.hidePopup();
  },
  //确认事件
  _success() {
    var that = this;

    this.popup.hidePopup();
    that.startSetInter();
    // wx.request({
    //   url: 'https://as-vip.missfresh.cn/v1/auth/login-register?device_id=05ae5c20-64b2-11e9-964c-65a516be538f&env=web&platform=web&uuid=05ae5c20-64b2-11e9-964c-65a516be538f&access_token=null&version=8.5.0&screen_height=360&screen_width=640&tdk=eyJ2IjoiNjJMUGRKQjJjei9IUzdkZ1BSQ3Nxb3paL3cvc1JtNGRLRm9Ec1R1cE0vL2ZBdUZCZUZwZFFEZmkzOU1BSzlCbiIsIm9zIjoid2ViIiwiaXQiOjEwMDA5NSwidCI6ImVWTjlHaDIwWnpEYVY5U0JUQnpOMlkxRW55MmZoSk5USkQ0T2tacWUrNlhlbW4xSTFXdVdXY01acmNrNVdtYkgvNnNaeWtlZWhjdzNLTHZHOVVkSitqaXFxUWFpSE1BeWlPbkcrVVJIc1FBPSJ9&smsdk_deviceid=WHJMrwNw1k%2FHNkRbRBK7LGe%2F9rEN0C0kRxZw4GN9W7ZLgKac%2BB0j6wZ7oC0QUxxw3pqA7Tn0h0dvWnhufdYVKvQaw9IT7rwKjvTLYedm0UEmMbWkouK84IA%2FGllaqVP3Bl5W9LoV78N7hTlVFY6VmPBidRVDTpqAZ1STzQgEM4D4kHzaXlGXLfD6Jdw0se2qBXoyGdwqvlzkRTkAd7H%2FeWn4Pe5B%2F2I7JTaSiNALcy7ndv%2FnbjgxZdXQltbZXcg85LL4jR37UvaKQVtjWZGHAUk0MwWQLnbQc1487582755342&nonce=exiepCFs3xaDb4bKAzBFEMpzGieyAHKY&signature=F3D2E54F33F9BE95F60AA52EEF1D4631',
    //   data: { "phone_number": "15301077534", "send_type": "VOICE" },
    //   method:'POST',
    //   success(res){
    //    if(res.msg=='ok'){
    //      that.startSetInter();
    //    }
    //   }


    // })
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
  bindblur: function(e) {
    if (!(/^1[34578]\d{9}$/.test(e.detail.value))) {
      this.setData({
        isPhoneValid: false,
        initNull: true,
      })
    } else {
      this.setData({
        isPhoneValid: true,
        nitNull: true,
      })
    }
    this.btnActived();
  },
  bindfocus: function(e) {

    console.log(this.data.isPhoneValid)
  },
  // 验证码输入
  putValidNum:function(e){
    this.btnActived();
    this.setData({
      validNum:e.detail.value,
    })

  },
  btnActived:function(){
    if (this.data.radioSelected && this.data.isPhoneValid && this.data.validNum.length == 4) {
      this.setData({
        isactived: true,
      })
    }else{
      this.setData({
        isactived: false,
      })
    }
  },
  login:function(){

  },
  radioSelectd:function(){
    this.setData({
      radioSelected: !this.data.radioSelected,
    })
    this.btnActived();
  }

})