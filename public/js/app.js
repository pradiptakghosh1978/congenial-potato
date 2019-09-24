console.log('Client side javascript file is loaded!')

const weatherform = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#messageOne');
const messageTwo = document.querySelector('#messageTwo');

weatherform.addEventListener('submit',(e)=>{
    e.preventDefault();
    const location = search.value;
    messageOne.textContent ='loading....';
    messageTwo.textContent='';
    fetch('http://localhost:3000/weather?address=' + encodeURIComponent(location)).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            messageOne.textContent =data.error;
            messageTwo.textContent='';
        } else {
            messageOne.textContent =data.location;
            messageTwo.textContent=data.forecast;
        }
    })
})
});