

export const firebasDataToArray = (firebaseData) => {
  return Object.values(firebaseData)
}

export const yDifferentNumbersFrom0ToX = (y, x) => {
  if(y < x) {
    let pickedUpNumbers = [];
    let randomNumber;
    for (let i = 0; i < y; i++) { 
      do {
        randomNumber = Math.floor(Math.random() * x)
      } while (pickedUpNumbers.includes(randomNumber))
      pickedUpNumbers.push(randomNumber)
    }
    return pickedUpNumbers;
  } else {
    return arrayFrom0toX(x)
  }
}

const arrayFrom0toX = (x) => {
  return Array.from(new Array(x), (val,index) => index);
}

export const debounce = (func, wait) => {
	var timeout;
	return function() {
    var context = this
    var args = arguments;
		var later = function() {
			timeout = null;
			func.apply(context, args);
		};
		clearTimeout(timeout)
		timeout = setTimeout(later, wait);
	};
};

export const isAnswerCorrect = (plString, answer) => {
  const plArray = plString.split(' / ')
  return plArray.includes(answer)
}
