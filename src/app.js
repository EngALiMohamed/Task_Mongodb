
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

    db.collection ('users').insertMany([
        {
            name : 'ali',
            age : 21
        },
        {
            name : 'reham',
            age : 20
        },
        {
            name : 'islam',
            age : 27
        },
        {
            name : 'malak',
            age : 21
        },
        {
            name : 'emad',
            age : 25
        }
    ] , (error,data)=>{
        if(error){
            console.log("Unable to insert data")
        }
        console.log(data.insertedCount)
    })

    db.collection('users').find({age:21}).limit(2).toArray((error,users)=>{
                if(error){
                    return console.log('Error has occurred')
                }
                console.log(users)
            })

})