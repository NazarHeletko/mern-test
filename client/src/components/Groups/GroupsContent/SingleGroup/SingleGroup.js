import React from "react"
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import {useDispatch} from "react-redux";
import {
    deleteGroupThunk,
    openEditModalAction,
    setEditedGroupDatalAction
} from "../../../../redux/actions/groups-action";



export const SingleGroup = ({name, description, id}) => {
    const dispatch = useDispatch()
    const tpStyle = {
        margin: "8px 4px"

    }
    const gridStyle = {

        paddingLeft: 0
    }
    return(
        <Box sx={{border: "2px solid #dcdcdc", mb: "4px"}}>
            <Grid container spacing={0}>
                <Grid item xs={3} sx={gridStyle}>
                    <Typography variant="subtitle1"  sx={tpStyle}>
                        {id}
                    </Typography>

                </Grid>
                <Grid item xs={3} sx={gridStyle}>
                    <Typography variant="subtitle1" sx={tpStyle}>
                        {name}
                    </Typography>

                </Grid>
                <Grid item xs={3} sx={gridStyle}>
                    <Typography variant="subtitle1" sx={tpStyle}>
                        {description}
                    </Typography>

                </Grid>
                <Grid item xs={3} sx={gridStyle} >
                    <Typography variant="subtitle1" sx={tpStyle}>
                        <Button onClick={()=>{

                            dispatch(setEditedGroupDatalAction({name, description, _id: id}))
                            dispatch(openEditModalAction(true));

                        }} size="small" variant="outlined" sx={{mr: "4px"}}>edit group</Button>
                        <Button onClick={()=>dispatch(deleteGroupThunk(name, id))} size="small" variant="outlined" color="error">delete</Button>
                    </Typography>
                </Grid>

            </Grid>

        </Box>
    )
}