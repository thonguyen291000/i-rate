import React, { Component } from 'react';
import PropTypes from 'prop-types';
// MUI
import { withStyles } from '@material-ui/core/styles';
import {TextField, Button, Typography, Divider} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
//Components
import Spinner from '../Spinner/Spinner';
import AutoAddress from '../Autocomplete/AutoAddress';
// Redux stuff
import { postRestaurant, uploadImage } from '../../redux/actions/dataAction';
import { connect } from 'react-redux';

const labels = {
  0: 'Very bad',
  1: 'Bad',
  2: 'Need to improve',
  3: 'Normal',
  4: 'Good',
  5: 'Excellent',
};

// CSS-in-react
const styles = (theme) => ({
  form: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
    },
    padding: "3%"
  },
  customError: {
    color: "red",
    textAlign: "center",
    marginTop: 10
  },
  labelRating: {
    fontSize: "1rem",
  },
  resultRating: {
    fontWeight: "bold"
  },
  contentRating: {
    display: "flex",
    paddingLeft: "1em"
  },
  item: {
    display: "inline-flex",
    alignItems: "center"
  },
  labelItem: {
    width: "20%",
    fontSize: "1rem",
    [theme.breakpoints.down("md")]: {
        width: "34%"
      }
  },
  fieldItem: {
    width: "74%",
    [theme.breakpoints.down("md")]: {
        width: "60%"
      }
  },
  button: {
      width: "94%"
  }
});

class FormAdd extends Component {
    state = {
        name: "",
        type: "",
        visitDate: "",
        price: 0,
        serviceRating: "",
        cleanlinessRating: "",
        foodQualityRating: "",
        reporter: "",
        notes: "Empty",
        url: "",
        errors: {},
        valueService: 0,
        hoverService: -1,
        valueCleanliness: 0,
        hoverCleanliness: -1,
        valueFood: 0,
        hoverFood: -1,
        address: "No information"
    }

    // Get errors after adding
    componentWillReceiveProps() {
        this.setState({
            ...this.state,
            message: this.props.data.message
        })
        if(this.props.data.message === "Loaded image") {
            
        }
    }

    // Get data from typing to state
    handleChange = (event) => {
        if(event.target.value.length > 30) {
            event.target.value = event.target.value.slice(0, 30);

            this.setState({
                ...this.state,
                [event.target.name] : event.target.value
            });
        } else {
            this.setState({
                ...this.state,
                [event.target.name] : event.target.value
            });
        }
    }

    // Handle change rating
    handleChangeRating = (event, newValue) => {
        switch(event.target.name) {
            case "serviceRating":
                this.setState({
                    ...this.state,
                    valueService: newValue
                });
                break;
            case "cleanlinessRating": 
                this.setState({
                    ...this.state,
                    valueCleanliness: newValue
                });
                break;
            case "foodQualityRating":
                this.setState({
                    ...this.state,
                    valueFood: newValue
                });
                break;
            default:
                break;
        }
    }

    // Handle change active rating
    handleChangeActive = (event, newHover) => {
        switch(event.target.name) {
            case "serviceRating":
                this.setState({
                    ...this.state,
                    hoverService: newHover
                });
                break;
            case "cleanlinessRating": 
                this.setState({
                    ...this.state,
                    hoverCleanliness: newHover
                });
                break;
            case "foodQualityRating":
                this.setState({
                    ...this.state,
                    hoverFood: newHover
                });
                break;
            default:
                break;
        }
    }

    // Upload image
    handleUpload = (e) => {
        e.preventDefault();
        const image = e.target.files[0];
        const formData = new FormData();
        formData.append('image', image, image.name);
        this.props.uploadImage(formData, this.props.data.restaurants[this.props.data.restaurants.length-1].restaurant.id);
    }

    // Handle submitting
    handleSubmit = (e) => {
        e.preventDefault();

        let errors = {
            count: 0
        };
        // Check constraints
        if(this.state.name === "") {
            errors.name = "Name is required!";
            errors.count += 1;
        }
        if(this.state.type === "") {
            errors.type = "Type is required!";
            errors.count += 1;
        }
        if(this.state.visitDate === "") {
            errors.visitDate = "Visited date is required!";
            errors.count += 1;
        }
        if(this.state.price === 0) {
            errors.price = "Price is required!";
            errors.count += 1;
        }

        if(errors.count > 0){
            this.setState({
                ...this.state,
                errors
            })
        } else {
            const totalRating = Math.round((this.state.valueService + this.state.valueFood + this.state.valueCleanliness) / 3);

            const newData = {
                name: this.state.name,
                type: this.state.type,
                visitDate: this.state.visitDate,
                serviceRating: labels[this.state.valueService],
                cleanlinessRating: labels[this.state.valueCleanliness],
                foodQualityRating: labels[this.state.valueFood],
                totalRating: labels[totalRating],
                price: this.state.price,
                reporter: this.props.user.credentials.email,
                notes: this.state.notes,
                createdDate: new Date().toISOString(),
                address: this.state.address
            };
            // Start adding
            this.props.postRestaurant(newData);
        }
    }


