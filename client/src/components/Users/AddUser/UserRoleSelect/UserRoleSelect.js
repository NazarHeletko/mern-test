import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useDispatch, useSelector} from "react-redux";
import Button from "@mui/material/Button";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {
    createUserSuccessAction,
    createUserThunk,
    openDialogAddUserAction,
    updateUserThunk
} from "../../../../redux/actions/users-actions";


export default function UserRoleSelect({name, setNameValue}) {
    const [groupSelected, setGroupSelected] = React.useState('Noname')
    const groups = useSelector(state => state.groups.groups)
    const isEdit = useSelector(state => state.users.isUserEditOpen)
    const dispatch = useDispatch()

    const handleChange = (event) => {
        setGroupSelected(event.target.value);
    };

    return (
        <Box sx={{minWidth: 120, mt: "6px"}}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Group</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={groupSelected}
                    label="Group"
                    onChange={handleChange}
                >
                    {groups.map(el => <MenuItem key={el._id} value={el.name}>{el.name}</MenuItem>)}

                </Select>
            </FormControl>
            <Box sx={{display: "flex", justifyContent: "center", paddingTop: "22px"}}>
                <Button onClick={() => {

                        dispatch(createUserThunk({
                            name,
                            group: groupSelected,
                            created: new Date().toJSON().slice(0, 10).replace(/-/g, '/')
                        }));
                        dispatch(openDialogAddUserAction(false));
                        setNameValue('');
                    }} color="success"
                                   variant="contained"
                                   startIcon={<AddCircleOutlineIcon sx={{color: "#fff"}} fontSize="small"/>}>
                        save
                    </Button>

            </Box>
        </Box>
    );
}