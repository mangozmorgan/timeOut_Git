document.querySelector('#logForm').addEventListener('submit', (e) => {
    e.preventDefault()
   
    if (document.querySelector("#nomLogin").value === '' ||document.querySelector("#passLogin").value === '' ) {
        document.querySelector('.errorLogin').textContent = "Veuillez Remplir tout les champs disponibles"
    } else {
        document.querySelector('#logForm').submit();
   
    }
})

document.querySelector('#inscForm').addEventListener('submit', (e) => {
    e.preventDefault()
    let nomUser = document.querySelector('#nomUser').value
    let pass = document.querySelector('#passwordUser').value
    let passVerif = document.querySelector('#confirmPass').value
    let email = document.querySelector('#emailInsc').value
   


    if (nomUser === '' || pass === ''|| passVerif === ''|| email === '') {
        
        document.querySelector('.error').textContent = "Veuillez Remplir tout les champs disponibles"
    }else if(pass.length<8){
        document.querySelector('.error').textContent = "Le mot de passe doit contenir au minimum 8 caracteres "
    } else if(pass !=passVerif){
         document.querySelector('.error').textContent = "Les deux mots de passe doivent etre identiques !"
    }
    else {
        document.querySelector('#inscForm').submit();
    }
})
            