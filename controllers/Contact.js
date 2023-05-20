import { ContactForm } from '../models/contact.js';
import db from '../config/Database.js';


db.sync({ force: false })


// Create and Save a new ContactForm
export const sendContactForm = async (req, res) => {
  const { name, email, message } = req.body;
  try {
    await ContactForm.create({
      name: name,
      email: email,
      message: message,
    });
    res.json({ msg: 'Message envoyé' });
  } catch (error) {
    console.log(error);
  }
};
