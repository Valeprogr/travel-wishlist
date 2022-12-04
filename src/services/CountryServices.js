import Country from "../models/Country.js";

class CountryServices {
    //create new country for the list
    async create(country){
        const createCountry = await Country.create(country)
        return createCountry
    }

    async getAll(){
        const countries= await Country.find();
        return countries
    }
}

export default new CountryServices();