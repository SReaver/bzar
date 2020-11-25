import { Card, CardContent, CardHeader, CardActions, Typography, Grid } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
const useStyles = makeStyles((theme) => ({
    root: {
        // width: '100%',
        // display: 'flex',
        flexGrow: 1,
        flexShrink: 1,
        // height: 200,
        margin: theme.spacing(1)
        // flexBasis: '200px'
    },

}));
export const PopularProduct = ({ img }) => {
    const classes = useStyles();
    const logo = `${process.env.PUBLIC_URL}/img/product/${img}.jpg`
    return (
        // <Grid item>
        <Card className={classes.root}>
            <CardContent>
                <img
                    src={img > 5 ? `${process.env.PUBLIC_URL}/img/product/2.jpg` : logo}
                    alt='product'
                />
            </CardContent >
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>

            </CardActions>
        </Card >
        // </Grid>
    )
}
