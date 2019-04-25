//index.js
//获取应用实例
const app = getApp()
const order = ['red', 'yellow', 'blue', 'green', 'red']

Page({
  data: {
    toView: 'green',
    scrollLeft: 0,
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
    　}
  },
  upper(e) {
    console.log(e)
  },
  lower(e) {
    console.log(e)
  },
  scroll(e) {
    console.log(e)
  },
  tapclick(e){
    console.log(e)
    console.log(wx.getSystemInfoSync().windowWidth)
    this.setData({
      'swiperNav.cousedis': e.currentTarget.dataset.num
    })
    if (e.currentTarget.dataset.num > 2 && e.detail.x > (wx.getSystemInfoSync().windowWidth/5*3)){
      
      this.setData({
        scrollLeft: this.scrollLeft+100,
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
  }
})
