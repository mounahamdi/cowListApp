import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from 'react-bootstrap';
import Cow from './Cow';

const CowsList = ({data,deleteCow,updateCow}) => {
    return (
        <div><h2>Cows List</h2>
            <Table>
                <tbody>
                {data.map(cow=><Cow cow={cow} key={cow.id} deleteCow={deleteCow} updateCow={updateCow}/>)}
                </tbody>
            </Table>
        </div>
    )
}

export default CowsList;