window.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM entièrement chargé et analysé");
    document.querySelector('.voletGauche').className = "voletGaucheOpen";
    document.querySelector('.voletDroit').className = "voletDroitOpen";
    document.querySelector('#recap').className = "recapBtn";
    document.querySelector('#infoBtn').className = "infoBtn";
    document.querySelector('#decoBtn').className = "decoBtn";
    document.querySelector('#removeBtn').className = "removeAccount";

})





document.querySelector('#start').addEventListener('click', () => {    
    document.querySelector('#bigStart').className = 'bigButtonOff'
    document.querySelector('.secondStep').className = 'secondStepOpen'
    document.querySelector('.hello').style.display = 'none'
    
    
})

document.querySelector('#break').addEventListener('click', () => {
    document.querySelector('#bigBreak').className = 'bigButtonOff'
    document.querySelector('#bigStop').className = 'bigButtonOff'
    document.querySelector('#bigReprendre').className = 'bigButton'
    
})
document.querySelector('#reprendre').addEventListener('click', () => {
    document.querySelector('#bigBreak').className = 'bigButton bigResp'
    document.querySelector('#bigStop').className = 'bigButton bigResp'
    document.querySelector('#bigReprendre').className = 'bigButtonOff'
    
})

document.querySelector('#bigStop').addEventListener('click', () => {
    document.querySelector('.secondStepOpen').className = 'secondStep'   
    document.querySelector('.resumeDay').className = 'resumeDayOpen'
    document.querySelector('#container').classList.toggle('containerUp')
    
})

document.querySelector('#recap').addEventListener('click', () => {
    document.querySelector('#infoBtn').classList.toggle("hide")
    document.querySelector('.container').classList.toggle('containerOff')
    document.querySelector('#divRecap').classList.toggle('divRecapUp')
    document.querySelector('#infoModal').className='infoModal'
    
    
})
document.querySelector('#infoBtn').addEventListener('click', () => {
    document.querySelector('#recap').classList.toggle("hide")
    document.querySelector('.container').classList.toggle('containerOff')
    document.querySelector('#infoModal').classList.toggle('infoModalUp')  
 
    
})

document.querySelector('.cleanRecap').addEventListener('click', () => {
   
    document.querySelector('.container').className='container'
    document.querySelector('#divRecap').className='divRecap'
})
let modalMail = document.querySelector('.modalMailOff')
if (modalMail.innerHTML.trim() === 'true') {
    modalMail.className = 'modalMail'
    modalMail.innerHTML = 'Récap envoyé avec succès !'
    modalMail.style.backgroundColor = ' rgba(46, 204, 113,0.8)'
   setTimeout(() => {
        document.querySelector('.modalMail').className = 'modalMailOff'
   }, 5000);
    
    fetch('../php/removeMailStatut.php', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify("a")
    })
    
    
} else if (modalMail.innerHTML.trim() === 'false') {
    modalMail.className = 'modalMail'
    modalMail.innerHTML = 'Erreur mail'
    modalMail.style.backgroundColor = ' rgba(231, 76, 60,0.8)'
   
};





 