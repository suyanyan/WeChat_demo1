// pages/othen/index.js
// import navjs from '../publish/nav/nav.js'
const app = getApp();
Page({
  onReady(e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
  },
  /**
   * 页面的初始数据
   */
  data: {
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
    map:{
      latitude: 23.099994,
      longitude: 113.324520,
      markers: [{
        id: 1,
        latitude: 23.099994,
        longitude: 113.324520,
        name: 'T.I.T 创意园'
      }],
      covers: [{
        latitude: 23.099994,
        longitude: 113.344520,
        iconPath: '../image/location.png'
      }, {
        latitude: 23.099994,
        longitude: 113.304520,
        iconPath: '../image/location.png'
      }]
    }
  },
  jumpPage(e){
    this.setData({
      route: e.currentTarget.dataset.router,
      navIndex: e.currentTarget.dataset.index
    })
  },
  onReady: function (e) {
    this.mapCtx = wx.createMapContext('myMap')
  },
  getCenterLocation: function () {
    this.mapCtx.getCenterLocation({
      success: function (res) {
        console.log(res.longitude)
        console.log(res.latitude)
      }
    })
  },
  moveToLocation: function () {
    this.mapCtx.moveToLocation()
  },
  translateMarker: function () {
    this.mapCtx.translateMarker({
      markerId: 1,
      autoRotate: true,
      duration: 1000,
      destination: {
        latitude: 23.10229,
        longitude: 113.3345211,
      },
      animationEnd() {
        console.log('animation end')
      }
    })
  },
  includePoints: function () {
    this.mapCtx.includePoints({
      padding: [10],
      points: [{
        latitude: 23.10229,
        longitude: 113.3345211,
      }, {
        latitude: 23.00229,
        longitude: 113.3345211,
      }]
    })
  }
})