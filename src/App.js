import { useState, useEffect } from 'react';
import './App.css';
import CardList from './Components/Card-list/card-list.component';
import SearchBox from './Components/search-box/search-box.component';

const App=()=>{

  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);

  const [filteredMonsters, setFilterMonsters] = useState(monsters);

  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setMonsters(users));
  }, []);


  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      
      return monster.name.toLowerCase().includes(searchField);
  
    })
    setFilterMonsters(newFilteredMonsters);
  
  }, [monsters, searchField]);

      const onSearchChange = (event) => {

      const searchFieldString = event.target.value.toLowerCase();
      setSearchField(searchFieldString)
     };


     return(
        <div className="App">
          <h1 className='app-title'>Monster Rolodex</h1>
          <SearchBox onChangeHandler={onSearchChange} placeholder="Search Monsters" className="monsters-search-box"/>
          <CardList monsters={filteredMonsters}/>
        </div>
  )
}

export default App;
