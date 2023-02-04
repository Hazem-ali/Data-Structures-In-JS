let myItems = ['Hazem', 'Ali', 'Mofty', 'Mondy', 'Hossam', 'Hosny'];


console.log(myItems.indexOf('Mofty')); // 2 


// Important
console.log(myItems.findIndex(function (item) {
    return item === 'Mofty'; 
})); // 2 


// Important
console.log(myItems.find(function (item) {
    return item === 'Mofty';
})); // Mofty (Returns the item itself)


console.log(myItems.includes('Hossam')) // true