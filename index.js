window.addEventListener('click', function(){
  console.log("== The window was clicked")

})
var buttons = document.getElementsByClassName('in-box-button')
for (var i = 0; i < buttons.length; i++){
  buttons[i].addEventListener('click',function (){
    console.log("== A button was clicked")
  })
}
