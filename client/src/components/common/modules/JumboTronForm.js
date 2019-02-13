import React from "react";
import PropTypes from "prop-types";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { TwitterPicker } from "react-color";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import LeftIcon from "../../common/icons/browser-27.png";
import RightIcon from "../../common/icons/browser-33.png";
import Button from "@material-ui/core/Button";
import UpdateIcon from "@material-ui/icons/Update";
import AddIcon from "@material-ui/icons/Add";
import Markup from "../preview_templates/preview_components/Markup";
import IconButton from "@material-ui/core/IconButton";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  },
  root: {
    display: "flex"
  },
  formControl: {
    margin: theme.spacing.unit * 3
  },
  group: {
    margin: `${theme.spacing.unit}px 0`
  },
  icon: {
    width: "50px",
    height: "50px"
  },
  formContainer: {
    padding: "20px",
    backgroundColor: "#f6f6f640",
    boxShadow: "1px 6px 22px 0px #888888",
    margin: "10px"
  }
});

class JumboTronForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      html: "",
      headline: this.props.headline,
      paragraphText: this.props.paragraphText,
	location: this.props.location,
	  type: "Jumbotron",
      button: this.props.button,
      buttonText: this.props.buttonText,
      buttonLink: this.props.buttonLink,
      layout: this.props.layout,
      backgroundColor: "",
      errors: "",
      main_image_SRC: this.props.main_image_SRC,
      main_image_link: this.props.main_image_link,
      main_image_alt: this.props.main_image_alt,
      main_image_title: this.props.main_image_title,
      updateButton: "ADD MODULE"
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    //TO DO : MAKE THIS FUNCTION FOR OTHER REGIONS!!//
    const moduleData = {
      headline: this.state.headline,
      paragraphText: this.state.paragraphText,
      type: "Jumbotron",
      location: this.state.location,
      button: this.state.button,
      buttonInfo: {
        text: this.state.buttonText,
        link: this.state.buttonLink
      },
      layout: this.state.layout,
      backgroundColor: this.state.backgroundColor,
      main_image: {
        SRC: this.state.main_image_SRC,
        link: this.state.main_image_link,
        alt: this.state.main_image_alt,
        title: this.state.main_image_title
      }
    };
    this.props.callbackfromparent(moduleData);
    this.setState({
      updateButton: "UPDATE MODULE"
    });
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };
  handleButton = event => {
    this.setState({ button: event.target.value });
  };

  handleLayout = event => {
    this.setState({ layout: event.target.value });
  };
  handleColorChange = color => {
    this.setState({ backgroundColor: color.hex });
  };
  setError = error => {
    this.setState({});
  };

  render() {
	  const { classes } = this.props;


    return (
      <div className={classes.formContainer}>
        <form className={classes.container} onSubmit={this.onSubmit}>
          <Grid container direction="row" spacing={2} xs={12}>
            <Grid item xs={12}>
              <IconButton
                role="input"
                style={{ float: "left" }}
                type="submit"
                value="Add Module"
                color="secondary"
                variant="contained"
                className={classes.button}
              >
                {this.state.updateButton === "ADD MODULE" ? (
                  <AddIcon />
                ) : (
                  <UpdateIcon />
                )}
              </IconButton>

              <Typography component="h2" variant="display1" gutterBottom>
                JumboTron
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <FormLabel>Layout</FormLabel>
            </Grid>

            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              xs={6}
            >
              <img src={RightIcon} alt="ya" className={classes.icon} />
              <Radio
                checked={this.state.layout === "Right"}
                onChange={this.handleLayout}
                value="Right"
                name="radio-Right"
                aria-label="A"
              />
            </Grid>

            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              xs={6}
            >
              <img src={LeftIcon} alt="ya" className={classes.icon} />
              <Radio
                checked={this.state.layout === "Left"}
                onChange={this.handleLayout}
                value="Left"
                name="radio-left"
                aria-label="Left"
              />
            </Grid>

            <Grid item xs={12}>
              <FormLabel>Image</FormLabel>
              <TextField
                id="outlined-textarea"
                label="Image SRC"
                fullWidth
                className={classes.textField}
                margin="normal"
                placeholder="Image src location"
                variant="outlined"
                value={this.state.main_image_SRC}
                onChange={this.handleChange("main_image_SRC")}
                InputLabelProps={{
                  shrink: true
                }}
              />
              <TextField
                id="outlined-full-width"
                label="Image Link"
                value={this.state.main_image_link}
                style={{ margin: 8 }}
                onChange={this.handleChange("main_image_link")}
                placeholder="Add product/collection link to image"
                fullWidth
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                  shrink: true
                }}
              />

              <TextField
                id="outlined-full-width"
                label="Image Alt"
                value={this.state.main_image_alt}
                style={{ margin: 8 }}
                onChange={this.handleChange("main_image_alt")}
                placeholder="Add Alt Tag Description"
                fullWidth
                required
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                  shrink: true
                }}
              />
              <TextField
                id="outlined-full-width"
                label="Image Title"
                value={this.state.main_image_title}
                style={{ margin: 8 }}
                onChange={this.handleChange("main_image_title")}
                placeholder="Need a title tag for image?"
                fullWidth
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                  shrink: true
                }}
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <h1>{this.state.backgroundColor}</h1>
            <TwitterPicker
              name="backgroundColor"
              color={this.state.backgroundColor}
              onChangeComplete={this.handleColorChange}
            />
          </Grid>

          <section className="TEXT_CONTAINER">
            <div className="headline_form_container">
              <TextField
                id="outlined-uncontrolled"
                label="Headline"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                value={this.state.headline}
                onChange={this.handleChange("headline")}
                InputLabelProps={{
                  shrink: true
                }}
                required
              />
              <TextField
                id="outlined-uncontrolled"
                label="Paragraph Text"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                value={this.state.paragraphText}
                onChange={this.handleChange("paragraphText")}
                InputLabelProps={{
                  shrink: true
                }}
              />
            </div>

            <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel>CTA</FormLabel>
              <RadioGroup
                error={this.state.errros}
                aria-label="Gender"
                name="legend"
                className={classes.group}
                value={this.state.button}
                onChange={this.handleButton}
              >
                <FormControlLabel
                  value="true"
                  control={<Radio />}
                  label="Add Button"
                />
                <FormControlLabel
                  value="false"
                  control={<Radio />}
                  label="No Button"
                />
              </RadioGroup>

              {/* <Modal error={this.setError}/> */}

              {this.state.button === "true" ? (
                <div>
                  <TextField
                    id="outlined-number"
                    label="Button Text"
                    value={this.state.buttonText}
                    onChange={this.handleChange("buttonText")}
                    type="text"
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true
                    }}
                    margin="normal"
                    variant="outlined"
                  />
                  <TextField
                    id="outlined-number"
                    label="Button Link"
                    value={this.state.buttonLink}
                    onChange={this.handleChange("buttonLink")}
                    type="text"
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true
                    }}
                    margin="normal"
                    variant="outlined"
                  />
                </div>
              ) : null}
            </FormControl>
          </section>
          <div />
          <div style={{ width: "100%" }} />
        </form>
      </div>
    );
  }
}

JumboTronForm.propTypes = {
  classes: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

export default withStyles(styles)(JumboTronForm);
