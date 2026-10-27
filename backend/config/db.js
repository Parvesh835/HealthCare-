const mongoose = require('mongoose');

const ConnectDb = async () => {

    try {
        const Connect = await mongoose.connect(process.env.MONGODB_URL);

        if (!Connect) {
            console.log('Error ocurr during the MongoDb connection');
        }

        console.log('MongoDB connection Successfully')

    } catch (error) {
        console.log(error)
        console.log('somthing went wrong during mongodb connection')
    }

}

module.exports = ConnectDb