    render() {
        const {classes} = this.props;

        if(this.props.data.message === "Loaded image") {
            this.props.closeModel();
            this.props.history.push('/home');
        }
        return (
            <form className={classes.form} 
                noValidate 
                autoComplete="off" 
                onSubmit={this.handleSubmit}>

                    <div className={classes.item}>
                        <label htmlFor="name" className={classes.labelItem}>
                            1. Name *: 
                        </label>

                        {this.state.errors.name ? (
                            <TextField error 
                                name="name" 
                                helperText={this.state.errors.name} 
                                required
                                variant="standard" 
                                onChange={this.handleChange}   
                                className={classes.fieldItem} 
                            />
                        ) : (
                            <TextField name="name" 
                                required 
                                variant="standard" 
                                onChange={this.handleChange}
                                className={classes.fieldItem} 
                            />
                        )}
                    </div>

                   <div className={classes.item}>
                        <label htmlFor="type" className={classes.labelItem}>
                            2. Type *: 
                        </label>

                        {this.state.errors.type ? (
                            <TextField error 
                                name="type" 
                                helperText={this.state.errors.type} 
                                required
                                variant="standard" 
                                onChange={this.handleChange}  
                                className={classes.fieldItem}   
                            />
                        ) : (
                            <TextField name="type" 
                                required 
                                variant="standard" 
                                onChange={this.handleChange}
                                className={classes.fieldItem} 
                            />
                        )}
                   </div>

                    <div className={classes.item}>
                        <label htmlFor="visitDate" className={classes.labelItem}>
                            3. Date *: 
                        </label>

                        {this.state.errors.visitDate ? (
                            <TextField error 
                                name="visitDate" 
                                helperText={this.state.errors.visitDate} 
                                required 
                                variant="standard"  
                                onChange={this.handleChange}
                                type="date"
                                InputLabelProps={{shrink: true}}
                                className={classes.fieldItem} 
                            />
                        ) : (
                            <TextField name="visitDate" 
                                required 
                                variant="standard"  
                                type="date"
                                onChange={this.handleChange}
                                InputLabelProps={{shrink: true}}
                                className={classes.fieldItem} 
                            />
                        )}

                    </div>

                    <div className={classes.item}>
                        <label htmlFor="price" className={classes.labelItem}>
                            4. Price *: 
                        </label>

                        {this.state.errors.price ? (
                            <TextField error 
                                name="price" 
                                type="number" 
                                helperText={this.state.errors.price} 
                                required 
                                variant="standard" 
                                onChange={this.handleChange}
                                className={classes.fieldItem} 
                            />
                        ) : (
                            <TextField name="price" 
                                type="number" 
                                required 
                                variant="standard"
                                onChange={this.handleChange}
                                className={classes.fieldItem} 
                            />
                        )}
                    </div>

                    <Divider variant="inset" component="input" style={{width: "94%"}}/>
                    <br/>

                    <label htmlFor="serviceRating" className={classes.labelRating}>
                        5. Service rating: 
                    </label>
                    <span className={classes.contentRating}>
                        <Rating
                            name="serviceRating"
                            value={this.state.valueService}
                            precision={1}
                            onChange={this.handleChangeRating}
                            onChangeActive={this.handleChangeActive}
                        />
                        {this.state.valueService !== null && 
                            <Box ml={2} className={classes.resultRating}>
                                {labels[this.state.hoverService !== -1 ? 
                                    this.state.hoverService : 
                                    this.state.valueService]}
                            </Box>
                        }
                    </span>

                    <label htmlFor="cleanlinessRating" className={classes.labelRating}>
                        6. Cleanliness rating: 
                    </label>
                    <span className={classes.contentRating}>
                        <Rating
                            name="cleanlinessRating"
                            value={this.state.valueCleanliness}
                            precision={1}
                            onChange={this.handleChangeRating}
                            onChangeActive={this.handleChangeActive}
                        />
                        {this.state.valueCleanliness !== null && 
                            <Box ml={2} className={classes.resultRating}>
                                {labels[this.state.hoverCleanliness !== -1 ? 
                                    this.state.hoverCleanliness : 
                                    this.state.valueCleanliness]}
                            </Box>
                        }
                    </span>
                    
                    <label htmlFor="foodQualityRating" className={classes.labelRating}>
                        7. Food quality rating: 
                    </label>
                    <span className={classes.contentRating}>
                        <Rating
                            name="foodQualityRating"
                            value={this.state.valueFood}
                            precision={1}
                            onChange={this.handleChangeRating}
                            onChangeActive={this.handleChangeActive}
                        />
                        {this.state.valueFood !== null && 
                            <Box ml={2} className={classes.resultRating}>
                                {labels[this.state.hoverFood !== -1 ? 
                                    this.state.hoverFood : 
                                    this.state.valueFood]}
                            </Box>
                        }
                    </span>

                    <Divider variant="inset" component="input" style={{width: "94%"}}/>

                    <AutoAddress parent={this}/>

                    <Button type="submit" 
                        variant="contained" 
                        color="primary"
                        className={classes.button}>
                            Create information
                    </Button>
                    {/* Message and spinner */}
                    {this.state.message && (
                        <>
                            <Typography>
                                Add restaurant image:
                            </Typography>
                            <TextField type="file" 
                                name="image" 
                                onChange={this.handleUpload}
                            />
                        </>
                    )}
                    {this.props.data.message === "Loaded image" && (
                        <Typography variant="body2" 
                            className={classes.customError}>
                                {this.props.data.message}
                        </Typography>
                    )}
                    {this.props.data.loading || this.props.UI.loading && <Spinner/>}

            </form>
        );
    }
}
// Check type of data
FormAdd.propTypes = {
    uploadImage: PropTypes.func.isRequired,
    postRestaurant: PropTypes.func.isRequired,
    UI: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired
}
// Get data from redux to props
const mapStateToProps = (state) => ({
    UI: state.UI,
    user: state.user,
    data: state.data
});
// Get action from redux to props
const mapActionsToProps = {
    postRestaurant,
    uploadImage
}

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(FormAdd));