import db from './mongoConnect.js'

const furnitureDb = db.collection('furniture')

export const addFurniture = async (req, res) => {
    //add furniture to our mongo db

   const newFurniture = {type: 'sofa', collection: 'Edgewater', special: false, price: '$4,899', in_stock: false}
   
    const newFurnitureAdded = await furnitureDb.insertOne(req.body)
    console.log(newFurnitureAdded)

    res.status(201).send(newFurnitureAdded)
}

export const getAllFurniture = async(req, res) => {
    
    const getAllFurniture = furnitureDb.find({}).toArray()
    
    try{
        const allFurniture = await furnitureDb.find().toArray()

       res.status(200).send(allFurniture)
    } catch (error){
        res.status(404).send(error)
    }
    
    
   

}