import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://Aaku:<Aaku@1801>@ac-opdtniv-shard-00-00.v5lsli9.mongodb.net:27017,ac-opdtniv-shard-00-01.v5lsli9.mongodb.net:27017,ac-opdtniv-shard-00-02.v5lsli9.mongodb.net:27017/?ssl=true&replicaSet=atlas-1220nb-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;