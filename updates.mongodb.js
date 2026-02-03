use('bosch')
db.people.updateOne(
    { _id: ObjectId('6981f2551f82f24350c4f1c9') },
    { $set: { lastName: "tesoura" } });