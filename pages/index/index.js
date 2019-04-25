//index.js
//获取应用实例
const app = getApp()
const order = ['red', 'yellow', 'blue', 'green', 'red']
const width= 120;
Page({
  data: {
    toView: 'green',
    scrollLeft: 0,
    message:'推荐专区',
    swiperNav: {
         cousedis: 0,
      　　arr: [
        　　　{ v: 0, txt: "推荐专区" },
        　　　{ v: 1, txt: "进口商品" },
        　　　{ v: 2, txt: "饮料冲调" },
        　　　{ v: 3, txt: "休闲零食" },
        　　　{ v: 4, txt: "生鲜" },
        　　　{ v: 5, txt: "速食调味" }
      　　]
    　},
    // 轮播图
    imgUrls: [
      'https://j-image.missfresh.cn/img_20180928154920705.jpg?iopcmd=thumbnail&amp;type=4&amp;width=640',
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee',
      'https://images.unsplash.com/photo-1551446591-142875a901a1'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    currentIndex:1,
    imgUrlLength:1,
    // 商品详情
    products: [
      {
        "image": "https://image.missfresh.cn/e821fb264d9a4bfb8c13d3b945884cd3.jpg",
        "subtitle": "产地直采 纯正泰国甜",
        "name": "金枕榴莲7斤起*1个",
        "cart_image": "https://j-image.missfresh.cn/img_20170425134548759.png",
        "price": 23,
      },
      {
        "image": "https://image.missfresh.cn/1ad93df319f347d29c1779198d808c18.jpg",
        "subtitle": "产地直采 纯正泰国甜",
        "name": "金枕榴莲5斤起",
        "cart_image": "https://j-image.missfresh.cn/img_20170425134548759.png",
        "price": 23,
      },
      {
        "image": "https://image.missfresh.cn/45f00fead0454c008b8a000082b56236.jpg",
        "subtitle": "产地直采 纯正泰国甜",
        "name": "金枕榴莲3斤起",
        "cart_image": "https://j-image.missfresh.cn/img_20170425134548759.png",
        "price": 23,
      },
      {
        "image": "https://image.missfresh.cn/b9ca155010e74ab586887d8576175bb9.jpg",
        "subtitle": "直挺饱满，甜而不腻",
        "name": "进口香蕉1斤装",
        "cart_image": "https://j-image.missfresh.cn/img_20170425134548759.png",
        "price": 23,
      },
      {
        "image": "https://image.missfresh.cn/7361311609da450493a2ad4d08462959.jpg",
        "subtitle": "肉嘟嘟的女孩一样清甜水灵",
        "name": "美早樱桃450g*1盒",
        "cart_image": "https://j-image.missfresh.cn/img_20170425134548759.png",
        "price": 23,
      },
      {
        "image": "https://fms-image.missfresh.cn/ef9e0025438346198ae2f8401bd01bf3.jpg",
        "subtitle": "口口爆浆的“蓝精灵”",
        "name": "Driscoll's云南蓝莓125g*1盒",
        "cart_image": "https://j-image.missfresh.cn/img_20170425134548759.png",
        "price": 23,
      },
      {
        "image": "https://fms-image.missfresh.cn/6bd44239e2df4dd39f5cbe29819095bc.jpg",
        "subtitle": "原产于南美的脆甜红提",
        "name": "进口红提500g*1盒",
        "cart_image": "https://j-image.missfresh.cn/img_20170425134548759.png",
        "price": 23,

      }]
  },
  onLoad: function (options) {
    this.setData({
      imgUrlLength:this.data.imgUrls.length
    })
  },
  upper(e) {
    console.log(e)
  },
  lower(e) {
    console.log(e)
  },
  scroll(e) {
    this.setData({
      scrollLeft: e.detail.scrollLeft,
     
    })  
  },
  tapclick(e){
    console.log(e)
    this.setData({
      'swiperNav.cousedis': e.currentTarget.dataset.num,
      message: e._relatedInfo.anchorTargetText,
    })
    if ( e.currentTarget.dataset.num>1&& e.currentTarget.dataset.num< this.data.swiperNav.arr.length - 2&& e.detail.x > (wx.getSystemInfoSync().windowWidth/5*3)){
      this.setData({
        scrollLeft: this.data.scrollLeft+width,
      })
    } else if (e.currentTarget.dataset.num >1&&e.currentTarget.dataset.num < (this.data.swiperNav.arr.length- 2)&&e.detail.x < (wx.getSystemInfoSync().windowWidth / 5 * 2)){
      this.setData({
        scrollLeft: this.data.scrollLeft - width,
      })
    }
  },
  tap(e) {
    for (let i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },
  tapMove(e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  },
  // 轮播图
  switchPic(e){
    this.setData({
      currentIndex: e.detail.current+1,
    })
  }
})
