import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { delempdata } from '../redux/actions';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';

function ViewEmp() {
    let emp = useSelector((state) => state.empData.employee);
    let dispatch = useDispatch()
    let deleteEmp = (pos) => {
        dispatch(delempdata(pos));
    };
    return (
        <div>

            <h1 style={{ textAlign: "center" }}>Employee Records</h1>
            <Link to="/" style={{marginLeft:"200px",border:"1px solid black",padding:"10px",backgroundColor:"black",color:"white"}}>
                ADD Data
            </Link>
            <table border={1} align='center'>

                <tr>
                    <td>Name</td>
                    <td>Age</td>
                    <td>Designation</td>
                    <td>Salary</td>
                    <td>Phone No</td>
                    <td>Action</td>
                </tr>
                {emp.map((v, i) => {
                    return (
                        <tr>
                            <td>{v.name}</td>
                            <td>{v.age}</td>
                            <td>{v.designation}</td>
                            <td>{v.salary}</td>
                            <td>{v.phone}</td>
                            <td>
                                <button onClick={() => deleteEmp(i)}><MdDelete /></button>
                                <button>
                                    <Link to={"/updateEmp/" + i}>
                                        <FaEdit />
                                    </Link>
                                </button>
                            </td>
                        </tr>
                    );
                })}
            </table>
        </div>)
}

export default ViewEmp;
