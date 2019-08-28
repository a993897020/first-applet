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
    },
    foodArr:{
      type:Object,
      value:[]
    },
    foodCountInfo:{
      type:Object,
      value:{},
      observer(newVal,oldVal,changePath){
        this.updateFoodCount();
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
    getFoodItem(){
      // console.log(this.properties);
      var foodItem=this.properties.itemInfo
      this.setData({
        foodItem:foodItem
      })
      // console.log(foodItem)
    },
    
    onCloseShopping(val) {
      var shopping = this.selectComponent("#shopping")
      shopping.onCloseShopping(false)
    },
    onShoppingList(event) {
      // console.log(event)
      var openShopping = event.detail;
      this.triggerEvent("ShoppingList", openShopping)
    },
    onClearCount(event) {
      if (event.detail.clearFoodList) {
        var index;
        var foodArr = event.detail.clearFoodList;
        for (var i = 0; i < foodArr.length; i++) {
          if (foodArr[i].count <= 0) {
            index = i;
            break;
          }
        }
        foodArr.splice(index, 1);
        this.setData({
          foodArr: foodArr
        })
        // console.log(this.data)
      }
    },
    updateFoodCount(){
      // console.log(this.properties)
      var foodCountInfo = this.properties.foodCountInfo;
      this.setData({
        foodCountInfo: foodCountInfo
      })
    }
  },
  lifetimes:{
    attached(){
      this.getFoodItem();
      this.updateFoodCount();
    }
  }
})
