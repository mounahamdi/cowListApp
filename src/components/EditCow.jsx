import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Form} from 'react-bootstrap';
const EditCow = ({cow,changeEdit,updateCow}) => {
    const [newName,setNewName] = useState("")
    return (
        <th>
            <Form.Control type="text" name="cow-name" placeholder="tap the new name here" value={newName} onChange={e=>setNewName(e.target.value)}/>
            <Button onClick={()=>{updateCow(cow.id,newName);changeEdit()}}>Save</Button>
        </th>
        )
}


export default EditCow;