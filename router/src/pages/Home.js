import React from 'react'
import html from "../assets/logo_html.png"
import css from "../assets/logo_css.png"
import logo from "../assets/logo_brush.png"
import Card from "../components/Card"


const Home = () => {
  return (
    <div className='root'>
        <div id='newsletter'>
            <div className='container'>
                <h1>Subscribe To Our Newsletter</h1>
                <form>
                    <input type="email" placeholder="Enter Email..." />
                    <button type= "submit" className="button_1">Subscribe</button>
                </form>
            </div>
        </div>
        <div id="boxes">
            <div className="container">
                <Card src={html} title="HTML5 Markup" url="html"/>
                <Card src={css} title="CSS3 Styling" url="css"/>
                <Card src={logo} title="Graphic Design" url="logo"/>
            </div>
        </div>

    </div>
  )
}

export default Home