import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {changePageAction} from "../../../redux/actions/page-actions";
import {useDispatch} from "react-redux";




const StyledTabs = styled((props) => (
    <Tabs
        {...props}
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
))({
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
        width: '80%',
        backgroundColor: '#54acff',
    },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
        textTransform: 'none',
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(15),
        marginRight: theme.spacing(1),
        color: 'rgba(255, 255, 255, 0.7)',
        '&.Mui-selected': {
            color: '#c6efff',
        },
        '&.Mui-focusVisible': {
            backgroundColor: 'rgba(100, 95, 228, 0.32)',
        },
    }),
);

export default function CustomizedTabs() {
    const [value, setValue] = React.useState(0);
    const dispatch = useDispatch()

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <StyledTabs
                value={value}
                onChange={handleChange}
                aria-label="styled tabs example"
            >
                <StyledTab onClick={()=>dispatch(changePageAction('users'))} label="List of Users" />
                <StyledTab onClick={()=>dispatch(changePageAction('groups'))} label="List of Groups for Users" />
            </StyledTabs>
        </Box>
    );
}