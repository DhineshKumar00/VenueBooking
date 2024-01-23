import React from "react";
import { Link } from 'react-router-dom'
import '../Style/Home.css'

const Home=()=>{
    return(
    <>
    <div>
        <div className="Bg-image1">
            <div className="text">
                <h1 className="txt1">Jenneys <span className="txt2">Residency</span></h1>
                 <p className="para">Grand Of Comibatore</p>
                  <Link>
                  <button>
                      Rent | ₹2,00,000/day
                   </button>
                   </Link>
             </div>
        </div>
        <div className="Bg-image2">
            <div className="text">
                <h1 className="txt1">PY <span className="txt2">Mahal</span></h1>
                 <p className="para">Echanari</p>
                  <Link>
                  <button>
                      Rent | ₹1,75,000/day
                   </button>
                   </Link>
             </div>
        </div>
        <div className="Bg-image3">
            <div className="text">
                <h1 className="txt1">Akshaya <span className="txt2">Hall</span></h1>
                 <p className="para">Open Space </p>
                  <Link>
                  <button>
                      Rent | ₹2,00,000/day
                   </button>
                   </Link>
             </div>
        </div>
    </div>
    
    </>
    )
}

export default Home;

