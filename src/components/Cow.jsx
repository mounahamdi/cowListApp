import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import EditCow from './EditCow'

const Cow = ({cow,deleteCow,updateCow}) => {
    const [detail,setDetail] = useState(false)
    const [edit,setEdit] = useState(false)
    const changeEdit = ()=>{
        setEdit(!edit)
    }
    return (
    <>
        <tr>
            <th onClick={()=>setDetail(!detail)}>{cow.name}</th>
            {detail?<th>{cow.description}</th>:""}
            <th><Button onClick={()=>deleteCow(cow.id)}>Delete</Button></th>
            <th><Button onClick={()=>changeEdit()}>Edit</Button></th>
            {edit?<EditCow cow={cow} changeEdit={changeEdit} updateCow={updateCow}/>:""}
        </tr>
    </>
    )
}


export default Cow;