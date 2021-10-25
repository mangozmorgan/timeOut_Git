window.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM entièrement chargé et analysé");
    document.querySelector('.voletGauche').className = "voletGaucheOpen";
    document.querySelector('.voletDroit').className = "voletDroitOpen";
    document.querySelector('#recap').className = "recapBtn";
    document.querySelector('#infoBtn').className = "infoBtn";
    document.querySelector('#decoBtn').className = "decoBtn";
    

})





document.querySelector('#start').addEventListener('click', () => {    
    document.querySelector('#bigStart').className = 'bigButtonOff'
    document.querySelector('.secondStep').className = 'secondStepOpen'
    
    
    
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








 