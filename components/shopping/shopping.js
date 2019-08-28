// components/shopping/shopping.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    poi_info:{
      type:Object,
      value:{}
    },
    foodArr:{
      type:Array,
      value:[],
      observer(newVal,oldVal,changePath){
        this.updateData();
      }
    },
    foods: {
      type: Object,
      value: {}
    },
    size:{
      type:Number,
      value:65
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    buying:true,
    openShopping:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onCloseShopping(val){
      this.setData({
        openShopping:val
      })
    },
    onShoppingList(event){
      // console.log(this.properties)
      var openShopping=this.data.openShopping;
      if(openShopping==false){
        this.setData({
          openShopping:true
        })
        this.triggerEvent("shoppingList", {
          openShopping: true
        })
      }else{
        this.setData({
          openShopping: false
        })
        this.triggerEvent("shoppingList", {
          openShopping: false
        })
      }
    },
    onClearEvent(){
      var foodArr = this.properties.foodArr;
      var clearFoodList=[];
      for(var i=0;i<foodArr.length;i++){
        foodArr[i].count=0
        clearFoodList.push(foodArr[i])
        this.setData({
          foodArr: clearFoodList
        })
      }
      this.triggerEvent('clearCount', {
        clearFoodList: clearFoodList
      })
    },
    

 

    updateData(){
      var foodArr=this.properties.foodArr;
      var count=0;
      var money=0;
      var food={}
     if(foodArr.length>0){
       foodArr.forEach(item => {
         if (item.count > 0 ) {
           count+=item.count
           money+=item.count*item.min_price;
           this.setData({
             buying: false,
             count:count,
             money:money,
             food:item
           })
           this.triggerEvent("update",{
             item: item
           })
          //  console.log(foodArr)
         } else {
           this.setData({
             buying: true,
             count:0,
             money:0,
             food:item
           })
         }
       })
     }else{
         this.setData({
           buying: true,
           count: 0,
           money: 0,
           foodArr:foodArr
         })
        //  console.log(foodArr)
     }
    
      // console.log(this.properties)
    }


   
  },
    lifetimes: {
      accached() {
        this.updateData();
      }
    }
})
