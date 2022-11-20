
// why are you curently reading this?

//button verbs
let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')
let btn4 = document.getElementById('btn4')
let btn5 = document.getElementById('btn5')
let btn6 = document.getElementById('btn6')
let btn7 = document.getElementById('btn7')

//else
let screenFlashing = false
let logoutBtn = document.getElementById('logout')


//cookie verbs
let exitCookie = document.getElementById('exitCookie')
let clicker = document.getElementById('clicker')
let cookieDisplayer = document.getElementById('displayCookie')
let cookieDiv = document.getElementById('cookie')
let cookieAmount = 0
let addCookie = 1
let addCPS = 0

let mulArrays = {
    elements: [document.getElementById('sp1'), document.getElementById('sp2'), document.getElementById('sp3'), document.getElementById('sp4'), document.getElementById('sp5')],
    prices: [100, 1000, 3500, 5000, 10000],
    add: [2, 4, 8, 16, 24]
}

let epArrays = {
    elements: [document.getElementById('ep1'), document.getElementById('ep2'), document.getElementById('ep3'), document.getElementById('ep4')],
    prices: [100, 1000, 5000, 10000],
    add: [1, 5, 10, 25]
}

for (let i = 0; i < mulArrays.elements.length; i++) {
    console.log(mulArrays.elements[i])
    mulArrays.elements[i].addEventListener(('click'), () => {
        console.log('clicked', i)
        if (cookieAmount >= mulArrays.prices[i]) {
            cookieAmount -= mulArrays.prices[i]
            cookieDisplayer.innerHTML = 'Cookies:  ' + cookieAmount
            addCookie = mulArrays.add[i]
        } else {
            alert("you're too poor to buy that")
        }
    })
}

for (let i = 0; i < epArrays.elements.length; i++) {
    console.log(epArrays.elements[i])
    epArrays.elements[i].addEventListener(('click'), () => {
        console.log('clicked', i)
        if (cookieAmount >= epArrays.prices[i]) {
            cookieAmount -= epArrays.prices[i]
            addCPS = epArrays.add[i]
        } else {
            alert("you're too poor to buy that")
        }
    })
}
setInterval(() => { cookieAmount += addCPS; cookieDisplayer.innerHTML = 'Cookies:  ' + cookieAmount; }, 1000)

//math verbs
let anvBTN = document.getElementById('anwBTN')
let mathText = document.getElementById('math')
let answDISPLAY = document.getElementById('displayAnsw')
let mathFrame = document.getElementById('calculator')
let mathOpened = false

//sound verbs
let musicClosed = true
let musicFrame = document.getElementById('musicBoard')
let exitBtn = document.getElementById('exitMusic')
let volume0 = document.getElementById('volume')
var audio = new Audio('/music/gus.mp3')
let play0 = document.getElementById('play0')
let canChange = true
let customPlaying = false

//stopwatch
const stopwatch = document.getElementById('stopwatch')
const displayTime = document.getElementById('displayTime')
const startTime = document.getElementById('')
let watchClosed = true

function deleteCookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

let cookieVis = false
clicker.addEventListener('mousedown', () => {
    cookieAmount += addCookie
    cookieDisplayer.innerHTML = 'Cookies:  ' + cookieAmount
})

exitCookie.addEventListener(('click'), () => {
    cookieDiv.style.visibility = 'hidden'
    cookieVis = false
})

btn2.addEventListener('click', () => {
    if (cookieVis == false) {
        cookieDiv.style.visibility = 'visible'
        cookieVis = true
    } else {
        cookieVis = false
        cookieDiv.style.visibility = 'hidden'
    }
})

btn1.addEventListener('click', () => {
    if (screenFlashing == false) {
        screenFlashing = true
    } else {
        screenFlashing = false
        document.body.style.backgroundColor = 'rgb(19, 19, 19)'
    }
})
let whiteFlash = false
setInterval(() => {
    if (screenFlashing) {
        if (whiteFlash) {
            document.body.style.backgroundColor = 'rgb(19, 19, 19)'
            whiteFlash = false
        } else {
            document.body.style.backgroundColor = 'white'
            whiteFlash = true
        }
    }
}, 10)

btn3.addEventListener('click', () => {
    navigator.clipboard.writeText(`My name is Walter Hartwell White. I live at 308 Negra Arroyo Lane, Albuquerque, New Mexico, 87104. This is my confession. If you're watching this tape, I'm probably dead, murdered by my brother-in-law Hank Schrader. Hank has been building a meth empire for over a year now and using me as his chemist. Shortly after my 50th birthday, Hank came to me with a rather, shocking proposition. He asked that I use my chemistry knowledge to cook methamphetamine, which he would then sell using his connections in the drug world. Connections that he made through his career with the DEA. I was... astounded, I... I always thought that Hank was a very moral man and I was... thrown, confused, but I was also particularly vulnerable at the time, something he knew and took advantage of. I was reeling from a cancer diagnosis that was poised to bankrupt my family. Hank took me on a ride along, and showed me just how much money even a small meth operation could make. And I was weak. I didn't want my family to go into financial ruin so I agreed. Every day, I think back at that moment with regret. I quickly realized that I was in way over my head, and Hank had a partner, a man named Gustavo Fring, a businessman. Hank essentially sold me into servitude to this man, and when I tried to quit, Fring threatened my family. I didn't know where to turn. Eventually, Hank and Fring had a falling out. From what I can gather, Hank was always pushing for a greater share of the business, to which Fring flatly refused to give him, and things escalated. Fring was able to arrange, uh I guess I guess you call it a "hit" on my brother-in-law, and failed, but Hank was seriously injured, and I wound up paying his medical bills which amounted to a little over $177,000. Upon recovery, Hank was bent on revenge, working with a man named Hector Salamanca, he plotted to kill Fring, and did so. In fact, the bomb that he used was built by me, and he gave me no option in it. I have often contemplated suicide, but I'm a coward. I wanted to go to the police, but I was frightened. Hank had risen in the ranks to become the head of the Albuquerque DEA, and about that time, to keep me in line, he took my children from me. For 3 months he kept them. My wife, who up until that point, had no idea of my criminal activities, was horrified to learn what I had done, why Hank had taken our children. We were scared. I was in Hell, I hated myself for what I had brought upon my family. Recently, I tried once again to quit, to end this nightmare, and in response, he gave me this. I can't take this anymore. I live in fear every day that Hank will kill me, or worse, hurt my family. I... All I could think to do was to make this video in hope that the world will finally see this man, for what he really is.`);
})

