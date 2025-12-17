import express from 'express';
import ContactForm from './ContactFormModel.js'

const router = express.Router()

router.post("/api/contact", async (req, res) => {
    try{
        const contact = new ContactForm(req.body)
        await contact.save()
        res.status(200).send("Submitted")
    }
    catch(err){
        console.log(err)
        res.status(500).send("Internal Server Error")
    }

})

export default router;
