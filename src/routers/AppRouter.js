import React from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Layout from '../components/Layout'
import Aprendizaje from '../pages/Aprendizaje'
import Home from '../pages/Home'
import { AnimatePresence} from 'framer-motion'



const AppRouter = () => {

    const location = useLocation()

    return (
        
            <AnimatePresence exitBeforeEnter>
                <Routes location={location} key={location.pathname} >
                    <Route path="/" element={ <Layout /> } >
                        <Route index element={ <Home /> } />
                        <Route path="aprendizaje" element={ <Aprendizaje /> } />
                    </Route>
                    <Route path="*" element={<Navigate replace to={'/'} />} />
                </Routes>
            </AnimatePresence>
        
    )
}

export default AppRouter
