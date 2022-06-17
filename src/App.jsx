import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';


function App() {

  const [user,setUser] = useState('ahmad')

  return (
    <div className='expensesApp'>
      {user}
      <Header user={user}/>
      <Body user={user} setUser = {setUser}/>
    </div>
  );
}

export default App;
