import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from '../components/Layout'
import Aprendizaje from '../pages/Aprendizaje'
import Home from '../pages/Home'
import { AnimatePresence} from 'framer-motion'



const AppRouter = () => {

    

    return (
        <BrowserRouter>
            <AnimatePresence exitBeforeEnter>
                <Routes>
                    <Route path="/" element={ <Layout /> } >
                        <Route index element={ <Home /> } />
                        <Route path="aprendizaje" element={ <Aprendizaje /> } />
                    </Route>
                </Routes>
            </AnimatePresence>
        </BrowserRouter>
    )
}

export default AppRouter
