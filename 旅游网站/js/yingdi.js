 let header=document.getElementsByClassName("header-right")[0];
    let texiaoli=header.getElementsByTagName("a");
    let texiao=document.getElementsByClassName("texiao");
    let texiaonum=2;
    for(let i=0;i<texiaoli.length;i++){
    	texiaoli[i].onmouseover=function(){
    		texiaoli[i].onclick=function(){
    			texiaonum=i;
    			for(let j=0;j<texiaoli.length;j++){
    			texiao[j].style.opacity=0;
    			texiao[texiaonum].style.opacity=1;
    		}
    		texiao[i].style.opacity=1;
    		}
    		for(let j=0;j<texiaoli.length;j++){
    			texiao[j].style.opacity=0;
    			texiao[texiaonum].style.opacity=1;
    		}
    			texiao[i].style.opacity=1;
    	}
    		texiaoli[i].onmouseout=function(){
    		for(let j=0;j<texiaoli.length;j++){
    			texiao[j].style.opacity=0;		
    		}
    		texiao[texiaonum].style.opacity=1;
    			
    	}
    }
