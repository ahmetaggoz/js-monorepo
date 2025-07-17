import {MongoClient} from 'mongodb';

export async function connectToCluster(uri) {
    let mongoClient;
 
    try {
        mongoClient = new MongoClient(uri);
        console.log('Connecting to MongoDB Atlas cluster...');
        await mongoClient.connect();
        console.log('Successfully connected to MongoDB Atlas!');
 
        return mongoClient;
    } catch (error) {
        console.error('Connection to MongoDB Atlas failed!', error);
        process.exit();
    }
 }

 export async function createRestaurantCrudOperations() {
    const uri = process.env.DB_URI;
    let mongoClient;
 
    try {
        mongoClient = await connectToCluster(uri);
        const db = mongoClient.db('sample_restaurants');
        const collection = db.collection('restaurants');

        const studentDocument = {
            name: 'John Smith',
            birthdate: new Date(2000, 11, 20),
            address: { street: 'Pike Lane', city: 'Los Angeles', state: 'CA' },
        };
     
        await collection.insertOne(studentDocument);
    } finally {
        await mongoClient.close();
    }
 }

 export async function findRestaurantCrudOperations(name) {
    const uri = process.env.DB_URI;
    let mongoClient;
 
    try {
        mongoClient = await connectToCluster(uri);
        const db = mongoClient.db('sample_restaurants');
        const collection = db.collection('restaurants');

        
        return await collection.find({ name }).toArray();
        
    } finally {
        await mongoClient.close();
    }
 }


 export async function updateRestaurantCrudOperations(name, updatedFields) {
    const uri = process.env.DB_URI;
    let mongoClient;
 
    try {
        mongoClient = await connectToCluster(uri);
        const db = mongoClient.db('sample_restaurants');
        const collection = db.collection('restaurants');

        await collection.updateMany(
            { name },
            { $set: updatedFields }
        );
        
        
    } finally {
        await mongoClient.close();
    }
 }

 export async function deleteRestaurantCrudOperations(name) {
    const uri = process.env.DB_URI;
    let mongoClient;
 
    try {
        mongoClient = await connectToCluster(uri);
        const db = mongoClient.db('sample_restaurants');
        const collection = db.collection('restaurants');

        await collection.deleteMany({ name });
        
    } finally {
        await mongoClient.close();
    }
 }