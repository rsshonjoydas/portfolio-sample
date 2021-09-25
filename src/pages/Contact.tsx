import { KeyboardArrowRight } from "@mui/icons-material";
import { Button, Container, Grid, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  field: {
    marginTop: 50,
    display: "flex",
    maxWidth: 500,
  },
});

const Contact = () => {
  const classes = useStyles();
  return (
    <Container className="section">
      <h2 className="section-title">Create a New Note</h2>

      <form noValidate autoComplete="off">
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <TextField
            className={classes.field}
            label="Name"
            variant="outlined"
            color="primary"
            fullWidth
            required
          />
          <TextField
            className={classes.field}
            label="Email"
            variant="outlined"
            color="primary"
            fullWidth
            required
          />
          <TextField
            className={classes.field}
            label="What's on your mind?"
            variant="outlined"
            color="primary"
            multiline
            rows={4}
            fullWidth
            required
          />
          <Button
            className={`button ${classes.field}`}
            type="submit"
            color="primary"
            variant="contained"
            endIcon={<KeyboardArrowRight />}
            href="#"
          >
            Submit
          </Button>
        </Grid>
      </form>
    </Container>
  );
};

export default Contact;
