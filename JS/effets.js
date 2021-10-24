document.querySelector('.connect').addEventListener('click', (e) => {
    document.querySelectorAll('.buttonOpen').forEach(element => {
        element.className = 'button';
    })
    document.querySelector("#logForm").className = 'loginFormOpen';
})

document.querySelector('.register').addEventListener('click', (e) => {
    document.querySelectorAll('.buttonOpen').forEach(element => {
        element.className = 'button';
    })
    document.querySelector("#inscForm").className = 'inscFormOpen';
})




document.querySelector('.cancelFormLog').addEventListener('click', () => {
    document.querySelector('#logForm').className = "loginForm"
     document.querySelectorAll('.button').forEach(element => {
         element.className = 'buttonOpen';
       })    
        document.querySelector("#btn2").style.display = 'block';
        document.querySelector("#btn3").display = 'block';
        document.querySelector(".logo").style.display = 'block';
        document.querySelector('#btn1').style.display = 'block';
        document.querySelector('#welcomAnim').style.marginTop ='0vw';
        
   
      document.querySelector(".logo").style.display = 'block';
})
document.querySelector('.cancelFormInsc').addEventListener('click', () => {
   
    document.querySelector('#inscForm').className = "inscForm"
    document.querySelectorAll('.button').forEach(element => {
        element.className = 'buttonOpen';
    })

    document.querySelector("#btn2").style.display = 'block';
        document.querySelector("#btn3").display = 'block';
        document.querySelector(".logo").style.display = 'block';
        document.querySelector('#btn1').style.display = 'block';
        document.querySelector('#welcomAnim').style.marginTop ='0vw';
})

document.querySelector("#btn1").addEventListener('click', () => {
    document.querySelector(".logo").style.display = 'none';
    document.querySelector('#welcomAnim').style.marginTop = '4vw';
})
document.querySelector("#btn2").addEventListener('click', () => {
    document.querySelector(".logo").style.display = 'none';
    document.querySelector('#welcomAnim').style.marginTop = '4vw';
    document.querySelector("#btn3").display = 'none';
})
document.querySelector("#btn3").addEventListener('click', () => {
    document.querySelector(".logo").style.display = 'none';
    document.querySelector('#welcomAnim').style.marginTop = '4vw';
    document.querySelector('#rescueForm').className = 'recuePassFromOpen';
    document.querySelector("#btn2").style.display = 'none';
    document.querySelector("#btn1").style.display = 'none';
    document.querySelector("#btn3").style.display = 'none';


})

if (document.querySelector('#errorRescue').innerHTML != '') {
    document.querySelector(".logo").style.display = 'none';
    document.querySelector('#welcomAnim').style.marginTop = '4vw';
    document.querySelector('#rescueForm').className = 'recuePassFromOpen';
    
    document.querySelector("#btn2").style.display = 'none';
    document.querySelector("#btn1").style.display = 'none';
    document.querySelector("#btn3").style.display = 'none';
}


    
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
        }, 4800);
        setTimeout(() => {
            document.querySelector('#btn2').className="buttonOpen"
        }, 5100);
        setTimeout(() => {
            document.querySelector('#btn3').className="buttonOpen"
        }, 5400);
    
    
    
     
    
    if (document.querySelector(".error").textContent.trim() === "") {
       
    } else {
        
        document.querySelector("#btn2").style.display = 'none';
        document.querySelector(".logo").style.display = 'none';
        document.querySelector("#btn2").click();
        document.querySelector('#btn1').style.display = 'none';
        document.querySelector('#welcomAnim').style.marginTop = '4vw';
        
        }
        
    if (document.querySelector(".errorLogin").textContent.trim() === "") {
        
    } else {
        document.querySelector("#btn2").style.display = 'none';
        document.querySelector(".logo").style.display = 'none';
        document.querySelector("#btn1").click();
        document.querySelector('#btn1').style.display = 'none';
        document.querySelector('#welcomAnim').style.marginTop = '4vw';
        
    }
    });

    let modalMail = document.querySelector('.modalMailOff')
    if (modalMail.innerHTML.trim() === 'true') {
    modalMail.className = 'modalMail'
    modalMail.innerHTML = 'Email envoyé avec succès !'
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
   
}