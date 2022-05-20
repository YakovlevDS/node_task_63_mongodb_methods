// ! insertOne()
// const {MongoClient} = require("mongodb");
// const url = "mongodb://localhost:27017/";
// const mongoClient = new MongoClient(url, { useUnifiedTopology: true });
// mongoClient.connect((err, client)=>{
//     const db = client.db("usersdb");
//     const collection = db.collection("users");
//     let user = {name: "Ali", age: 32};
//     collection.insertOne(user, (err, result)=>{
//         if(err) return console.log(err);
//         console.log(result);
//         console.log(user);
//         client.close();
//     });
// });

// ! insertOne()  async\await
// const {MongoClient} = require("mongodb");
// const url = "mongodb://localhost:27017/";
// const mongoClient = new MongoClient(url);
// async function run() {
//     try {
//         await mongoClient.connect();
//         const db = mongoClient.db("usersdb");
//         const collection = db.collection("users");
//         let user = {name: "Jain", age: 20};
//         const result = await collection.insertOne(user);
//         console.log(result);
//         console.log(user);
//     }catch(err) {
//         console.log(err);
//     } finally {
//         await mongoClient.close();
//     }
// }
// run();

// ! insertMany() callback

// const {MongoClient} = require("mongodb");
// const url = "mongodb://localhost:27017/";
// const mongoClient = new MongoClient(url);
// let users = [{name: "Bob", age: 34} , {name: "Alice", age: 21}, {name: "Tom", age: 45}];
// mongoClient.connect((err, client)=>{
//     const db = client.db("usersdb");
//     const collection = db.collection("users");
//     collection.insertMany(users,(err, results)=>{
//         console.log(results);
//         client.close();
//     });
// });


// ! insertMany() async\await

// const {MongoClient} = require("mongodb");
// const url = "mongodb://localhost:27017/";
// const mongoClient = new MongoClient(url);
// let users = [{name: "Bob", age: 35} , {name: "Alice", age: 21}, {name: "Tom", age: 45}];
// async function run() {
//     try {
//         await mongoClient.connect();
//         const db = mongoClient.db("usersdb");
//         const collection = db.collection("users");
//         const results = await collection.insertMany(users);
//         console.log(results);
//         console.log(users);
//     }catch(err) {
//         console.log(err);
//     } finally {
//         await mongoClient.close();
//     }
// }
// run();

// ! find() callback
//! Метод find возвращает специальный объект FindCursor, и чтобы получить все данные у этого объекта вызывается метод toArray(). 
// const {MongoClient} = require("mongodb");
// const url = "mongodb://localhost:27017/";
// const mongoClient = new MongoClient(url);
// mongoClient.connect((err, client)=>{
//     const db = client.db("usersdb");
//     const collection = db.collection("users");
//     if(err) return console.log(err);
//     collection.find().toArray((err, results)=>{
//         console.log(results);
//         client.close();
//     });
// });


// ! find() async\await
// const {MongoClient} = require("mongodb");
// const url = "mongodb://localhost:27017/";
// const mongoClient = new MongoClient(url);
 
// async function run() {
//     try {
//         await mongoClient.connect();
//         const db = mongoClient.db("usersdb");
//         const collection = db.collection("users");
//         const results = await collection.find().toArray();
//         console.log(results);
         
//     }catch(err) {
//         console.log(err);
//     } finally {
//         await mongoClient.close();
//     }
// }
// run();

// ! find({name: "Tom"}) callback
// const {MongoClient} = require("mongodb");
// const url = "mongodb://localhost:27017/";
// const mongoClient = new MongoClient(url);
// mongoClient.connect((err, client)=>{
//     const db = client.db("usersdb");
//     const collection = db.collection("users");
//     if(err) return console.log(err);
//     collection.find({name: "Tom"}).toArray((err, results)=>{
//         console.log(results);
//         client.close();
//     });
// });


// ! find({name: "Tom", age: 23}) async\await
//const {MongoClient} = require("mongodb")
// const url = "mongodb://localhost:27017/";
// const mongoClient = new MongoClient(url);
// async function run() {
//     try {
//         await mongoClient.connect();
//         const db = mongoClient.db("usersdb");
//         const collection = db.collection("users");
//         const results = await collection.find({name: "Tom", age: 23}).toArray();
//         console.log(results);
//     }catch(err) {
//         console.log(err);
//     } finally {
//         await mongoClient.close();
//     }
// }
// run();

// ! Метод findOne() callback
// const {MongoClient} = require("mongodb")
// const url = "mongodb://localhost:27017/";
// const mongoClient = new MongoClient(url);
// mongoClient.connect((err, client)=>{
//     if(err) return console.log(err);
//     const db = client.db("usersdb");
//     db.collection("users").findOne((err, doc)=>{
//         console.log(doc);
//         client.close();
//     });
// });


// !  Метод findOne() async\await
// const {MongoClient} = require("mongodb")
// const url = "mongodb://localhost:27017/";
// const mongoClient = new MongoClient(url);
// async function run() {
//     try {
//         await mongoClient.connect();
//         const db = mongoClient.db("usersdb");
//         const collection = db.collection("users");
//         const result = await collection.findOne({name: "Bob"});
//         console.log(result);
         
