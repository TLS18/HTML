document.getElementById("t1").onclick=function(){changeword(t1)};
document.getElementById("t2").onclick=function(){changeword(t2)};
document.getElementById("t3").onclick=function(){changeword(t3)};

function changeword(tid)
{
    var text=document.getElementById('p1');
    switch(tid)
    {
        case t1:
        {
            text.innerHTML="文本1";
            break;
        }
        case t2:
        {
            text.innerHTML="文本2";
            break;
        }
        case t3:
        {
            text.innerHTML="文本3";
            break;
        }
    }
}

