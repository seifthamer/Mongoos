const express = require('express');
const Contact = require('../models/contactShema');
const router = express.router();



// Post Methode
router.post('/users',   async (req, res) => {
    try {
        const newContact = new Contact(req.body)
        await newContact.save()
        res.status(200).json({msg :"success",newContact})
    } catch (err) {res.status(500).json({msg :err.message})}
    })




    // Get Methode 
    router.get('/users',   async (req, res) => {
        try {
            const newContact = await Contact.find()
            res.status(200).json({msg :"success",newContact})
        } catch (err) {res.status(500).json({msg :err.message})}
        })



  // Get By Id Methode 
  router.get('/users/:id',   async (req, res) => {
    try {
        const newContact = await Contact.findById(req.params.id)
        if ( !newContact) return res.status(404).json({ mes:"contact non exist"})
        res.status(200).json({msg :"success",newContact})
    } catch (err) {res.status(500).json({msg :err.message})}
    })




      // Update Methode 
  router.put('/users/:id',   async (req, res) => {
    try {
        const newContact = await Contact.findByIdAndUpdate({_id: req.params.id},{...req.body})
        if ( !newContact) return res.status(404).json({ mes:"contact non exist"})
        res.status(200).json({msg :"contact updated",newContact : {...newContact._doc,...req.body}})
    } catch (err) {res.status(500).json({msg :err.message})}
    })
    




    
  // Delete Methode 
  router.delete('/users/:id',   async (req, res) => {
    try {
        const newContact = await Contact.findByIdAndDelete(req.params.id)
        if ( !newContact) return res.status(404).json({ mes:"contact non exist"})
        res.status(200).json({msg :"contact delete ",newContact})
    } catch (err) {res.status(500).json({msg :err.message})}
    })




module.exports = router