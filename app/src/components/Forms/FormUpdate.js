import React, { Component } from 'react';
import PropTypes from 'prop-types';
// MUI
import { withStyles } from '@material-ui/core/styles';
import {TextField, Button, CardMedia, Divider } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
// Components
import Spinner from '../Spinner/Spinner';
import AlertDialog from '../AlertDialog/AlertDialog';
import AutoAddress from '../Autocomplete/AutoAddress';
// Redux stuff
import { getOne, uploadImage, updateRestaurant } from '../../redux/actions/dataAction';
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
      margin: theme.spacing(0.5),
      width: '100%',
    },
    padding: "3%"
  },
  media: {
    height: 0,
    paddingTop: '45%',
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

class FormUpdate extends Component {
    
    state = {
        name: "",
        type: "",
        visitDate: "",
        price: 0,
        reporter: "",
        notes: "Empty",
        message: "",
        url: null,
        uploadedImage: null,
        errors: {},
        valueService: 0,
        hoverService: -1,
        valueCleanliness: 0,
        hoverCleanliness: -1,
        valueFood: 0,
        hoverFood: -1,
        submit: false,
        address: ""
    }

    // Set data initially
    componentDidMount() {
        const {restaurant} = this.props;
        let positionRating = {};
        for(var i = 0; i < 6; i++) {
            if (restaurant.serviceRating === labels[i]) {
                positionRating.service = i;
            }
            if (restaurant.cleanlinessRating === labels[i]) {
                positionRating.cleanliness = i;
            }
            if (restaurant.foodQualityRating === labels[i]) {
                positionRating.food = i;
            }

            if(i === 5) {
                this.setState({
                    ...this.state,
                    name: restaurant.name,
                    type: restaurant.type,
                    visitDate: restaurant.visitDate,
                    price: restaurant.price,
                    reporter: restaurant.reporter,
                    notes: restaurant.notes,
                    url: restaurant.url,
                    valueService: positionRating.service,
                    hoverService: positionRating.service,
                    valueCleanliness: positionRating.cleanliness,
                    hoverCleanliness: positionRating.cleanliness,
                    valueFood: positionRating.food,
                    hoverFood: positionRating.food,
                    address: restaurant.address
                });
            }
        }

        
    }

    // Get data from typing
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
        if(newValue) {
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
    }

    // Handle change active rating
    handleChangeActive = (event, newHover) => {
        if(newHover !== -1) {
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
    }    

    // Handle uploading
    handleUpload = (e) => {
        e.preventDefault();
        const image = e.target.files[0];
        this.setState({
            ...this.state,
            uploadedImage: image
        })
    }

    // Handle submitting
    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({
            ...this.state,
            submit: true
        })
    }
    
    handleUpdate = () => {

        let errors = {};
        // Check constraints
        // TODO: create function
        if(this.state.name === "") {
            errors.name = "Name is required!"
        } else 
        if(this.state.type === "") {
            errors.type = "Type is required!"
        }
        if(this.state.visitDate === "") {
            errors.visitDate = "Visited date is required!"
        }
        if(this.state.serviceRating === "") {
            errors.serviceRating = "Service rating is required!"
        }
        if(this.state.cleanlinessRating === "") {
            errors.cleanlinessRating = "Cleanliness rating is required!"
        }
        if(this.state.foodQualityRating === "") {
            errors.foodQualityRating = "Food quality rating is required!"
        }
        if(this.state.price === 0) {
            errors.price = "Price is required!"
        }
        if(this.state.reporter === "") {
            errors.reporter = "Reporter is required!"
        }

        if(errors.type || errors.name || errors.price || errors.reporter || errors.visitDate ||
            errors.serviceRating || errors.cleanlinessRating || errors.foodQualityRating){
            this.setState({
                ...this.state,
                errors
            })
        } else {
            const totalRating = Math.round((this.state.valueService + this.state.valueFood + this.state.valueCleanliness) / 3);

            const updateData = {
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
                address: this.state.address,
                url: this.state.url
            };

            // Check if user change image
            if(this.state.uploadedImage !== null) {
                const formData = new FormData();
                formData.append('image', this.state.uploadedImage, this.state.uploadedImage.name);
                this.props.uploadImage(formData, this.props.restaurant.id);
                this.props.history.push("/home");
            }
           
            // Start updating
            this.props.updateRestaurant(this.props.restaurant.id, updateData);
            this.props.history.push("/home");
        }
    }

    render() {
        const {classes} = this.props;

        // Check if data load completely
        if(this.props.data.loading) {
            return (
                <Spinner/>
            )
        } else {
            return (
                <>
                <form className={classes.form} 
                    noValidate 
                    autoComplete="off" 
                    onSubmit={this.handleSubmit}>
                        <div className={classes.item}>
                            <label htmlFor="name" className={classes.labelItem}>
                                1. Name*: 
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
                                    value={this.state.name}
                                    className={classes.fieldItem}  
                                />
                            )}
                        </div>

                        <div className={classes.item}>
                            <label htmlFor="type" className={classes.labelItem}>
                                2. Type*: 
                            </label>

                            {this.state.errors.type ? (
                                <TextField name="type" 
                                    error 
                                    helperText={this.state.errors.type} 
                                    required 
                                    variant="standard" 
                                    onChange={this.handleChange} 
                                    value={this.state.type}
                                    className={classes.fieldItem}  
                                />
                            ) : (
                                <TextField name="type" 
                                    required 
                                    variant="standard" 
                                    onChange={this.handleChange} 
                                    value={this.state.type}
                                    className={classes.fieldItem}  
                                />
                            )}
                        </div>

                        <div className={classes.item}>
                            <label htmlFor="visitDate" className={classes.labelItem}>
                                3. Date*: 
                            </label>

                            {this.state.errors.visitDate ? (
                                <TextField error 
                                    name="visitDate" 
                                    helperText={this.state.errors.visitDate} 
                                    required 
                                    variant="standard"  
                                    onChange={this.handleChange}
                                    type="date"
                                    className={classes.fieldItem}  
                                />
                            ) : (
                                <TextField name="visitDate" 
                                    required  
                                    variant="standard"  
                                    onChange={this.handleChange}
                                    value={this.state.visitDate}
                                    type="date"
                                    className={classes.fieldItem}  
                                />
                            )}
                        </div>

                        <div className={classes.item}>
                            <label htmlFor="price" className={classes.labelItem}>
                                4. Price*: 
                            </label>

                            {this.state.errors.price ? (
                                <TextField name="price" 
                                    error 
                                    helperText={this.state.errors.price}  
                                    type="number" 
                                    required 
                                    variant="standard"  
                                    onChange={this.handleChange} 
                                    value={this.state.price}
                                    className={classes.fieldItem}  
                                />
                            ) : (
                                <TextField name="price" 
                                    type="number" 
                                    required 
                                    variant="standard"  
                                    onChange={this.handleChange} 
                                    value={this.state.price}
                                    className={classes.fieldItem}  
                                />
                            )}
                        </div>

                        <div className={classes.item}>
                            <label htmlFor="reporter" className={classes.labelItem}>
                                5. Reporter*: 
                            </label>

                            {this.state.errors.reporter ? (
                                <TextField name="reporter" 
                                    error 
                                    helperText={this.state.errors.reporter} 
                                    required 
                                    variant="standard"  
                                    onChange={this.handleChange} 
                                    value={this.state.reporter}
                                    className={classes.fieldItem}  
                                />
                            ) : (
                                <TextField name="reporter" 
                                    required 
                                    variant="standard"  
                                    onChange={this.handleChange} 
                                    value={this.state.reporter}
                                    className={classes.fieldItem}  
                                />
                            )}
                        </div>

                        <div className={classes.item}>
                            <label htmlFor="notes" className={classes.labelItem}>
                                6. Notes: 
                            </label>

                            <TextField name="notes" 
                                variant="standard"  
                                onChange={this.handleChange} 
                                value={this.state.notes && this.state.notes}   
                                className={classes.fieldItem}                          
                            />
                        </div>

                        <Divider variant="inset" component="input" style={{width: "94%"}}/>
                        <br/>

                        <label htmlFor="serviceRating" className={classes.labelRating}>
                            7. Service rating: 
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
                            8. Cleanliness rating: 
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
                            9. Food quality rating: 
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

                        <AutoAddress parent={this} address={this.state.address}/>

                        <Divider variant="inset" component="input" style={{width: "94%"}}/>

                        <label htmlFor="image" className={classes.labelItem}>
                            11. The image:
                        </label>

                        {this.state.url !== null && (
                            <CardMedia
                                className={classes.media}
                                image={this.state.url}
                                onClick={this.handleMediaClick}
                            />
                        )}

                        <TextField type="file" 
                            name="image" 
                            onChange={this.handleUpload}
                        />

                        <Button type="submit" 
                            variant="contained" 
                            color="primary"
                            className={classes.button}>
                                Update
                        </Button>
                        {/* Message and spinner */}
                        {this.props.data.loading && <Spinner/>}
                        {this.props.UI.errors && 
                            <h2>
                                Update failed!
                            </h2>}

                </form>
                
                {this.state.submit === true && (
                     <AlertDialog parent={this} action={this.handleUpdate.bind(this)} description="Do you want to update this rating?" title="Update alert!!!" type="update" />
                )}
                </>
            );
        }
    }
}
// Check type of data
FormUpdate.propTypes = {
    uploadImage: PropTypes.func.isRequired,
    getOne: PropTypes.func.isRequired,
    updateRestaurant: PropTypes.func.isRequired,
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
    getOne,
    updateRestaurant,
    uploadImage,
}

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(FormUpdate));