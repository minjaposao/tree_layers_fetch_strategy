'use client'

import React, {useState} from 'react'
import { useUserMutations } from '@/hooks/users/useUserMutations';

const CreateUserForm1 = () => {
   const { createUser, isCreating } = useUserMutations();
  
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [price, setPrice] = useState('');
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
  
      if (!name || !age || !price) {
        alert('Please fill in all fields');
        return;
      }
  
      createUser({ name, age, price });
  
      // Opcionalno: resetuj formu
      setName('');
      setAge('');
      setPrice('');
    };
  
    return (
      <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 border rounded shadow">
        <h2 className="text-xl font-bold mb-4">Create New User</h2>
  
        <label className="block mb-2">
          Name:
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            className="w-full p-2 border rounded"
            disabled={isCreating}
            required
          />
        </label>
  
        <label className="block mb-2">
          Age:
          <input
            type="text"
            value={age}
            onChange={e => setAge(e.target.value)}
            className="w-full p-2 border rounded"
            disabled={isCreating}
            required
          />
        </label>
  
        <label className="block mb-4">
          Price:
          <input
            type="text"
            value={price}
            onChange={e => setPrice(e.target.value)}
            className="w-full p-2 border rounded"
            disabled={isCreating}
            required
          />
        </label>
  
        <button
          type="submit"
          disabled={isCreating}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {isCreating ? 'Creating...' : 'Create User'}
        </button>
      </form>
    )}

export default CreateUserForm1