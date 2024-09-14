import React from 'react';
import TreeList from './components/TreeList';
import AddTreeForm from './components/AddTreeForm';
import UserList from './components/UserList';


function App() {
  return (
    <div className="App">
      <AddTreeForm />
      <TreeList />
      <UserList />
    </div>
  );
}

export default App;
