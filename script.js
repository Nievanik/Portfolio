//Script to close navigation menu when clicked on any list items
let navMenu = document.querySelectorAll('.nav-menu');

navMenu.forEach((navMenu)=>{
    navMenu.addEventListener('click', ()=>{
        document.getElementById('checkbox').checked = false;
    });
})



//Script to animate element as page is scrolled down
let boxUp = document.querySelectorAll('.animate'); //Box to be animated towards  up
let boxFade = document.querySelectorAll('.animate-fade'); //Box to be fade in

window.addEventListener('scroll', animate);
let triggerPoint = window.innerHeight/5 *3.75;

function animate(){
    boxUp.forEach((box)=>{
        let boxTop = box.getBoundingClientRect().top;
        toggleShow(box, boxTop);
    })
    boxFade.forEach((box)=>{
        let boxTop = box.getBoundingClientRect().top;
        toggleShow(box, boxTop);
    })
}

function toggleShow(box, boxTop){
    if (boxTop<triggerPoint) {
        box.classList.add('show')
    }else{
        box.classList.remove('show')
    }
}
animate();


//Script to display projects

let btns = document.querySelectorAll('.categories');

btns.forEach((btn)=>{
    btn.addEventListener('click', (event)=>{
        btns.forEach((btn)=>{
            btn.classList.remove('selected')
        })
        event.target.classList.add('selected')
    })
})


let allBtn = document.querySelector('#all-btn');
let cssBtn = document.querySelector('#css-btn');
let javaScriptBtn = document.querySelector('#javascript-btn');
let backendBtn = document.querySelector('#backend-btn');
let curBtn = 'all';

let allProjects = document.querySelectorAll('.all');
let cssProjects = document.querySelectorAll('.css');
let janaScriptProjects = document.querySelectorAll('.javascript');
let backendProjects = document.querySelectorAll('.backend');

allBtn.addEventListener('click',()=>{
    if (curBtn !== 'all') {
        curBtn = 'all';    
        hide(allProjects)  
        setTimeout(()=>{
            show(allProjects)
        },300)
    }
})

cssBtn.addEventListener('click', ()=>{
    if (curBtn!== 'css') {
        curBtn = 'css';    
        hide(allProjects)  
        setTimeout(()=>{
            show(cssProjects)
        },300)
    }
})
javaScriptBtn.addEventListener('click', ()=>{
    if (curBtn!== 'javascript') {
        curBtn = 'javascript';    
        hide(allProjects)  
        setTimeout(()=>{
            show(janaScriptProjects)
        },300)
    }
})
backendBtn.addEventListener('click', ()=>{
    if (curBtn!== 'backend') {
        curBtn = 'backend';    
        hide(allProjects)  
        setTimeout(()=>{
            show(backendProjects)
        },300)
    }
})


function show(items){
    items.forEach((item)=>{
        item.style.display = 'block';
        setTimeout(() => {
            item.style.transform = "scale(1)";
        }, 50);
  
    });
}
function hide(items){
    items.forEach((item)=>{
            item.style.transform = "scale(0)";
        setTimeout(() => {
            item.style.display = 'none';
        }, 300);
    });
}