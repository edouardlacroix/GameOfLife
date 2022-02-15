import './styles.scss';
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()
    return (
        <div className="home-wrapper">
            <h1>The Game Of Life</h1>
            <h2>Home</h2>
            <p onClick={() => navigate('centralized')}>{"Centralized -->"} </p>

        </div>
    );
}

export default Home;
