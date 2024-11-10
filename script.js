let nomes = ["Maximus", "Eiloy", "Lirius"]
let nivel = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"]
let xp = 0

while(xp < 10001){
    xp += 1000

    if (xp < 1001){
        nivel = "Ferro"
        console.log(`O Herói de nome ${nomes[0]} está no nível de ${nivel} com ${xp} de xp`)
    } else if (xp < 2001){
        nivel = "Bronze"
        console.log(`O Herói de nome ${nomes[0]} está no nível de ${nivel} com ${xp} de xp`)
    } else if (xp < 5001){
        nivel = "Prata"
        console.log(`O Herói de nome ${nomes[0]} está no nível de ${nivel} com ${xp} de xp`)
    } else if (xp < 7001){
        nivel = "Ouro"
        console.log(`O Herói de nome ${nomes[0]} está no nível de ${nivel} com ${xp} de xp`)
    } else if (xp < 8001){
        nivel = "Platina"
        console.log(`O Herói de nome ${nomes[0]} está no nível de ${nivel} com ${xp} de xp`)
    } else if (xp < 9001){
        nivel = "Ascendente"
        console.log(`O Herói de nome ${nomes[0]} está no nível de ${nivel} com ${xp} de xp`)
    } else if (xp < 10001){
        nivel = "Imortal"
        console.log(`O Herói de nome ${nomes[0]} está no nível de ${nivel} com ${xp} de xp`)
    } else {
        nivel = "Radiante"
        console.log(`O Herói de nome ${nomes[0]} está no nível de ${nivel} com ${xp} de xp`)
    }
}
