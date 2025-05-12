document.addEventListener("mousemove", (event) => {
    const x = event.clientX / window.innerWidth - 0.5;
    const y = event.clientY / window.innerHeight - 0.5;

    document.querySelectorAll(".parallax").forEach((element) => {
        const speed = element.getAttribute("data-speed");
        element.style.transform = `translate(${x * speed * 20}px, ${y * speed * 20}px)`;
    })
})
// sign in page close & open animation///
const signinPage = document.getElementById('signinPage')
const signinBtn = document.getElementById('signinBtn')
const closeIcon = document.getElementById('closeIcon')

signinBtn.addEventListener('click', ()=>{
    signinPage.classList.add('openSignin')
})
closeIcon.addEventListener('click', ()=>{
     signinPage.classList.remove('openSignin')
})

//sidebar menu///
const sidebar = document.querySelector('.sidebar')
const addBtn = document.getElementById('menuBtn')
const closeBtn = document.querySelector('.close-icon')

addBtn.addEventListener('click',()=>{
    sidebar.classList.add('rightEnter')
})
closeBtn.addEventListener('click', ()=>{
    sidebar.classList.remove('rightEnter')
})
