import React, { useState } from 'react';
import Registration from './Registration';

function Dashboard() {
  const [students, setStudents] = useState([]);
  const [showRegistration, setShowRegistration] = useState(true);
  const maxStudents = 12;

  const addStudent = (student) => {
    if (students.length < maxStudents) {
      setStudents([...students, student]);
      setShowRegistration(false); 
    }
  };
  const totalSavings = students.reduce((sum, student) => sum + student.total, 0);

  const withdrawStudent = (index) => {
    const newArray = [
      ...students.slice(0, index),
      ...students.slice(index + 1),
    ];
    setStudents(newArray);
    if (students.length === 1 ) {
      setShowRegistration(true)
    }
  };

  const isFull = students.length >= maxStudents;

  return (
    <div>
      {showRegistration && !isFull && (
          <Registration addStudent={addStudent} isFull={isFull} />

      )}

      {!showRegistration && students.length > 0 && (
        <div className="container2">
          <h2>Registered Strays ({students.length}/{maxStudents})</h2>
          <div className='flex'> 
          <h3>Total Savings: {totalSavings}</h3>
          {!showRegistration && !isFull && (
        <button onClick={() => setShowRegistration(true)}>
          Add More Students
        </button>
      )}
          </div>
      <table>
        <tr>
          <th>Name</th>
          <th>Tier</th>
          <th>Amount</th>
          <th>Interest</th>
          <th>Total Return</th>
        </tr>
        <tbody>
              {students.map((student, i) => (
                <tr key={i}>
                  <td>{student.name}</td>
                  <td>Tier {student.tier}</td>
                  <td>₦{student.amount}</td>
                  <td>₦{student.interest}</td>
                  <td>₦{student.total}</td>
                  <button onClick={() => withdrawStudent(i)}>Withdraw</button>
                  </tr>              
                ))}
          </tbody>
      </table>
          
      </div>
      )}
    </div>
  );
}

export default Dashboard;