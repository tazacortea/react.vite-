
import {BrowserRouter, Routes,Route, Link} from "react-router-dom";
import Layout from "../Components/Layout";
import Homepage from "./Homepage";
import Aboutpage from "./Aboutpage";
import Contactpage from "./Contactpage";

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