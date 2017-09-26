// Calcular el sueldo semana de un trabajadpr con base en el sueldo que trabaja.
//Ejemplo Carol gana 10000 pesos por hora y trabaja 20 horas a la semana
// Carol ganría 10000 x 20 = 200000
function salaryWeak(hours, payment){
var salary = hours * payment;
return salary;
}

/* Hace los mismo
function salaryWeak(hours, payment){
return = hours * payment;
}*/

/*Calcular la cantidad de digitos de un numero. 
Por ejemplo 1986 retorna 4
*/

function numberOfDigits (number){
	var counter = 0;
	var digits = number.toString();
	for (var i = 0; i < digits.length; i++) {
		counter ++;

	}
	return counter;
}

// Palindrome de una palabra
//PARA ESPACIOS Y CARACTERES ESPECIALES SE UTILIZA var re = /[^A-Za-z0-9]/g; 
// MÉTODO REVERSE
// Soso se introduce un parámetro porque se comparar una misma palabra no dos.

function palindrome (word) {
	// var min = word.tolowerCase()
	var long = word.length;
	for (var i = 0 ; i > long; i++) {
		if (word[i] != word[long - 1 - i]){
			return false;
		}
	}
		return true;
}