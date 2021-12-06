import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const UsersHeader = () => {
    const tpStyle = {
        margin: "8px 4px"

    }
    const gridStyle = {
        borderLeft: "2px solid #dcdcdc",
        paddingLeft: 0
    }
    return (
        <Box sx={{boxShadow: "0px 4px 8px 0px rgba(34, 60, 80, 0.2)", mb: "24px", background: "#caf0ff"}}>
            <Grid container spacing={0}>
                <Grid item xs={3} sx={gridStyle}>
                    <Typography variant="h6"  sx={tpStyle}>
                        User name
                    </Typography>

                </Grid>
                <Grid item xs={3} sx={gridStyle}>
                    <Typography variant="h6" sx={tpStyle}>
                        Created
                    </Typography>

                </Grid>
                <Grid item xs={3} sx={gridStyle}>
                    <Typography variant="h6" sx={tpStyle}>
                        Group
                    </Typography>

                </Grid>
                <Grid item xs={3} sx={gridStyle} >
                    <Typography variant="h6" sx={tpStyle}>
                        Actions
                    </Typography>
                </Grid>
            </Grid>
        </Box>

    )
}