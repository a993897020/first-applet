// components/detail/detail.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    itemInfo:{
      type:Object,
      value:{},
      observer(newVal,oldVal,changePath){
        this.getFoodItem();
      }
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
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getFoodItem(){
      console.log(this.properties);
      var foodItem=this.properties.itemInfo
      this.setData({
        foodItem:foodItem
      })
    },
  },
  lifetimes:{
    attached(){
      this.getFoodItem();
    }
  }
})
