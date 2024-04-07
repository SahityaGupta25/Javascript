const btn = document.querySelectorAll('.button');
const body = document.querySelector('body');

btn.forEach(function(button){
console.log(button);
button.addEventListener('click',function(e){
    console.log(e);
    console.log(e.target); //! It states that from where event is coming from

    if (e.target.id === 'btn-1') {
        body.style.backgroundColor = "yellow"
    }

    else if (e.target.id === 'btn-2') {
        body.style.backgroundColor = "red"
    }

    else if (e.target.id === 'btn-3') {
        body.style.backgroundColor = "magenta"
    }

    else if (e.target.id === 'btn-4') {
        body.style.backgroundColor = "aqua"
    }
  
    
})
})