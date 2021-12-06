import React from "react"
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
    deleteUserThunk,
    isUserEditOpenAction,
    openDialogAddUserAction,
    setEditedUserAction
} from "../../../../redux/actions/users-actions";
import {useDispatch} from "react-redux";


export const SingleUser = ({name, created, group, id}) => {
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
                        {name}
                    </Typography>

                </Grid>
                <Grid item xs={3} sx={gridStyle}>
                    <Typography variant="subtitle1" sx={tpStyle}>
                        {created}
                    </Typography>

                </Grid>
                <Grid item xs={3} sx={gridStyle}>
                    <Typography variant="subtitle1" sx={tpStyle}>
                        {group}
                    </Typography>

                </Grid>
                <Grid item xs={3} sx={gridStyle}    >
                    <Typography variant="subtitle1" sx={tpStyle}>
                        <Button onClick={()=>{
                            dispatch(setEditedUserAction({_id: id, name, group}));
                            dispatch(isUserEditOpenAction(true))
                        }} size="small" variant="outlined" sx={{mr: "4px"}}>edit user</Button>
                        <Button onClick={()=>dispatch(deleteUserThunk(id))} size="small" variant="outlined" color="error">delete</Button>
                    </Typography>
                </Grid>

            </Grid>
        </Box>
    )
}