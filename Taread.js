class tarea{
    EJE1(){
        console.warn("Sumar dos numeros siempre cuando el primero sea mayor al segundo")
        let num1=Math.floor(Math.random()*10)
        let num2=Math.floor(Math.random()*10)
        
        if (num1 > num2) {
            let suma = num1 + num2;
            console.log (`${num1} + ${num2} = ${suma}`);
        } else{
            console.log ("Error: El primer número debe ser mayor al segundo")
         }
    }
    EJE2(){
        console.warn("Realizar una operacion segun el operador(+,-,*,/,%) realizar la suma, resta, multiplicacion, division y reciduo")
        let n1, n2, suma, resta, multiplicacion, division, residuo
        let ops="+", opr="-", opm="*",opd="/", oprs="%";
        n1=0, n2=0, suma=0, resta=0, multiplicacion=0, division=1, residuo=0;
        n1=10
        n2=2
        suma=n1+n2
        resta=n1-n2
        multiplicacion=n1*n2
        division=n1/n2
        residuo=n1%n2
        console.log("La suma de",n1,ops,n2,"=",suma)
        console.log("La resta de",n1,opr,n2,"=",resta)
        console.log("La multiplicacion de", n1,opm,n2,"=",multiplicacion)
        console.log("La division de", n1,opd,n2,"=",division)
        console.log("El residuo", n1,oprs,n2,"=",residuo)
    }
    EJE3(){
        console.warn("Presentar el mayor de dos numeros")
        let num1=Math.floor(Math.random()*100)
        let num2=Math.floor(Math.random()*100)
        
        if (num1>num2){
            console.log (`${num1} es mayor a ${num2}`)
        }else{
            console.log (`${num2} es mayor a ${num1}`)
        }
    }
    EJE4(){
        console.warn("Dado un nombre presentarlo")
        let nombre="Jeanella"
        console.log (" Nombre es =", nombre)
    }
    EJE5(){
        console.warn(`Dado un valor de compra presentar el total considerando un 12% de iva`)
        
        let compra = Math.floor(Math.random()*100)
         let iva = compra * 0.12
         let total = compra+iva
         
         console.log (`El total de su compra incluyendo el iva del 12% es: ${total} $`)
    }
    EJE6(){
        console.warn("Presentar 5 veces un nombre")
        let nombre,i
        nombre="Jeanella"
        i=0
        for(i=1; i<=5; i++){
            console.log(nombre)
        }
    }
    EJE7(){
        console.warn(`Presentar los numeros multiplos de 3 del 3 al 21`)

        let multiplosde3 = ""

        for (let i=3; i<=21; i++){
            if (i % 3 === 0)
            multiplosde3 += i + " "
        }

        console.log (`Los multiplos de 3 del 3 al 21 son: ${multiplosde3}`)
    }
    EJE8(){
        console.warn("Presentar los numeros multiplos de 3 del 21 al 3")
        let i,multiplo
        i=0
        multiplo=3
        for (i=21; i>=3; i--){
            if(i%multiplo==0){
                console.log(i)
            }
        }
    }
    EJE9(){
        console.warn(`Dados dos nombres indicar si son iguales o diferentes`)

        let nombre1 = 'sofia'
        let nombre2 = 'sofia'


        if (nombre1===nombre2){
            console.log (`Los dos nombres ingresados son iguales`)
        }else{
            console.log (`Los dos nombres ingresados son diferentes`)
        }
    }
    EJE10(){
        console.warn("Dado diez numeros en un arreglo presentar los que tengan menos de 5 caracteres")
        let numeros = ["43565","345434","125","123456","12","2","122","1","9","434355"]
        for(let pos=0;pos<10;pos++){
            if(numeros[pos].length<5){
                console.log("Los numeros con menos de 5 caracteres son:",pos,numeros[pos])
            }
        }
    }
    EJE11(){
        console.warn(`Dado un arreglo presentar sus elementos`)

        let arreglo = [10,5,6,3,2]

        for (let i=0; i<arreglo.length; i++){
            console.log (arreglo[i])
        }
    }
    EJE12(){
        console.warn("Dado un arreglo de numeros presentar los menores a 10")
        const arreglo = [12, 4, 4, 3, 34, 9, 6, 7];
        const numerosMenoresQue10 = arreglo.filter(numero => numero < 10);
        console.log ("Los numeros menores de 10 son:", numerosMenoresQue10);
    }
    EJE13(){
        console.warn(`Dado un arreglo de numeros presentar los impares y al final la suma de los pares`)

        let numeros = [10, 5, 20, 2, 7]
        let suma=0

        for (let i=0; i< numeros.length; i++){
            if (numeros[i] % 2 === 0){
                suma+=numeros[i]
            }else{
                console.log (numeros[i])
            }
        }
        console.log (`La suma de los pares es=${suma}`)
    }
    EJE14(){
        console.warn("Presentar el primero el medio y el ultimo valor de un arreglo")
        const arreglo=[5,7,10,15,21,23,25];
        const longitud = arreglo.longth;

        const primerValor = arreglo[0];
        const ultimoValor = arreglo[longitud - 1];
        const valorMedio = arreglo[Math.floor(longitud.length / 2)];

        console.log("Primer valor:", primerValor);
        console.log("ultimo valor:", ultimoValor);
        console.log("valor medio:", valorMedio);
    }
    EJE15(){
        console.log (`Calcular el vuelto de un a compra dado el costo y el pago`)

        let compra = 56
        let pago = 70
        let vuelto = pago-compra

        if (compra===pago){
            console.log (`No hay vuelto`)
        }else{
            console.log (`El costo de su compra es: ${compra}$, el pago fue de: ${pago}$ y su vuelto es de: ${vuelto} $`)
        }
    }
    EJE16(){
        console.warn("Presentar la tabla de multiplicar de cualquier numero del 1 al 12")
        let numero, i
        i=0
        numero=5

        for(let i=1; i <= 12; i++){
            const resultado = i * numero;
            console.log(numero, "x", i, "=", resultado);
        }
    }
    EJE17(){
        console.warn(`Realizar la multiplicacion de dos numeros por medio de sumas sucesivas`)

        let num1=Math.floor(Math.random()*10)
        let num2=Math.floor(Math.random()*10)
        let acu=0

        for (let i=1; i <= num1 ;i++){
            acu=acu+num2
        }
        console.log (`El resultado de ${num1}*${num2}= ${acu}`)
    }
    EJE18(){
        console.warn("Realizar la division de dos numeros por medio de restas sucesivas")
        let n1=10,n2=2
        let c=0
        let res=n1
        while (res-n2>=0){
            res=res-n2
            console.log(res+n2,"-",n2,"=",res)
            c=c+1
        }
        console.log("La division entre:",n1,"/",n2,"=",c)
    }
    EJE19(){
        console.warn(`Calcular el factorial de un numero`)

        let num = Math.floor(Math.random()*10)
        let factorial=1

        for (let i=1; i <= num; i++){
            factorial=factorial*i
        }
        console.log (`El factorial de ${num} es: ${factorial}`)
    }
    EJE20(){
        console.warn("Calcular el exponente de un numero")
        console.log("20)Calcular el exponente de un numero")
        let n=2,ex=3,po=1,c=0
        let elevado= Math.pow(n, ex);
        console.log("2"," ^",ex,"=",elevado)
    }
    EJE21(){
        console.warn(`Calcular la serie de fibonacci dado un numero`)
        let num = Math.floor(Math.random()*10)
        let a=1
        let b=0
        let c=0

        for (let i=1; i<=num; i++){
            console.log (`${c} `)
            c=a+b
            a=b
            b=c
        }
    }
    EJE22(){
        console.warn("Dado un numero invertirlo")
        let numero=23456, digito
        console.warn("El numero es:", numero)
        while(numero>0){
            digito=Math.floor(numero%10)
            numero=Math.floor(numero/10)
            console.log(digito)
        }
    }
    EJE23(){
        console.warn(`Presentar los divisores de un numero`)

        let num = Math.floor(Math.random()*10)

        for (let i=1; i<=num; i++){
            if (num % i === 0){
                console.log (`Los divisores de ${num} es: ${i}`)
            }
        }
    }
    EJE24(){
        console.warn("Presentar si un numero es perfecto o no")
        let divisores=0, num=6, i=0, sumaperf=0
        for(i=1; i<num; i=i+1){
            if(num % i == 0){
                console.log(i)
                sumaperf=sumaperf+i
            }
        }
        console.log("")
        if(sumaperf.log){
            console.log(num,"Es un numero perfecto")
        }else{
            console.log(num,"Es un numero no perfecto")
        }
    }
    EJE25(){
        console.warn(`Verfificar si un numero es primo o no`)

        let num = Math.floor(Math.random()*10)
        let numeroprimo = true

        for (let i=2; i<num; i++){
         if (num % i == 0){
            numeroprimo = false
         }
        }

        if (numeroprimo==true){
            console.log (`${num} es primo`)
        }else{
            console.log (`${num} no es primo`)
        }
    }
}

