import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Components
import StyledBanner from "../components/Banner/StyledBanner";
import Banner from '../components/Banner/Banner';
import HomeDescription from '../components/HomeDescription/HomeDescription';
import HomeRestaurant from '../components/HomeRestaurant/HomeRestaurant';
import SearchResult from '../components/SearchResult/SearchResult';
import Divider from '../components/Divider/Divider';
// Redux stuff
import { getRestaurants } from '../redux/actions/dataAction';
import { connect } from 'react-redux';

class Home extends Component {

    // Get all apartments initially
    componentDidMount() {
        this.props.getRestaurants();
    }

    render() {
        return (
            <div>

                <StyledBanner img="https://firebasestorage.googleapis.com/v0/b/mobile-2ef47.appspot.com/o/homeBanner.jpg?alt=media">
                    <Banner/>
                </StyledBanner>
                
                <Divider/>

                {/* Check show or hide search result */}
                {this.props.app.state.search && (
                    <>
                        <SearchResult restaurantsFilter={this.props.data.restaurantsFilter} 
                            loading={this.props.data.loading}
                        />
                        <Divider/>
                    </>
                )}

                <HomeDescription/>

                <Divider/>

                <HomeRestaurant restaurants={this.props.data.restaurants} 
                    loading={this.props.data.loading}
                />
                
            </div>
        )
    }
}
// Check type of data
Home.propTypes = {
    getRestaurants: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    UI: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired
}
// Get data from redux to props
const mapStateToProps = (state) => ({
    user: state.user,
    UI: state.UI,
    data: state.data
});
// Get action from redux to props
const mapActionsToProps = {
    getRestaurants
}

export default connect(mapStateToProps, mapActionsToProps)(Home);
