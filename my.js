function setting()
{
    var y = new Date();
    let nowyear = y.getFullYear();
    let day =+ document.getElementById('day').value;
    let month =+ document.getElementById('month').value;   
    let year =+ document.getElementById('year').value;
    if(day>31||day<1)
    alert("Bạn đã nhập sai ngày !")
    else
    {
    if(month+1===4||month+1===6||month+1===9||month+1===11)
    {
        if(day==31)
        alert("Tháng này chỉ có 30 ngày !")
    }
    if(year>nowyear)
    {
        alert("Bạn chưa sống tới lúc đó !")
    }
    }
    if(month+1===2)
    {
        if ((year % 4===0 &&year%100 !==0 && year % 400 !==0)||(year%100===0 && year % 400===0))
        {
        if(day>29)
        {
        alert("Tháng 2 năm "+year +" chỉ có 29 ngày. Bạn phải nhập lại ngày !")
        }
        }
        else
        if(day>28)
        alert("Tháng 2 chỉ có 28 ngày !")
    }
    var now = new Date;
    var daystart = new Date(year,month,day);
    var setday= daystart.getTime()-now.getTime();
    var time= Math.round(setday/1000/60/60/24)*-1;
    document.getElementById('output').innerHTML="Bạn đã Alone được "+time+" ngày !";
    let name = document.getElementById('name').value;
    var arr =new Array(name+" đen tình !",name+" không phù hợp để có người yêu !",name+" chưa tìm được người phù hợp !","Số phận của "+name+" là không có người yêu !");
    var rd= arr[Math.floor(Math.random()*arr.length)];
    document.getElementById('random').innerHTML="Lời bói dành cho " +name+" : "+rd;
    var test= Math.floor(Math.random()*10);
    document.getElementById('test').innerHTML="Sau "+test+" năm thì "+name+" sẽ có người yêu !"; 
}