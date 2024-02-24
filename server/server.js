const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = process.env.MONGODB_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/data', async (req, res) => {
  try {
    // Connect to the MongoDB server
    await client.connect();

    // Select your database and collection
    const database = client.db('bansal-listing');
    const collection = database.collection('pan');

    // Query the collection to retrieve data (example: find all documents)
    const data = await collection.find({}).toArray();

    // Send the data as a response
    res.json(data);
  } catch (error) {
    console.error('Error retrieving data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    // Close the client after handling the request
    await client.close();
  }
});

app.post('/api/placeorder', async (req, res) => {
  try {
    // Connect to the MongoDB server
    await client.connect();

    // Select your database and collection
    const database = client.db('bansal-listing');
    const collection = database.collection('orderList');

    const newData = req.body;
    const date = new Date();
    await collection.insertOne({...newData, date });
    // Send the data as a response
    res.json({ message: 'Data inserted successfully' });
  } catch (error) {
    console.error('Error retrieving data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    // Close the client after handling the request
    await client.close();
  }
});
app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});
