
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import Landing from '../Sections/Landing/Landing';
import Event from '../Sections/Event/Event';
import FAQs from '../Sections/FAQs/FAQs';
import Hackathon from '../Sections/Hackathon/Hackathon';
import Games from '../Sections/Games/Games';

const Home = () => {
    return (
        <div className="Home">
            <Header></Header>
            <Landing></Landing>
            <Hackathon></Hackathon>
            <Event></Event>
            <Games></Games>
            <FAQs></FAQs>
            <Footer></Footer>
        </div>
    )
}

export default Home;