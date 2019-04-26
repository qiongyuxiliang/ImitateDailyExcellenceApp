// pages/common/carousel/carousel.js
Component({
  /**
   * 组件的属性列表
   */
  // 轮播图

  properties: {
    imgUrls:{
      type:Array,
      value:[],
    }, 
    currentIndex:{
      type:Number,
      value:1,
    },
    imgUrlLength:{
      type:Number,
      value:1,
    }, 
    autoplay: {
      type: Boolean,
      value: false,
    },
    interval:{
      type: Number,
      value: 1000,
    },
    duration:{
      type: Number,
      value: 1000,

    },

  },

  /**
   * 组件的初始数据
   */
  data: {
    imgUrls: [],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 轮播图
    switchPic(e) {
      this.setData({
        currentIndex: e.detail.current + 1,
      })
    }
  }
})
