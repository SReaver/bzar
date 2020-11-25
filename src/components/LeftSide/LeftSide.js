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
const magazins = [
    {
        slogan: 'Для здоровья',
        title: 'Косметика'
    },
    {
        slogan: 'Для детей',
        title: 'Игрушки'
    },
    {
        slogan: 'Умный дом',
        title: 'Бытовая техника'
    },
]
export const LeftSide = () => {
    const classes = useStyles();
    return (
        <>
            <Typography align='center' className={classes.title}>Магазины</Typography>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((magazin, i) => (
                <PopularMagazinCard key={i}
                    logo={magazin}
                    img1={magazin.toString() + 1}
                    img2={magazin.toString() + 2}
                    img3={magazin.toString() + 3}
                    slogan={i < 3 ? magazins[i].slogan : 'Слоган магазина'}
                    title={i < 3 ? magazins[i].title : 'Название магазина'} />
            ))}
        </>
    )
}
