import React, { useState, useEffect } from 'react';
// MUI
import { makeStyles } from '@material-ui/core/styles';
import {TextField} from '@material-ui/core';


// CSS-in-react
const useStyles = makeStyles((theme) => ({
    map: {
        height: "300px",
        marginTop: "100px",
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
    }
}));

const google = window.google;

const AutoAddress = ({ parent, address }) => {

    const classes = useStyles();

    useEffect(() => {
        initMap();
    });

    // Google places address
    function initMap() {
        let map;
        if(address) {
          map = new google.maps.Map(document.getElementById("map"), {
            center: { lat: address.lat, lng: address.lng },
            zoom: 13,
          });
        } else {
          map = new google.maps.Map(document.getElementById("map"), {
            center: { lat: -33.8688, lng: 151.2195 },
            zoom: 13,
          });
        }
       
        const card = document.getElementById("pac-card");
        const input = document.getElementById("pac-input");
        map.controls[google.maps.ControlPosition.TOP_RIGHT].push(card);
        const autocomplete = new google.maps.places.Autocomplete(input);
        // Bind the map's bounds (viewport) property to the autocomplete object,
        // so that the autocomplete requests use the current map bounds for the
        // bounds option in the request.
        autocomplete.bindTo("bounds", map);
        // Set the data fields to return when the user selects a place.
        autocomplete.setFields(["address_components", "geometry", "icon", "name"]);
        const infowindow = new google.maps.InfoWindow();
        const infowindowContent = document.getElementById("infowindow-content");
        infowindow.setContent(infowindowContent);
        let marker;
        if(address) {
          marker = new google.maps.Marker({
            map,
            anchorPoint: new google.maps.Point(0, -29),
            position: { lat: address.lat, lng: address.lng}
          });
        } else {
          marker = new google.maps.Marker({
            map,
            anchorPoint: new google.maps.Point(0, -29),
          });
        }
        autocomplete.addListener("place_changed", () => {
          infowindow.close();
          marker.setVisible(false);
          const place = autocomplete.getPlace();

          if (!place.geometry) {
            // User entered the name of a Place that was not suggested and
            // pressed the Enter key, or the Place Details request failed.
            window.alert("No details available for input: '" + place.name + "'");
            return;
          }

          // If the place has a geometry, then present it on a map.
          if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
          } else {
            map.setCenter(place.geometry.location);
            map.setZoom(17); // Why 17? Because it looks good.
          }
          marker.setPosition(place.geometry.location);
          marker.setVisible(true);

          let address = "";

          if (place.address_components) {
            address = [
              (place.address_components[0] &&
                place.address_components[0].short_name) ||
                "",
              (place.address_components[1] &&
                place.address_components[1].short_name) ||
                "",
              (place.address_components[2] &&
                place.address_components[2].short_name) ||
                "",
            ].join(" ");
          }
          infowindowContent.children["place-icon"].src = place.icon;
          infowindowContent.children["place-name"].textContent = place.name;
          infowindowContent.children["place-address"].textContent = address;
          infowindow.open(map, marker);

          parent.setState({
            ...parent.state,
            address: { 
              name: input.value,
              lat: marker.getPosition().lat(),
              lng: marker.getPosition().lng()
            }
          })
        });
    }

    return (
        <>
            <div className={classes.item}>
              <label htmlFor="address" className={classes.labelItem}>
                {address ? "10. Address: " : "8. Address: "}  
              </label>
              <TextField 
                  name="address" 
                  variant="standard"  
                  id="pac-input"
                  className={classes.fieldItem}
                  placeholder={address && address.name}
              />
            </div>
            <div id="map" className={classes.map} style={{margin: 0}}></div>
            <div id="infowindow-content">
                <img src="" width="16" height="16" id="place-icon" />
                <span id="place-name" className="title"></span><br />
                <span id="place-address"></span>
            </div>
        </>
    )
}

export default AutoAddress;