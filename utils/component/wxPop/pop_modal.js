Component({
  properties:{
    topHidden:{
      type: Boolean,
      value:false
    },
    bottomHidden:{
      type: Boolean,
      value:false
    },
    inputHidden:{
      type: Boolean,
      value: true
    },
    titleText: {
      type: String,
      value: '提示信息',
    },
    titleMsg: {
      type: String,
      value: '64646464 ',
    },
    cancleText: {
      type: String,
      value: '取消 ',
    },
    yesText:{
      type: String,
      value: '确认 ',
    },
    msgInfo:{
      type: String,
      value: '',
    },
    className: {
      type: String,
      value: '',
    },
  },
  data:{
    isshow:false,
    msgIsshow:false
  },
  methods:{
    showmodel(){
      console.log(this)
      this.setData({
        isshow:!this.data.isshow
      })
    },
    hiddenmodel(){
      this.setData({
        isshow: !this.data.isshow
      })
    },
    showmodelMsg() {
      var self=this
      self.setData({
        msgIsshow: !self.data.msgIsshow
      })
      setTimeout(function () {
        self.setData({
          msgIsshow: !self.data.msgIsshow
        })
      }, 3000)
    },
    _cancle(){
      console.log(this)
      this.triggerEvent("cancle")
    },
    _success(){
      this.triggerEvent("success")
    },
    _close(){
      this.triggerEvent("close")
    },
   
  }
})