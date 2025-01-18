import './navbar.css'
import logo from './images/logo.png'


function NavigationBar(){
    return(
           <>
	           <nav>
               <ul id= "logo"><a href= "#/Home"><img src = {logo} /></a></ul>

					     <div>
					          <ul id = "navbar">
                                   <li id = "home"><a href= "#/Home">Home</a> </li>
					               <li><a href= "#/About">About</a> </li>
					               <li><a href="#/Projects">Projects</a></li>
					               <li><a href="#/Connect">Connect</a></li>
					          </ul>
					     </div>
					</nav>
           </>
    )
}

export default NavigationBar