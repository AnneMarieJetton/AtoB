import express from 'express';
import { Car } from '../models/carModel.js';

const router = express.Router();

//route for save a new Car
router.post('/', async (request, response) => {
    try {
        
        if (
            !request.body.model ||
            !request.body.year ||
            !request.body.image ||
            !request.body.seats
        ) {
            return response.status(400).send({
                message: 'send all required fields: model, year, image, seats',
            });
        }

        const newCar = {
            model: request.body.model,
            year: request.body.year,
            image: request.body.image,
            seats: request.body.seats,
        };

        const car = await Car.create(newCar);

        return response.status(201).send(car);

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//Route for get all Cars form database
router.get('/', async (request, response) => {
    try {
        const cars = await Car.find({});

        return response.status(200).json({
            count: cars.length,
            data: cars
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//Route for get one Cars form database
router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const car = await Car.findById(id);

        return response.status(200).json(car);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//route for update a Car
router.put('/:id', async (request, response) => {
    try {
        if (
            !request.body.model ||
            !request.body.year ||
            !request.body.image ||
            !request.body.seats
        ) {
            return response.status(400).send({
                message: 'send all required fields: model, year, image, seats',
            });
        }

        const { id } = request.params;

        const result = await Car.findByIdAndUpdate(id, request.body);

        if (!result){
            return response.status(404).json({ message: 'car not found' });
        }

        return response.status(200).send({ message: 'Car updated successfully' });

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
})

//delete a Car
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const result = await Car.findByIdAndDelete(id);

        if (!result) {
            return response.status(404).json({ message: 'Car not found' });
        }

        return response.status(200).send({ message: 'Car deleted Successfully' });

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;