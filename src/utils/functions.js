const axios = require('axios')

module.exports = {
    getCars(url) {
        return axios.get(url).then(res => {
            return res.data;
        })
    },
    filterById(cars, id) {
        return cars.filter(car => {
            return car.id == id;
        })
    }
}