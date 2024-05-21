import mongoose from "mongoose";

const carSchema = mongoose.Schema(
    {
        model: {
            type: String,
            required: true,
        },
        year: {
            type: Number,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        seats: {
            type: Number,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);

export const Car = mongoose.model('Nissan', carSchema);