"use strict";
const map = new Map();
for (let i = 0; i < 100; i++) {
    map.set(i, null);
}
map.forEach((_mapItem, index) => {
    if (index % 5 === 0 && index % 3 === 0) {
        console.log('I can believe in that!');
    }
    else if (index % 5 === 0) {
        console.log('Oops, here is 5');
    }
    else if (index % 3 === 0) {
        console.log('Devided by tree');
    }
    else {
        console.log(index);
    }
});
const houses = [
    ["36", "не приватизирован", "4 собственника", "Парковая"],
    ["45", "приватизирован", "3 собственника", "Луговая"],
    ["56", "не приватизирован", "1 собственник", "Луговая"],
    ["56", "приватизирован", "5 собственников", "Ленина"],
    ["25", "не приватизирован", "2 собственника", "Ленина"]
];
const chooseHouse = ([square, , , street]) => {
    return square === '56' || (+square <= 40 && street === 'Ленина');
};
const mapRightHouse = new Map();
mapRightHouse.set('Подходящие дома', houses.filter(i => chooseHouse(i)));
console.log(mapRightHouse);
//# sourceMappingURL=homework_2.js.map