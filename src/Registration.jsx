import React, { useState } from 'react';

const tierDetails = {
  1: { amount: 10000, interestRate: 0.05 },
  2: { amount: 20000, interestRate: 0.10 },
  3: { amount: 30000, interestRate: 0.20 },
};

function Registration({ addStudent, isFull }) {
  const [name, setName] = useState('');
  const [tier, setTier] = useState('');

  const amount = tierDetails[tier]?.amount || 0;
  const interestRate = tierDetails[tier]?.interestRate || 0;
  const interest = amount * interestRate;
  const total = amount + interest;

  const handleSubmit = (e) => {
    e.preventDefault();

    const student = {
      name,
      tier,
      amount,
      interest,
      total,
    };

    addStudent(student);
    setName('');
    setTier('');
  };

  return (
    <div className='container' >
      <h1>Register Stray Kid</h1>
      <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter student name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <select value={tier} onChange={(e) => setTier(e.target.value)} required>
        <option value="" disabled hidden>Select a tier</option>
        <option value="1">Tier 1 (₦10,000 - 5%)</option>
        <option value="2">Tier 2 (₦20,000 - 10%)</option>
        <option value="3">Tier 3 (₦30,000 - 20%)</option>
      </select>

      <p>Weekly Interest: {tier ? `₦${interest}` : '-'}</p>
      <p>Total Return: {tier ? `₦${total}` : '-'}</p>

      <button type="submit" disabled={isFull}>Join</button>
    </form>
    </div>
  );
}

export default Registration;