// pages/header/header.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持 
  }, 
  /**
   * 组件的属性列表
   */
  properties: {
/**
 * scrollLeft: 0,
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
 */
    scrollLeft: { // 属性名 
      type: Number, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型） 
      value: 0 // 属性初始值（可选），如果未指定则会根据类型选择一个 
    }, 
    swiperNav:{
      type: Object,
      value:{
        cousedis:0,
        arr: [
          { v: 0, txt: "推荐专区" },
          { v: 1, txt: "进口商品" },
          { v: 2, txt: "饮料冲调" },
          { v: 3, txt: "休闲零食" },
          { v: 4, txt: "生鲜" },
          { v: 5, txt: "速食调味" }
        ],
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
     width : 120,
    swiperNav: {
      cousedis: 0,
      arr: [
        { v: 0, txt: "推荐专区" },
        { v: 1, txt: "进口商品" },
        { v: 2, txt: "饮料冲调" },
        { v: 3, txt: "休闲零食" },
        { v: 4, txt: "生鲜" },
        { v: 5, txt: "速食调味" }
      ],
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tapclick(e) {
      console.log(e)
      this.setData({
        'swiperNav.cousedis': e.currentTarget.dataset.num,
        message: e._relatedInfo.anchorTargetText,
      })
      if (e.currentTarget.dataset.num > 1 && e.currentTarget.dataset.num < this.data.swiperNav.arr.length - 2 && e.detail.x > (wx.getSystemInfoSync().windowWidth / 5 * 3)) {
        this.setData({
          scrollLeft: this.data.scrollLeft + this.data.width,
        })
      } else if (e.currentTarget.dataset.num > 1 && e.currentTarget.dataset.num < (this.data.swiperNav.arr.length - 2) && e.detail.x < (wx.getSystemInfoSync().windowWidth / 5 * 2)) {
        this.setData({
          scrollLeft: this.data.scrollLeft - this.data.width,
        })
      }
    },

  }
})
