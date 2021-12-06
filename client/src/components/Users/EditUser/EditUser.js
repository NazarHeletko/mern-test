import * as React from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {
    isUserEditOpenAction,
    openDialogAddUserAction,
    setEditedUserAction,
    setInputNameAction
} from "../../../redux/actions/users-actions";
import {useDispatch, useSelector} from "react-redux";
import EditUserRoleSelect from "./EditUserRoleSelect";




export default function EditUser() {
    const editedUser = useSelector(state => state.users.editedUser.name)
    const editedUserID = useSelector(state => state.users.editedUser._id)
    const isEdit = useSelector(state => state.users.isUserEditOpen)
    const dispatch = useDispatch()



    const handleChange = (event) => {
        dispatch(setInputNameAction(event.target.value))

    };

    return (

        <Dialog open={isEdit} onClose={() => {
            dispatch(isUserEditOpenAction(false));

        }}>
            <DialogTitle>Edit user</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Name"
                    fullWidth
                    onChange={(e)=> handleChange(e)}
                    value={editedUser}
                    autoComplete='off'
                />
                <EditUserRoleSelect name={editedUser}  id={editedUserID}/>
            </DialogContent >
        </Dialog>

    );
}