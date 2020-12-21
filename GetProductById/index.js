
const { ObjectID } = require('mongodb');
const createMongoClient = require('../shared/mongoClient');



module.exports = async function (context, req) {
  const { id } = req.params;

  if (!id) {
    context.res = {
      status: 400,
      body: 'Provide a product id on params',
    };
    return console.log("Objeto não existe");
  }

  const { client: MongoClient, closeConnectionFn } = await createMongoClient();
  const Products = MongoClient.collection('nodepelada');
  const body = await Products.findOne({ _id: ObjectID(id) });

  closeConnectionFn();

    context.res = {
       status: 200,
       body 
    };
};

