// components/star/star.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    rate:{
      type:Number,
      value:0,
      observer(newVal,oldVal,changePath){
        this.onRateEevnt();
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
    onRateEevnt(event){
      var rate=this.data.rate;
      var light = parseInt(rate);
      var half = light%2;
      var gray=5-light-half;
      var lights=[];
      var halfs=[];
      var grays=[];
      for(var i=0;i<light;i++){
        lights.push(i)
      }
      for(var i=0;i<half;i++){
        halfs.push(i)
      }
      for(var i=0;i<gray;i++){
        grays.push(i)
      }
      this.setData({
        lights:lights,
        halfs:halfs,
        grays:grays
      })
      // console.log(this.data)
    }
  },
  lifetimes:{
    attached(){
      this.onRateEevnt();
    }
  }
})
