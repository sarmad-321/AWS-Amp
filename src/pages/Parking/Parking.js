import React from "react";

// Common Component
import { Box } from "@material-ui/core";
import { ParkingHeading } from "./components/ParkingHeading";
import { ChoseUs } from "./components/ChoseUs";
import { ParkingMapContainer } from "./components/ParkingMapContainer";
import { ContactBanner } from "../../components/ContactBanner";

export const Parking = ({ setShowHeader,setHeaderColor }) => {
    setShowHeader(true);
    setHeaderColor('primary')

    return (
        <>
            <Box component="section" style={{backgroundColor: "#003c1a"}}>
                <ParkingHeading  />
            </Box>
            <Box component="section">
                <ChoseUs />
            </Box>
            {/* <ContactBanner full zeroPaddingInline /> */}
        </>
    );
};
