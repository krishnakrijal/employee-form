import { AppBar, Button, Card, CardActions, CardContent, CardMedia, Container, CssBaseline, Grid, Link, makeStyles, Toolbar, Typography } from '@material-ui/core';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import React from 'react';


const Copyright = () =>{
    return(
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://material-ui.com/'>
          Your Website
    </Link>{' '}
    {new Date().getFullYear}
    {'.'}
    </Typography>
    
    );
}

const useStyles = makeStyles((theme) => ({
    camera: {
        marginRight: theme.spacing(1)
    },
    main:{
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    typo: {
        paddingTop: '40px'
    },
    button:{
      paddingTop:theme.spacing(2)
    },
    mainCard:{
        padding:theme.spacing(8,0,6)
    },
    card:{
        height:'100%',
        display:'flex',
        flexDirection:'column'
    },
    cardM:{
        paddingTop:'56.25%'
    },
    cardContent:{
        flexGrow:1,
    },
    footer:{
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    }
}));

const Display = () => {
    const classes = useStyles();
    const cards = [1,2,3,4,5,6,7,8,9];
    return (
        <>
            <CssBaseline />
            <AppBar position='relative'>
                <Toolbar>
                    <CameraAltIcon className={classes.camera} />
                    <Typography variant='h6' color='inherit' noWrap>Album layout</Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div className={classes.main}>
                    <Container maxWidth='sm'>
                        <Typography variant='h4' align='center' className={classes.typo} gutterBottom>
                            Album Layout
                        </Typography>
                        <Typography variant='h6' color='textSecondary' align='center' paragraph>
                            Something short and leading about the collection below-its contents, the creator, etc. Make it short and sweet,
                            but not too short so folks don't simply skip over it entirely.
                        </Typography>
                        <div className={classes.button}>
                            <Grid container spacing={2} justify='center'>
                                <Grid item>
                                    <Button variant='contained' color='primary'>
                                       MAIN CALL TO ACTION
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant='outlined' color='primary'>
                                       SECONDARY ACTION
                                    </Button>
                                </Grid>

                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container maxWidth ="md" className={classes.mainCard}>
                    <Grid container>
                        { cards.map((card)=>(
                        <Grid item key={card} xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia
                                className={classes.cardM}
                                image="https://source.unsplash.com/random"
                                title='image'
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography variant='h5' gutterBottom component='h2'>
                                       Heading
                                    </Typography>
                                    <Typography>This is media card. You can use this section to describe the content</Typography>

                                </CardContent>
                                <CardActions>
                                    <Button size='small' color='primary'>
                                        View
                                    </Button>
                                    <Button size='small' color='primary'>
                                        Edit
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>))}

                    </Grid>
                </Container>

            </main>
            <footer className={classes.footer}>
                <Typography variant='h6' align='center' gutterBottom>
                    Footer
                </Typography>
                <Typography variant='subtitle1' align='center' component='p'>
                  Something here to give a footer is purpose!
                </Typography>
                <Copyright/>

            </footer>
            
        </>
    )
}

export default Display
