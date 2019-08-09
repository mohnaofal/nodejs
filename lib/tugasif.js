
const isString = (data) => {
    return typeof data != "string" ? false : true
}

// const isNumber = (data) => {
//     return typeof data != "number" ? false : true
// }

// const numberString = (data) => {
// 	let result
// 	if (data == isNumber) {
// 		result = i"number"
// 	} else if (data == isString){
// 		result = "string"
// 	}
// 	return result
// }

const coba = (input) => {
    let result
    let data_type = isString(input)

    if(data_type == true) {
        if(input == "naofal") {
            result = "Bagus"
        } else if(input == "Moh.Naofal") {
            result = "Bagus Sekali"
        } else {
            result = "Salah"
        }
    } else {
        result = "Type Data Salah"
    }

    return result
}

const coba2 = (a, b) => {
	let nama, email

	nama1 = nama
	email1 = email
	   let result = {
	   	nama1,
	   	email1
    }
   return result
}

module.exports = {
	coba,
	coba2
}