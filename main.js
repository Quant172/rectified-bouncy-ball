let space = document.getElementById("space")
space.style = "background:#0A1931;"
space.width = window.innerWidth - 4;
space.height = window.innerHeight - 4;
let ctx = space.getContext('2d')

let ball={
 b1:{
   x:space.width/2,
   y:space.height/2,
   v_x:8,
   v_y:8
 },
 b2:{
   x:(space.width/2)-150,
   y:(space.height/2)-150,
   v_x:10,
   v_y:10
 },
 b3:{
   x:(space.width/2)+150,
   y:(space.height/2)+150,
   v_x:12,
   v_y:12
 },
 b4:{
   x:(space.width/2)+250,
   y:(space.height/2)+250,
   v_x:14,
   v_y:14
 },
 b5:{
   x:(space.width/2)-250,
   y:(space.height/2)-250,
   v_x:16,
   v_y:16
 }
}


function Draw() {
  ctx.clearRect(0, 0, space.width, space.height)
  
  ctx.strokeStyle ="yellow"
  ctx.fillStyle ="yellow"
  ctx.beginPath()
  ctx.arc(ball.b1.x, ball.b1.y, 50, 0, Math.PI * 2, false)
  ctx.fill()
  ctx.stroke()
  
  ctx.strokeStyle ="red"
  ctx.fillStyle ="red"
  ctx.beginPath()
  ctx.arc(ball.b2.x, ball.b2.y, 50, 0, Math.PI * 2, false)
  ctx.fill()
  ctx.stroke()
  
  ctx.strokeStyle = "orange"
  ctx.fillStyle = "orange"
  ctx.beginPath()
  ctx.arc(ball.b3.x, ball.b3.y, 50, 0, Math.PI * 2, false)
  ctx.fill()
  ctx.stroke()
  
  ctx.strokeStyle = "blue"
  ctx.fillStyle = "blue"
  ctx.beginPath()
  ctx.arc(ball.b4.x, ball.b4.y, 50, 0, Math.PI * 2, false)
  ctx.fill()
  ctx.stroke()
  
  ctx.strokeStyle = "green"
  ctx.fillStyle = "green"
  ctx.beginPath()
  ctx.arc(ball.b5.x, ball.b5.y, 50, 0, Math.PI * 2, false)
  ctx.fill()
  ctx.stroke()
  }
  
  function Distance(body1, body2) 
  {return Math.sqrt(Math.pow(body1.x - body2.x, 2) + Math.pow(body1.y - body2.y, 2))}
  
  setInterval(() => {
  Draw()
    
  ball.b1.x += ball.b1.v_x;
  ball.b1.y += ball.b1.v_y;
   if(ball.b1.x>=(space.width-50) || ball.b1.x<=50){
    ball.b1.v_x= -ball.b1.v_x;}
  if(ball.b1.y>=(space.height-50) || ball.b1.y<=50){
    ball.b1.v_y= -ball.b1.v_y;}
    
    ball.b2.x += ball.b2.v_x;
    ball.b2.y += ball.b2.v_y;
   if(ball.b2.x>=(space.width-50) || ball.b2.x<=50){
    ball.b2.v_x= -ball.b2.v_x;}
  if(ball.b2.y>=(space.height-50) || ball.b2.y<=50){
    ball.b2.v_y= -ball.b2.v_y;}
    
    ball.b3.x += ball.b3.v_x;
    ball.b3.y += ball.b3.v_y;
  if(ball.b3.x>=(space.width-50) || ball.b3.x<=50){
    ball.b3.v_x= -ball.b3.v_x;}
  if(ball.b3.y>=(space.height-50) || ball.b3.y<=50){
    ball.b3.v_y= -ball.b3.v_y;}
    
    ball.b4.x += ball.b4.v_x;
    ball.b4.y += ball.b4.v_y;
  if(ball.b4.x>=(space.width-50) || ball.b4.x<=50){
    ball.b4.v_x= -ball.b4.v_x;}
  if(ball.b4.y>=(space.height-50) || ball.b4.y<=50){
    ball.b4.v_y= -ball.b4.v_y;} 
    
  ball.b5.x += ball.b5.v_x;
    ball.b5.y += ball.b5.v_y;
  if(ball.b5.x>=(space.width-50) || ball.b5.x<=50){
    ball.b5.v_x= -ball.b5.v_x;}
  if(ball.b5.y>=(space.height-50) || ball.b5.y<=50){
    ball.b5.v_y= -ball.b5.v_y;}
    
    if(Distance(ball.b1, ball.b2)<=110){
   var a,d;
    a=ball.b1.v_x;
    ball.b1.v_x=ball.b2.v_x;
    ball.b2.v_x=a;
    
    d=ball.b1.v_y;
    ball.b1.v_y=ball.b2.v_y;
    ball.b2.v_y=d;
   }
    
   if(Distance(ball.b1, ball.b3)<=110){
   var e,f;
    e=ball.b1.v_x;
    ball.b1.v_x=ball.b3.v_x;
    ball.b3.v_x=e;
    
    f=ball.b1.v_y;
    ball.b1.v_y=ball.b3.v_y;
    ball.b2.v_y=f;
   }
  
   if(Distance(ball.b1, ball.b4)<=110){
   var g,h;
    g=ball.b1.v_x;
    ball.b1.v_x=ball.b4.v_x;
    ball.b4.v_x=g;
    
    h=ball.b1.v_y;
    ball.b1.v_y=ball.b4.v_y;
    ball.b4.v_y=h;
   }
   
   if(Distance(ball.b1, ball.b5)<=110){
   var i,j;
    i=ball.b1.v_x;
    ball.b1.v_x=ball.b5.v_x;
    ball.b5.v_x=i;
    
    j=ball.b1.v_y;
    ball.b1.v_y=ball.b5.v_y;
    ball.b5.v_y=j;
   }
   
   if(Distance(ball.b2, ball.b3)<=110){
   var k,l;
    k=ball.b2.v_x;
    ball.b2.v_x=ball.b3.v_x;
    ball.b3.v_x=k;
    
    l=ball.b2.v_y;
    ball.b2.v_y=ball.b3.v_y;
    ball.b3.v_y=l;
   }
   
   if(Distance(ball.b2, ball.b4)<=110){
   var m,n;
    m=ball.b2.v_x;
    ball.b2.v_x=ball.b4.v_x;
    ball.b4.v_x=m;
    
    n=ball.b2.v_y;
    ball.b2.v_y=ball.b4.v_y;
    ball.b4.v_y=n;
   }
   
   if(Distance(ball.b2, ball.b5)<=110){
   var o,p;
    a=ball.b2.v_x;
    ball.b2.v_x=ball.b5.v_x;
    ball.b5.v_x=a;
    
    d=ball.b2.v_y;
    ball.b2.v_y=ball.b5.v_y;
    ball.b5.v_y=d;
   }
  
    if(Distance(ball.b3, ball.b4)<=110){
   var q,r;
    a=ball.b3.v_x;
    ball.b3.v_x=ball.b4.v_x;
    ball.b4.v_x=a;
    
    d=ball.b3.v_y;
    ball.b3.v_y=ball.b4.v_y;
    ball.b4.v_y=d;
   }
   
   if(Distance(ball.b3, ball.b5)<=110){
   var s,t;
    s=ball.b3.v_x;
    ball.b3.v_x=ball.b5.v_x;
    ball.b5.v_x=s;
    
    t=ball.b3.v_y;
    ball.b3.v_y=ball.b5.v_y;
    ball.b5.v_y=t;
   }
   
   if(Distance(ball.b4, ball.b5)<=110){
   var u,v;
    u=ball.b4.v_x;
    ball.b4.v_x=ball.b5.v_x;
    ball.b5.v_x=u;
    
    v=ball.b4.v_y;
    ball.b4.v_y=ball.b5.v_y;
    ball.b5.v_y=v;
   }
   
  }, 17);


