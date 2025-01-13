import './navbar.css'
import logo from /images/logo.png


function NavigationBar(){
    return(
           <>
	           <nav>
               <li><a href="index.html"><img src = "logo" alt = "logo"></img></a> </li>

					     <div>
					          <ul id = "navbar">
					               <li><a href="index.html">Home</a> </li>
					               <li><a href="index.html">Works</a></li>
					               <li><a href="index.html">Fun</a></li>
					          </ul>
					     </div>
					</nav>
           </>
    )
}

export default NavigationBar