//     }catch(err) {
//         console.log(err);
//     } finally {
//         await mongoClient.close();
//     }
// }
// run();

// ! deleteMany(): удаляет все документы, которые соответствуют определенному критерию
// ! deleteOne(): удаляет один документ, который соответствует определенному критерию
// ! findOneAndDelete(): получает и удаляет один документ, который соответствует определенному критерию
// ! drop(): удаляет всю коллекцию


// ! Метод deleteOne() callback
//const {MongoClient} = require("mongodb")
// const url = "mongodb://localhost:27017/";
// const mongoClient = new MongoClient(url);
// mongoClient.connect((err, client)=>{
//     if(err) return console.log(err);
//     const db = client.db("usersdb");
    
//     db.collection("users").deleteOne({name: "Tom"},(err, result)=>{
//         console.log(result);
//         client.close();
//     });
// });

// !  Метод deleteOne() async\await
// const {MongoClient} = require("mongodb")
// const url = "mongodb://localhost:27017/";
// const mongoClient = new MongoClient(url);
// async function run() {
//     try {
//         await mongoClient.connect();
//         const db = mongoClient.db("usersdb");
//         const collection = db.collection("users");
//         const result = await collection.deleteOne({name: "Tom"});
//         console.log(result);
         
//     }catch(err) {
//         console.log(err);
//     } finally {
//         await mongoClient.close();
//     }
// }
// run();

// ! Метод deleteMany() callback
// const {MongoClient} = require("mongodb")
// const url = "mongodb://localhost:27017/";
// const mongoClient = new MongoClient(url);
// mongoClient.connect((err, client)=>{
//     if(err) return console.log(err);
//     const db = client.db("usersdb");
    
//     db.collection("users").deleteMany({name: "Tom"},(err, result)=>{
//         console.log(result);
//         client.close();
//     });
// });

// !  Метод deleteMany() async\await
// const {MongoClient} = require("mongodb")
// const url = "mongodb://localhost:27017/";
// const mongoClient = new MongoClient(url);
// async function run() {
//     try {
//         await mongoClient.connect();
//         const db = mongoClient.db("usersdb");
//         const collection = db.collection("users");
//         const result = await collection.deleteMany({name: "Tom"});
//         console.log(result);
         
//     }catch(err) {
//         console.log(err);
//     } finally {
//         await mongoClient.close();
//     }
// }
// run();

// ! Метод findOneAndDelete() удаляет один документ по определенному критерию, но по сравнению с методом deleteOne() он позволяет получить удаленный документ:

// ! Метод findOneAndDelete() callback
//const {MongoClient} = require("mongodb")
// const url = "mongodb://localhost:27017/";
// const mongoClient = new MongoClient(url);
// mongoClient.connect((err, client)=>{
//     if(err) return console.log(err);
//     const db = client.db("usersdb");
//     db.collection("users").findOneAndDelete({age: 21},(err, result)=>{
//         console.log(result);
//         client.close();
//     });
// });

// !  Метод findOneAndDelete() async\await
// const {MongoClient} = require("mongodb")
// const url = "mongodb://localhost:27017/";
// const mongoClient = new MongoClient(url);
// async function run() {
//     try {
//         await mongoClient.connect();
//         const db = mongoClient.db("usersdb");
//         const collection = db.collection("users");
//         const result = await collection.findOneAndDelete({age: 34});
//         console.log(result);
         
//     }catch(err) {
//         console.log(err);
//     } finally {
//         await mongoClient.close();
//     }
// }
// run();


// ! Метод drop() callback
// Стоит отметить, что если удаляемая коллекция - единственная коллекция в базе данных, то вместе с коллекцией удаляется и вся база данных.
// const MongoClient = require("mongodb").MongoClient;
// const url = "mongodb://localhost:27017/";
// const mongoClient = new MongoClient(url);
// mongoClient.connect((err, client)=>{
//     if(err) return console.log(err);
//     const db = client.db("usersdb");
//     db.collection("users").drop((err, result)=>{
//         console.log(result);
//         client.close();
//     });
// });

// !  Метод drop() async\await
// const {MongoClient} = require("mongodb")
// const url = "mongodb://localhost:27017/";
// const mongoClient = new MongoClient(url);
// async function run() {
//     try {
//         await mongoClient.connect();
//         const db = mongoClient.db("usersdb");
//         const collection = db.collection("users");
//         const result = await collection.drop();
//         console.log(result);
         
//     }catch(err) {
//         console.log(err);
//     } finally {
//         await mongoClient.close();
//     }
// }
// run();

// ! updateOne: обновляет один документ, который соответствует критерию фильтрации, и возвращает информацию об операции обновления
//! updateMany: обновляет все документы, которые соответствуют критерию фильтрации, и возвращает информацию об операции обновления
// ! findOneAndUpdate: обновляет один документ, который соответствует критерию фильтрации, и возвращает обновленный документ


