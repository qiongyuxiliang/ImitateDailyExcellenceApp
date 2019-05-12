//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    vipObj:{},
    aboutMe:[{
      name:'我的订单',
      flag:'order',
    },
    {
      name:'我的地址',
      flag:'address',
    },
    {
      name:'账户与安全',
      flag:'account_safe'
    },{
      name:'客户与帮助',
      flag:'customer_assist'
    },{
      name:'意见与反馈',
      flag:'suggestion'
    },{
      name:'关于我们',
      flag:'about_us'
    }]
   
  },
  onLoad: function () {
    var that = this;
    wx.request({
      url: 'https://as-vip.missfresh.cn/v1/customer/userinfo?device_id=05ae5c20-64b2-11e9-964c-65a516be538f&env=web&platform=web&uuid=05ae5c20-64b2-11e9-964c-65a516be538f&version=8.7.0&fromSource=zhuye&screen_height=360&screen_width=640',
      method:'get',
      success(res){
        console.log(res)
        that.setData({
          vipObj:res,
        })

      }
    })
 
  },
  login:function(){
    wx.redirectTo({
      url: '../login/login',
    })
  },
  jumpTo:function(e){

    switch(e.currentTarget.dataset.flag){
      case 'order':
        wx.navigateTo({
          url: '../order/order',
        });
        break;
    } 
  },
  investMoney:function(e){
    wx.redirectTo({
      url: '../promotionVip/promotionVip',
    })
  }
})
