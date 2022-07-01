import React from "react";
import Page from "../../components/Page";
import BasicTable from "../../components/Table";
import UserDropDown from "../../components/UserDropDown";
import {MDBBtn, MDBInputGroup} from "mdb-react-ui-kit";
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";


export default function Home() {
    const [order, setOrder] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setOrder(event.target.value as string);
    };

    return <Page headerTitle={"Home"}>
        <div className="customFormGroup">
            <MDBInputGroup className='mb-3'>
                <MDBBtn outline>Search</MDBBtn>
                <input className='form-control' type='text'/>
            </MDBInputGroup>
            <FormControl fullWidth>
                <InputLabel id="order-type-select-label">Order Type</InputLabel>
                <Select
                    labelId="order-type-select-label"
                    id="order-type-simple-select"
                    value={order}
                    label="Order Type"
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </div>
        <BasicTable></BasicTable>
    </Page>
}