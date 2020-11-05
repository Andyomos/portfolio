const {
  colors,
  CssBaseline,
  ThemeProvider,
  Typography,
  Container,
  makeStyles,
  createMuiTheme,
  Box,
  Grid,
  SvgIcon,
  Link,
} = MaterialUI;


const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(6, 0, 3),
  },
  lightBulb: {
    verticalAlign: 'middle',
    marginRight: theme.spacing(1),
  },
}));

const App = () => {
   const classes = useStyles();
    return (
   
        <Grid Container className="portfolioHeader">
            <Grid xs={12} className="portHead">
                < Typography variant="h1" >Portfolio</Typography>
                <Typography variant="h3">Please feel at home on this page!</Typography>
            </Grid>
            <Grid>
                <Portfolio /> 
            </Grid>
            
        </Grid>   
    );
    
}

const Portfolio = () => {
    return (
        <div className="portfolio">
            <h1>Shopping List for </h1>
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById("app"));