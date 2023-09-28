// OPEN STAFF PROFILE

const staffs = document.querySelectorAll('.team-member');
const staffModal = document.querySelector('.open-staff');
const closeModal = document.querySelector('.close-btn')

const openStaffModal = () => {
    staffModal.style.display = 'grid';
    
}

const closeStaffModal = (e) => {
    if (e.target.classList.contains('open-staff')) {
        staffModal.style.display = 'none';
    }
}

staffs.forEach((staff) =>{
staff.addEventListener('click', openStaffModal)
});

staffModal.addEventListener('click', closeStaffModal);

closeModal.addEventListener('click', () =>{
    staffModal.style.display = 'none';
});


// Deactivate account

const button = document.querySelector('.deactivate');



const changeText = () => {
    
    if (button.innerHTML === 'Deactivate') {
        button.innerHTML = 'Activate';
        button.style.background = 'hsl(165, 100%, 37%)';
    }
    else{
       button.innerHTML = 'Deactivate';
       button.style.background = 'hsl(357, 77%, 58%)';
       
    }
}


button.addEventListener('click' , changeText);

