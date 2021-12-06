import React from 'react'
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import {useDispatch, useSelector} from "react-redux";

export const Notification = ({message, open, setOpen, severity}) => {

    const dispatch = useDispatch()
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        dispatch(setOpen(false))
    };
    return(
        <Snackbar anchorOrigin={{vertical: 'top', horizontal: 'right'}} open={open} autoHideDuration={4000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
                {message}
            </Alert>
        </Snackbar>
    )
}