let EJEuno = new tarea()
EJEuno.EJE1()

let EJEdos = new tarea()
EJEdos.EJE2()

let EJEtres = new tarea()
EJEtres.EJE3()

let EJEcuatro = new tarea()
EJEcuatro.EJE4()

let EJEcinco = new tarea()
EJEcinco.EJE5()

let EJEseis = new tarea()
EJEseis.EJE6()

let EJEsiete = new tarea()
EJEcinco.EJE7()

let EJEocho = new tarea()
EJEocho.EJE8()

let EJEnueve = new tarea()
EJEnueve.EJE9()

let EJEdiez = new tarea()
EJEdiez.EJE10()

let EJEonce = new tarea()
EJEonce.EJE11()

let EJEdoce = new tarea()
EJEdoce.EJE12()

let EJEtrece = new tarea()
EJEtrece.EJE13()

let EJEcatorce = new tarea()
EJEcatorce.EJE14()

let EJEquince = new tarea()
EJEquince.EJE15()

let EJEdieciseis = new tarea()
EJEdieciseis.EJE16()

let EJEdiecisiete = new tarea()
EJEdiecisiete.EJE17()

let EJEdieciocho = new tarea()
EJEdieciocho.EJE18()

let EJEdiecinueve = new tarea()
EJEdiecinueve.EJE19()

let EJEveinte = new tarea()
EJEveinte.EJE20()

let EJEveintiuno = new tarea()
EJEveintiuno.EJE21()

let EJEveintidos = new tarea()
EJEveintidos.EJE22()

let EJEveinticuatro = new tarea()
EJEveinticuatro.EJE24()

let EJEveinticinco = new tarea()
EJEveinticinco.EJE25()