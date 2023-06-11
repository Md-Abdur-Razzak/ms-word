let textarea,fontSizeSelect,backgroundColor,fontColor,data;
textarea=document.querySelector('#textarea');
fontSizeSelect=document.querySelector('#font-size-Select');
backgroundColor=document.querySelector('#background-Color');
fontColor=document.querySelector('#font-color');
let reset = document.querySelector('.reset');
let fontSizeValue1;
fontSizeSelect.addEventListener('change',(e)=>{
    fontSizeValue1=(e.target.value);

    localStorage.setItem('fontSizeStoredata',fontSizeValue1)

    textarea.style.fontSize=`${fontSizeValue1}`

})

backgroundColor.addEventListener('change',(e)=>{
    let fontSizeValue2=(e.target.value);
    localStorage.setItem('backgroundColorStorage',fontSizeValue2)
    textarea.style.backgroundColor=`${fontSizeValue2}`;
   
})








fontColor.addEventListener('change',(e)=>{
    let fontSizeValue3=(e.target.value);
    
     localStorage.setItem('fontColorStorage',fontSizeValue3)
    textarea.style.color=`${fontSizeValue3}`;
    
  




})


function student (){
    const backgroundColorStorage = localStorage.getItem('backgroundColorStorage')
    textarea.style.backgroundColor=`${backgroundColorStorage}`;
    backgroundColor.value=backgroundColorStorage;

    const fontSizeStoredata = localStorage.getItem('fontSizeStoredata')
    textarea.style.fontSize=`${fontSizeStoredata}`;
    fontSizeSelect.value=fontSizeStoredata;

    const fontColorStorage = localStorage.getItem('fontColorStorage')
 
    textarea.style.color=`${fontColorStorage}`;
    fontColor.value=fontColorStorage;
   

   
}
student()


// function mina(){
    
// }

// mina()



