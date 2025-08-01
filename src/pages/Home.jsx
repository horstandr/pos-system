import { Link } from 'react-router';
import Info from '../data/Info';
import NumberPresent from '../components/NumberPresent';

import '../styles/Home.css';


function Home() {
    return (
    <div className='home'>
        <h1>{Info.restaurantName}</h1>
        <h2>Pages</h2>
        <div className='links'>
            <Link to="/tables" className='link'>Tables</Link>
            <Link to="/admin" className='link'>Admin Page</Link>
        </div>
        
    </div>
    );
}

export default Home;