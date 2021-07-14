import Vue from 'vue'

Vue.filter('codificado', function(value) {
    return value.replace("u","a").replace("o","e").replace("e","o").replace("a","u")
})

Vue.filter('pasarAmayuscula', function(value) {
    return value.toUpperCase()
})

Vue.filter('pasarAminuscula', function(value) {
    return value.toLowerCase()
})

Vue.filter('intercalaDesdeMayuscula', function(value) {
    let valor= value.toLowerCase().split('').map((letra, index) => {
    if (index % 2 === 0) {
        return letra.toUpperCase()
    }
    return letra
    }).join('')
    return valor
})

Vue.filter('intercalaDesdeMinuscula', function(value) {
    let valor= value.toUpperCase().split('').map((letra, index) => {
    if (index % 2 === 0) {
        return letra.toLowerCase()
    }
    return letra
    }).join('')
    return valor
})
