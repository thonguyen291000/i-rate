import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Components
import StyledBanner from "../components/Banner/StyledBanner";
import Banner from '../components/Banner/Banner';
import ListRestaurant from '../components/ListRestaurant/ListRestaurant';
import SearchResult from '../components/SearchResult/SearchResult';
import Divider from '../components/Divider/Divider';
// Redux stuff
import { getRestaurants, deleteRestaurant } from '../redux/actions/dataAction';
import { connect } from 'react-redux';

export class Apartments extends Component {

    // Get all apartments initially
    componentDidMount() {
        this.props.getRestaurants();
    }

    render() {
        return (
            <div>

                <StyledBanner img="https://firebasestorage.googleapis.com/v0/b/mobile-2ef47.appspot.com/o/restaurantBanner.jpg?alt=media">
                    <Banner/>
                </StyledBanner>

                <Divider/>

                {/* Check show or hide search result */}
                {this.props.app.state.search && (
                    <>
                        <SearchResult restaurantsFilter={this.props.data.restaurantsFilter}/>
                        <Divider/>
                    </>
                )}

                <ListRestaurant restaurants={this.props.data.restaurants} 
                    loading={this.props.data.loading} 
                    deleteRestaurant={this.props.deleteRestaurant.bind(this)}
                    history={this.props.history}
                />

            </div>
        )
    }
}
// Check type of data
Apartments.propTypes = {
    getRestaurants: PropTypes.func.isRequired,
    deleteRestaurant: PropTypes.func.isRequired,
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
    getRestaurants,
    deleteRestaurant
}

export default connect(mapStateToProps, mapActionsToProps)(Apartments);
