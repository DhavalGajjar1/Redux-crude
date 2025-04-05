import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ViewEmp from './Emp/ViewEmp'
import AddEmp from './Emp/AddEmp'
import UpdateEmp from './Emp/UpdateEmp'
import './App.css';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<AddEmp />} />
                    <Route path='/viewemp' element={<ViewEmp />} />
                    <Route path='/updateEmp/:index' element={<UpdateEmp />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App