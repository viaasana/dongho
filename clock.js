function get_time(){
    var h=document.getElementById('_h_');
    var m=document.getElementById('_m_');
    var s=document.getElementById('_s_');
    var date=document.getElementById('_date_')
    var day=document.getElementById('_day_')
    var h_now=new Date().getHours();
    var m_now=new Date().getMinutes();
    var s_now=new Date().getSeconds();
    var day_now=new Date().getDay();
    var date_now=new Date().getDate();
    var month_now=new Date().getMonth();
    var year_now=new Date().getFullYear();
    var get_date,get_day;
    
    
    /*for digital clocl*/
    h.innerHTML=h_now;
    m.innerHTML=m_now;
    s.innerHTML=s_now;
    switch (day_now){
        case 0: {get_day='Chủ nhật,'; break;}
        case 1: {get_day='Thứ hai, '; break;}
        case 2: {get_day='Thứ ba, '; break;}
        case 3: {get_day='Thứ tư, '; break;}
        case 4: {get_day='Thứ năm, '; break;}
        case 5: {get_day='Thứ sáu, '; break;}
        case 6: {get_day='Thứ bảy, '; break;}
    }
    get_date='ngày '+date_now+' tháng '+month_now+ ' năm '+year_now;
    day.innerHTML=get_day;
    date.innerHTML=get_date;
    
    
    /*rotate hand*/
    var hand_h=document.getElementById('hand_h_');
    var hand_m=document.getElementById('hand_m_');
    var hand_s=document.getElementById('hand_s_');
    var h_transform,m_transform,s_transform,s_deg,m_deg,h_deg;

    s_deg=6 * s_now;/*secondhand rotate 6deg in one second*/
    s_transform='translateY(-50%) rotate('+s_deg+'deg)'
    hand_s.style.transform=s_transform;

    m_deg=0.1 * (s_now + m_now*60);/*minutehand rotate 0.1deg in one second*/
    m_transform='translateY(-50%) rotate('+m_deg+'deg)'
    hand_m.style.transform=m_transform;

    h_deg=0.0083333333333 * (s_now +m_now*60+ h_now*3600);/*hourhand rotate 0.0083333333deg in one second*/
    h_transform='translateY(-50%) rotate('+h_deg+'deg)'
    hand_h.style.transform=h_transform;
}
var set_time=setInterval(get_time,1000)