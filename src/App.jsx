import React,{useEffect,useState} from 'react';
import axios from 'axios';
import CowsList from './components/CowsList.jsx';
import AddCow from './components/AddCow.jsx';

const App = () => {
    const [data,setData] = useState([])
    const [update,setUpdate] = useState(false)

    const addCow = (name,description)=>{
        axios.post('http://localhost:3000/api/cows',{name:name,description:description}).then(response=>setUpdate(!update))
    }

    const deleteCow = (id)=>{
      axios.delete(`http://localhost:3000/api/cows/${id}`).then(response=>setData(data.filter(cow =>cow.id!==id)))
    }

    const updateCow = (id,newName)=>{
      axios.put(`http://localhost:3000/api/cows/${id}`,{name:newName}).then(response=>{
        let newData = data.map(cow=>cow.id===id?{...cow,name:newName}:cow)
        setData(newData)
      })
    }

    useEffect(() => {
    axios.get('http://localhost:3000/api/cows').then(response=>setData(response.data))
    },[update])
    return (
    <div>
      <CowsList data={data} deleteCow={deleteCow} updateCow={updateCow}/>
      <AddCow addCow={addCow}/>
    </div>
    )
}

export default App;