// components/rating/rating.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    ratings:{
      type:Object,
      value:{}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    iconActive:false,
    indexActive:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onClickTab(event){
      // console.log(event)
      var indexActive=event.target.dataset.id;
      if(indexActive==2){
        this.setData({
          iconActive:true,
          indexActive:indexActive
        })
      }else{
        this.setData({
          iconActive:false,
          indexActive:indexActive
        })
      }
    },
    onChangeTab(event){
      // console.log(event)
      var changeIndex=event.detail.current;
      if(changeIndex==2){
        this.setData({
          indexActive: changeIndex,
          iconActive:true
        })
      }else{
        this.setData({
          indexActive:changeIndex,
          iconActive:false
        })
      }
    }
  }
})
