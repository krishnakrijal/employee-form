import { Avatar, Button, Checkbox, Container, CssBaseline, FormControlLabel, makeStyles, TextField, Typography, Grid, Link,Box } from '@material-ui/core'
import React from 'react';
import LockIcon from '@material-ui/icons/Lock';

const Copyright = ()=>{
    return(
        <Typography variant='body1' color='textPrimary'>
        {'Copyright © '}
        <Link href='#' color='inherit'>
            {'Your Website'}
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
        </Typography>
    )
}


const useStyles = makeStyles((theme) => ({
    main: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar: {
        background: '#DC004E',
        margin: theme.spacing(1)
    },
    form1: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        margin: theme.spacing(1)

    },
    textfield:{
        margin:theme.spacing(2,0,3)
    }
}))

const SignIn = () => {
    const classes = useStyles();
    return (
        <Container maxWidth='xs' align='center'>
            <CssBaseline />
            <div className={classes.main}>
                <Avatar className={classes.avatar}>
                    <LockIcon />
                </Avatar>
                <Typography variant='h5' gutterBottom>
                    Sign In
                </Typography>
                <form className={classes.form1}>
                    <TextField variant='outlined' label='Email Address' required  className={classes.textfield}/>
                    <TextField variant='outlined' label='Password' required className={classes.textfield}/>
                    <FormControlLabel
                        control={<Checkbox  color='primary'/>}
                        label="Remember me"
                    />
                    <Button variant='contained' color='primary'>Sign In</Button>
                </form>
                <Grid container>
                 <Grid item xs>
                    <Link href='#' variant='body1'>
                        Forgot Password?
                    </Link>
                 </Grid>
                 <Grid item>
                     <Link href='#' variant='body1'>
                         {"I dont have account? Sign Up"}
                     </Link>
                 </Grid>
                </Grid>
            </div>
            <Box mt={8}>
        <Copyright />
      </Box>

        </Container>
    )
}

export default SignIn
