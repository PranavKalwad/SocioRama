const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/signupModels')


router.post('/',async (req,res)=>{
    const signedUpUser = new signUpTemplateCopy({
        name:req.body.name,
        email:req.body.email,
        contact: req.body.contact,
        password:req.body.password,
        confpassword:req.body.confpassword,
        hobby:req.body.hobby,
        interest:req.body.interest,
        dob:req.body.dob
    })
    console.log(req.body)
    signedUpUser.save().then((data)=>res.json(data)).catch(error=>{res.json(error)})
})

module.exports = router
