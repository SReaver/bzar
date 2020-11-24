import { AppBar, Toolbar, Typography, Grid, TextField, Box, Button } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
        color: '#fff'
    },
    searchInput: {
        // width: '50%',
        // marginLeft: 'auto',
        // marginRight: 'auto'
        '.MuiInputBase-input': {
            color: '#fff',
        },
    },
    searchColumn: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff'
    },
    center: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    cards: {
        display: 'flex'
    },
    cardItem: {
        flexGrow: 1,
        flexShrink: 1,
        padding: 10,
        margin: 5,
        '&:last-child': {
            marginRight: 0
        },
        '&:first-child': {
            marginLeft: 0
        }
    }

}));
const popular = [
    {
        name: "Все категории"
    },
    {
        name: "Спорт, Туризм"
    },
    {
        name: "Обувь"
    },
    {
        name: "Одежда"
    },
    {
        name: "Телефоны Гаджеты"
    },
    {
        name: "Автотовары"
    },
    {
        name: "Украшения Аксессуары"
    },
    {
        name: "Красота Здоровье"
    },
    {
        name: "Бытовая техника"
    },
    {
        name: "Фототехника"
    },
]
export const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <Grid container spacing={3}>
                    <Grid item>
                        <Typography variant="h6">
                            BZAR
                        </Typography>
                    </Grid>
                    <Grid item>
                        <IconButton
                            aria-label="open drawer"
                        // edge="start"
                        >
                            <MenuIcon />
                        </IconButton>
                    </Grid>
                    <Grid item className={classes.searchColumn} >
                        {/* <InputBase
                            className={classes.searchInput}
                            placeholder="Search Google Maps"
                            inputProps={{ 'aria-label': 'search google maps' }}
                        /> */}
                        {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" size="small" /> */}
                        <TextField
                            id="outlined-full-width"
                            // label="Label"
                            // style={{ margin: 8 }}
                            placeholder="Поиск"
                            fullWidth
                            size="small"
                            // margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                        />
                        {/* <IconButton type="submit" className={classes.iconButton} aria-label="search">
                            <SearchIcon />
                        </IconButton> */}
                    </Grid>
                    <Grid item>
                        <Box className={classes.center}>
                            <ShoppingCartOutlinedIcon />
                            <Typography variant='body1'>Корзина</Typography>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box className={classes.center}>
                            <PersonOutlineIcon />
                            <Typography variant='body1'>Кабинет</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Toolbar>
            <Box className={classes.cards}>
                {
                    popular.map((item, id) => (
                        <Button key={id} className={classes.cardItem} variant="contained" >
                            {item.name}
                        </Button>
                    ))
                }
            </Box>
            {/* <Grid container spacing={1}>
                {
                    popular.map((item, id) => (
                        <Grid item key={id} >
                            <Card className={classes.cardItem} variant="outlined">
                                <CardContent>{item.name}</CardContent>
                            </Card>
                        </Grid>
                    ))
                }
            </Grid> */}
        </AppBar>
    )
}
