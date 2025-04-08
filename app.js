let selectMenu = document.querySelectorAll('select');
console.log(selectMenu);
// Get the hour select dropdown
const hourSelect = document.getElementById('hour-select');

// Loop through hours from 1 to 12 and create option elements
for(let i = 12 ;i>0; i--){
    i = i<10 ? '0' + i : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[0].insertAdjacentHTML('beforeend', option);
   // selectMenu[1].insertAdjacentHTML('beforeend', option);
}
for (let i = 59 ; i >0 ; i--){
    i = i<10 ? '0' + i : i;
    let option = `<option value="${i}">${i}</option>`;
    //selectMenu[0].insertAdjacentHTML('beforeend', option);
    selectMenu[1].insertAdjacentHTML('beforeend', option);
}
for (let i = 0 ; i < 2 ; i++){
    let ampm = i == 0 ? 'AM' : 'PM';
    let option = `<option value="${ampm}">${ampm}</option>`;
   // let option = `<option value="${i}">${i}</option>`;
    selectMenu[2].insertAdjacentHTML('beforeend', option);
}


