import { Card, CardContent, Grid, Box, CardHeader } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
        // maxWidth: 'fit-content',
        marginBottom: '10px',

    },
    logo: {
        width: '45px',
        height: '45px',
        backgroundColor: 'lightblue',
        borderRadius: '3px',
        overflow: 'hidden'
    },
    logoSmall: {
        width: '45px',
        height: '45px',
        borderRadius: '3px',
        overflow: 'hidden',
        backgroundColor: 'pink',
        '&:last-child': {
            marginTop: '10px'
        }
    },
    logo100: {
        width: '100px',
        height: '100px',
        borderRadius: '3px',
        overflow: 'hidden',
        backgroundColor: 'lightgreen'
    },
    content: {
        paddingTop: 0,
        paddingBottom: '8px',
        "&:last-child": {
            paddingBottom: 16
        }
    },
    vertical: {
        flexDirection: 'column'
    }
}));
export const PopularMagazinCard = () => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Box className={classes.logo} />
                }
                title="Название магазина"
                subheader="Слоган магазина"
            />
            <CardContent className={classes.content}>
                {/* <Grid container spacing={1}>
                    <Grid item>
                        <Box className={classes.logo} />
                    </Grid>
                    <Grid item>
                        <Typography variant="h6">
                            Название магазина
                        </Typography>
                        <Typography color="textSecondary">
                            Слоган магазина
                        </Typography>
                    </Grid>
                </Grid> */}
                <Grid container spacing={1} >
                    <Grid item >
                        <Box className={classes.logo100} />
                    </Grid>
                    <Grid item className={classes.vertical} >
                        <Box className={classes.logoSmall} />
                        <Box className={classes.logoSmall} />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}
