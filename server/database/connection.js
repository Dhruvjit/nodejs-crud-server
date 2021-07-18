const moongoose = require('mongoose');

const connectDB = async() => {
    try {
        // mongodb connection string
        const con = await moongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify:false,
            useCreateIndex:true,
        })
        console.log(`mongoDBConnected: ${con.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB