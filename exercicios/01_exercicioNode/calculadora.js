
const Calculadora  = {
    somar(a , b){
        return a + b;
    },

    somarNumeros(...numeros){
        total = 0;
        for (let i = 0; i < numeros.length; i++){ 
            total = total + numeros[i]
        }

        return total;
    },
    subtrair(a , b){
        return a - b;
    },

    subtrairNumeros(...numeros){
        
        let total = numeros[0]
        
        for (let i = 1; i < numeros.length; i++){ 
           
            total =  total - numeros[i]
        }

        return total;
    },

    multiplicar(a , b){
        return a * b;
    },
    multiplicarNumeros(...numeros){
        
        total = 1
        for (let i = 0; i < numeros.length; i++){
            total = total * numeros[i]
        }

        return total;
    },
    dividir(a , b){
        if (a == 0  || b == 0){
            return "erro";
        
        }else{
            return a / b;
        }
       
    },
    dividirNumeros(...numeros){
        
        let total = numeros[0]
        for (let i = 1; i < numeros.length; i++){
            total = total / numeros[i]
        }

        return total;
    }


}

module.exports = Calculadora;