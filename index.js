const showtext=document.querySelector(".sec");

const changetext=()=>{
    setTimeout(()=>{
        showtext.textContent="coder";
    },0);
    setTimeout(()=>{
      showtext.textContent="developer";
    },4000);

    setTimeout(()=>{
        showtext.textContent="programmer";
    },8000);

}
changetext();
setInterval(changetext,12000);