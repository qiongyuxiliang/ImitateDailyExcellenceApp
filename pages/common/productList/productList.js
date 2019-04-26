// pages/common/productList/productList.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    products:{
      type: Array,
      value:[],
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    products: [
      {
        "image": "https://fms-image.missfresh.cn/6bd44239e2df4dd39f5cbe29819095bc.jpg",
        "subtitle": "原产于南美的脆甜红提",
        "name": "进口红提500g*1盒",
        "cart_image": "https://j-image.missfresh.cn/img_20170425134548759.png",
        "price": 23,

      }]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
