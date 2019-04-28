// pages/common/mask/mask.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    maskFlag:{
      type:Boolean,
      value:false,
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    maskFlag: false,
    isScroll:false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showFlag: function () {
      this.setData({
        maskFlag: false,
        isScroll: false,
      })
    },
    hideFlag: function () {
      this.setData({
        maskFlag: true,
        isScroll: true,
      })
    },
    touchmove(e) {
    
    },
    /** 
     * 内部私有方法建议以下划线开头 
     * triggerEvent 用于触发事件 
    */
    _showMask() { //触发取消回调 
      this.triggerEvent("showMask")
    },
    _hideMask() { //触发成功回调 
      this.triggerEvent("hideMask");
    } 


  }
 
})
