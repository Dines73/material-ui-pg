import React from "react"
import {
  Typography,
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container
} from "@material-ui/core"
// import { PhotoCamera } from "@material-ui/icons"
import ColorLensIcon from "@material-ui/icons/ColorLens"
import useStyles from "./styles"

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const StartPage = () => {
  const classes = useStyles()
  return (
    <>
      <CssBaseline className={classes.baseLine} />
      <AppBar position="relative">
        <Toolbar className={classes.toolbar}>
          {/* <PhotoCamera className={classes.icon} /> */}
          <ColorLensIcon className={classes.icon} />
          <Typography variant="h6">Kunstgalerie Moke&Minci</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
              Lijep pozdrav
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Posjetite nas shop
            </Typography>
            <div className={classes.button}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Vidi slike
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Naruci
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5">
                      Na prodaju...
                    </Typography>
                    <Typography>Cijena: 100KM</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      Detaljnije
                    </Button>
                    <Button size="small" color="secondary">
                      Poruči
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="left" gutterBottom>
          Kontakt broj:
        </Typography>
        <Typography variant="subtitle1" align="left" color="textSecondary">
          Mail: edo@test.com
        </Typography>
      </footer>
    </>
  )
}

export default StartPage
