var nome = document.querySelector("#nome")
var nivel = document.querySelector("#nivel")
var forca = document.querySelector("#forca")
var agilidade = document.querySelector("#agilidade")
var armadura = document.querySelector("#armadura")
var poder = document.querySelector("#poder")
var defesa = document.querySelector("#defesa")
var dequatro = document.querySelector("#dequatro")
var deseix = document.querySelector("#deseix")
var deoito = document.querySelector("#deoito")
var dedeix = document.querySelector("#dedeix")
var dedeuce = document.querySelector("#dedeuce")
var davinci = document.querySelector("#davinci")
var decem = document.querySelector("#decemvezeslaele")
var demil  = document.querySelector("#demilvezeslaele")

let novonome
let label = ""


nome.addEventListener("change",lerNome)
nivel.addEventListener("change",addPrefixo)
nivel.addEventListener("change",addPoder)
forca.addEventListener("change",addPoder)
armadura.addEventListener("change",addDef)
agilidade.addEventListener("change",addDef)



function lerNome() {
    novonome = nome.value
}

function addPrefixo() {
    if(nivel.value < 0)
    {
        label = "[HACKER] "
    }
    else if(nivel.value > 0 && nivel.value <= 5)
    {
        label = "[NOOBASSO] "
    }
    else if(nivel.value > 5 && nivel.value <= 10)
    {
        label = "[DECENTE] "
    }
    else if(nivel.value > 10)
    {
        label = "[SEM VIDA] "
    }
    nome.value = label + novonome
}

function addPoder() {
    let forcadim = forca.value - 10
    let niveldiv = nivel.value / 2
    poder.value = forcadim / 2 + niveldiv
}

function addDef() {
    defesa.value = parseInt(armadura.value) + parseInt(agilidade.value)
}

function vcrolacomomeurolo1(dado) {
      var result4 = Math.floor(Math.random() * dado) + 1
       dequatro.value = result4
       rolei1.innerHTML = `Resultado do dado: ${result4}.`
       return result4
}

function vcrolacomomeurolo2(dado) {
    let result6 = Math.floor(Math.random() * dado) + 1
     deseix.value = result6
     rolei2.innerHTML = `Resultado do dado: ${result6}.`
     return result6
}

function vcrolacomomeurolo3(dado) {
    let result8 = Math.floor(Math.random() * dado) + 1
     deseix.value = result8
     rolei3.innerHTML = `Resultado do dado: ${result8}.`
     return result8
}

function vcrolacomomeurolo4(dado) {
   let result10 = Math.floor(Math.random() * dado) + 1
     deseix.value = result10
     rolei4.innerHTML = `Resultado do dado: ${result10}.`
     return result10
}

function vcrolacomomeurolo5(dado) {
    let result12 = Math.floor(Math.random() * dado) + 1
     deseix.value = result12
     rolei5.innerHTML = `Resultado do dado: ${result12}.`
     return result12
}

function vcrolacomomeurolo6(dado) {
    let result20 = Math.floor(Math.random() * dado) + 1
     deseix.value = result20
     rolei6.innerHTML = `Resultado do dado: ${result20}.`
     return result20
}

function vcrolacomomeurolo7(dado) {
    let result100 = Math.floor(Math.random() * dado) + 1
     deseix.value = result100
     rolei7.innerHTML = `Resultado do dado: ${result100}.`
     return result100
}

function vcrolacomomeurolo8(dado) {
    let result1000 = Math.floor(Math.random() * dado) + 1
     deseix.value = result1000
     rolei8.innerHTML = `Resultado do dado: ${result1000}.`
     return result1000
}

