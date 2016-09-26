var app = getApp()

Page({

    data:
    {
        todocontent:''
    },
    todosave:function( e )
    {
        var that = this;
        console.log( that );
        var url = 'http://'+app.globalData.ttHost+'/?c=api&a=todo_add&token='+app.globalData.ttToken;
		wx.request({ 
			'url':url,
			header: {
                'Content-Type': 'application/json'
            },
            data:
            {
                'text':e.detail.value.todocontent
            },
      		success:function(res)
      		{
      			console.log( res );
                if( parseInt( res.data.err_code ) == 0 )
                {
                    // 关掉当前页面
                    that.setData({'todocontent':''});
                    wx.navigateBack();
                }
      			//
      			
				//console.log( that.data );
      			
      		}
		});
    }

});