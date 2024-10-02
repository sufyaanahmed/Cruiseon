import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'; // Import EmailJS

function BookNowForm({ onClose, carOptions = [], selectedCar }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    car: selectedCar || carOptions.length > 0 ? carOptions[0].name : '', // Set default car if available
    startDate: '',
    endDate: '',
  });

  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  
    /*const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
      if (!formData.name || !formData.phone || !formData.email || !formData.car || !formData.startDate || !formData.endDate) {
        console.log('All fields are required');
        return;
      } 
      console.log(formData);
       emailjs.sendForm(
        'service_sbhqs2s','template_wwpwhev',form.current,'8sBkmnNJbKedVa8oB')
        .then((result) => {
          console.log(result.text);
          setConfirmationMessage('Mail sent!');
        },(error) => {
          console.error('Error:', error);
          setConfirmationMessage('Not able to send Mail!');
        }
      );

    }*/
      const sendEmail = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.phone || !formData.email || !formData.car || !formData.startDate || !formData.endDate) {
          console.log('All fields are required');
          return;
        }
    
        const emailParams = {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          car: formData.car,
          startDate: formData.startDate,
          endDate: formData.endDate,
        };
    
        emailjs.send(
          'service_sbhqs2s',
          'template_wwpwhev',
          emailParams,
          '8sBkmnNJbKedVa8oB'
        )
          .then((result) => {
            console.log(result.text);
            setConfirmationMessage('Mail sent!');
          }, (error) => {
            console.error('Error:', error);
            setConfirmationMessage('Not able to send Mail!');
          });
      };



    // EmailJS template parameters
    /*const emailParams = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      car: formData.car,
      startDate: formData.startDate,
      endDate: formData.endDate,
      */
      
    

    // Send email using EmailJS
    /*emailjs.send(
      'service_sbhqs2s',  // Replace with your EmailJS service ID
      'template_wwpwhev', // Replace with your EmailJS template ID
      emailParams,
      '8sBkmnNJbKedVa8oB'   // Replace with your EmailJS public key
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setConfirmationMessage('Quotation request sent!'); // Set confirmation message
  
      // Delay closing the form for 2 seconds to show the message
      setTimeout(() => {
        onClose();
      }, 2000);
    })
    .catch((error) => {
      console.error('FAILED...', error);
      setConfirmationMessage('Failed to send quotation request.');
    });
  };*/

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Book a Car</h2>
        <form onSubmit={sendEmail}>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            placeholder="Name" 
            className="mb-4 p-2 w-full" 
            required 
          />
          <input 
            type="text" 
            name="phone" 
            value={formData.phone} 
            onChange={handleChange} 
            placeholder="Phone Number" 
            className="mb-4 p-2 w-full" 
            required 
          />
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            placeholder="Email" 
            className="mb-4 p-2 w-full" 
            required 
          />
          
          {/* Dropdown for car selection */}
          <select 
            name="car" 
            value={formData.car} 
            onChange={handleChange} 
            className="mb-4 p-2 w-full" 
            required
          >
            {carOptions.length > 0 ? (
              carOptions.map((car) => (
                <option key={car.name} value={car.name}>
                  {car.name}
                </option>
              ))
            ) : (
              <option value="" disabled>No cars available</option>
            )}
          </select>

          <input 
            type="date" 
            name="startDate" 
            value={formData.startDate} 
            onChange={handleChange} 
            className="mb-4 p-2 w-full" 
            required 
          />
          <input 
            type="date" 
            name="endDate" 
            value={formData.endDate} 
            onChange={handleChange} 
            className="mb-4 p-2 w-full" 
            required 
          />
          <button type="submit" className="bg-orange-500 text-white p-2 rounded w-full">
            Submit
          </button>
        </form>

        {/* Display confirmation message */}
        {confirmationMessage && (
          <p className="text-green-600 mt-4">{confirmationMessage}</p>
        )}

        <button onClick={onClose} className="text-gray-500 mt-4">Close</button>
      </div>
    </div>
  );
}

export default BookNowForm;
