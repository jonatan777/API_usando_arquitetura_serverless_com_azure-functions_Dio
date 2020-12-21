const { MongoClient } = require('mongodb');
const config = {url: 'mongodb://localhost:27017/nodepelada', 
};


module.exports = () => new Promise((resolve, reject) => {
  MongoClient
    .connect(config.url, {useUnifiedTopology: true}, (err, mongoConnection) =>
      err
      ? reject(err)
      : resolve({
          client: mongoConnection.db(config.dbName),
          closeConnectionFn: () => setTimeout(() => {
            mongoConnection.close();
          }, 1000),
          mongoConnection,
        })
    );
});