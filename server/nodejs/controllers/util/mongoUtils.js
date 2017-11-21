
const insertDocuments = async (collection, docs) => {
  try {
    let result = await collection.insertMany(docs);
    if (docs.length == result.result.n && docs.length == result.ops.length) {
      console.log(`Inserted ${docs.length} documents into the document collection`);
      return result;
    }
  }catch(e) {
    throw new Error(e);
  }
};

const upsertDocument = async (collection, filter, upsertDoc) => {
  try {
    let result = await collection.updateOne(filter, upsertDoc, { upsert: true});
    console.log("r:" + JSON.stringify(result));
    console.log(`Upserted ${result.matchedCount} documents into the document collection. Upserted ID is ${filter._id}.`);
    return { upsertedId: filter._id, dbResult: result };
  }catch(e) {
    throw new Error(e);
  }
};

module.exports.insertDocuments = insertDocuments;
module.exports.upsertDocument = upsertDocument;