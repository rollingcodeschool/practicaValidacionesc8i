export function cantidadCaracteres(input){
    if(input.value.length >=3 && input.value.length<=50){
        console.log('dato correcto');
        input.className = 'form-control is-valid';
    }else{
        console.log('dato incorrecto');
        input.className = 'form-control is-invalid';
    }
}


export function validarEdad(input){
    // validar con expresiones regulares xxxxxxxxx@xxxxxxx.xxx  
    let patron = /^[0-9]{1,3}$/; //if(true)
    if(patron.test(input.value) && input.value <= 120){
        input.className = 'form-control is-valid';
    }else{
        input.className = 'form-control is-invalid';
    }
}

export function validarPeso(input){
    let patron = /^[\d]{1,3}(\,[\d]{1,2})?$/;
    if(patron.test(input.value)){
        input.className = 'form-control is-valid';
    }else{
        input.className = 'form-control is-invalid';
    }
}