logoutBtn.addEventListener(('click'), () => {
    console.log('logged out')
    deleteCookie('key')
    location.reload()
})

anvBTN.addEventListener(('click'), () => {
    let answer = eval(mathText.value)
    answDISPLAY.innerHTML = '= ' + answer

})

btn4.addEventListener(('click'), () => {
    if (mathOpened) {
        mathFrame.style.visibility = 'hidden'
        mathOpened = false
    } else {
        mathFrame.style.visibility = 'visible'
        mathOpened = true
    }
})

exitBtn.addEventListener(('click'), () => {
    musicFrame.style.visibility = 'hidden'
})

btn5.addEventListener('click', () => {
    musicFrame.style.visibility = 'visible'
})


volume0.addEventListener('change', () => {
    audio.currentTime = parseInt(volume0.value)
    console.log(parseInt(volume0.value))
})

//custom sound script begines here

volume0.addEventListener('mousedown', () => {
    canChange = false
})
volume0.addEventListener('mouseup', () => {
    canChange = true
})

volume0.addEventListener('touchstart', () => {
    canChange = false
})
volume0.addEventListener('touchend', () => {
    canChange = true
})

play0.addEventListener('click', () => {
    if (!customPlaying) {
        customPlaying = true
        audio.play()
    } else {
        customPlaying = false
        audio.pause()
    }
})

function percentage(partialValue, totalValue) {
    return (parseInt(audio.duration) * partialValue) / totalValue;
}


percentage(96, 131)
setInterval(() => {
    console.log(audio.currentTime)
    if (canChange == true) {
        volume0.value = percentage(parseInt(audio.currentTime), parseInt(audio.duration))
    }

}, 100)

// encrption

const stringInput = document.getElementById('string')
const keyInput = document.getElementById('key')
const startButton = document.getElementById('startEnc')
const EncOutput = document.getElementById('EncOutput')
const genKeyBtn = document.getElementById('genKeyBtn')
const genKeyOutput = document.getElementById('genKeyOuput')
const encMode = document.getElementById('encMode')
const encryptDiv = document.getElementById("encryptDiv")
const exitEnc = document.getElementById("exitEnc")
let encrypt = true
let alf = ` qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890.,?!'/@#~$%":;*()`

btn6.addEventListener(('click'), () => { encryptDiv.style.visibility = 'visible' })

exitEnc.addEventListener('click', () => { encryptDiv.style.visibility = 'hidden' })

let encryptFunc = function () {
    let string1 = stringInput.value
    let alfRANDOM = keyInput.value
    let result = string1.split('')
    result = result.map((y) => {
        return alf[alfRANDOM.indexOf(y)]
    })
    let x = ''
    for (let i = 0; i < result.length; i++) {
        x += result[i]
    }
    return x
}

let decryptFunc = function () {
    let string1 = stringInput.value
    let alfRANDOM = keyInput.value
    let result = string1.split('')
    result = result.map((y) => {
        return alfRANDOM[alf.indexOf(y)]
    })
    let x = ''
    for (let i = 0; i < result.length; i++) {
        x += result[i]
    }
    return x
}

startButton.addEventListener('click', () => {
    if (encrypt) {
        EncOutput.innerText = 'Output: ' + encryptFunc()
    } else {
        EncOutput.innerText = 'Output: ' + decryptFunc()
    }
})

encMode.addEventListener('click', () => {
    if (encrypt) {
        encrypt = false
        encMode.innerText = 'Mode: Decrypt'
    } else {
        encMode.innerText = 'Mode: Encrypt'
        encrypt = true
    }
})

let GenerateKey = function () {
    let newALF = ''
    function check() {
        for (let x = 0; x < alf.length; x++) {
            if (alf.includes(newALF[x])) { } else {
                console.log(alf.length, newALF.length)
                return false
            }
        }
        return true;
    }

    while (true) {
        let x = alf[Math.floor(Math.random() * alf.length)]
        if (!newALF.includes(x)) {
            newALF += x
        }
        if (check()) {
            break;
        }
    }
    console.log(newALF.length, alf.length)
    return newALF
}

genKeyBtn.addEventListener('click', () => {
    genKeyOutput.value = GenerateKey()
})

btn7.addEventListener('click', () => {
    
})