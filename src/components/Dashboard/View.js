import React, { useState } from 'react';
import Logout from '../Logout';
const View = ({ selectedEmployee, setIsViewing, setIsAuthenticated }) => {
  const id = selectedEmployee.id;
  const [firstName, setFirstName] = useState(selectedEmployee.firstName);
  const [middleName,setMiddleName] = useState(selectedEmployee.middleName);
  const [lastName, setLastName] = useState(selectedEmployee.lastName);
  const [className,setClassName] = useState(selectedEmployee.className);
  const [divisionName,setDivisionName] = useState(selectedEmployee.divisionName);
  const [rollNumber,setRollNumber] = useState(selectedEmployee.rollNumber);
  const [address1,setAddress1] = useState(selectedEmployee.address1);
  const [address2,setAddress2] = useState(selectedEmployee.address2);
  const [city, setCity] = useState(selectedEmployee.city);
  const [pincode,setPincode] = useState(selectedEmployee.pincode);
  const [landmark,setLandmark] = useState(selectedEmployee.landmark);


  return (
    <div className='add-container'>
      <div className='d-flex flex-column justify-content-center mr-2 pr-3'>
        <p className='p-container red-container'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16">
        <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/>
        </svg> View Student</p>
        <button 
        style={{ backgroundColor: 'white',color:'black',borderColor:'white',fontWeight: 'lighter' }}
        className="p-container"
        onClick={() => setIsViewing(false)}
        >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-kanban-fill" viewBox="0 0 16 16">
        <path d="M2.5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-11zm5 2h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm-5 1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3zm9-1h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"/>
        </svg> Manege Student</button>
        <Logout setIsAuthenticated={setIsAuthenticated} />
      </div>
      <form>
        <div className='upperContainer'>
          <div><h4>View Student</h4></div>
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
            id="viewMiddleName"
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
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
          </select>
          <select
              id="viewSelectDivision"
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
            id="viewAddress2"
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
              id="viewCity"
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
      </form>
    </div>
  );
};

export default View;
