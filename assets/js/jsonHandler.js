"use strict";

const section=document.getElementById("cardsContainer");
const selectedList=document.getElementById("selectedList");

function jsonHandler(){
fetch('./assets/json/data.json')
.then((response)=>{return response.json();})
.then(
  (data)=>{
    const dataActors= data.filter((nextActor)=>nextActor.firstName!==''&&nextActor.lastName!=='');
    dataActors.forEach(
    (actor) => {
    
      section.append( 
        createElement('li',{
          classNames:['cardWrapper'],
          // listeners: { 'click': handlerOther ,'mouseover': showHandCursor}
          } ,
          createElement('article',{classNames:['cardContainer']},
            createElement('div', {classNames:['cardPhotoWrapper']},

              createElement('div', {classNames:['cardInitial'], 
                },
                  document.createTextNode(getInitial(actor.firstName,actor.lastName) || "noname")
                  ),


              createElement('img', {
                      classNames:['cardPhoto'],
                      listeners: { 'error': handlerImageError, 'load': handlerImageLoad},
                      attrs: { 'src': actor.profilePicture, 'alt': actor.firstName, 'hidden': true }
                      })
            ),
              createElement('h2', {classNames:['cardName'],listeners: { 'click': handlerOther ,'mouseover': showHandCursor}}, 
            
            document.createTextNode(actor.firstName.concat(' ',actor.lastName) || document.createTextNode('noname') )
            ),
              createElement('div',{classNames:['iconBox']}, ...createLinks(actor.contacts))
          )
        )
        );

}


);})
.catch((error)=>{section.append('Error!');})
.finally(()=>{console.log('finally');});
}
jsonHandler();

//   document.createTextNode(actor.birthdate || 'not info')
