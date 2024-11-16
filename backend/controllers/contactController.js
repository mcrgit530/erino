const Contact = require('../models/Contact');

const createContact = async (req, res) => {
  const { firstName, lastName, email, phoneNumber, company, jobTitle } = req.body;
  try {
    const newContact = new Contact({ firstName, lastName, email, phoneNumber, company, jobTitle });
    await newContact.save();
    res.status(201).json(newContact);
  } catch (error) {
    res.status(400).json({ error: 'Error creating contact' });
  }
};

const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(400).json({ error: 'Error fetching contacts' });
  }
};

const updateContact = async (req, res) => {
  try {
    const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedContact);
  } catch (error) {
    res.status(400).json({ error: 'Error updating contact' });
  }
};

const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' });
    }
    res.status(200).json({ message: 'Contact deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting contact' });
  }
};

module.exports = {
  createContact,
  getContacts,
  updateContact,
  deleteContact
};
