import mongoose from 'mongoose';

const TourSchema = new mongoose.Schema({
    name:{
        type: 'string',
    },
    state:{
        type: 'string'
    },
    Description:{
        type: 'string',
    },
    Image1:{type: 'string'},
    Image2:{type: 'string'},
    Image3:{type: 'string'},
})

const tour = mongoose.model("tour",TourSchema)

export default tour