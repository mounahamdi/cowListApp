import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Form} from 'react-bootstrap';
const AddCow = ({addCow}) => {
    const [name, setName] = useState("")
    const [description,setDescription] = useState("")
    return (
    <div>
        <h5>Add a new cow to the list:</h5>
        <Form.Control type="text" name="cow-name" placeholder="tap the cow name here" value={name} onChange={(e)=>setName(e.target.value)}/>
        <Form.Control type="text" name="cow-description" placeholder="description..." value={description} onChange={(e)=>setDescription(e.target.value)}/>
        <Button onClick={()=>{addCow(name,description);setName("");setDescription("")}}>Submit</Button>
    </div>
    )
}


export default AddCow;
