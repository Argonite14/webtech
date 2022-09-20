function change(){
    var div = document.getElementById('box');
    var bgcolor = document.getElementById('bgcolor').value;
    var fgcolor = document.getElementById('fgcolor').value;
    var tsize = document.getElementById('tsize').value;
    console.log(tsize);
    var height = document.getElementById('height').value;
    var width = document.getElementById('width').value;
    var rad = document.getElementById('rad').value;
    div.style.backgroundColor = bgcolor;
    div.style.color = fgcolor;
    div.style.fontSize = tsize + "px";
    div.style.width = width + "px";
    div.style.height = height +"px";
    div.style.borderRadius = rad + "px";
}

var car =null;
var timer=null;
function init(){
    car=document.getElementById('car');
    car.style.position='relative';
    car.style.left='2px';
    clearTimeout(timer);
    document.getElementById("Dangerbox").innerHTML='';
    

}
function move(){
    car.style.left=parseInt(car.style.left)+100+"px";
    timer=setTimeout(move,300);
    if( parseInt(car.style.left) >= 1300 )
    {
        stop();
        document.getElementById("Dangerbox").innerHTML='<div id ="danger" style="border:1px solid red; background-color: red; color: white ; position: absolute; right: 100px; bottom: 500px; width: 150px; height: 100px;" >DANGER</div>'
    }
}
function stop(){
    clearTimeout(timer);

}

var items=[]
function save(){
            var data=document.getElementById('data').value+'-'+document.getElementById('data1').value;
            for(var i=0;i<items.length;i++)
            {
                if (data === items[i])
                {
                    window.alert('Contact Number Already Exists.\n'+data)
                    return 0;
                }   
            }
            items.push(data);
            result='<ol>'
            for(var i=0;i<items.length;i++)
            {
                result+='<li>'+items[i]+'</li>'   
            }
            result+='</ol>'
            document.getElementById('result').innerHTML=result
        }
        function removefirst(){
            items.shift();
            result='<ol>'
            for(var i=0;i<items.length;i++)
            {
                result+='<li>'+items[i]+'</li>'   
            }
            result+='</ol>'
            document.getElementById('result').innerHTML=result
        }
        function removelast()
        {
            items.pop();
            result='<ol>'
            for(var i=0;i<items.length;i++)
            {
                result+='<li>'+items[i]+'</li>'   
            }
            result+='</ol>'
            document.getElementById('result').innerHTML=result
        }
