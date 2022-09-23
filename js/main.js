function hoverElement(element){
  let el = document.getElementById(element);

  if (el.classList.contains('active')){
    el.style.color = '#ade5ff';
  }else {
    el.style.color = 'white ';
  }
}

function outElement(element){
  let el = document.getElementById(element);

  if (el.classList.contains('active')){
    el.style.color = '#00a0dc';
  }else {
    el.style.color = '#9aa0a6';
  }
}

function activeElement(element){
  let el = document.getElementById(element);
  el.style.color = '#00a0dc';
}
