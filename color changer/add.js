const button = document.querySelectorAll('.box')
const body = document.querySelector("body")

button.forEach(function(box){
    box.addEventListener('click',function(color){
        if(color.target.id === 'box1'){
            body.style.backgroundColor = '#cb4a0e'
        }
        if(color.target.id === 'box2'){
            body.style.backgroundColor = '#FFEEA9'
        }
        if(color.target.id === 'box3'){
            body.style.backgroundColor = '#AF47D2'
        }
        if(color.target.id === 'box4'){
            body.style.backgroundColor = '#E88D67'
        }
        if(color.target.id === 'box5'){
            body.style.backgroundColor = '#7E8EF1'
        }
    })
})