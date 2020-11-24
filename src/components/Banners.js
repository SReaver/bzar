import { Card, CardContent, CardHeader, CardActions, Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    banner: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // flexGrow: 1,
        height: 270,
        borderRadius: '15px',
        backgroundColor: 'lightblue'
    },
}));
export const Banners = () => {
    const classes = useStyles();
    return (
        <Grid container spacing={3} alignContent='flex-start' className={classes.root}>
            <Grid item xs={6}>
                <Card className={classes.banner}>
                    <Typography variant='h3'>Баннер</Typography>
                </Card>
            </Grid>
            <Grid item xs={6}>
                <Card className={classes.banner}>
                    <Typography variant='h3'>Баннер</Typography>
                </Card>
            </Grid>
        </Grid>
    )
}
