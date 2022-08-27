import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Daftar from '../pages/Daftar'
import Close from '../pages/Close'
import Home from '../pages/Home'
import InputName from '../pages/InputName'
import InputEmail from '../pages/InputEmail'
import ReviewTable from '../pages/ReviewTable'


export default function Route1() {
    return (
        <HashRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/daftar" element={<Daftar />} />
                <Route path="/inputName" element={<InputName />} />
                <Route path="/inputEmail" element={<InputEmail />} />
                <Route path="/reviewTable" element={<ReviewTable />} />
                <Route path="/close" element={<Close />} />
            </Routes>
        </HashRouter>
    )
}
