var au= document.createElement('audio');
au.src="/mp3/Happy Birthday To You Ji-(Mr-Jat.in).mp3"
document.body.appendChild(au)
document.body.addEventListener('click', function (){
  if(au){
    console.log("yes")
    au.play()
  }else{
    alert("no")
  }
})