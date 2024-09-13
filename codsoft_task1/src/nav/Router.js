import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from '../Home/Home'
import Project from '../Project/Project'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Nav from './Nav'


export default function Router() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Nav />}>
                        <Route index element={<Home/>} />
                        <Route path="Home" element={< Home />} />                      
                        <Route path="Project" element={<Project />} />
                        <Route path="About" element={<About />} />
                        <Route path="Contact" element={<Contact />} />                      
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
