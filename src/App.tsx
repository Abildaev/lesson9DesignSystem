import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Suspense} from "react";
import {pageComponents} from "./data/componentsData";

import './App.css'

import {Preloader} from "./components";
import PrivateRoute from "./hoc/PrivateRoute";
import {AuthProvider} from "./context/AuthProvider";


function App() {
  return (
    <BrowserRouter>
        <AuthProvider>
            <Routes>
                {pageComponents.map(page => {
                    if(page.private) {
                        return (<Route path="/" element={<PrivateRoute/>} key={page.id}>
                            <Route path={page.link}
                                   element={<Suspense fallback={<Preloader/>}>{page.component}</Suspense>}/>
                        </Route>)
                    }
                    else {
                        return (
                            <Route key={page.id} path={page.link} element={<Suspense fallback={<Preloader/>}>{page.component}</Suspense>}/>
                        )
                    }

                })}
            </Routes>

        </AuthProvider>




    </BrowserRouter>
  )
}

export default App
