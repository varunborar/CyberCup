
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import Landing from '../Sections/Landing/Landing';
import Event from '../Sections/Event/Event';
import FAQs from '../Sections/FAQs/FAQs';
import Hackathon from '../Sections/Hackathon/Hackathon';
import Games from '../Sections/Games/Games';
import Team from '../Sections/Team/Team';

const Home = () => {
    return (
        <div className="Home">
            <Header></Header>
            <Landing></Landing>
            <Hackathon></Hackathon>
            <Event></Event>
            <Games></Games>
            <Team></Team>
            <FAQs></FAQs>
            <Footer></Footer>
        </div>
    )
}

export default Home;