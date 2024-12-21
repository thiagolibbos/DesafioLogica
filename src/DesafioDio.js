let nomeHeroi = "Thiago"
let xpHeroi = 0
let nivelHeroi = ""

if (xpHeroi >= 10001) { 
    nivelHeroi = "Imortal"; 
} 
else if (xpHeroi >= 9001 && xpHeroi <= 10000) { 
    nivelHeroi = "Imortal"; 
} 
else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
    nivelHeroi = "Ascendente"; 
} 
else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
     nivelHeroi = "Platina Diamante"; 
} 
else if (xpHeroi >= 5001 && xpHeroi <= 7000) { 
    nivelHeroi = "Ouro"; 
} 
else if (xpHeroi >= 2001 && xpHeroi <= 5000) { 
    nivelHeroi = "Prata"; 
} 
else if (xpHeroi >= 1001 && xpHeroi <= 2000) { 
    nivelHeroi = "Bronze"; 
} 
else if (xpHeroi <= 1000) {
    nivelHeroi = "Ferro"; 
} 

console.log("Usando Else If: O Herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi)

switch (true) { 
    case (xpHeroi >= 10001): 
    nivelHeroi = "Imortal"; 
    break; 

    case (xpHeroi >= 9001 && xpHeroi <= 10000): 
    nivelHeroi = "Imortal"; 
    break; 

    case (xpHeroi >= 8001 && xpHeroi <= 9000): 
    nivelHeroi = "Ascendente"; 
    break; 
    
    case (xpHeroi >= 7001 && xpHeroi <= 8000): 
    nivelHeroi = "Platina Diamante"; 
    break; 
    
    case (xpHeroi >= 5001 && xpHeroi <= 7000): 
    nivelHeroi = "Ouro"; 
    break; 

    case (xpHeroi >= 2001 && xpHeroi <= 5000): 
    nivelHeroi = "Prata"; 
    break; 
    
    case (xpHeroi >= 1001 && xpHeroi <= 2000): 
    nivelHeroi = "Bronze"; 
    break; 
    
    case (xpHeroi <= 1000): nivelHeroi = "Ferro"; break; 

} 

console.log("Usando Switch: O Herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi)

