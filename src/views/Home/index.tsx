import React, {forwardRef, useEffect, useState} from "react";
import Page from "../../components/Page";
import MaterialTable, {Icons} from 'material-table';
import {MDBBtn, MDBInputGroup} from "mdb-react-ui-kit";
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import {createOrder, getAllOrders} from "../../services/order";

const tableIcons: Icons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref}/>),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref}/>),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref}/>),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref}/>),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref}/>),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref}/>),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref}/>),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref}/>),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref}/>),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref}/>),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref}/>),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref}/>),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref}/>),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref}/>),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref}/>),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref}/>),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref}/>)
};

export default function Home() {
    const [order, setOrder] = useState('');
    const [data, setData] = useState([])
    const [selectedRows, setSelectedRows] = useState([])

    const handleChange = (event: SelectChangeEvent) => {
        setOrder(event.target.value as string);
    };

    const handleRowUpdate = (newData: any, oldData: any, resolve: (value: any) => void) => {

    }

    const handleRowDelete = (oldData: any, resolve: any) => {
    }

    const handleRowAdd = (newData: any, resolve: any) => {
        newData.CreatedDate = new Date().toISOString();
        createOrder(newData).then(r => {
            return r;
        }).then(r => {
            let result = r;
            result.CreatedDate = new Date(result.CreatedDate).toLocaleString();
            const dataToAdd: any = [...data, result];
            setData(dataToAdd);
            resolve(r);
        }).catch(e => {
            console.log(e);
        });
    }

    useEffect(() => {
        getAllOrders().then(res => {
            setData(res);
        })
    }, [])

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
        <MaterialTable
            title="Current Orders"
            icons={tableIcons}
            columns={[
                {title: "Order ID", field: "Id", editable: "never"},
                {title: "Creation Date", field: "CreatedDate", editable: "never"},
                {title: "Created By", field: "CreatedByUserName"},
                {title: "Order Type", field: "OrderType"},
                {title: "Customer", field: "CustomerName"},
            ]}
            data={data}
            options={{
                search: false,
                paging: false,
                actionsColumnIndex: -1
            }}
            editable={{
                onRowUpdate: (newData, oldData) =>
                    new Promise((resolve) => {
                        handleRowUpdate(newData, oldData, resolve);
                    }),
                onRowAdd: (newData) =>
                    new Promise((resolve) => {
                        handleRowAdd(newData, resolve)
                    }),
                onRowDelete: (oldData) =>
                    new Promise((resolve) => {
                        handleRowDelete(oldData, resolve)
                    }),
            }}
        />
    </Page>
}