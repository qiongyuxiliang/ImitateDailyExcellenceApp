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
    page:'p0',
    width : 120,
    isScrollToLeftBase:true,
    isScrollToRightBase:false,
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
    // 向父组件传递数据
    scroll(e) {
      this.setData({
        scrollLeft: e.detail.scrollLeft,
      })
    },
    bindscrolltoupper(e){
      this.setData({
        isScrollToLeftBase: true
      })

    },
    bindscrolltolower(e){
      this.setData({
        isScrollToRightBase: true  
      })
    },
    tapclick(e) {
      // 切换页面
     this.setData({
       page: 'p' + e.currentTarget.dataset.num,
     })
      //如果点击的菜单和上一次的不一样and 不是点击最后两个，则重置状态
      if (e.currentTarget.dataset.num != this.data.swiperNav.cousedis && e.currentTarget.dataset.num < (this.data.swiperNav.arr.length - 2)){
        this.setData({
          isScrollToRightBase: false,
        })

      }
      this.setData({
        'swiperNav.cousedis': e.currentTarget.dataset.num,
      })
      if (e.currentTarget.dataset.num > 1 && e.currentTarget.dataset.num < this.data.swiperNav.arr.length - 2 && e.detail.x > (wx.getSystemInfoSync().windowWidth / 5 * 3)) {
        this.setData({
          scrollLeft: this.data.scrollLeft + this.data.width,
        })
      } else if (e.currentTarget.dataset.num > 1 && e.currentTarget.dataset.num < (this.data.swiperNav.arr.length - 2) && e.detail.x < (wx.getSystemInfoSync().windowWidth / 5 * 2)) {
        this.setData({
          scrollLeft: this.data.scrollLeft - this.data.width,
        })
      } else if (e.currentTarget.dataset.num <= 1) {
        this.setData({
          scrollLeft: 0,
        })
      } else if (!this.data.isScrollToRightBase&&e.currentTarget.dataset.num >= (this.data.swiperNav.arr.length - 2)){
        this.setData({
          scrollLeft: this.data.scrollLeft+80,
          isScrollToRightBase:true,
        })
      }
    },
  }
})
