import * as React from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {isUserEditOpenAction, openDialogAddUserAction, setEditedUserAction} from "../../../redux/actions/users-actions";
import {useDispatch, useSelector} from "react-redux";
import UserRoleSelect from "./UserRoleSelect/UserRoleSelect";


export default function AddUser() {
    const isEdit = useSelector(state => state.users.isUserEditOpen)
    const isOpen = useSelector(state => state.users.userEditDialogOpen)
    const dispatch = useDispatch()
    const [nameValue, setNameValue] = React.useState(  '');


    const handleChange = (event) => {
        setNameValue(event.target.value)
    };

    return (

            <Dialog open={isOpen} onClose={() => {
                dispatch(openDialogAddUserAction(false));
                setNameValue('')
            }}>
                <DialogTitle>To add a new user fill out the form</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name"
                        fullWidth
                        onChange={(e)=> handleChange(e)}
                        value={nameValue}
                        autoComplete='off'
                    />
                    <UserRoleSelect name={nameValue}  setNameValue={setNameValue}/>
                </DialogContent >
            </Dialog>

    );
}