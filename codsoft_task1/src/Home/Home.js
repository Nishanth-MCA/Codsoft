import React from 'react'
import robotImage from './robot.png';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Home() {
  return (

    <div className="container-fluid d-flex">
      <div className='row d-flex mt-xl-5'>
        <div className="container-fluid col-md-6 justify-content-center d-flex" >
          <img src={robotImage} width="46%" alt="Robort " style={{ filter: 'drop-shadow(8px 8px 30px whitesmoke)' }} />
        </div>
        <div className="container-fluid col-md-6">
          <div className="mx-2 my-3 ">
            <div className='text-center'>
              <h1 className="mt-5 text-xl-center text-xl-start" >Hello I'm Nishanth</h1>
              <h4 className="">React JS developer</h4>
            </div>

            <div className="container mt-5">
              <div className="d-flex justify-content-around">
                <a href="https://github.com/Nishanth-MCA" target="_blank" rel="noopener noreferrer" className="btn btn-dark m-2">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/nishanths2675/recent-activity/all/" target="_blank" rel="noopener noreferrer" className="btn btn-primary m-2">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://www.instagram.com/naturelover_3082" target="_blank" rel="noopener noreferrer" className="btn btn-danger m-2">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}