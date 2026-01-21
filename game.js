let first = null;
let lock = false;
let matches = 0;

document.querySelectorAll('.card').forEach(card=>{
  card.onclick = ()=>{
    if(lock || card === first) return;
    card.style.background = "white";

    if(!first){
      first = card;
    } else {
      lock = true;
      if(first.dataset.match === card.dataset.match){
        matches++;
        reset();
        if(matches === 2){
          setTimeout(()=>{
            window.location.href = "final.html";
          },1000);
        }
      } else {
        setTimeout(()=>{
          first.style.background="red";
          card.style.background="red";
          reset();
        },800);
      }
    }
  }
});

function reset(){
  first=null;
  lock=false;
}
