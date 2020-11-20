import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// MUI
import {makeStyles} from '@material-ui/core/styles';
import { Paper, Typography, Divider, TextField, Button, IconButton } from '@material-ui/core';
// Components
import Spinner from '../components/Spinner/Spinner';
// Redux stuff
import { loginUser, registor } from '../redux/actions/userActions';
import { connect } from 'react-redux';
// Icons
import {Send as SendIcon, PersonAdd as RegistorIcon, LockOpen as LoginIcon} from '@material-ui/icons';

// CSS-in-react
const styles = makeStyles((theme) => ({
    root: {
        background: "url('https://firebasestorage.googleapis.com/v0/b/mobile-2ef47.appspot.com/o/loginBackground.png?alt=media') center/cover no-repeat",
        padding: "5rem",
        paddingLeft: "15rem",
        paddingRight: "15rem",
        height: "95vh",
        // Change when screen size down 600
        [theme.breakpoints.down('md')]: {
            padding: "1rem",
        }
    },
    paper: {
        padding: "5%"
    },
    form: {
        '& > *': {
            margin: theme.spacing(1),
            width: '100%',
          },
        padding: "5vh"
    },
    button: {
        margin: theme.spacing(1),
        width:"20%",
        marginLeft: "40%",
        marginRight: "40%",
        // Change when screen size down 600
        [theme.breakpoints.down('md')]: {
            width: "36%",
            marginLeft: "32%",
            marginRight: "32%",
        }
    },
    forgotPass: {
        marginTop: "-3%",
    },
    customError: {
        color: "red",
        textAlign: "center",
        marginTop: 10
    }
}));

