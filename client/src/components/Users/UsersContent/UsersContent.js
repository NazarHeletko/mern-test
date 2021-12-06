import React, {useEffect} from "react";

import {SingleUser} from "./SingleUser/SingleUser";
import {useDispatch, useSelector} from "react-redux";
import {
    createUserErrorAction,
    createUserSuccessAction,
    deleteUserSuccessAction,
    getAllUsersThunk,
    isUserEditOpenAction,
    openDialogAddUserAction, updateUserSuccessAction
} from "../../../redux/actions/users-actions";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import AddUser from "../AddUser/AddUser";
import {
    deleteGroupErrorAction,
    deleteGroupSuccessAction,
    getAllGroupsThunk
} from "../../../redux/actions/groups-action";
import EditUser from "../EditUser/EditUser";
import {Notification} from "../../Notification/Notification";


export const UsersContent = () => {

    const isDeleteSuccess = useSelector(state => state.users.deleteUserSuccess)
    const isCreateSuccess = useSelector(state => state.users.createUserSuccess)
    const isCreateUserError = useSelector(state => state.users.createUserError)
    const updateUserSucess = useSelector(state => state.users.updateUserSucess)
    const users = useSelector(state => state.users.users)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllUsersThunk())
        dispatch(getAllGroupsThunk())
    }, [])
    return (
        <>
            {users.map(el => <SingleUser key={el._id} name={el.name} created={el.created} group={el.group}
                                         id={el._id}/>)}
            <Box sx={{mt: "16px"}}>
                <Grid container spacing={0}>
                    <Grid item xs={9}></Grid>
                    <Grid item xs={3}>

                        <Button onClick={()=>{
                            dispatch(openDialogAddUserAction(true));
                            dispatch(isUserEditOpenAction(false));
                        }} sx={{ml: "3px"}} variant="contained" color="success">
                            add new user
                        </Button>
                        <AddUser/>
                        <EditUser />
                    </Grid>
                </Grid>
            </Box>
            <Notification message='You have successfully deleted a user' open={isDeleteSuccess}
                          setOpen={deleteUserSuccessAction} severity='success'/>
            <Notification message='You have successfully create a user' open={isCreateSuccess}
                          setOpen={createUserSuccessAction} severity='success'/>
            <Notification message='All fields must be filled' open={isCreateUserError}
                          setOpen={createUserErrorAction} severity='error'/>
            <Notification message='User updated!' open={updateUserSucess}
                          setOpen={updateUserSuccessAction} severity='success'/>
        </>
    )
}