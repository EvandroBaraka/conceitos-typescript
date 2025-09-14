// enum Colors {
//     Red,
//     Blue,
//     Green
// }

// console.log(Colors.Blue)



// enum TradeType {
//     ACAO = 9281,
//     TESOURO_DIRETO = 3221,
//     TESOURO_SELIC = 6554
// }

// function saveTrade(tradeType) {
//     console.log(tradeType)
// }

// saveTrade(TradeType.TESOURO_DIRETO)



// enum StatusCodes {
//     OK = 200,
//     BadRequest = 400,
//     Forbiden = 401,
//     NotFound = 404
// }

// StatusCodes.OK


// enum Gender {
//     M = 'Masculino',
//     F = 'Feminino'
// }


enum StatusCodes {
    OK = 200,
    BadRequest = 400,
    Forbiden = 401,
    NotFound = 404
}

const ok = StatusCodes.OK; //200
const indexOK = StatusCodes['OK']; //200
const stringBadRequest = StatusCodes[400]; // BadRequest