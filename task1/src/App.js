import './App.css';
import React, {useState, useEffect} from 'react';
import employeesData from './employees.json';
import CustomDropdown from './dropdown/CustomDropdown';

const App = () => {
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    const employees = employeesData.employees;


    const handleSelect = (employee) => {
        setSelectedEmployee(employee);
        console.log('Selected employee:', employee);
    };

    return (
        <div className="App">
            <CustomDropdown employees={employees} onSelect={handleSelect}/>
            {selectedEmployee && (
                <p>Selected Employee: {selectedEmployee.firstName} {selectedEmployee.lastName}</p>
            )}
        </div>
    );
};

export default App;