import { Card, Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    banner: {
        margin: theme.spacing(1),
        display: 'flex',
        flexGrow: 1,
        flexShrink: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 270,
        borderRadius: '15px',
        // backgroundColor: 'lightblue'
    },
}));
export const Banners = () => {
    const classes = useStyles();
    return (
        <>
            <Card className={classes.banner} elevation={0}>
                {/* <Typography variant='h3'>Баннер</Typography> */}
                <img
                    src={`${process.env.PUBLIC_URL}/img/banners/small1.jpg`}
                    alt='banner'
                />
            </Card>
            <Card className={classes.banner} elevation={0}>
                {/* <Typography variant='h3'>Баннер</Typography> */}
                <img
                    src={`${process.env.PUBLIC_URL}/img/banners/small2.jpg`}
                    alt='banner'
                />
            </Card>
        </>
    )
}
