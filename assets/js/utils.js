"use strict";

// const getInitial=(name)=>(name==='')?'':name.split(/\s+/).map(word=>word[0].toUpperCase()).join('.')+".";
  
const getInitial= function(firstName,lastName){
  const fullName=firstName.concat(' ',lastName);
  
  return fullName.split(/\s+/).map(word=>word[0].toUpperCase()).join('.')+".";
}






function createActorStr({target}){
 return selectedList.append(createElement('p',{classNames:['actorString']},document.createTextNode(target.outerText)));

}
function showHandCursor({target}){
  
  target.style.cursor = 'copy';
  target.removeEventListener('mouseover',showHandCursor);

}

function handlerOther({target}){
console.log({target});
createActorStr({target});
target.removeEventListener('click',handlerOther);

}


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
return createElement('a',{classNames:['icon',socialIcon],attrs:{'href':link, 'target':'_blanc'}})}
);
return res;
};
