import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActions, CardContent, Typography, Avatar, Grid, Link, Box } from '@material-ui/core';
import DetailButton from './DetailButton';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 150,
  },
  title: {
    fontSize: 14,
  },
  avatar: {
    width: theme.spacing(9),
    height: theme.spacing(9),
  },
}));

const UserCard = ({user}) => {
    const classes = useStyles();
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Grid container direction="column" justify="center" alignItems="center">
                        <Avatar className={classes.avatar}>{user.name.charAt(0)}</Avatar>
                        <Typography component="div">
                            <Box fontWeight="fontWeightBold" m={1}>
                                {user.name} 
                            </Box>
                        </Typography>
                        <Typography color="textSecondary" variant="body2">
                            @{user.username}
                        </Typography>
                        <Typography>
                            <Link variant="body2">
                                {user.email}
                            </Link>
                        </Typography>
                        <CardActions>
                            <DetailButton id={user.id}/>
                        </CardActions>
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    );
}
 
export default UserCard;