import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

export const ContactForm = db.define('contact', {
    name: {
        type: DataTypes.STRING,
        
    },
    email: {
        type: DataTypes.STRING,
        
    },
    message: {
        type: DataTypes.TEXT,
      
    },
}, {
    freezeTableName: true,
});

export default ContactForm;
