import { Route, Routes } from "react-router-dom"
import { Home, About } from "./pages"

const Router = () => {
    return (
        <Routes>
            <Route path="/" element= {<Home/>} />
            <Route path="/about" element= {<About/>} />
        </Routes>
    )
}

export { Router }