import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import Example1 from "../icons/USG_Example.png";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import UpdateIcon from "@material-ui/icons/Update";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addModule } from "../../../actions/profileActions";

const styles = (theme) => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        minWidth: 300,
        width: "100%"
    },
    image: {
        position: "relative",
        height: 400,
        [theme.breakpoints.down("xs")]: {
            width: "100% !important", // Overrides inline-style
            height: 100
        },
        "&:hover, &$focusVisible": {
            zIndex: 1,
            "& $imageBackdrop": {
                opacity: 0.15
            },
            "& $imageMarked": {
                opacity: 0
            },
            "& $imageTitle": {
                border: "4px solid currentColor"
            }
        }
    },
    focusVisible: {},
    imageButton: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: theme.palette.common.white
    },
    imageSrc: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: "cover",
        backgroundPosition: "center center"
    },
    imageBackdrop: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.1,
        transition: theme.transitions.create("opacity")
    },
    imageTitle: {
        position: "relative",
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme
            .spacing.unit + 6}px`
    },
    imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: "absolute",
        bottom: -2,
        left: "calc(50% - 9px)",
        transition: theme.transitions.create("opacity")
    }
});

class USGForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classes: this.props.classes,
            hash: this.props.projectID,
            errors: "",
            refresh: "Upload",
            USGChecked: false,
            location: this.props.currentSection,
            projectID: this.props.location.hash.slice(1)
        };
        this.addStoriesToProject = this.addStoriesToProject.bind(this);
    }


    addStoriesToProject(e) {
        e.preventDefault();
        if (this.state.USGChecked) {
            const moduleData = {
                location: this.props.currentSection,
                type: "USG",
                project_id: this.state.projectID
            };
            this.setState({
                error: ""
            });
            this.props.addModule(moduleData, this.state.projectID);
        } else {
            this.setState({
                error:
                    "You specified you didn't was USG included. If you want USG added to project, please update."
            });
        }
    }
    handleChange = (name) => (event) => {
        this.setState({ USGChecked: event.target.checked });
    };

    render() {
        const { classes } = this.props;

        return (
            <div style={{ width: "100%" }}>
                <div className="flex_box_default_no_wrap">
                    <div className="col-xs-12 col-md-12">
                        <img src={Example1} style={{marginTop: "2em"}}className = "box-shadow"/>
                        <FormGroup row>
                            <FormControlLabel
                                style = {{margin : "auto"}}
                                control={
                                    <Switch
                                        checked={this.state.USGChecked}
                                        onChange={this.handleChange("USGChecked")}
                                        value="USGChecked"
                                    />
                                }
                                label={
                                    this.state.USGChecked
                                        ? "Include USG Module? : True"
                                        : "Include USG Module? : False"
                                }
                            />
                        </FormGroup>
                    </div>
                </div>
                <div className="error_container">
                    <div>
                        <p style={{ color: "red" }}>{this.state.error}</p>
                        <Button
                            onClick={this.addStoriesToProject}
                            variant="contained"
                            color="default"
                            className={classes.button}>
                            {this.state.refresh}
                            {this.state.refresh === "Refresh" ? (
                                <UpdateIcon className={classes.rightIcon} />
                            ) : (
                                    <CloudUploadIcon className={classes.rightIcon} />
                                )}
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

USGForm.propTypes = {
    classes: PropTypes.object.isRequired
};
const mapStateToProps = (state) => ({
    project: state.project,
    errors_object: state.errors_object
});
export default withRouter(
    connect(
        mapStateToProps,
        { addModule }
    )(withStyles(styles)(USGForm))
);
// export default withStyles(styles)(USGForm);
