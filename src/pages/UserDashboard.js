import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserCard from '../components/UserCard';
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    gridContainer: {
      paddingLeft: '50px',
      paddingRight: '50px',
    }
});

const UserDashboard = () => {
    const [ userList, setUserList ] = useState([]);
    const [loading, setLoading] = useState(true);
    const classes = useStyles();

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            setUserList(response.data)
            setLoading(false)
        }
        )
        .catch(e => {
            console.log(e)
        })
    },[]);

    return (
        <div>
            <h1>User Dashboard</h1>
            {loading ? (<div/>) : (
                <Grid container spacing={4} justify="center" className={classes.gridContainer}>
                    {userList.map(user => {
                        return <UserCard user={user}/>
                    })}
                </Grid>
            )}
        </div>
    );
}
 
export default UserDashboard;