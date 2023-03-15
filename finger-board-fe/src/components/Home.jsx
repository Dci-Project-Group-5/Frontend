import {Link} from 'react-router-dom'
import Products from './Products'
import Search from './Search'


function Home () {
    return (
        <div id='home-container'>
            <header>
                <div>
                    <Link to='/'><h1>Finger Board Shop</h1></Link> 
                </div>
                <div>
                <Link to= '/login'><button className="btn-anmelden"> Anmelden</button> </Link>
                <Link to= '/register'><button className='btn-register'>Registrierung</button></Link>

                </div>

            </header>
        
          
            <div id="body">
                <Link to= '/produkt'><button className='btn-register body-item item item1'></button></Link>
                <Link to= '/team'><button className='body-item item item2'></button></Link>
                <Link to= '/produkt'><button className='btn-register body-item item item3'></button></Link>



            </div>



            
        </div>
        
    )
}

export default Home