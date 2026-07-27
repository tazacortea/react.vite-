

import {outlet} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
      <div className="min-h-screen flex flex-col">
      
          <Header />
      
       <outlet />   

          <Footer />

      </div>
  )
}

export default Layout