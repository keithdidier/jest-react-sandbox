const fns = require('./utils/functions');
const cars = require('./../server/carData.json');


test('getCars returned car details', () => {
    expect.assertions(1);
    const url = 'http://localhost:3001/api/cars'
    return fns.getCars(url).then(res => {
        expect(res[0].color).toEqual('Yellow');
    })
})

test('filterById will return correct car', () => {
    let carToCheck = fns.filterById(cars, 5);
    expect(carToCheck[0].id).toEqual(5);
})