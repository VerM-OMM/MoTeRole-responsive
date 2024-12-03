import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components
import Background from './components/Background'

// Pages
import Menu from './pages/Menu'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Error404 from './pages/Error404'
import Categories from './pages/Categories'
import Exercises from './pages/Exercises'
import GameExercises from './pages/GameExercises'
import Try from './pages/Try'

const App = () => (
    <>
        <Background />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/exercises" element={<Exercises />} />
                <Route path="/gameexercises" element={<GameExercises />} />
                <Route path="/try" element={<Try />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
        </BrowserRouter>
    </>
)

export default App
