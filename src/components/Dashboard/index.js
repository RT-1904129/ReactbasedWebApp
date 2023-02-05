import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import Header from './Header';
import Table from './Table';
import Add from './Add';
import Edit from './Edit';
import View from './View';
import { employeesData } from '../../data';


const Dashboard = ({ setIsAuthenticated }) => {
  const [employees, setEmployees] = useState(employeesData);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isViewing, setIsViewing] = useState(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('employees_data'));
    if (data !== null && Object.keys(data).length !== 0) setEmployees(data);
  }, []);

  const handleEdit = id => {
    const [employee] = employees.filter(employee => employee.id === id);

    setSelectedEmployee(employee);
    setIsEditing(true);
  };

  const handleView = id =>{
    const [employee] = employees.filter(employee => employee.id === id );
    setSelectedEmployee(employee);
    setIsViewing(true);
  };
  
  const handleDelete = id => {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure you want to delete this item',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: 'Delete it!',
      cancelButtonText: 'Cancel it!',
    }).then(result => {
      if (result.value) {
        const [employee] = employees.filter(employee => employee.id === id);

        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: `${employee.firstName} ${employee.middleName} ${employee.lastName}'s data has been deleted.`,
          showConfirmButton: false,
          timer: 1500,
        });

        const employeesCopy = employees.filter(employee => employee.id !== id);
        localStorage.setItem('employees_data', JSON.stringify(employeesCopy));
        setEmployees(employeesCopy);
      }
    });
  };

  return (
    <div className='backgound-container'>
      {!isAdding && !isEditing && !isViewing && (
          <div>
            <Header/>
            <Table
              employees={employees}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              handleView={handleView}
              setIsAdding={setIsAdding}
              setIsAuthenticated={setIsAuthenticated}
            />
          </div>
      )}
      {isAdding && (
          <div>
            <Header/>
            <Add
              employees={employees}
              setEmployees={setEmployees}
              setIsAdding={setIsAdding}
              setIsAuthenticated={setIsAuthenticated}
            />
          </div>
      )}
      {isEditing && (
        <div>
          <Header />
          <Edit
            employees={employees}
            selectedEmployee={selectedEmployee}
            setEmployees={setEmployees}
            setIsEditing={setIsEditing}
            setIsAuthenticated={setIsAuthenticated}
          />
        </div>
      )}
      {isViewing && (
          <div>
            <Header/>
            <View
              employees={employees}
              selectedEmployee={selectedEmployee}
              setEmployees={setEmployees}
              setIsViewing={setIsViewing}
              setIsAuthenticated={setIsAuthenticated}
            />
          </div>
      )}
    </div>
  );
};
export default Dashboard;
