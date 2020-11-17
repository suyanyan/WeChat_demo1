// pages/account/account.js
const app = getApp();
Page({
  data: {
    userinfo:{},
    user:'',
    isshow:false,
    isfcous:"block",
    disable:'none',
    focus:false,
    gender: ['未知','男', '女'],
    index: 0,
    region: ['山西省', '太原市', '小店区'],
    multiArray: [
      ['山西', '河南'], 
      ['太原市', '大同市', '阳泉市', '长治市', '晋城市', '朔州市', '忻州市', '吕梁市', '晋中市', '临汾市', '运城市'],
      ["小店区","迎泽区","杏花岭区","尖草坪区","万柏林区","晋源区","清徐县","阳曲县","娄烦县","古交市"]
      ],
    multiIndex:[0,0,0]
  },
  onLoad: function (options) {
    console.log(JSON.parse(options.userInfos));
    this.setData({
      userinfo: JSON.parse(options.userInfos),
      user: JSON.parse(options.userInfos).nickName,
      index: JSON.parse(options.userInfos).gender 
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
   
  },
  // 省市区选择
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  // 普通选择
  bindSelect:function(e){
    this.setData({
      index:e.detail.value
    })
  },
  // 头像预览
  preveviweFn: function(){
    this.setData({
      isshow: true
    })
  },
  isHide:function(){
    this.setData({
      isshow: false
    })
  },
  uploads:function(){
    console.log(2)
    wx.navigateTo({
      url: '../tab_menu/menu',
    })
  },
  close:function(){
    this.setData({
      isshow: false
    })
  },
  // 昵称修改start
  textUserClick:function(){
    this.setData({
      isfcous: "none",
      disable: 'block',
      focus:true
    })
  },
  inputblur:function(e){
    console.log(e)
    var value = e.detail.value
    this.setData({
      isfcous: "block",
      disable: 'none',
      user: value
    })
  }
  // end
})