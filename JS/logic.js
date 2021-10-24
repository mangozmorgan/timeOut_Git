function convertMS( milliseconds ) {
    var day, hour, minute, seconds;
    seconds = Math.floor(milliseconds / 1000);
    minute = Math.floor(seconds / 60);
    seconds = seconds % 60;
    hour = Math.floor(minute / 60);
    minute = minute % 60;
    day = Math.floor(hour / 24);
    hour = hour % 24;
    return {
        // day: day,
        hour: hour,
        minute: minute,
        seconds: seconds
    };
}
let getTime = () => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let date = new Date
    let month = date.getUTCMonth()
    let dateString = date.toLocaleDateString('fr-FR',options)
    let hours = date.getHours()
    let min = date.getMinutes()
    let secondes = date.getSeconds()
    let time = [hours, min, secondes]
    let ms = Date.now()
    let data = [time,dateString,ms]
    return data
}
let dateToday = getTime()
document.querySelector('.dateNow').textContent = dateToday[1]


document.querySelector('#start').addEventListener('click', () => {
    let arrayTime = getTime()    
    localStorage.setItem('time',arrayTime[0])
    localStorage.setItem('date',arrayTime[1])
    localStorage.setItem('ms', arrayTime[2])
      
})

document.querySelector('#bigBreak').addEventListener('click', () => {
    let arrayTime = getTime()
    localStorage.setItem('break',arrayTime[2])
})
document.querySelector('#reprendre').addEventListener('click', () => {
    let arrayTime = getTime()
    let lenghtBreak = arrayTime[2]
    let dbtBreak = localStorage.getItem('break')
    let totalTimeBreak = lenghtBreak - dbtBreak
    if (localStorage.getItem('tempDePause')) {
        let lastBreak = localStorage.getItem('tempDePause')
        let newBreak = Number(lastBreak)  +Number(totalTimeBreak)        
        localStorage.setItem('tempDePause',newBreak)
    } else {
        
        localStorage.setItem('tempDePause',totalTimeBreak)
    }
})





document.querySelector('#bigStop').addEventListener('click', () => {
    //ipcRenderer.send('journee')
    let arrayTime = getTime()
    
    let heureDbt = localStorage.getItem('time')
    let newDbtHour= heureDbt.split(',')
    let startMs = localStorage.getItem('ms')
    let finalMs = arrayTime[2] - localStorage.getItem('ms')
    let breakTime = convertMS(localStorage.getItem('tempDePause'))
    let timeObject = convertMS(finalMs)
    localStorage.setItem('msWorked', finalMs)
     document.querySelector('#breakTime').textContent = `${breakTime.minute} minutes et ${breakTime.seconds} secondes`
    document.querySelector('#tempTotal').textContent= `Tu as travaillé ${timeObject.hour} heures , ${timeObject.minute - breakTime.minute} minutes et ${timeObject.seconds - breakTime.seconds} secondes aujourdhui !`
    document.querySelector('#heureDbt').textContent= `Tu as commencé(e) a ${newDbtHour[0]}H ${newDbtHour[1]}Mn `
    document.querySelector('#heureFin').textContent= `Tu as fini(e) a ${arrayTime[0][0]}H ${arrayTime[0][1]}Mn `
    
})

document.querySelector('.saveToRecap').addEventListener('click', () => {
    
    let millisecondes = Number(localStorage.getItem('msWorked').trim())
    let dataObject = {date:getTime(),temp:millisecondes}
    fetch('../php/pushRecap.php', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataObject)
    })
    .then(response => response.text())
    
        .then(data => {
           
            console.log(data);
            document.querySelector('.saveToRecap').style.display = 'none'
            document.querySelector('.resumeDayOpen').innerHTML += `<span class='done'> Journee bien ajoute a ton recap' !`;
           window.localStorage.clear()
    })
    .catch((error) => {
        console.error('Error:', error);
    });
    
})





document.querySelector('#recap').addEventListener('click', () => {

    document.querySelector('.result').innerHTML=""
    fetch('../php/getRecap.php', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },        
    })
    .then(response => response.text())
    
        .then(data => {
            
            document.querySelector('.result').innerHTML += data            
            
    })
    .catch((error) => {
        console.error('Error:', error);
    });
    
    
})

document.querySelector('.cleanRecap').addEventListener('click', () => {
     fetch('../php/removeRecap.php', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify("a")
    })
    .then(response => response.text())
    
    .then(data => {
            console.log(data);
          
    })
    .catch((error) => {
        console.error('Error:', error);
    });
})



