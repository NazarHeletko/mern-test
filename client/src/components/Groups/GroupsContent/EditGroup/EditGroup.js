import React, {useState} from 'react'
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import DialogContent from "@mui/material/DialogContent";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Box from "@mui/material/Box";
import {
    addGroupErrorAction,
    addGroupSuccessAction,
    addNewGroupThunk,
    openAddUserModalAction, openEditModalAction, setEditedGroupDatalAction, updateGroupThunk
} from "../../../../redux/actions/groups-action";
import {useDispatch, useSelector} from "react-redux";

export const EditGroup = () => {
    const isEditGroupModalOpen = useSelector(state => state.groups.isEditGroupModalOpen)
    const editedGroupData = useSelector(state => state.groups.editedGroup)
    const dispatch = useDispatch()



    const handleClose = () => {
        dispatch(openEditModalAction(false))

    };

    return (
        <div>
            <Dialog open={isEditGroupModalOpen} onClose={handleClose}>
                <DialogTitle>Edit group</DialogTitle>
                <DialogContent>
                    <TextField
                        value={editedGroupData.name}
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name"
                        type="email"
                        fullWidth
                        variant="outlined"
                        autoComplete='off'
                        onChange={(e)=>dispatch(setEditedGroupDatalAction({name:e.target.value, description: editedGroupData.description, _id: editedGroupData._id}))}
                    />
                    <TextField
                        value={editedGroupData.description}
                        sx={{mt: '15px'}}
                        id="outlined-multiline-static"
                        label="Description"
                        multiline
                        rows={4}
                        fullWidth
                        onChange={(e)=> dispatch(setEditedGroupDatalAction({...editedGroupData, description:e.target.value, _id: editedGroupData._id}))}
                    />
                </DialogContent>
                <Box sx={{display: "flex", justifyContent: "center", paddingTop: "2px", paddingBottom: "22px"}}>
                    <Button onClick={() => {
                        if(editedGroupData.name && editedGroupData.description){
                            let newGroup = {
                                _id: editedGroupData._id,
                                name: editedGroupData.name,
                                description: editedGroupData.description
                            }
                            dispatch(updateGroupThunk(newGroup))
                            dispatch(openEditModalAction(false))
                        }
                        else{
                            dispatch(addGroupErrorAction(true))
                        }
                        dispatch(openAddUserModalAction(false))
                        setEditedGroupDatalAction({name:'', description: ''})
                    }} color="success"
                            variant="contained"
                            startIcon={<AddCircleOutlineIcon sx={{color: "#fff"}} fontSize="small"/>}>
                        save
                    </Button>
                </Box>
            </Dialog>
        </div>
    );
}