const mongoose = require('mongoose')
const config = require('config')

//get connection string
const db = config.get('mongoURI');

//connect to mongodb
const connectDatabase = async () => {
    try {
        await mongoose.connect(db, {
            useUnifiedTopology:true,
            useNewUrlParser: true
        });
        console.log('Connected to MongoDb');
    } catch (error) {
        console.error(error.message);

        //exit with failure code
        process.exit(1);
    }
};

module.exports = connectDatabase;