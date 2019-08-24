// components/controlCount/controlCount.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    info:{
      type:Object,
      value:{}
    },
    foods:{
      type:Object,
      value:{}
    },
  
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
    onRemoveClick(event){
      if(this.data.info.count>0){
         this.data.info.count--; 
        this.setData({
          count:this.data.info.count
        })
      }else{
        return;
      }
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
      // console.log(this.data.info.count++)
      // console.log(this.properties.foods)
    }
  }
})
