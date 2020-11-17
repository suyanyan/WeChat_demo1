// pages/othen/index.js
// import navjs from '../publish/nav/nav.js'
const app = getApp();
Page({
  onReady(e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio');
  },
  /**
   * 页面的初始数据
   */
  data: {
    // start询问框
    titleText: '',
    titleMsg: '',
    yesText: '',
    cancleText: '',
    //end 

    // start提示框
    msgInfo: '',
    className:'',
    // end

    btnHidden:true,
    screenHeight:"",
    screenWidth:'',
    loginFlag:'false',
    username:'',
    headImg:'',
    userInfos:{},
    bannerUrl:[
      'https://img03.sogoucdn.com/app/a/100520093/b692ca88cf40622d-c4c351c548f54192-bb3dcf0e0a9e96d7137a472afa9b9192.jpg',
      'https://img02.sogoucdn.com/app/a/100520093/b692ca88cf40622d-c4c351c548f54192-3047a3e6fe3178e1ebaf106b19653e19.jpg',
      'https://img02.sogoucdn.com/app/a/100520093/b692ca88cf40622d-c4c351c548f54192-6fe60afa2548e8e3573a641bc8a1d61d.jpg',
      'https://img02.sogoucdn.com/app/a/100520093/e44591f3bb81ec2f-f6104c63e22b94db-b0a249395f2349f87cf67a5b1a21a514.jpg'
    ],
    // navarr: navjs.navarr,
    navarrs: {
      navarr: [
        {
          title: '首页',
          router: 'index'
        },
        {
          title: '产品',
          router: 'product'
        }, {
          title: '热销',
          router: 'sellwell'
        }, {
          title: '购物车',
          router: 'car'
        }, {
          title: '我的',
          router: 'myself'
        }
      ],
    },
    route: 'index',
    navIndex: 0,
    audio:{
      poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
      name: '此时此刻',
      author: '许巍',
      src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
    },
    product:{
      data:[
        {
          img:'../image/head.jpg',
          name:"电饭煲",
          type:"HYBBH - 2130",
          many:"￥2200"
        },
        {
          img: '../image/head.jpg',
          name: "高压锅",
          type: "HYBBH - 2130",
          many: "￥3000"
        }, {
          img: '../image/head.jpg',
          name: "电磁炉",
          type: "HYBBH - 2130",
          many: "￥2800"
        },{
          img: '../image/head.jpg',
          name: "养生壶",
          type: "HYBBH - 2130",
          many: "￥800"
        },{
          img: '../image/head.jpg',
          name: "电炒锅",
          type: "HYBBH - 2130",
          many: "￥1100"
        }, {
          img: '../image/head.jpg',
          name: "微波炉",
          type: "HYBBH - 2130",
          many: "￥450"
        }
      ]
    },
  },
  // 加载
  onLoad: function () {
    this.setData({
      screenHeight: wx.getSystemInfoSync().screenHeight,
      screenWidth: wx.getSystemInfoSync().screenWidth
    })
  },
  onReady: function () {

  },
  // 导航跳转
  jumpPage(e){
    this.setData({
      route: e.currentTarget.dataset.router,
      navIndex: e.currentTarget.dataset.index
    })
  },
  // 我的——登录
  login(e){
    if (app.globalData.userInfo){
      console.log(e)
      this.setData({
        loginFlag: 'true',
        username: app.globalData.userInfo.nickName,
        headImg: app.globalData.userInfo.avatarUrl,
        userInfos: app.globalData.userInfo
      })
    }
  },
  // 弹框显示关闭
  clickMe:function(){
    this.model = this.selectComponent("#model");
    this.setData({
      titleText:'询问框',
      titleMsg:'你确定关闭吗',
      yesText:'是',
      cancleText:'否'
    })
    this.model.showmodel()
  },
  clicMsgInfo:function(){
    this.msgInfo = this.selectComponent("#msgInfo");
    this.setData({
      msgInfo: '提示信息',
      className: 'defaults'
    })
    this.msgInfo.showmodelMsg()
  },
  cancle:function(){
    this.model.hiddenmodel()
  },
  success: function () {
    this.model.hiddenmodel()
  },
  close:function(){
    this.model.hiddenmodel();
  },
  // 账号信息查询
  userInfofn:function(e){
    console.log(e.currentTarget.dataset.userinfos);
    if (JSON.stringify(e.currentTarget.dataset.userinfos) == "{}"){
      this.msgInfo = this.selectComponent("#msgInfo");
      this.setData({
        msgInfo:'用户未登录',
        className:'warn'
      })
      this.msgInfo.showmodelMsg()
      // wx.showToast({
      //   title: '用户未登录！！',
      //   icon: 'none',
      //   duration: 2000
      // })
    }else{
     wx.navigateTo({
       url: '../account/account?userInfos=' + JSON.stringify(e.currentTarget.dataset.userinfos),
     })
    }
  }
})