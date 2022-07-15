import './App.css';
import { useState, useEffect } from 'react';
import { getListData } from './Services/listService'
import Store from "./Redux/store";
import { useSelector } from 'react-redux'
import ListItem from './Components/ListItem';
import { CircularProgress, TextField, Card } from '@mui/material';

const App = () => {
  const [search, setSearch] = useState()

  useEffect(() => {
    getListData(Store.dispatch)
  }, [])

  const {  data, loading } = useSelector((state) => state.list)

  useEffect(() => {
    const element = document.getElementById(`${search}`);
    if(element) {
      element.scrollIntoView();
    } 
  }, [search])
  
  return (
    <div className="App">
      <h1>Ai Machines</h1>
      <TextField size='small' fullWidth placeholder='Search with Id' value={search} onChange={(e)=> setSearch(e.target.value)}  />
      <div>
        {loading ?
          <CircularProgress /> 
          :
          <Card className='card'>
            <div className='list-container'>
              {data.map((res) => (
                <ListItem data={res} search={search} />
              ))}
            </div>
          </Card>
         }
      </div>
    </div>
  );
}

export default App;
