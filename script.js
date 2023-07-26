const mainbutton= document.querySelector("button");
const currentcolor= document.querySelector(".colornum");
const fontinthebox=document.querySelector("h1");
const body= document.body;
function randomcolorgen(){
    const red=Math.floor(Math.random()*256);
    const blue=Math.floor(Math.random()*256);
    const green=Math.floor(Math.random()*256);
    const randomcolor= "rgb("+red+","+blue+","+green+")";
    return randomcolor;
}

mainbutton.addEventListener("click", ()=> {
    const randomcolor= randomcolorgen();
    body.style.backgroundColor=randomcolor;
    currentcolor.textContent= randomcolor;
    fontinthebox.style.color=randomcolor;
})