// components/controlCount/controlCount.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    info:{
      type:Object,
      value:{},
      observer(newVal,oldVal,changePath){
        this.updateCount();
      }
    },
    foods:{
      type:Object,
      value:{}
    },
    foodCount:{
      type:Number,
      value:0,
      observer(newVal,oldVal,changePath){
        this.clearCount();
      }
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
    updateCount(){
      var info=this.properties.info;
      this.setData({
        info:info
      })
    },
    onRemoveClick(event){
      var countFood = this.data.info
      if(this.data.info.count>0){
         this.data.info.count--; 
        this.setData({
          count:this.data.info.count
        })
        // console.log(this.data.info)
      }
      this.triggerEvent("countInfo", {
        countFood: countFood
      })
    },
    onAddClick(event){
       this.data.info.count++; 
      var countFood = this.data.info
      this.setData({
        count: this.data.info.count,
      })
      
      this.triggerEvent("countInfo",{
          countFood:countFood
      })
      // console.log(this.data.info)
    },
    clearCount(){
      // console.log(this.properties)
      var foodCount = this.properties.foodCount;
      var count=this.data.count
      this.setData({
        count: foodCount
      })
    }
      
  },
  lifetimes:{
    attached(){
      this.clearCount();
      this.updateCount();
    }
  }
})
