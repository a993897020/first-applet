//index.js
//获取应用实例
const app = getApp()
var goodsInfo = require("../../data/goods.js");
var ratingsInfo = require("../../data/ratings.js");
var sellerInfo = require("../../data/seller.js");
Page({
  data: {
    indexTap: 0,
    nav: ['点菜', '评价', '商家'],

  },
  
  onLoad: function (options) {
      wx.showLoading({
        title: '正在加载...',
      })
    this.setData({
    goods:goodsInfo.getGoods.data,              poi_info:goodsInfo.getGoods.data.poi_info,
  foods:goodsInfo.getGoods.data.food_spu_tags,
      showItem: goodsInfo.getGoods.data.container_operation_source,
      ratings:ratingsInfo.getRatings.data,
      seller:sellerInfo.getSeller.data
    })
    // console.log(this.data.seller);
    // console.log(this.data.goods);
    // console.log(options);
   
  },
  onReady(){
    wx.hideLoading();
  },
  getFoodItem(event) {
    var foodItem = event.detail;
    this.setData({
      foodItem: foodItem
    })
    // console.log(event)
  },
  onShoppingList(event){
    // console.log(event)
    var openShopping = event.detail.openShopping;
    this.setData({
      openShopping:openShopping
    })
  },
  onCarList(event){
    // console.log(event)
    var foodArr=event.detail.foodArr;
    var foodCountInfo = event.detail.foodCountInfo
    this.setData({
      foodArr:foodArr,
      foodCountInfo: foodCountInfo
    })
  },
  onCloseShopping(event){
    this.setData({
      openShopping:false
    })
    var goods=this.selectComponent("#goods");
    goods.onCloseShopping(false)
  },
  onTap(event) {
    this.setData({
      'indexTap': event.target.dataset.index
    })
    // console.log(event);

  },

  // 滑动切换页面触发事件
  changeTap(event) {
    // console.log(event)
    if (event.detail.source == 'touch') {
      this.setData({
        'indexTap': event.detail.current
      })
    }
  },
})
