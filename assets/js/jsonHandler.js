"use strict";

const section=document.getElementById("cardsContainer");
const selectedList=document.getElementById("selectedList");


// console.log(selectedList);
function jsonHandler(){
fetch('./assets/json/data.json')
.then((response)=>{return response.json();})
.then(
  (data)=>{data.forEach(
    (actor) => {
    
      section.append( 
        createElement('li',{
          classNames:['cardWrapper'],
          listeners: { 'click': handlerOther }
          } ,
          createElement('article',{classNames:['cardContainer']},
            createElement('div', {classNames:['cardPhotoWrapper']},
            //   createElement('div',
            //    {classNames:['cardInitial'], 
            //     styles:{'backgroundColor':stringToColour(actor.firstName)}
            //   },
            //  document.createTextNode(getInitial(actor.firstName) || "noname")
            //   ),
              createElement('img', {
                classNames:['cardPhoto'],
                listeners: { 'error': handlerImageError, 'load': handlerImageLoad },
                attrs: { 'src': actor.profilePicture, 'alt': 'no image', 'hidden': true }
              })
            ),
            createElement('h2', {classNames:['cardName']}, 
            
            document.createTextNode(actor.firstName.concat(' ',actor.lastName) || document.createTextNode('noname') )
            ),
              createElement('div',{classNames:['iconBox']}, ...createLinks(actor.contacts))
          )
        )
        );

}


);})
.catch((error)=>{section.append('ERROR!!!!');})
.finally(()=>{console.log('finally');});
}
jsonHandler();

//   document.createTextNode(actor.birthdate || 'not info')
