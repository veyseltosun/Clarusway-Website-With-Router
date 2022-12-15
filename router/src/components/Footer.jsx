import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css";


function Footer() {
  return (
    <div>
        <footer>
            <p> Veyo Web Design, Copyright &copy; 2023 </p> 
            <br/>
            <Link to="https://github.com/veyseltosun" target="_blank">
                <img 
                src="https://clarusway.com/wp-content/uploads/2020/06/clarusway_logo.png"
                width="200"
                height="40"
                alt="" 
                />
            </Link>
        </footer>
    </div>
  )
}

export default Footer