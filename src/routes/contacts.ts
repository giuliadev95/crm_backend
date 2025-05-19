import express from 'express';
import { getContacts } from '../controllers/contacts';

// Initialize and export the router used for contacts queries
const Contactsrouter = express.Router();

// 'get' route
Contactsrouter.get('/', getContacts);

// Export the router for the contacts
export default Contactsrouter;