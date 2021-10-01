// alert("Hello");
document.querySelector('.container-edit').style.display = 'none';

function editProfile() {
    document.querySelector('.container-std').style.display = 'none';
    document.querySelector('.container-edit').style.display = 'block';

    const name = document.querySelector('#name').textContent;
    document.querySelector('#input-name').value = name;

    const email = document.querySelector('#email').textContent;
    document.querySelector('#input-email').value = email;

    const interests = document.querySelector('#interests').textContent;
    document.querySelector('#input-interests').value = interests;
}

function saveProfile() {
    document.querySelector('#name').textContent = document.querySelector('#input-name').value;
    document.querySelector('#email').textContent = document.querySelector('#input-email').value;
    document.querySelector('#interests').textContent = document.querySelector('#input-interests').value;

    document.querySelector('.container-std').style.display = 'block';
    document.querySelector('.container-edit').style.display = 'none';
}
