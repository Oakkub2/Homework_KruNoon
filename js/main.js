/* TYPEWRITER */
const content = `
1) ตัวอักษรภาษาอังกฤษมี 26 ตัว
   → ใช้ซ้ำได้ = 26³

2) ตัวเลขมี 10 ตัว (0–9)
   → เลือก 4 หลักแบบไม่ซ้ำ
   = 10 × 9 × 8 × 7

3) นำจำนวนวิธีมาคูณกัน
`;

let index = 0;
let typing = false;

function toggle(){
 const box=document.getElementById("box");
 const text=document.getElementById("text");

 box.classList.toggle("show");

 if(box.classList.contains("show")){
  index=0;
  text.textContent="";
  type();
 }
}

function type(){
 if(index<content.length){
  document.getElementById("text").textContent+=content.charAt(index++);
  setTimeout(type,28);
 }
}

/* MOUSE MOVE */
document.addEventListener("mousemove",e=>{
 const x=(e.clientX/window.innerWidth-.5)*30;
 const y=(e.clientY/window.innerHeight-.5)*30;
 document.getElementById("bg").style.transform=`translate(${x}px,${y}px)`;

 document.querySelectorAll(".meme").forEach((m,i)=>{
  const r=m.getBoundingClientRect();
  const dx=e.clientX-(r.left+r.width/2);
  const dy=e.clientY-(r.top+r.height/2);
  const d=Math.sqrt(dx*dx+dy*dy);

  if(d<180){
   const a=Math.atan2(dy,dx);
   m.style.transform=
    `translate(${-Math.cos(a)*(35+i*6)}px,${-Math.sin(a)*(35+i*6)}px)
     rotate(${i%2?10:-10}deg)`;
  }else{
   m.style.transform="translate(0,0)";
  }
 });
});

/* BUTTON TILT */
const btn=document.getElementById("btn");
btn.addEventListener("mousemove",e=>{
 const r=btn.getBoundingClientRect();
 btn.style.transform=
 `rotateX(${-(e.clientY-r.top-r.height/2)/10}deg)
  rotateY(${(e.clientX-r.left-r.width/2)/10}deg)`;
});
btn.addEventListener("mouseleave",()=>{
 btn.style.transform="rotateX(0) rotateY(0)";
});
