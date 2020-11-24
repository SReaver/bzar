import { PopularMagazinCard } from '../PopularMagazinCard/PopularMagazinCard.js'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    // root: {
    //     marginTop: theme.spacing(),
    // },
    title: {
        fontWeight: 'bold'
    }
}))
export const LeftSide = () => {
    const classes = useStyles();
    return (
        <>
            <Typography align='center' className={classes.title}>Магазины</Typography>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((magazin, i) => (
                <PopularMagazinCard key={i} />
            ))}
        </>
    )
}
