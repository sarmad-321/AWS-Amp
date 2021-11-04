import React from "react";

// Common Component
import { Box } from "@material-ui/core";

// Components
import { MaterialHeading } from "./components/MaterialHeading";
import { ShortInfo } from "./components/ShortInfo";
import { Products } from "./components/Products";

// Styles
import "./Material.css";
import { ContactBanner } from "../../components/ContactBanner";

export const Materials = ({ setShowHeader,setHeaderColor }) => {
    setShowHeader(true);
  setHeaderColor("primary")
    return (
        <>
            <Box component="section" className={"bg-primary"}>
                <MaterialHeading  />
            </Box>
           
            <Box component="section">
                <Products />
            </Box>
           <ContactBanner full zeroPaddingInline />
        </>
    );
};
