const assert = require('assert');

const insertDocuments = (db, collectionName, docs, callback) => {
  // Get the documents collection
  let collection = db.collection(collectionName);
  // Insert some documents
  collection.insertMany(docs, (err, result) => {
    assert.equal(err, null);
    assert.equal(docs.length, result.result.n);
    assert.equal(docs.length, result.ops.length);
    console.log("Inserted " + docs.length + " documents into the document collection");
    callback(err, result);
  });
};

module.exports.insertDocuments = insertDocuments;