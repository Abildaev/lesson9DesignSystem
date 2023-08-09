import {BrowserRouter, Routes, Route} from "react-router-dom";
import {lazy} from "react";



const LoginPage = lazy(() => import('./pages/loginPage/LoginPage').then(module => ({
    default: module.LoginPage
})))


function App() {


  return (
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<LoginPage/>}/>
        </Routes>


    </BrowserRouter>
  )
}

export default App