// ! Метод findOneAndUpdate() callback
// const {MongoClient} = require("mongodb")
// const url = "mongodb://localhost:27017/";
// const mongoClient = new MongoClient(url);
// let users = [{name: "Bob", age: 34} , {name: "Alice", age: 21}, {name: "Tom", age: 45}]; 
// mongoClient.connect((err, client)=>{
//     if(err) return console.log(err);
//     const db = client.db("usersdb");
//     const col = db.collection("users");
//     col.insertMany(users, (err, results)=>{
             
//         col.findOneAndUpdate(
//             {age: 21}, // критерий выборки
//             { $set: {age: 25}}, // параметр обновления
//             (err, result)=>{
                 
//         console.log(result);
//         client.close();
//     }
//     );
// });
// });

// !  Метод findOneAndUpdate() async\await
// const {MongoClient} = require("mongodb")
// const url = "mongodb://localhost:27017/";
// const mongoClient = new MongoClient(url);
// async function run() {
//     let users = [{name: "Bob", age: 34} , {name: "Alice", age: 21}, {name: "Tom", age: 45}]; 
//     try {
//         await mongoClient.connect();
//         const db = mongoClient.db("usersdb");
//         const collection = db.collection("users");
//         await collection.insertMany(users);
//         const result = await collection.findOneAndUpdate({age: 21}, { $set: {age: 25}});
//         console.log(result);
         
//     }catch(err) {
//         console.log(err);
//     } finally {
//         await mongoClient.close();
//     }
// }
// run();


// Для этого мы можем задать дополнительну опцию returnDocument: "after",
//  которая указывает, что надо получить новое состояние документа.
//   о умолчанию этот параметр имеет значение before (то есть возвращает состояние документа ДО обновления):

// ! Метод findOneAndUpdate() callback returnDocument: "after"
// const {MongoClient} = require("mongodb")
// const url = "mongodb://localhost:27017/";
// const mongoClient = new MongoClient(url);
// let users = [{name: "Bob", age: 34} , {name: "Alice", age: 21}, {name: "Tom", age: 45}]; 
// mongoClient.connect((err, client)=>{
//     if(err) return console.log(err);
//     const db = client.db("usersdb");
//     const col = db.collection("users");
//     col.insertMany(users, (err, results)=>{
//         col.findOneAndUpdate(
//             {age: 21}, // критерий выборки
//             { $set: {age: 25}}, // параметр обновления
//             { returnDocument: "after" }, // доп. опции обновления    
//             (err, result)=>{
//         console.log(result);
//         client.close();
//     }
//     );
// });
// });


// ! Метод updateMany() callback
// const {MongoClient} = require("mongodb")
// const url = "mongodb://localhost:27017/";
// const mongoClient = new MongoClient(url);
// let users = [{name: "Sam", age: 34} , {name: "Sam", age: 21}, {name: "Tom", age: 45}]; 
// mongoClient.connect((err, client)=>{
//     if(err) return console.log(err);
//     const db = client.db("usersdb");
//     const col = db.collection("users");
//     col.insertMany(users, (err, results)=>{
             
//         col.updateMany(
//             {name: "Sam"}, // критерий выборки
//             { $set: {name: "Bob"}}, // параметр обновления
//             (err, result)=>{
                 
//         console.log(result);
//         client.close();
//     }
//     );
// });
// });

// !  Метод updateMany() async\await
// const {MongoClient} = require("mongodb")
// const url = "mongodb://localhost:27017/";
// const mongoClient = new MongoClient(url);
// async function run() {
//     let users = [{name: "Sam", age: 34} , {name: "Sam", age: 21}, {name: "Tom", age: 45}]; 
//     try {
//         await mongoClient.connect();
//         const db = mongoClient.db("usersdb");
//         const collection = db.collection("users");
//         await collection.insertMany(users);
//         const result = await collection.updateMany({name: "Sam"}, { $set: {name: "Bob"}});
//         console.log(result);
         
//     }catch(err) {
//         console.log(err);
//     } finally {
//         await mongoClient.close();
//     }
// }
// run();


// Метод updateOne() аналогичен методу updateMany за тем исключением, что обновляет только один элемент.
//  В отличие от метода findOneAndUpdate() он не возвращает измененный документ:
 

// ! Метод updateOne() callback
// const {MongoClient} = require("mongodb")
// const url = "mongodb://localhost:27017/";
// const mongoClient = new MongoClient(url);
// mongoClient.connect((err, client)=>{
//     if(err) return console.log(err);
//     const db = client.db("usersdb");
//     const col = db.collection("users");
//         col.updateOne(
//             {name: "Tom"}, // критерий выборки
//             { $set: {name: "Tom Junior", age:33}}, // параметр обновления
//             (err, result)=>{
//         console.log(result);
//         client.close();
//     }
//     );
// });

// !  Метод updateOne() async\await
const {MongoClient} = require("mongodb")
const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url);
async function run() {
    try {
        await mongoClient.connect();
        const db = mongoClient.db("usersdb");
        const collection = db.collection("users");
        const result = await collection.updateOne({name: "Tom"}, { $set: {name: "Tom Junior", age:33}});
        console.log(result);
         
    }catch(err) {
        console.log(err);
    } finally {
        await mongoClient.close();
    }
}
run();

