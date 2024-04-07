const clock = document.getElementById('clock')

setInterval(function(){
    newDate =  new Date();
    // console.log(newDate);
    clock.innerHTML = newDate.toLocaleTimeString()
    

},1000)

