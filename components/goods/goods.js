// components/header/goods/goods.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    showItem:{
      type:Object,
      value:{}
    },
    foods:{
      type:Object,
      value:{}
    },
    poi_info:{
      type:Object,
      value:{}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    scrollList: [0, 258, 1034, 1734, 2435, 3062, 3913, 4838, 5390, 5664,5862],
    scrollY: 0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
   
    onClickMenu(event) {
      var ai = "a" + event.currentTarget.dataset.i;
      var i = event.currentTarget.dataset.i;
      // console.log(event)
      this.setData({
        i: i,
        ai: ai,
      })
    },
    onOpenEvent(event){
   
      console.log(event)
      var foodItem=event.currentTarget.dataset.food;
      var open=this.data.open;
      this.setData({
        foodItem:foodItem
      })
      this.triggerEvent('getItem',foodItem)
      wx.navigateTo({
        url: '/pages/newPage/newPage',
      })
      wx.showLoading({
        title: '正在加载...',
      })
    },

    scrollEvent(event) {
      var scrollY = parseInt(event.detail.scrollTop.toFixed(0));
      console.log(scrollY)
      var scrollList = this.data.scrollList;
      var arr = [];
      // console.log(scrollList)
      for (let i = 0; i < scrollList.length; i++) {
        var height1 = scrollList[i];
        var height2 = scrollList[i + 1];
        arr.push(height1 + "+" + height2);
        if (scrollY > height1 && scrollY < height2) {
          // console.log(i)
          this.setData({
            i: i
          })
        }
      }
      // console.log(arr)
    },
    onCountInfo(event) {
      // console.log(event)
      var foodCountInfo=event.detail.countFood;
      this.setData({
        foodCountInfo:foodCountInfo
      })
    },
  }
})
