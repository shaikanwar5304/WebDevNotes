const buttons = document.querySelectorAll('.button');
const inputFeild = document.getElementById('number-input');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let input = inputFeild.value;
        switch(e.target.innerText){
            case 'C':
                input = '';
                break;
            case '=':
                try{
                    input = eval(input);
                }catch(e){
                    input = 'Error';
                }
                break;
            case '←':
                input = input.slice(0, -1);
                break;
            default:
                input += e.target.innerText;
        }
        inputFeild.value = input;
    })
})