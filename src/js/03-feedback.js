import throttle from 'lodash.throttle';


const formEl = document.querySelector(".feedback-form");

let inputRes = {};

initForm();

formEl.addEventListener('submit', evt => {
    evt.preventDefault();
    const formData = new FormData(formEl);
    formData.forEach((value, name) => console.log(value, name));
   
    localStorage.removeItem('feedback-form-state');
    evt.currentTarget.reset();
})

formEl.addEventListener('input', throttle(evt => {
    inputRes[evt.target.name] = evt.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(inputRes));
}, 500));

function initForm() {
    let infoByUser = localStorage.getItem('feedback-form-state');
    
    if (infoByUser) {
        infoByUser = JSON.parse(infoByUser);
        // console.log(infoByUser);
        Object.entries(infoByUser).forEach(([name, value]) => {
            inputRes[name] = value;
            formEl.elements[name].value = value;
        })
    }
}