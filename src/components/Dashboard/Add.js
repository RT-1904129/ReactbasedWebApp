import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Logout from '../Logout';
const Add = ({ employees, setEmployees, setIsAdding ,setIsAuthenticated }) => {
  const [firstName, setFirstName] = useState('');
  const [middleName,setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [rollNumber,setRollNumber] = useState('');
  const [address1,setAddress1] = useState('');
  const [address2,setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [pincode,setPincode] = useState('');
  const [landmark,setLandmark] = useState('');
  const [className,setClassName] = useState('');
  const [divisionName, setDivisionName] = useState('');
  const handleAdd = e => {
    e.preventDefault();

    if (!firstName || !className ||!divisionName || !rollNumber || !address1 || !city || !pincode || !landmark) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    const id = employees.length + 1;
    const newEmployee = {
      id,
      firstName,
      middleName,
      lastName,
      className,
      divisionName,
      rollNumber,
      address1,
      address2,
      city,
      pincode,
      landmark,
    };

    employees.push(newEmployee);
    localStorage.setItem('employees_data', JSON.stringify(employees));
    setEmployees(employees);
    setIsAdding(false);

    Swal.fire({
      icon: 'success',
      title: 'Added!',
      text: `${firstName} ${lastName}'s data has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className='add-container'>
      <div className='d-flex flex-column justify-content-center mr-2 pr-3'>
        <p className='p-container red-container'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16">
        <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/>
        </svg> Add Student</p>
        <button 
        style={{ backgroundColor: 'white',color:'black',borderColor:'white',fontWeight: 'lighter' }}
        className="p-container"
        onClick={() => setIsAdding(false)}
        >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-kanban-fill" viewBox="0 0 16 16">
        <path d="M2.5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-11zm5 2h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm-5 1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3zm9-1h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"/>
        </svg> Manege Student</button>
        <Logout setIsAuthenticated={setIsAuthenticated} />
      </div>
      <form onSubmit={handleAdd}>
        <div className='upperContainer'>
          <div><h4>Add Student</h4></div>
          <div className='upperContainer-Add-right'><h4>{new Date().toLocaleString()}</h4></div>
        </div>
        <div className='upperContainer'>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value = {firstName}
            onChange={e => setFirstName(e.target.value)}
          />
          <input
            id="middleName"
            type="text"
            name="middleName"
            placeholder="Middle Name"
            value = {middleName}
            onChange={e => setMiddleName(e.target.value)}
          />
          <input
            type="text"
            name="lastName"
            placeholder='Last Name'
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
        </div>
        <div className='upperContainer'>
            <select
              value={className} 
              name='className'
              onChange={e => setClassName(e.target.value)}
            >
              <option value="testing">Select Class </option>
              <option value="1">I</option>
              <option value="2">II</option>
              <option value="3">III</option>
              <option value="4">IV</option>
              <option value="5">V</option>
              <option value="6">VI</option>
              <option value="7">VII</option>
              <option value="8">VIII</option>
              <option value="9">IX</option>
              <option value="10">X</option>
              <option value="11">XI</option>
              <option value="12">XII</option>
          </select>
          <select
              id="selectDivision"
              name='divisionName'
              value={divisionName} 
              onChange={e => setDivisionName(e.target.value)}
            >
              <option value="testing">Select Division</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
          </select>
          <input
            type="number"
            name="rollNumber"
            placeholder="Enter Roll Number in Digits"
            min="10" 
            max="99"
            value={rollNumber}
            onChange={e => setRollNumber(e.target.value)}
          />
        </div>
        <div className='upperContainer'>
          <input
            type="text"
            name="address1"
            placeholder="Address Line 1"
            value={address1}
            onChange={e => setAddress1(e.target.value)}
          />
          <input
            id="address2"
            type="text"
            name="address2"
            placeholder="Address Line 2"
            value={address2}
            onChange={e => setAddress2(e.target.value)}
          />
        </div>
        <div className='upperContainer'>
          <input
              type="text"
              name="landmark"
              placeholder="Landmark"
              value={landmark}
              onChange={e => setLandmark(e.target.value)}
            />
          <input
              id="city"
              type="text"
              name="city"
              placeholder="City"
              value={city}
              onChange={e => setCity(e.target.value)}
            />
          <input
              type="number"
              name="pincode"
              placeholder="Pincode"
              min="100000" 
              max="999999"
              value={pincode}
              onChange={e => setPincode(e.target.value)}
            />
        </div>
        <div>
          <input type="submit" value="Add Student" 
          className='p-container'
          id='add-button-container'
          />
        </div>
      </form>
    </div>
  );
};
export default Add;
