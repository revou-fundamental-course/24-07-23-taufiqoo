let navbar = document.querySelector('.header .navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.add('active');
}
document.querySelector('#nav-close').onclick = () =>{
    navbar.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.add('active');
}

document.querySelector('#close-search').onclick = () =>{
    searchForm.classList.remove('active');
}
window.onscroll=()=>{
    navbar.classList.remove('active');
    if(window.scrollY>0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
};
window.onload=()=>{
    if(window.scrollY>0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
};

// function validateForm() {
//     const nameInput = document.getElementById('name');
//     const emailInput = document.getElementById('email');
//     const phoneInput = document.getElementById('phone');
//     const messageInput = document.getElementById('message');
//     let isValid = true;

//     if (nameInput.value.trim() === '') {
//         setErrorFor(nameInput, 'Nama tidak boleh kosong');
//         isValid = false;
//     } else {
//         setSuccessFor(nameInput);
//     }

//     if (emailInput.value.trim() === '') {
//         setErrorFor(emailInput, 'Email tidak boleh kosong');
//         isValid = false;
//     } else if (!isValidEmail(emailInput.value.trim())) {
//         setErrorFor(emailInput, 'Format email tidak valid');
//         isValid = false;
//     } else {
//         setSuccessFor(emailInput);
//     }

//     if (phoneInput.value.trim() === '') {
//         setErrorFor(phoneInput, 'Nomor telepon tidak boleh kosong');
//         isValid = false;
//     } else {
//         setSuccessFor(phoneInput);
//     }

//     if (messageInput.value.trim() === '') {
//         setErrorFor(messageInput, 'Pesan tidak boleh kosong');
//         isValid = false;
//     } else {
//         setSuccessFor(messageInput);
//     }

//     return isValid;
// }

// function setErrorFor(input, message) {
//     const formControl = input.parentElement;
//     const errorMsg = formControl.querySelector('.error-message');
//     formControl.className = 'input-fields error';
//     errorMsg.innerText = message;
// }

// function setSuccessFor(input) {
//     const formControl = input.parentElement;
//     formControl.className = 'input-fields success';
// }

// function isValidEmail(email) {
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
// }

// function validateForm() {
// // Mengambil data dari form
// const name = document.getElementById('name').value.trim();
// const email = document.getElementById('email').value.trim();
// const password = document.getElementById('phone').value;
// const konfirmasiPassword = document.getElementById('message').value;

// // Reset error message
// document.getElementById('nameError').textContent = '';
// document.getElementById('emailError').textContent = '';
// document.getElementById('phoneError').textContent = '';
// document.getElementById('messageError').textContent = '';

// // Validasi field tidak boleh kosong
// if (nama === '') {
//   document.getElementById('nameError').textContent = 'Nama harus diisi';
//   return false;
// }

// if (email === '') {
//   document.getElementById('emailError').textContent = 'Email harus diisi';
//   return false;
// }

// if (password === '') {
//   document.getElementById('phoneError').textContent = 'Nomor telepon harus diisi';
//   return false;
// }

// if (password === '') {
//     document.getElementById('messageError').textContent = 'Pesan harus diisi';
//     return false;
// }


// // Jika validasi berhasil, form akan dikirimkan
// alert('Registrasi berhasil!');
// return true;
// }

function validateForm() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;

    let isValid = true;

    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    document.getElementById('messageError').textContent = '';

    if (name.trim() === '') {
        document.getElementById('nameError').textContent = 'Nama harus diisi';
        isValid = false;
    }

    if (email.trim() === '') {
        document.getElementById('emailError').textContent = 'Email harus diisi';
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        document.getElementById('emailError').textContent = 'Format email invalid';
        isValid = false;
    }

    if (phone.trim() === '') {
        document.getElementById('phoneError').textContent = 'Nomor telepon harus diisi';
        isValid = false;
    } else if (!/^\+?\d+$/.test(phone)) {
        document.getElementById('phoneError').textContent = 'Format nomor telepon invalid';
        isValid = false;
    }

    if (message.trim() === '') {
        document.getElementById('messageError').textContent = 'Pesan harus diisi';
        isValid = false;
    }

    return isValid;
}
