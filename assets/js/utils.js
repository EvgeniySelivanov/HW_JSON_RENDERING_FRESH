"use strict";

const getInitial=(name)=>(name==='')?'':name.split(/\s+/).map(word=>word[0].toUpperCase()).join('.')+".";
  

const stringToColour = function(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let colour = '#';
  for (var i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xFF;
    colour += ('00' + value.toString(16)).substring(2);
  }
  return colour.length===7?colour:colour+'0';
}




function createActorStr({target}){
 return selectedList.append(createElement('p',{classNames:['actorString']},document.createTextNode(target.childNodes[0].childNodes[1].innerText)));

 
}

function handlerOther({target}){
console.log(typeof target);
console.log({target});
target.addEventListener('click',createActorStr({target})) ;
target.removeEventListener('click',createActorStr);

}

function handlerImageError({target}){
  target.remove();
}
function handlerImageLoad({target}){
target.hidden=false;
}
/**
 * 
 * @param {string} tag 
 * @param {object} options  { classNames, listeners, attrs , styles}
 * @param  {...Node|string} children 
 * @returns {Node}
 */
function createElement(tag='div', { classNames, listeners, attrs , styles}={}, ...children) {
  const elem = document.createElement(tag);
  if (classNames) {
    elem.classList.add(...classNames);
  }
  if (listeners) {
    for (const [typeEvent, handler] of Object.entries(listeners)) {
      elem.addEventListener(typeEvent, handler);
    }
  }
  if (attrs) {
    for (const [typeAttr, valueAttr] of Object.entries(attrs)) {
      elem.setAttribute(typeAttr, valueAttr);
    }
  }
  if (styles) {
    for (const [nameStyle, valueStyle] of Object.entries(styles)) {
      elem.style[nameStyle] = valueStyle;
    }
  }
  elem.append(...children);
  return elem;
}


function createLinks(links){

const res= links.map((link)=>{
const socialIcon=socialMap.get(new URL(link).host);
return createElement('a',{classNames:['icon',socialIcon],attrs:{'href':link}})}
);
return res;
};
