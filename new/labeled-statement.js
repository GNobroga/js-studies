
// Semelhante ao kotlin, permite rotular fors e utilizar os operadores break e continue pra determinar alguma action.

const TOTAL_SIZE = 100;

loop1: for (let i = 0 ; i < TOTAL_SIZE ; i++) {
    for (let j = i + 1 ; j < TOTAL_SIZE ; j++) {
        if ((j + i) >= i * i) {
            console.log('Code is breaked')
            break loop1;
        }
    }
}