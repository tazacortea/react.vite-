
import {browserRouter, Routes,Route, Link} from "react-router-dom";
import Layout from "./Components/Layout";
import Homepage from "./Pages/Homepage";
import Aboutpage from "./Pages/Aboutpage";
import Contactpage from "./Pages/Contactpage";

function Markup() {
    return(
        
        <BrowserRouter>

            <Routes>    
                
                <Route path="/" element={<Layout />}>

                    <Route index element={<Homepage />} />
                    <Route path="/Aboutpage" element={<Aboutpage />} />
                    <Route path="/Contactpage" element={<Contactpage />} />
            

                </Route>

            </Routes>           

        </BrowserRouter>
    ) 
}

export default Markup