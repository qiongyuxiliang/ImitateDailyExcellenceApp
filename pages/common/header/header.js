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
    isScroll: {
      type: Boolean,
      value: true,
    },
    isFirstPage:{
      type:Boolean,
      value:false,
    },
    swiperNav: {
      type: Object,
      value: {
        cousedis: 0,
        arr: [{
            v: 0,
            txt: "推荐专区"
          },
          {
            v: 1,
            txt: "进口商品"
          },
          {
            v: 2,
            txt: "饮料冲调"
          },
          {
            v: 3,
            txt: "休闲零食"
          },
          {
            v: 4,
            txt: "生鲜"
          },
          {
            v: 5,
            txt: "速食调味"
          }
        ],
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    animation: '',
    width: 120,
    isScrollToLeftBase: true,
    isScrollToRightBase: false,
    isScroll: true,
    menuDetail: false,
    isFirstPage:false,
    swiperNav: {
      cousedis: 0,
      arr: [{
          v: 0,
          txt: "推荐专区"
        },
        {
          v: 1,
          txt: "进口商品"
        },
        {
          v: 2,
          txt: "饮料冲调"
        },
        {
          v: 3,
          txt: "休闲零食"
        },
        {
          v: 4,
          txt: "生鲜"
        },
        {
          v: 5,
          txt: "速食调味"
        }
      ],
    }
  },
  ready: function() {
    this.mask = this.selectComponent("#mask");
    // 页面渲染完成
    //实例化一个动画
    this.animation = wx.createAnimation({
      // 动画持续时间，单位ms，默认值 400
      duration: 1000,
      /**
       * http://cubic-bezier.com/#0,0,.58,1  
       *  linear  动画一直较为均匀
       *  ease    从匀速到加速在到匀速
       *  ease-in 缓慢到匀速
       *  ease-in-out 从缓慢到匀速再到缓慢
       * 
       *  http://www.tuicool.com/articles/neqMVr
       *  step-start 动画一开始就跳到 100% 直到动画持续时间结束 一闪而过
       *  step-end   保持 0% 的样式直到动画持续时间结束        一闪而过
       */
      timingFunction: 'ease',
      // 延迟多长时间开始
      delay: 100,
      /**
       * 以什么为基点做动画  效果自己演示
       * left,center right是水平方向取值，对应的百分值为left=0%;center=50%;right=100%
       * top center bottom是垂直方向的取值，其中top=0%;center=50%;bottom=100%
       */
      transformOrigin: 'left top 0',
      success: function(res) {
        console.log(res)
      }
    })
  },

  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached() {},
    moved() {},
    detached() {},
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 旋转
     */
    showAnimation: function() {
      //顺时针旋转10度
      this.animation.width('100%').step()
      this.setData({
        //输出动画
        animation: this.animation.export()
      })
    },
    // 向父组件传递数据
    _hideMask() { //触发成功回调 
      this.mask.hideFlag();
      this.setData({
        menuDetail: false,
      })
      this.triggerEvent('isScrollFun', {
        "isScroll": this.mask.data.isScroll
      });
    },
    catchtouchmove(e) {
      //  return false;
    },
    menuDetail() {
      this.mask.showFlag();
      this.showAnimation();
      this.setData({
        menuDetail: true,
      })
      this.triggerEvent('isScrollFun', {
        "isScroll": this.mask.data.isScroll
      });
    },
    scroll(e) {
      this.setData({
        scrollLeft: e.detail.scrollLeft,
      })
    },
    bindscrolltoupper(e) {
      this.setData({
        isScrollToLeftBase: true
      })

    },
    bindscrolltolower(e) {
      this.setData({
        isScrollToRightBase: true
      })
    },
    _tapclick(e) {
      //如果点击的菜单和上一次的不一样and 不是点击最后两个，则重置状态
      if (e.currentTarget.dataset.num != this.data.swiperNav.cousedis && e.currentTarget.dataset.num < (this.data.swiperNav.arr.length - 2)) {
        this.setData({
          isScrollToRightBase: false,
        })

      }
      this.setData({
        'swiperNav.cousedis': e.currentTarget.dataset.num,
      })
      if (e.currentTarget.dataset.num > 1 && e.currentTarget.dataset.num < this.data.swiperNav.arr.length - 2 && e.detail.x > (wx.getSystemInfoSync().windowWidth / 5 * 3)) {
        console.log(this.data.scrollLeft + this.data.width)
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
      } else if (!this.data.isScrollToRightBase && e.currentTarget.dataset.num >= (this.data.swiperNav.arr.length - 2)) {
        this.setData({
          scrollLeft: this.data.scrollLeft + 80,
          isScrollToRightBase: true,
        })
      }
      // 切换页面
      let theSelector = e.currentTarget.dataset.num;
      this.triggerEvent('getSelector', {
        "theSelector": theSelector,
      });
    },
    jumpToSearchPage(){
      wx.redirectTo({
        url: '../../pages/searchPage/searchPage',
      })
    }
  }
})