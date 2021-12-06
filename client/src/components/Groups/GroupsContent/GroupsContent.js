import React, {useEffect} from "react";


import {useDispatch, useSelector} from "react-redux";
import {getAllUsersThunk, isUserEditOpenAction, openDialogAddUserAction} from "../../../redux/actions/users-actions";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";


import {
    addGroupErrorAction,
    addGroupSuccessAction,
    deleteGroupErrorAction,
    deleteGroupSuccessAction,
    getAllGroupsThunk, openAddUserModalAction, updateGroupDataSuccessAction
} from "../../../redux/actions/groups-action";

import {SingleGroup} from "./SingleGroup/SingleGroup";
import {Notification} from "../../Notification/Notification";
import {AddGroup} from "./AddGroup/AddGroup";
import EditUser from "../../Users/EditUser/EditUser";
import {EditGroup} from "./EditGroup/EditGroup";


export const GroupsContent = () => {

    const isError = useSelector(state => state.groups.deleteGroupError)
    const isSuccess = useSelector(state => state.groups.deleteGroupSuccess)
    const isSuccessedCreate = useSelector(state => state.groups.addNewGroupSuccess)
    const isErrorCreate = useSelector(state => state.groups.addNewGroupError)
    const isupdateSuccess = useSelector(state => state.groups.updateGroupDataSuccess)


    const groups = useSelector(state => state.groups.groups)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllUsersThunk())
        dispatch(getAllGroupsThunk())
    }, [])
    return (
        <>
            {groups.map(el => <SingleGroup key={el._id} name={el.name} description={el.description}
                                           id={el._id}/>)}
            <Box sx={{mt: "16px"}}>
                <Grid container spacing={0}>
                    <Grid item xs={9}></Grid>
                    <Grid item xs={3}>

                        <Button onClick={() => {
                            dispatch(openAddUserModalAction(true))
                        }} sx={{ml: "3px"}} variant="contained" color="success">
                            add new group
                        </Button>
                        <AddGroup/>
                        <EditGroup />
                    </Grid>
                </Grid>
            </Box>
            <Notification message='You cannot delete the group the user belongs to!' open={isError}
                          setOpen={deleteGroupErrorAction} severity='error'/>
            <Notification message='You have successfully deleted the group' open={isSuccess}
                          setOpen={deleteGroupSuccessAction} severity='success'/>
            <Notification message='You have successfully created a group' open={isSuccessedCreate}
                          setOpen={addGroupSuccessAction} severity='success'/>
            <Notification message='Fill in the fields to create a new group' open={isErrorCreate}
                          setOpen={addGroupErrorAction} severity='error'/>
            <Notification message='Group updated!' open={isupdateSuccess}
                          setOpen={updateGroupDataSuccessAction} severity='success'/>
        </>
    )
}