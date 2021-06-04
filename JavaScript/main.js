let faqbtn = document.querySelectorAll(".faq-btn")
let faqAccordion = document.querySelectorAll(".faq-accordion")
let burger = document.querySelectorAll('.burger')
let sidebarSection = document.querySelectorAll('.sidebar-section')
let body = document.querySelector('body')
function myFunc(clicked){
    faqAccordion.forEach(item => {
        if(item.dataset.itemOrder == clicked.dataset.itemOrder){
            item.classList.toggle('active')
        }
    })
}
faqbtn.forEach(item => {
    item.addEventListener('click' , function(){
        myFunc(item)
    })
})


function sidebar(clicked){
    sidebarSection.forEach(item => {
        if(item.dataset.itemOrder == clicked.dataset.itemOrder){
            item.classList.toggle('open')
            body.classList.toggle('overflow')
        }
    })
    burger.forEach(item => {
        if(item.dataset.itemOrder == clicked.dataset.itemOrder){
            item.classList.toggle('show')
        }
    })
}
burger.forEach(item => {
    item.addEventListener('click' , function(){
        sidebar(item)
    })
})