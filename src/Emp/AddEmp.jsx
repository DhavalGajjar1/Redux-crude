import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addempdata } from '../redux/actions';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'

function AddEmp() {
    let [employee, setEmployee] = useState({});
    let empData = useSelector((state) => state.empData.employee);
    let dispatch = useDispatch();
    let navigate = useNavigate();

    let getInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setEmployee({ ...employee, [name]: value })
    }

    let submitData = (e) => {
        e.preventDefault();
        dispatch(addempdata(employee));
        // navigate("/viewemp");
        toast.success("Record Added Successfully");
    }
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Employee Management System</h1>
            <form method="post" onSubmit={(e) => submitData(e)}>
                <table border={1} align='center'>
                    <tr>
                        <td>Name</td>
                        <td>
                            <input type="text" name='name' onChange={(e) => getInput(e)} />
                        </td>
                    </tr>
                    <tr>
                        <td>Age</td>
                        <td>
                            <input type="number" name='age' onChange={(e) => getInput(e)} />
                        </td>
                    </tr>
                    <tr>
                        <td>Designation</td>
                        <td>
                            <input type="text" name='designation' onChange={(e) => getInput(e)} />
                        </td>
                    </tr>
                    <tr>
                        <td>Salary</td>
                        <td>
                            <input type="number" name='salary' onChange={(e) => getInput(e)} />
                        </td>
                    </tr>
                    <tr>
                        <td>Phone No</td>
                        <td>
                            <input type="number" name='phone' onChange={(e) => getInput(e)} />
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <input type="submit" name='submit' />
                        </td>
                    </tr>
                </table>
                <ToastContainer />
                <Link to="/viewemp">
                    View Records
                </Link>
            </form>
        </div>
    )
}

export default AddEmp