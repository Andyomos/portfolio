const {
  colors,
  CssBaseline,
  ThemeProvider,
  Typography,
  Container,
  makeStyles,
  createMuiTheme,
  Box,
  Paper,
  Grid,
  SvgIcon,
  Link,
} = MaterialUI;


const useStyles = makeStyles(theme => ({

  margins: {
    margin: 15,

    color: 'rgb(0, 2, 2, 0.660)',
  },
  paper: {
    margin: 15,
    padding: 18,
    color: theme.palette.text.primary,
  },
  centerText: {
    textAlign: 'center',
  },
  textMagins: {
    marginRight: 25,
  }
}));

const App = () => {
   const classes = useStyles();
  return (
    <div>
      <Portfolio />   
    </div>
  );
    
}

const Portfolio = () => {
    const classes = useStyles();
    return (
      <div >
        <Grid container spacing={2} className={classes.paper}>
          
          <Grid item xs={12}>
            <Typography color='primary' variant="h1">Portfolio</Typography>
            <Typography color='textSecondary' variant="h4">Say something amaising about yourself.</Typography>
          </Grid>
            
          
          {/* Know me component */}
          <Grid Container item xs={12} >
            <Grid item xs={12}>
              <Typography variant="h4">Get To Meet Weet Me</Typography>
            </Grid>
            <Grid item xs={12} >
              <Typography variant='subtitle1'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime aspernatur, error deleniti similique sed reiciendis porro ea, voluptas dicta non, corrupti nobis nihil quis cumque? Illum fugiat consequatur officia omnis reprehenderit impedit maiores aliquam quod odit modi, unde, assumenda, ipsa iste magni corporis necessitatibus. Dolor sit nulla iure ipsum cumque. Similique veritatis pariatur, rerum ad expedita assumenda temporibus totam mollitia natus voluptas ullam, ab id, facere esse sint deleniti aut in repellat! Quisquam dolores doloribus eum quo perspiciatis quaerat, repellat optio quas ipsam similique velit recusandae odit at, necessitatibus, deserunt harum quasi omnis? Minima voluptas, ipsum dolorum ad vel totam? Nulla nobis eius ex? Ullam illum labore veritatis quam, nesciunt voluptates earum nostrum, aliquid obcaecati quidem eius. Recusandae necessitatibus aliquid illo, laboriosam, debitis dicta maxime neque fugiat perferendis quis odio blanditiis veniam labore. Nam quidem qui consequuntur, aliquam nemo odio, at magnam quas quibusdam voluptatibus ea cumque accusamus amet adipisci.
              </Typography>
            </Grid>
          </Grid>

          {/* My Picture component */}
          <Grid Container item xs={12} sm={6} className={classes.centerText}>
            <Paper className={classes.paper}>
              Place a picture and content card Place a picture and content card <br/><br/>(Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste deleniti voluptatem, natus laboriosam consequatur quas amet. Nesciunt reiciendis voluptas porro earum! Nam omnis facilis dolore iusto consequuntur repellat aperiam, possimus assumenda quas perferendis, quidem dolorum commodi suscipit velit voluptatem repellendus voluptates quibusdam sequi sunt veritatis a culpa animi tempore? Dolore possimus omnis neque nostrum animi aliquam voluptas similique est.)
            </Paper>
          </Grid>
        
          {/* Center on passion component */}
          <Grid Container item xs={12} sm={6} className={classes.centerText}>
            <Paper className={classes.paper}>
              More Content centered on a card <br/><br/>(Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste deleniti voluptatem, natus laboriosam consequatur quas amet. Nesciunt reiciendis voluptas porro earum! Nam omnis facilis dolore iusto consequuntur repellat aperiam, possimus assumenda quas perferendis, quidem dolorum commodi suscipit velit voluptatem repellendus voluptates quibusdam sequi sunt veritatis a culpa animi tempore? Dolore possimus omnis neque nostrum animi aliquam voluptas similique est.)
            </Paper>
          </Grid>
          
        
          {/* My Work component */}
          <Grid item xs={12}>
            
              <Typography className={classes.centerText} variant="h3">My Work</Typography>
            
            <Typography className={classes.paper}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas beatae recusandae numquam consectetur illo tenetur distinctio sint quod, perspiciatis, ipsam dicta commodi omnis explicabo! Alias ex repellendus itaque consequatur doloremque.</Typography>
          </Grid>
              
          
       
        </Grid>
      </div>
    )
}


ReactDOM.render(<App />, document.getElementById("app"));
