









    
    window.addEventListener("DOMContentLoaded", (event) => {
        console.log("DOM entièrement chargé et analysé");
        
        document.querySelector('.voletGauche').className = "voletGaucheOpen";
        document.querySelector('.voletDroit').className = "voletDroitOpen";
        setTimeout(() => {
            document.querySelector('.welcomAnim').className = "titleOpen"
        }, 2000);
        setTimeout(() => {
            document.querySelector('.toAnim').className = "titleOpen"
        }, 2500);
        
        
        setTimeout(() => {
            document.querySelector('.spanAnim1').className = "spanAnimOpen";
        }, 3000);
        setTimeout(() => {
            document.querySelector('.spanAnim2').className = "spanAnimOpen";
        }, 3200);
        setTimeout(() => {
            document.querySelector('.spanAnim3').className = "spanAnimOpen";
        }, 3400);
        setTimeout(() => {
            document.querySelector('.spanAnim4').className = "spanAnimOpen";
        }, 3600);
        setTimeout(() => {
            document.querySelector('.spanAnim5').className = "spanAnimOpen";
        }, 3800);
        setTimeout(() => {
            document.querySelector('.spanAnim6').className = "spanAnimOpen";
        }, 4000);
        setTimeout(() => {
            document.querySelector('.spanAnim7').className = "spanAnimOpen";
        }, 4200);
        setTimeout(() => {
            document.querySelector('.spanAnim8').className = "spanAnimOpen";
        }, 4400);
        setTimeout(() => {
            document.querySelector('.spanAnim9').className = "spanAnimOpen";
        }, 4600);
        console.log('preeeeeeeesque');
        setTimeout(() => {
            document.querySelector('#btn1').className="buttonOpen"
            document.querySelector('#btn1').textContent = 'Entrer'
        }, 4800);
        
    
    })   
    
     
    
    