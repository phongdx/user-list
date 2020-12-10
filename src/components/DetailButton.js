import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const DetailButton = ({id}) => {
    return (
        <Button variant="contained" color="primary" component={Link} to={`/user/${id}`}>MORE DETAILS</Button>
    );
}
 
export default DetailButton;