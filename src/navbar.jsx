import './navbar.css'
import logo from './images/logo.png'


function NavigationBar(){
    return(
           <>
	           <nav>
               <li><ul id= "logo"><a href="index.html"><img src = {logo} alt = "logo"/></a></ul> </li>

					     <div>
					          <ul id = "navbar">
                                   <li><a href= "#/Home">Home</a> </li>
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