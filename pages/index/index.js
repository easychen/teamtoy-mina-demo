//index.js
//获取应用实例
var app = getApp()
Page({
  
  data: {
    host:'ttsite.sinaapp.com',
    email:'we@teamtoy.net',
    password:'think_different'
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  login:function( e ){
    //console.log( this.data );
    var that = this;
    var url = 'http://'+ e.detail.value.host + '/?c=api&a=user_get_token';
    wx.request({
      'url':url , 
      data:{
            'email':e.detail.value.email ,
            'password':e.detail.value.password 
            },
      header: {
                'Content-Type': 'application/json'
            },
      success:function(res) {
      //console.log(res.data);
      if( parseInt( res.data.err_code ) == 0 )
      {
          // 将 Token 放到全局变量中。

          app.globalData.ttToken = res.data.data.token;
          app.globalData.ttHost = e.detail.value.host;

          // then redirct to app page
          wx.redirectTo({'url':'../teamtoy/dashboard'});
      }
      }
    });
    //console.log( e.detail.value );
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
