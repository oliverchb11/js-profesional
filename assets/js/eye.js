function eyeVisible() {
    let eye = document.querySelector('#eye');
    let inputPassword = document.querySelector('#inputPassword');
    let eyeno = document.querySelector('#eyeno');

    if (inputPassword.value === '') {
        eye.style.display = 'none';
        eyeno.style.display = 'block';
        eye.addEventListener('click', () => {
            inputPassword.type = "text";
            eye.style.display = 'none';
            eyeno.style.display = 'block';
        })
    } else {
        eyeno.addEventListener('click', () => {
            inputPassword.type = "password";
            eye.style.display = 'block';
            eyeno.style.display = 'none';
        })
    }
    inputPassword.addEventListener('keyup', () => {
        if (inputPassword.value === '') {
            eye.style.display = 'none';
            eyeno.style.display = 'block';
            eye.addEventListener('click', () => {
                inputPassword.type = "text";
                eye.style.display = 'none';
                eyeno.style.display = 'block';
            })
        } else {
            eye.style.display = 'block';
            eyeno.style.display = 'none';
            eyeno.addEventListener('click', () => {
                inputPassword.type = "password";
                eye.style.display = 'block';
                eyeno.style.display = 'none';
            })
        }
    })


}

eyeVisible();