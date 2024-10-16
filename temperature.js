function fromCelsius(celcius,operation,value){
    switch (operation) {
        case "kelvin": {
            value = value + 273;
            break;            
        }
        case "fahrenheit": {
            value = value * 1.8 + 32;
            break;
        }
    }
    return value;
}

function fromKelvin(kelvin,operation,value){
    switch (operation) {
        case "celcius": {
            value = value - 273;
            break;
        }
        case "fahrenheit": {
            value = (value-273) *1.8 + 32;
            break;
        }
    }
    return value;
}

function fromFahrenheit(fahrenheit,operation,value){
    switch (operation) {
        case "celcius": {
            value = ( value-32 ) / 1.8;
            break;
        }
        case "kelvin": {
            value = ( value - 32 ) * 5/9 + 273;   
            break;
        }
    }
    return value;
}

function defineOperation(from,to,value){
    switch (from){
        case "celcius": return fromCelsius(from,to,value);
        case "kelvin": return fromKelvin(from,to,value);
        case "fahrenheit": return fromFahrenheit(from,to,value);
    }
}

console.log(defineOperation("celcius","kelvin",100));