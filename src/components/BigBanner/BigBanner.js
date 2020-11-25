import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        textAlign: 'center',
        marginTop: theme.spacing(2)
    },
}));

export const BigBanner = props => {
    const classes = useStyles();
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]

    return (
        <Carousel className={classes.root}>
            {
                items.map((item, i) => <Item key={i} item={i + 1} />)
            }
        </Carousel>
    )
}

function Item({ item }) {
    return (
        <Paper elevation={0}>
            <img
                src={`${process.env.PUBLIC_URL}/img/banners/big${item}.jpg`}
                alt='banner'
            />
            {/* 
            <Button className="CheckButton">
                Check it out!
            </Button> */}
        </Paper>
    )
}