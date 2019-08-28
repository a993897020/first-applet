// pages/newPage/newPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
    var topPage = getCurrentPages()[0];
    var foodItem=topPage.data.foodItem;
    var poi_info=topPage.data.poi_info;
    var foodArr=topPage.data.foodArr;
    var foodCountInfo = topPage.data.foodCountInfo
    this.setData({
      foodItem:foodItem,
      poi_info: poi_info,
      foodArr: foodArr,
      foodCountInfo: foodCountInfo
    })
    // console.log(topPage)
    wx.setNavigationBarTitle({
      title: foodItem.name,
    })
  },
  onShoppingList(event) {
    console.log(event)
    var openShopping = event.detail.openShopping;
    this.setData({
      openShopping: openShopping
    })
  },
  onCloseShopping(event) {
    this.setData({
      openShopping: false
    })
    var detail = this.selectComponent("#detail");
    detail.onCloseShopping(false)
  },
  onTap(event) {
    this.setData({
      'indexTap': event.target.dataset.index
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.hideLoading();

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})