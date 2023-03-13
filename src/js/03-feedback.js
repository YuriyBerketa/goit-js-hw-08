// import throttle from 'lodash.throttle';


const formEl = document.querySelector(".feedback-form");

let inputRes = {};

initForm();

formEl.addEventListener('submit', evt => {
    evt.preventDefault();
    const formData = new FormData(formEl);
    formData.forEach((value, name) => console.log(value, name));
   
    localStorage.removeItem('feedback-form-state');
    //  inputRes = {};
    evt.currentTarget.reset();
})

formEl.addEventListener('input', evt => {
    inputRes[evt.target.name] = evt.target.value;
    console.log(inputRes);
    localStorage.setItem('feedback-form-state', JSON.stringify(inputRes));
});

function initForm() {
    let infoByUser = localStorage.getItem('feedback-form-state');
    // console.log(infoByUser);
    if (infoByUser) {
        infoByUser = JSON.parse(infoByUser);
        console.log(infoByUser);
        Object.entries(infoByUser).forEach(([name, value]) => {
            // console.log(name, value);
            inputRes[name] = value;
            formEl.elements[name].value = value;
        })
    }
}