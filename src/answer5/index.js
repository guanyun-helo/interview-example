// How to determine when an element has disappeared from the view is key


const style = document.createElement('link')
style.setAttribute('rel','stylesheet')
style.setAttribute('href','https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css')
document.querySelector('head').appendChild(style)

let options = {
    rootMargin: '0px',
    threshold: 1.0
}
let isVisible = false

let setVisible = () => {
    isVisible = !isVisible
}

const target = document.querySelector('.category-list');
const fatherElement = document.querySelector('.container')
const fixedSelect = document.createElement('div')
const select = document.createElement('select')
const option = document.createElement("option");

fixedSelect.className= "fix-select"
fixedSelect.innerText = 'TO DOS'
option.text = "development";
select.add(option)
fixedSelect.appendChild(select)
fatherElement.appendChild(fixedSelect)

function renderElement() {
    if(isVisible === true){
        fixedSelect.style.display = "none"
    }else{
        fixedSelect.className = 'fix-select animate__animated animate__fadeInDown'
        fixedSelect.style.display = "flex"
    }
}


let observer = new IntersectionObserver((callback) => {
    setVisible()
    renderElement()
});

observer.observe(target);






