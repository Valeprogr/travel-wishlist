import CountryServices from "../services/CountryServices";

class CountryControllers{
    async create(req,res){
        try{
            const country= await CountryServices.create(req.body);
            res.status(201).json(country)
        }catch(error){

        }
    }


    async getAll(req,res){
        try{
            const countries = await CountryServices.getAll();
            res.status(200).json(countries);
        }catch(error){
            res.status(500).json(error);
        }
    }
}

export default CountryControllers();