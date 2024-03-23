
const mongodb = require ('mongodb')

const mongoClient = mongodb.MongoClient

const connectionUrl = 'mongodb://127.0.0.1:27017'

const dbname = 'project-1' 

mongoClient.connect (connectionUrl , (error , res1)=>{
    if (error) {
        return console.log('error has occured')
    }
    console.log('all perf')

    const db = res1.db(dbname)

    db.collection('users').insertOne({
        name : 'ahmed',
        age : 29
    },(error,data) =>{
        if(error){
            console.log("Unable to insert data")
        }
        console.log(data.insertedId)
    })
    db.collection('users').insertOne({
        name :'sayed',
        age : 34
    },(error,data) =>{
        if(error){
            console.log("Unable to insert data")
        }
        console.log(data.insertedId)
    })

    db.collection ('users').insertMany([
        {
            name : 'ali',
            age : 20
        },
        {
            name : 'reham',
            age : 27
        },
        {
            name : 'islam',
            age : 27
        },
        {
            name : 'malak',
            age : 20
        },
        {
            name : 'emad',
            age : 27
        },
        {
            name: 'reem',
            age: 24
        },
        {
            name: 'adel',
            age: 27
        },
        {
            name: 'shika',
            age: 21
        },
        {
            name: 'aya',
            age: 25
        },
        {
            name: 'esraa',
            age: 27
        }
    ] , (error,data)=>{
        if(error){
            console.log("Unable to insert data")
        }
        console.log(data.insertedCount)
    })

    db.collection('users').find({age:27}).limit(3).toArray((error , users)=>{
        if (error) {
            return console.log('error has occured')
        }
        console.log(users)
      })

      
     db.collection("users").updateOne({_id:mongodb.ObjectId("65fe6c4852822b5ab559bcf8")},{
        $inc: {age: 5}
     })
     .then((data1)=>{console.log(data1.modifiedCount)})
     .catch((error)=> {console.log(error)})

     db.collection('users').updateMany({age:20},{
        $inc: {age: 5}
    })
    .then((data1)=>{console.log(data1.modifiedCount)})
    .catch((error)=> {console.log(error)})

        
    db.collection('users').deleteMany({age:27})
    .then((data1)=>{console.log(data1.deletedCount)})
   .catch((error)=> {console.log(error)})

}) 