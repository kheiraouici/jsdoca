const {storage}= require('../middlewares/files-storage');
const file = require ('../models/file');
const fs = require ('fs')
/***methode c reer fichiers */
exports.createOneFile= (req,res,next)=>{
    const file = new File({
       name : req.file.filename,
       imageUrl :'$ {req.protocol}://localhost:3000/uploads/${req.file.filename}' ,
       userId : req.body.userId
    })
    file.save()
    .then(()=>{
        res.status(201).json({message: 'objet enregsitrer'})
    })
    .catch(error =>{res.status(400).json({error})})
}