const Login = (props) => {

    // Set states
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [type, setType] = useState('login');
    const [errors, setErrors] = useState({});
    const [flag, setFlag] = useState('Initial render');

    const classes = styles();

    // Life cycle to set errors when logining
    useEffect(() => {
        if(flag !== 'Initial render') {
            if(!props.UI.loading){
                if(props.UI.errors !== null) {
                    setErrors({
                        ...errors,
                        login: props.UI.errors
                    });
                } else {
                    // Set state of login to go to home page
                    props.login.setState({
                        ...props.login.state,
                        login: true
                    });
                }
            }
        }   
    }, [props.UI])

    // Get data from typing
    const handleChange = (event) => {
        if(event.target.value.length > 30) {
            event.target.value = event.target.value.slice(0, 30);
        }
        
        switch(event.target.name) {
            case "email": 
                setEmail(event.target.value);
                break;
            case "password":
                setPassword(event.target.value);
                break;
            case "confirmPassword":
                setConfirmPassword(event.target.value);
                break;
            default:
                break;
        }
        setErrors({});
    }

    const handleRegistor = (e) => {
        e.preventDefault();
        if (email.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)) {
            if(password) {
                const userData = {
                    email: email,
                    password: password,
                    confirmPassword: confirmPassword
                };
                setFlag('Not initial render');
                props.registor(userData);
            } else {
                setErrors({
                    ...errors,
                    password: 'Password is not empty'
                })
            }
        } else {
            setErrors({
                ...errors,
                email: 'Email is not valid'
            });
        }
    }

    // Action when submiting
    const handleSubmit = (e) => {
        e.preventDefault();

        if (email.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)) {
            if(password) {
                const userData = {
                    email: email,
                    password: password,
                };
                setFlag('Not initial render');
                props.loginUser(userData);
            } else {
                setErrors({
                    ...errors,
                    password: 'Password is not empty'
                })
            }
        } else {
            setErrors({
                ...errors,
                email: 'Email is not valid'
            });
        }
    }

    // Change login screen or registor screen
    const clickLogin = (e) => {
        e.preventDefault();
        setType("login");
    }

    const clickRegistor = () => {
        setType("registor");
    }

    return (
        <div className={classes.root}>
            <Paper className={classes.paper} elevation={3}>
                <Typography variant="h4" 
                    align="center">
                        i-Rate
                </Typography>

                <Typography variant="subtitle1" 
                    align="center">
                        Place to rate restaurants
                </Typography>
                
                <Divider/>

                {/* Login or Registor */}
                {type === "login" ? (
                    <>
                        <form className={classes.form} 
                            noValidate 
                            autoComplete="off">
                            
                            {errors.email ? (
                                <TextField name="email" 
                                    error
                                    label="Email" 
                                    type="email" 
                                    variant="outlined" 
                                    helperText={errors.email}
                                    onChange={handleChange}
                                />
                            ) : (
                                <TextField name="email" 
                                    label="Email" 
                                    type="email" 
                                    variant="outlined" 
                                    onChange={handleChange}
                                />
                            )}
                            {errors.password ? (
                                <TextField name="password"
                                    error 
                                    label="Password" 
                                    type="password" 
                                    variant="outlined" 
                                    helperText={errors.password}
                                    onChange={handleChange}
                                />
                            ) : (
                                <TextField name="password" 
                                    label="Password" 
                                    type="password" 
                                    variant="outlined" 
                                    onChange={handleChange}
                                />
                            )}
                            <Button variant="contained"
                                color="primary"
                                type="submit"
                                className={classes.button}
                                endIcon={<SendIcon/>}
                                onClick={handleSubmit}>
                                Login
                            </Button>
                            {errors.login && !errors.email && (
                                <Typography variant="body2" 
                                    className={classes.customError}>
                                        {errors.login}
                                </Typography>
                            )}
                            {props.UI.loading && <div className={classes.spinner}> <Spinner/></div>}
                        </form>

                        <Typography className={classes.forgotPass}
                            variant="subtitle1" 
                            align="center">
                                Forgot password? <a href="#">
                                    Click here
                                </a>
                        </Typography>
                        <br/>
                        <Typography variant="h6" 
                            align="center">
                            Don't have an account? 
                                <IconButton aria-label="Registor"
                                    color="primary" 
                                    onClick={clickRegistor}>
                                        <RegistorIcon/>
                                </IconButton>
                        </Typography>
                    </>
                ) : (
                    <>
                        <form className={classes.form} 
                            noValidate 
                            autoComplete="off">

                            {errors.email ? (
                                <TextField name="email" 
                                    error
                                    label="Email" 
                                    type="email" 
                                    variant="outlined" 
                                    helperText={errors.email}
                                    onChange={handleChange}
                                />
                            ) : (
                                <TextField name="email" 
                                    label="Email" 
                                    type="email" 
                                    variant="outlined" 
                                    onChange={handleChange}
                                />
                            )}

                            {errors.password ? (
                                <TextField name="password"
                                    error 
                                    label="Password" 
                                    type="password" 
                                    variant="outlined" 
                                    helperText={errors.password}
                                    onChange={handleChange}
                                />
                            ) : (
                                <TextField name="password" 
                                    label="Password" 
                                    type="password" 
                                    variant="outlined" 
                                    onChange={handleChange}
                                />
                            )}
                            <TextField name="confirmPassword" 
                                label="Confirm password" 
                                type="password" 
                                variant="outlined" 
                                onChange={handleChange}
                            />
                            <Button variant="contained"
                                color="primary"
                                className={classes.button}
                                endIcon={<RegistorIcon/>}
                                onClick={handleRegistor}
                                type="submit">
                                Registor
                            </Button>
                            {errors.login && !errors.email && (
                                <Typography variant="body2" 
                                    className={classes.customError}>
                                        {errors.login}
                                </Typography>
                            )}
                            {props.UI.loading && <div className={classes.spinner}> <Spinner/></div>}
                        </form>

                        <Typography variant="h6" 
                            align="center">
                            Had an account? 
                                <IconButton aria-label="Login"
                                    color="primary" 
                                    onClick={clickLogin}>
                                        <LoginIcon/>
                                </IconButton>
                        </Typography>
                    </>
                )}
            </Paper>
        </div>
    )
}

// Check type of data
Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    registor: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    UI: PropTypes.object.isRequired
}

// Get data from redux to props
const mapStateToProps = (state) => ({
    user: state.user,
    UI: state.UI
});

// Get action from redux to props
const mapActionsToProps = {
    loginUser,
    registor
}

export default connect(mapStateToProps, mapActionsToProps)(Login);

