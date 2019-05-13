// pages/promotionVip/promotionVip.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    vipObj:{},
    active:1,
    money:15
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.request({
    //   url: 'https://as-vip.missfresh.cn/web20/vipcard/toOpenCard.do',
    //   data: 'device_id=05ae5c20-64b2-11e9-964c-65a516be538f&env=web&platform=web&deliveryType=1&uuid=05ae5c20-64b2-11e9-964c-65a516be538f&access_token=QWJRV2pnK3c2WlRKYXN3eXlnVUJNMXA0cCtQRUR0clhWN2g0NWJ5ZjMzUHNVM0NkVmdLVkdhbDNkSWFEYmQ2MQ%3D%3D&version=8.8.0&fromSource=zhuye&screen_height=360&screen_width=640',
    //   header:{
    //    'x-access-token': 'QWJRV2pnK3c2WlRKYXN3eXlnVUJNMXA0cCtQRUR0clhWN2g0NWJ5ZjMzUHNVM0NkVmdLVkdhbDNkSWFEYmQ2MQ=='
    //   },
    //   method:'get',
    //   success(res){
    //     console.log(res)
    //   }
    // })
    this.setData({
      vipObj: {
        "msg": "成功",
        "code": 0,
        "data": {
          "card_details": [{
            "is_autopay": "0",
            "vip_name": "1个月",
            "card_internal_id": "57646",
            "sell_text": "30天有效",
            "type": "month_normal",
            "card_type": 6,
            "trade_img": "https://j-image.missfresh.cn/img_20180926195537275.jpg",
            "vip_card_button_text": "升级会员卡",
            "card_detail": "30天内下单获得5%返现",
            "default": 0,
            "recommend_icon": "",
            "card_price_name": "特惠价",
            "card_text": "购买成功，赶快体验吧~",
            "card_original_price": 800,
            "card_price": 800
          }, {
            "is_autopay": "0",
            "vip_name": "3个月",
            "card_internal_id": "57647",
            "sell_text": "90天有效",
            "type": "season",
            "card_type": 6,
            "trade_img": "https://j-image.missfresh.cn/img_20181011163530222.png",
            "vip_card_button_text": "升级会员卡",
            "card_detail": "90天内下单获得5%返现",
            "default": 1,
            "recommend_icon": "https://j-image.missfresh.cn/img_20171028223816944.png",
            "card_price_name": "特惠价",
            "card_text": "购买成功，赶快体验吧~",
            "card_original_price": 2400,
            "card_price": 1500
          }, {
            "is_autopay": "0",
            "vip_name": "6个月",
            "card_internal_id": "57648",
            "sell_text": "180天有效",
            "type": "half_a_year",
            "card_type": 6,
            "trade_img": "https://j-image.missfresh.cn/img_20181228150907361.jpg",
            "vip_card_button_text": "升级会员卡",
            "card_detail": "180天内下单获得5%返现",
            "default": 0,
            "recommend_icon": "",
            "card_price_name": "特惠价",
            "card_text": "购买成功，赶快体验吧~",
            "card_original_price": 4800,
            "card_price": 3000
          }, {
            "is_autopay": "0",
            "vip_name": "12个月",
            "card_internal_id": "20181214",
            "sell_text": "365天有效",
            "type": "year",
            "card_type": 6,
            "trade_img": "https://j-image.missfresh.cn/img_20181228150830770.jpg",
            "vip_card_button_text": "升级会员卡",
            "card_detail": "365天内下单获得5%返现",
            "default": 0,
            "recommend_icon": "",
            "card_price_name": "",
            "card_text": "购买成功，赶快体验吧~",
            "card_original_price": 9600,
            "card_price": 5500
          }],
          "vip_card_desc_url": "http://p-h5.missfresh.cn/vip_decs_v2.html",
          "user_member": {
            "user_member_type": 2,
            "user_member_background": "https://j-image.missfresh.cn/img_20181022141033144.png",
            "vip_card_logo": "https://j-image.missfresh.cn/img_20181026185023763.png",
            "vip_card_end_time": "2019.05.17 会员到期",
            "give_experience_card": "",
            "portrait": "https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83epbrh7u752WwdaM6hsAtXicHwfOUEUA1YXafW3jELzfU3kCZ1Pgh8nleaticDbNeRwVOwic8XfsibUvvQ/132",
            "nick_name": "没有王朝的保卫者",
            "level_image_yellow": "https://j-image.missfresh.cn/img_20170713142059093.png",
            "crown_url": "https://j-image.missfresh.cn/img_20181022150822565.png"
          },
          "vip_card_desc_title": "优享会员说明",
          "vip_card_desc_url_wxapp": "https://j-image.missfresh.cn/img_20171213182942800.png",
          "page_title": "优享会员",
          "vip_title": "优享会员",
          "new_member_dec": "",
          "promoteDoc": "",
          "new_member_detail_url": "",
          "vip_subtitle": "每单享受返现5%"
        },
        "success": true
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
  selectItem:function(e){
    this.setData({
      active: e.currentTarget.dataset.active,
      money: e.currentTarget.dataset.money/100
    })
  }
})