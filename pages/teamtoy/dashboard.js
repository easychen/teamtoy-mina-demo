var app = getApp()
Page({

	data:{
		todolist:[]
	},
	todoAdd:function( e )
	{
		//console.log( e );
		wx.navigateTo( { 'url':'todoadd' } );
	},
	onLoad:function()
	{
		var that = this;
		var url = 'http://'+app.globalData.ttHost+'/?c=api&a=todo_list&token='+app.globalData.ttToken;
		wx.request({ 
			'url':url,
			header: {
                'Content-Type': 'application/json'
            },
      		success:function(res)
      		{
      			//console.log( res );
      			//
      			if( res.data && res.data.data ){
					  that.setData({ todolist:res.data.data}); 
				  }
				
				console.log( that.data );
      			
      		}
		});
	}
	,onShow:function(){
		this.onLoad();
	}




// http://ttsite.sinaapp.com/index.php?c=api&a=todo_list


});
