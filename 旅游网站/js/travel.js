    let imglists=document.getElementsByClassName("img-list")[0];
    let imgs=imglists.getElementsByTagName("li");
    let btns=document.getElementsByClassName("btn-list")[0];
    let btnlis=btns.getElementsByTagName("li");
    let banner=document.getElementsByClassName("bigbanner")[0];
    let widthW=parseInt(getComputedStyle(imglists,null).width);
    let flag=true;
    let now=0;
    let next=0;
    let num=0;
    let t=setInterval(move,3000);

    banner.onmouseover=function(){
             clearInterval(t);
    }
    banner.onmouseout=function(){
          t=setInterval(move,3000);
    }
    function move(){
         num++;
        if(num==imgs.length){
          num=0;
          }
        for(let j=0;j<imgs.length;j++){
          // animate(banner,{background:"color[j]"});
            animate(imgs[j],{opacity:0});
            btnlis[j].style.background="rgba(0,0,0,0)";
          }
            animate(imgs[num],{opacity:1});     
         btnlis[num].style.background="#fff"; 
       }
    for(let i=0;i<btnlis.length;i++){
        btnlis[i].onclick=function(){
           for(let j=0;j<imgs.length;j++){
               animate(imgs[j],{opacity:0});              
               btnlis[j].style.background="rgba(0,0,0,0)";
           }
           animate(imgs[i],{opacity:1});           
           btnlis[i].style.background="#fff"; 
            num=i;
           }
          
    }


    let header=document.getElementsByClassName("header-right")[0];
    let texiaoli=header.getElementsByTagName("li");
    let texiao=document.getElementsByClassName("texiao");
    let texiaonum=0;
    // for(texiaonum=0;texiaonum<texiao.length;texiaonum++){
    //     texiaoli[texiaonum].onclick=function(){
    // 		for(let j=0;j<texiaoli.length;j++){
    // 			texiao[j].style.opacity=0;
    // 		}
    // 			texiao[texiaonum].style.opacity=1;
    // 	}

    // 	}
    for(let i=0;i<texiaoli.length;i++){
    	texiaoli[i].onmouseover=function(){
    		texiaoli[i].onclick=function(){
    			texiaonum=i;
    			console.log(texiaonum)
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


