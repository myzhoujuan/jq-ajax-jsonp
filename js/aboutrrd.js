   window.onload=function(){
		//商城系统
		var oShop=document.getElementById('shop-system');
		var oShopc=document.getElementById('shop-content');
		
		var oUc=document.getElementById('uscen');
		var oUi=document.getElementById('user-in');
		
		var timer=null;
		
		oShop.onmouseover=oShopc.onmouseover=function(){
			clearTimeout(timer);
			oShopc.style.display='block';
		}
		oShop.onmouseout=oShopc.onmouseout=function(){
			timer=setTimeout(function(){
				oShopc.style.display='none';
			},300)
			
		}  
		//用户中心
		oUc.onmouseover=oUi.onmouseover=function(){
			clearTimeout(timer);
			oUi.style.display='block';
		} 
		oUc.onmouseout=oUi.onmouseout=function(){
			timer=setTimeout(function(){
				oUi.style.display='none';
			},300)
		}
		
		
	//左边栏
  		var oLf=document.getElementById('lefu');
	
  	    var aBtn=oLf.getElementsByTagName('li');
		
		var oUl=document.getElementById('rigu');
		var aDiv=oUl.getElementsByTagName('div');
		
		for(var i=0;i<aBtn.length;i++){
			aBtn[i].index=i;
			 aBtn[i].onmouseover=function(){
				 for(var i=0;i<aBtn.length;i++){
					 aBtn[i].className='';
					 aDiv[i].className='';
				}
				 this.className='active';
				 aDiv[this.index].className='show';
			}
		}		
	};