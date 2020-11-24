import { Grid, Paper, Typography, Box } from '@material-ui/core'
import { LeftSide } from './components/LeftSide/LeftSide';
import { BigBanner } from './components/BigBanner/BigBanner';
import { Header } from './components/Header/Header';
import { makeStyles } from '@material-ui/core/styles';
import { PopularProduct } from './components/PopularProduct/PopularProduct';
import { Banners } from './components/Banners';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  left: {
    // display: 'flex',
    height: '100vh',
    // flexDirection: 'column',
    overflowY: 'scroll'
  },
  products: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  title: {
    margin: theme.spacing(2)
  }
}));
export const App = () => {
  const classes = useStyles();
  return (
    <Paper>
      <Header />
      <Grid container>
        <Grid item className={classes.root} xs={12}>
          <BigBanner />
        </Grid>
        <Grid item className={classes.left} xs={2}>
          <LeftSide />
        </Grid>
        <Grid item container xs={10} alignContent='flex-start'>
          <Grid item xs={12} className={classes.title}>
            <Typography variant='h4'>Популярные товары</Typography>
          </Grid>
          <Box className={classes.products} >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((product, i) => (<PopularProduct key={i} />))}
          </Box>
          <Banners />
          <Box className={classes.products} >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((product, i) => (<PopularProduct key={i} />))}
          </Box>
        </Grid>

      </Grid>
    </Paper>
    //   <div className="App">
    // </div>
  );
}

export default App;
