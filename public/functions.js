
let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')
let screenFlashing = false
let clicker = document.getElementById('clicker')
let cookieDisplayer = document.getElementById('displayCookie')
let cookieDiv = document.getElementById('cookie')
let cookieAmount = 0
let logoutBtn = document.getElementById('logout')
function deleteCookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

let cookieVis = false
clicker.addEventListener('click', () => {
    cookieAmount++
    cookieDisplayer.innerHTML = 'Cookies:  ' + cookieAmount
})

btn2.addEventListener('click', () => {
    if(cookieVis == false){
        cookieDiv.style.visibility = 'visible'
        cookieVis = true
    }else{
        cookieVis = false
        cookieDiv.style.visibility = 'hidden'
    }
})

btn1.addEventListener('click', () => {
    if(screenFlashing == false){
        screenFlashing = true
    }else{
        screenFlashing = false
        document.body.style.backgroundColor = 'black'
    }
})
let whiteFlash = false
setInterval(() => {
    if(screenFlashing){
        if(whiteFlash){
            document.body.style.backgroundColor = 'black'
            whiteFlash = false
        }else{
            document.body.style.backgroundColor = 'white'
            whiteFlash = true
        }
    }
    }, 10)

btn3.addEventListener('click', () => {
    navigator.clipboard.writeText(`My name is Walter Hartwell White. I live at 308 Negra Arroyo Lane, Albuquerque, New Mexico, 87104. This is my confession. If you're watching this tape, I'm probably dead, murdered by my brother-in-law Hank Schrader. Hank has been building a meth empire for over a year now and using me as his chemist. Shortly after my 50th birthday, Hank came to me with a rather, shocking proposition. He asked that I use my chemistry knowledge to cook methamphetamine, which he would then sell using his connections in the drug world. Connections that he made through his career with the DEA. I was... astounded, I... I always thought that Hank was a very moral man and I was... thrown, confused, but I was also particularly vulnerable at the time, something he knew and took advantage of. I was reeling from a cancer diagnosis that was poised to bankrupt my family. Hank took me on a ride along, and showed me just how much money even a small meth operation could make. And I was weak. I didn't want my family to go into financial ruin so I agreed. Every day, I think back at that moment with regret. I quickly realized that I was in way over my head, and Hank had a partner, a man named Gustavo Fring, a businessman. Hank essentially sold me into servitude to this man, and when I tried to quit, Fring threatened my family. I didn't know where to turn. Eventually, Hank and Fring had a falling out. From what I can gather, Hank was always pushing for a greater share of the business, to which Fring flatly refused to give him, and things escalated. Fring was able to arrange, uh I guess I guess you call it a "hit" on my brother-in-law, and failed, but Hank was seriously injured, and I wound up paying his medical bills which amounted to a little over $177,000. Upon recovery, Hank was bent on revenge, working with a man named Hector Salamanca, he plotted to kill Fring, and did so. In fact, the bomb that he used was built by me, and he gave me no option in it. I have often contemplated suicide, but I'm a coward. I wanted to go to the police, but I was frightened. Hank had risen in the ranks to become the head of the Albuquerque DEA, and about that time, to keep me in line, he took my children from me. For 3 months he kept them. My wife, who up until that point, had no idea of my criminal activities, was horrified to learn what I had done, why Hank had taken our children. We were scared. I was in Hell, I hated myself for what I had brought upon my family. Recently, I tried once again to quit, to end this nightmare, and in response, he gave me this. I can't take this anymore. I live in fear every day that Hank will kill me, or worse, hurt my family. I... All I could think to do was to make this video in hope that the world will finally see this man, for what he really is.`);
})

logoutBtn.addEventListener(('click'), () => {
    deleteCookie('key')
    location.reload()
})