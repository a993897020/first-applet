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
    foodCountInfo:{
      type:Object,
      value:{},
      observer(newVal,oldVal,changePath){
        this.updateData();
        }
      },
      foods: {
        type: Object,
        value: {},
        observer(newVal, oldVal, changePath) {
          this.updateData();
        }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    buying:true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onShoppingList(event){
      var buying=this.data.buying;
      // console.log(this.data.buying)
      this.setData({
        buying:!buying        
      })
      console.log(this.properties)
    },

 

    updateData(){
    //   var foods = this.properties.foods;
    //   var buying = this.data.buying;
    //   var countList = [];
    //   var foodList = []
    //   foods.forEach((item) => {
    //     var itemFood = item.spus;
    //     itemFood.forEach((food) => {
    //       var count = food.count;
    //       foodList.push(food)
    //       countList.push(count)
    //       if (count > 0) {
    //         this.setData({
    //           buying: !buying,
    //           countList: countList,
    //           foodList: foodList
    //         })
    //       } else {
    //         this.setData({
    //           buying: buying
    //         })
    //       }
    //     })
    //   })
    }


    //     var foodCountInfo = this.properties.foodCountInfo;
    //   var countList=[];
    //   var count=0;
    //   countList.push(foodCountInfo)
    //   this.setData({
    //     countList: countList
    //   })
    //   for (var i = 0; i < countList.length;i++){
    //     count+=countList[i].count;
    //     this.setData({
    //       count: count,
    //     })
    //   }
    //   console.log(this.data)
    // }
  },
    lifetimes: {
      accached() {
        this.updateData();
      }
    }
})
