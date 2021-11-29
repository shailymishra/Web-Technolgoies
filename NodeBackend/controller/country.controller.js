const Country = require('../models/country.model');

class CountryController {
    findAll(req, res) {
        Country.find()
            .then(countries => {
                res.status(200).send({
                    success_code: 'country_retrieved_success',
                    success_description: 'Country retrieved successfully',
                    details: countries,
                });
            });
    }
    findById(req, res) {
        Country.findById(req.params.id)
            .then(country => {
                res.status(200).send({
                    success_code: 'country_retrieved_success',
                    success_description: 'Country retrieved successfully',
                    details: country
                });
            });
    }
    create(req, res) {
        const country = new Country({
            name: req.body.name,
            capital: req.body.capital,
            currency: req.body.currency
        });
        // this is new concept
        country.save()
            .then(data => {
                res.status(200).send({
                    success_code: 'country_create_success',
                    success_description: 'Country created successfully',
                    details: data,
                });
            });
    }
    update(req, res) {
        // Find note and update it with the request body
        Country.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            capital: req.body.capital,
            currency: req.body.currency
        }, { new: true })
            .then(data => {
                res.status(200).send({
                    success_code: 'country_updated_success',
                    success_description: 'Country updated successfully',
                    details: data,
                });
            })
    }
    delete(req, res) {
        Country.findByIdAndRemove(req.params.id)
            .then(data => {

                res.status(200).send({
                    success_code: 'employee_delete_success',
                    success_description: 'Employee deleted successfully',
                    details: data
                });

            });
    }
}

const countryController = new CountryController();
export default countryController;

