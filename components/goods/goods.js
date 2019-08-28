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
    },
    foodCountInfo:{
      type:Object,
      value:{},
      observer(newVal,oldVal,changePath){
        this.onUpdataInfo();
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    scrollList: [0, 258, 1034, 1734, 2435, 3062, 3913, 4838, 5390, 5664,5862],
    scrollY: 0,
    i:0,
    foodArr:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onCloseShopping(val){
      var shopping=this.selectComponent("#shopping")
      shopping.onCloseShopping(false)
    },
    onShoppingList(event){
      // console.log(event)
      var openShopping=event.detail;
      this.triggerEvent("ShoppingList",openShopping)
    },
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
   
      // console.log(event)
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
      // console.log(scrollY)
      var scrollList = this.data.scrollList;
      var i=this.data.i;
      for (let index = 0; index < scrollList.length; index++) {
        var height1 = scrollList[index];
        var height2 = scrollList[index + 1];
        if (scrollY > height1 && scrollY < height2) {
          i=index;
          break;
        }
      }
      if(i!=this.data.i)
      this.setData({
        i:i
      })
    },
    onClearCount(event){
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
        console.log(this.data)
      } 
    },
   
    onUpdataInfo(event){
      if (event){
        var updatefood = event.detail.item;
        var foodCountInfo = this.data.foodCountInfo;
        this.setData({
          foodCountInfo: updatefood
        })
      }else{
        return
      }
    },

    onCountInfo(event) {
      // console.log(event)
      var foodCountInfo=event.detail.countFood;  //获取数据
          //新建的数组
      var foodArr=this.data.foodArr       
      var index;                                //下标
        //判断数据的count是否>0                             
      if(foodCountInfo.count>0||foodArr.length>0){
            //判断数组是否为空        
        if (foodArr.length == 0){    
          foodArr.push(foodCountInfo) 
          this.setData({
            foodCountInfo: foodCountInfo,
            foodArr: foodArr
          })
          //数组的数据是否一致
        }else if(foodArr[0].id==foodCountInfo.id){  
          this.setData({
            foodCountInfo: foodCountInfo,
            foodArr: foodArr
          })
        }else{ 
          for(var i=0;i<foodArr.length;i++){
            // 判断第二个以后的数据是否一致
            if(foodArr[i].id==foodCountInfo.id&&foodArr[i].name==foodCountInfo.name){
              index=i;
              break;
            }
          }
          // 有值，说明数据一致不需要push
          if(index!=null){
            // foodArr.splice(index, 1);
            this.setData({
              foodCountInfo: foodCountInfo,
              foodArr: foodArr
            })
            return;
          // 如果没有值，就说明数据不一致，需要push
          }else{
            foodArr.push(foodCountInfo)
            this.setData({
              foodCountInfo: foodCountInfo,
              foodArr: foodArr
            })
          }
        }
        
      }else{
        // 判断数据的count是否<0,<0就把数据删除
        for(var i=0;i<foodArr.length;i++){
          if(foodArr[i].count<=0){
            index=i;
            break;
          }
        }
        foodArr.splice(index,1);
        this.setData({
          foodCountInfo: foodCountInfo,
          foodArr: foodArr
        })
      }
      // console.log(foodCountInfo)
      // console.log(foodArr)
      this.triggerEvent('shoppingCarList',{   //给detail的购物车使用
        foodArr:foodArr,
        foodCountInfo:foodCountInfo
      })
    },
  },
  lifetimes:{
    attached(){
      this.onCloseShopping();
    }
  }
})
