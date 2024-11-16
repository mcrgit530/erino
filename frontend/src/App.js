import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, TablePagination } from '@mui/material';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import ConfirmationDialog from './components/ConfirmationDialog';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    company: '',
    jobTitle: '',
  });
  const [editingContact, setEditingContact] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [openDialog, setOpenDialog] = useState(false);
  const [contactToDelete, setContactToDelete] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/contacts')
      .then((response) => {
        setContacts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching contacts:', error);
      });
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingContact) {
      axios.put(`http://localhost:5000/contacts/${editingContact._id}`, formData)
        .then(() => {
          setContacts(contacts.map(contact => contact._id === editingContact._id ? formData : contact));
          setEditingContact(null);
          setFormData({ firstName: '', lastName: '', email: '', phoneNumber: '', company: '', jobTitle: '' });
        });
    } else {
      axios.post('http://localhost:5000/contacts', formData)
        .then((response) => {
          setContacts([...contacts, response.data]);
          setFormData({ firstName: '', lastName: '', email: '', phoneNumber: '', company: '', jobTitle: '' });
        });
    }
  };

  const handleEdit = (contact) => {
    setEditingContact(contact);
    setFormData(contact);
  };

  const handleDeleteClick = (contact) => {
    setContactToDelete(contact);
    setOpenDialog(true);
  };

  const handleDelete = () => {
    axios.delete(`http://localhost:5000/contacts/${contactToDelete._id}`)
      .then(() => {
        setContacts(contacts.filter(contact => contact._id !== contactToDelete._id));
        setOpenDialog(false);
      })
      .catch((error) => {
        console.error('Error deleting contact:', error);
      });
  };

  const handleCancelDelete = () => {
    setOpenDialog(false);
    setContactToDelete(null);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Container>
      <ContactForm formData={formData} onInputChange={handleInputChange} onSubmit={handleSubmit} editingContact={editingContact} />
      <ContactList contacts={contacts} onEdit={handleEdit} onDelete={handleDeleteClick} page={page} rowsPerPage={rowsPerPage} />
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={contacts.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <ConfirmationDialog open={openDialog} onCancel={handleCancelDelete} onDelete={handleDelete} />
    </Container>
  );
};

export default App;
