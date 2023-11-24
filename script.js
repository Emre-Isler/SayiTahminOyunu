const input = document.getElementById("input")
const p = document.querySelector("p")
const select = document.getElementById("zorluk")
const btn = document.querySelector("button")

btn.disabled = true
input.disabled = true
btn.textContent = "Bir Zorluk Seç"

let random = 0
let select_value
select.addEventListener("change", function(event){
    select_value = Number(event.target.value)
    random = Math.floor(Math.random() * select_value) + 1
    input.value= ""
    if (random != undefined){
        btn.disabled = false
        input.disabled = false
        btn.textContent = "Tahmin Et"
    }
    console.log(random)
})

input.addEventListener("keyup", e => {
    if(e.key == "Enter"){
        tahminEt(e)
    } 
})

let kacKere = 1
function tahminEt(e) {
    let value = Number(input.value)
    if(kacKere < 4 && value != ""){
        if(value === random){
            p.textContent = `Girdiğin Değer ${value} Doğru Bildin. ${kacKere} Kere Denedin. ${(e.timeStamp / 1000).toFixed(2)} saniyede bildin`
            p.style.color = "green"
            p.style.backgroundColor = "white"
            
        }else if (value > random) {
            p.textContent = `Girdiğin Değer ${value} Daha Küçük Bir Sayı Girin. Kalan Hakkınız ${3 - kacKere}`
            p.style.color = "red"
            p.style.backgroundColor = "white"
            kacKere++
            clearMessage ()
        }else if (value < random){
            p.textContent = `Girdiğin Değer ${value} Daha Büyük Bir Sayı Girin. Kalan Hakkınız ${3 - kacKere}`
            p.style.color = "orange"
            p.style.backgroundColor = "white"
            kacKere++
            clearMessage ()
        }else{
            p.textContent = `Geçersiz Bir Değer Girdiniz. 0 ile ${select_value} Arasında Bir Değer Giriniz`
            p.style.color = "yellow"
            p.style.backgroundColor = "red"
            clearMessage ()
        }
    }
    if(kacKere === 4){
            p.textContent = `Game Over`
            p.style.color = "yellow"
            p.style.backgroundColor = "red"
            btn.disabled = true
            input.disabled = true
    }

    input.value = ""

}

btn.addEventListener("click", tahminEt)

function clearMessage (){
    setTimeout(function(){
        p.textContent =""
    }, 5000)
}

// Zaman ayarlı fonksiyon
// setInterval 
// setTimeout 

// setTimeout(() => {
//     console.log("merhaba")
//     // 3 saniye sonra çalış
// },3000)
// setInterval(() => {
//     console.log("merhaba")
//     // 3 saniyede bir çalış
// },3000)