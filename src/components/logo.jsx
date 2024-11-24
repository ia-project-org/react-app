import React from "react";
import PropTypes from "prop-types";
import logo from "../assets/logo.png";
import { Box } from "@mui/material";

const Logo = ({
    width,
    height, 
    alt = "App Logo",
    sx = {}, 
    ...props
}) => {
    return (
        <Box
            component="img"
            src={logo}
            alt={alt}
            sx={{
                width: width,
                height: height,
                display: "block",
                mx: "auto",
                ...sx, 
            }}
            {...props} 
        />
    );
};

Logo.propTypes = {
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    alt: PropTypes.string,
    sx: PropTypes.object,
};

export default Logo;
