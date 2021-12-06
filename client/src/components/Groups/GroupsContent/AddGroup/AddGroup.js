import React, {useState} from 'react'
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Box from "@mui/material/Box";
import {
    addGroupErrorAction,
    addGroupSuccessAction,
    addNewGroupThunk,
    openAddUserModalAction
} from "../../../../redux/actions/groups-action";
import {useDispatch, useSelector} from "react-redux";

export const AddGroup = () => {
    const isAddGroupModalOpen = useSelector(state => state.groups.openAddGroupModal)
    const dispatch = useDispatch()

    const [nameInput, setNameInput] = useState('')
    const [descriptionInput, setDescriptionInput] = useState('')

    const handleClose = () => {
        dispatch(openAddUserModalAction(false))
        setNameInput('')
        setDescriptionInput('')
    };

    return (
        <div>
            <Dialog open={isAddGroupModalOpen} onClose={handleClose}>
                <DialogTitle>Fill in the fields to create a new group</DialogTitle>
                <DialogContent>
                    <TextField
                        value={nameInput}
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name"
                        type="email"
                        fullWidth
                        variant="outlined"
                        autoComplete='off'
                        onChange={(e)=>setNameInput(e.target.value)}
                    />
                    <TextField
                        value={descriptionInput}
                        sx={{mt: '15px'}}
                        id="outlined-multiline-static"
                        label="Description"
                        multiline
                        rows={4}
                        fullWidth
                        onChange={(e)=> setDescriptionInput(e.target.value)}
                    />
                </DialogContent>
                <Box sx={{display: "flex", justifyContent: "center", paddingTop: "2px", paddingBottom: "22px"}}>
                    <Button onClick={() => {
                        if(nameInput && descriptionInput){
                            let newGroup = {
                                name: nameInput,
                                description: descriptionInput
                            }
                            dispatch(addNewGroupThunk(newGroup))
                            dispatch(addGroupSuccessAction(true))
                        }
                        else{
                            dispatch(addGroupErrorAction(true))
                        }
                        dispatch(openAddUserModalAction(false))
                        setNameInput('')
                        setDescriptionInput('')
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