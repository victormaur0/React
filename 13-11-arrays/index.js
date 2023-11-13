const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const arr3 = [...array1, ...array2];

//console.log(arr3)

const arr1 = [0, ...array1];
const arr2 = [...array1, 4];

const [uno, dos, tres] = arr3;
//console.log(uno);

// Callbacks
/*
const obtenerDatos = async (funcion) => {
    setTimeout(() => {
        funcion();
    }, 3000)
}


console.log(obtenerDatos(() => {
    console.log("Funcion recibida");
}));

const juanito = await obtenerDatos(() => {console.log("AWAIT")});
console.log(juanito);*/

// Promesas
// resolve (bien) reject (mal)
const obtenerDatos2 = new Promise((resolve, reject)=>{
    try {
        setTimeout(()=>{
            resolve("Pepe");
        }, 3000);
    } catch(e){
        reject(e);
    }
    
})

obtenerDatos2
.then(datos => {
    console.log(123);
    console.log(datos);
})
.catch(error => {
    console.log(error);
})