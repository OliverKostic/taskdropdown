import React, {useState} from 'react';
import './dropdown.css';

const CustomDropdown = ({employees, onSelect}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (employee) => {
        onSelect(employee);
        setIsOpen(false);
    };

    const sortedEmployees = employees.slice().sort((a, b) => a.firstName.localeCompare(b.firstName));

    return (
        <div className="custom-dropdown">
            <div className="dropdown-header" onClick={toggleDropdown}>
                Select Employee
            </div>
            {isOpen && (
                <ul className="dropdown-list">
                    {sortedEmployees.map((employee) => (
                        <li key={employee.id} onClick={() => handleSelect(employee)}>
                            {employee.firstName} {employee.lastName}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CustomDropdown;