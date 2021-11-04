window.addEventListener('click', function(){
  console.log("== The window was clicked") //When button is clicked it sends message to console

})
var buttons = document.getElementsByClassName('in-box-button')
for (var i = 0; i < buttons.length; i++){
  buttons[i].addEventListener('click',function (){
    console.log("== A button was clicked")//When button is clicked it sends message to console
  })
}
function listenMaker(){
  return function(){
    console.log("== Inside listenMakers function")
  }
}
function handleButtonClick(event){
  console.log("== A button was clicked, event:", event)
  var box = event.target.parentNode
  box.classLst.toggle('highlighted')
}
