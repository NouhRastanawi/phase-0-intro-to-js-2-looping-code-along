function writeCards(arr) {
    let cards = [];
        for (let i = 0; i < arr.length; i++) {
            const newNames = [];
            cards.push(`Thank you, ${arr[i]}, for the wonderful surprise gift!`);
        }
    return cards;
}

function countDown(x) {
    while (x > 0) {
        console.log(x);
        x -= 1;
    }
    console.log(x);
}

console.log(countDown(7));