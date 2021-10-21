import './App.css';
import User from './Components/User';
import { useState } from 'react';

const App = () => {
  const [query, setQuery] = useState('');

  const handleOnChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <h4> User Information </h4>
      <label> Search User</label>
      <input type='text' onChange={handleOnChange} />
      <User query={query} />
    </div>
  );
};

export default App;
