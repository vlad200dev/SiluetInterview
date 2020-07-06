window.addEventListener("DOMContentLoaded", () => {

  const parentOffset = document.querySelector('.center');
  const childElem = document.querySelector('.center-fixed__block-5');

  const computedStyle = window.getComputedStyle(childElem);
  let computedStyleWidth = +computedStyle.getPropertyValue('width').slice(0,-2);
  let computedStyleHeight = +computedStyle.getPropertyValue('height').slice(0,-2);

  
  function getCoords(elem) {
    let box = elem.getBoundingClientRect();
    return {
      top: box.top,
      left: box.left,
      height: box.height
    };
  }

  let offset;
  
  var x = window.matchMedia("(max-width: 1140px)");
  if(x.matches) {
    offset = 10;
  } else {
    offset = 31;
  }


  positionAbsoluteAt(parentOffset,childElem, computedStyleWidth, computedStyleHeight, offset);
  
  function positionAbsoluteAt(anchor, child, x, y, z) {
    let anchorCoords = getCoords(anchor);

    child.style.position = "absolute";
    child.style.top = 0 + anchorCoords.height - y - y + 'px';
    child.style.left = 0 - x - z + 'px';
  }
  

//=======================================

  const sdb = document.getElementsByClassName('sidebar__fixed')[0];
  const sdbBottom = sdb.getBoundingClientRect().bottom;
  console.log(sdbBottom);


  const fxb = document.getElementsByClassName('center-fixed__block-5')[0];
  const fxbTop = fxb.getBoundingClientRect().top;
  console.log(fxbTop);


  console.log(fxbTop-sdbBottom);
  let scroll = document.documentElement.scrollTop;
  console.log(scroll);


  let defer = fxbTop-sdbBottom;

  window.addEventListener('scroll', () => {
      if( defer <= 20) {        
        sdb.style.position = 'static';
      }           
  });



  //=============================================

  



});