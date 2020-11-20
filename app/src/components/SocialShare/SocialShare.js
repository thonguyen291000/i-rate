import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import {
  Passers,
  share, 
  P
} from "prop-passer";

import {
  FacebookShareButton,
  EmailShareButton,
  FacebookIcon,
  EmailIcon
} from "react-share"; 

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%", 
    display: "flex", 
    position: "absolute", 
    justifyContent: "flex-end", 
    paddingRight: "4%", 
    marginTop: "-15%"
  },
  [theme.breakpoints.only("sm")]: {
    root: {
      marginTop: "-10%"
    }
  },
  emailIcon: {
    marginLeft: "20%"
  }
}));
// This component I refer from http://nygardk.github.io/react-share/
const SocialShare = (props) => {
  const { title, url } = props;

  const classes = useStyles();

  const ShareList = Passers(
    share(
      <P
        url={url}
        className="network__share-button"
      />
    )
  )({ className: "network" })("li");

  return (
    <div className={classes.root}>
      <ShareList>
        <FacebookShareButton quote={title}>
          <FacebookIcon
            size={"1.5rem"}
            round
          />
        </FacebookShareButton>

        <EmailShareButton subject={title} body="body" className={classes.emailIcon}>
          <EmailIcon size={"1.5rem"} round />
        </EmailShareButton>
      </ShareList>
    </div>
  );
}

SocialShare.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default SocialShare;
