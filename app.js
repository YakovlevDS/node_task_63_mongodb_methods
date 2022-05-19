// При подключении и взаимодействии с бд в MongoDB можно выделить следующие этапы:

// Подключение к серверу

// Получение объекта базы данных на сервере

// Получение объекта коллекции в базе данных

// Взаимодействие с коллекцией (добавление, удаление, получение, изменение данных)


// const {MongoClient} = require("mongodb")
// const mongoClient = new MongoClient("mongodb://localhost:27017/");
// mongoClient.connect((err, client)=>{
//     if (err) return console.log(err)
//     // взаимодействие с базой данных
//     client.close();
// });


// const MongoClient = require("mongodb").MongoClient;
    
// const url = "mongodb://localhost:27017/";
// const mongoClient = new MongoClient(url);
// async function run() {
//     try {
//         // Подключаемся к серверу
//         await mongoClient.connect();
//         // взаимодействие с базой данных
//     }catch(err) {
//         console.log(err);
//     } finally {
//         // Закрываем подключение при завершении работы или при ошибке
//         await mongoClient.close();
//     }
// }
// run();



// const {MongoClient} = require("mongodb");
    
// const url = "mongodb://localhost:27017/";
// const mongoClient = new MongoClient(url);
  
// // Подключаемся к серверу
// mongoClient.connect((err, client)=>{
       
//     // обращаемся к базе данных admin
//     const db = client.db("admin");
     
//     db.command({ping: 1}, (err, result)=>{
//         if(!err){
//             console.log("Подключение с сервером успешно установлено");
//             console.log(result);
//         }
//         // Закрываем подключение
//         client.close();
//         console.log("Подключение закрыто");
//     });
// });




// const MongoClient = require("mongodb").MongoClient;
    
// const url = "mongodb://localhost:27017/";
// const mongoClient = new MongoClient(url);
// async function run() {
//     try {
//         // Подключаемся к серверу
//         await mongoClient.connect();
//         // обращаемся к базе данных admin
//         const db = mongoClient.db("admin");
//         // выполняем пинг для проверки подключения
//         const result = await db.command({ ping: 1 });
//         console.log("Подключение с сервером успешно установлено");
//         console.log(result);
//     }catch(err) {
//         console.log("Возникла ошибка");
//         console.log(err);
//     } finally {
//         // Закрываем подключение при завершении работы или при ошибке
//         await mongoClient.close();
//         console.log("Подключение закрыто");
//     }
// }
// run();



// const MongoClient = require("mongodb").MongoClient;
    
// const url = "mongodb://localhost:27017/";
// const mongoClient = new MongoClient(url);
  
// mongoClient.connect(function(err, client){
       
//     const db = client.db("usersdb");
//     const collection = db.collection("users");
//     collection.countDocuments(function(err, result){
           
//         if(err){ 
//             return console.log(err);
//         }
//         console.log(`В коллекции users ${result} документов`);
//         client.close();
//     });
// });



const MongoClient = require("mongodb").MongoClient;
    
const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url);
 
async function run() {
    try {
        await mongoClient.connect();
        const db = mongoClient.db("usersdb");
        const collection = db.collection("users");
        const count = await collection.countDocuments();
        console.log(`В коллекции users ${count} документов`);
    }catch(err) {
        console.log(err);
    } finally {
        await mongoClient.close();
    }
}
run();