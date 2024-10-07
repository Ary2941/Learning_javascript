console.log("olá");

function calculator (operation, value1, value2) {
    switch (operation) {
        case "+" : return value1 + value2;
        case "-" : return value1 - value2;
        case "*" : return value1 * value2;
        case "/" : return value2 / value2;
    }

}


console.log(calculator("/",1,2));