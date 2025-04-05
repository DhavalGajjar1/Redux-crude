import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addempdata, editempdata } from '../redux/actions';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateEmp() {
    let [employee, setEmployee] = useState({});
    let empData = useSelector((state) => state.empData.employee);
    let empid = useParams();
    let navigate = useNavigate();
    useEffect(() => {
        setEmployee(empData[empid.index]);
    }, [setEmployee]);

    let dispatch = useDispatch();

    let getInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setEmployee({ ...employee, [name]: value })
    }

    let submitData = (e) => {
        e.preventDefault();
        dispatch(editempdata(empid.index, employee));
        navigate("/viewemp")
    }
    return (
        <div>
            <h1>Edit Employee Records</h1>
            <form method="post" onSubmit={(e) => submitData(e)}>
                <table border={1} align='center'>
                    <tr>
                        <td>Name</td>
                        <td>
                            <input type="text" name='name' onChange={(e) => getInput(e)}
                                value={employee.name ? employee.name : ""} />
                        </td>
                    </tr>
                    <tr>
                        <td>Age</td>
                        <td>
                            <input
                                type="number"
                                name='age'
                                onChange={(e) => getInput(e)}
                                value={employee.age ? employee.age : ""}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Designation</td>
                        <td>
                            <input
                                type="text"
                                name='designation'
                                onChange={(e) => getInput(e)}
                                value={employee.designation ? employee.designation : ""}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Salary</td>
                        <td>
                            <input
                                type="number"
                                name='salary'
                                onChange={(e) => getInput(e)}
                                value={employee.salary ? employee.salary : ""}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Phone No</td>
                        <td>
                            <input
                                type="number"
                                name='phone'
                                onChange={(e) => getInput(e)}
                                value={employee.phone ? employee.phone : ""}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <input type="submit" name='submit' value="edit" />
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    )
}

export default UpdateEmp;