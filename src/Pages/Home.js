
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import Landing from '../Sections/Landing/Landing';
import Event from '../Sections/Event/Event';
import FAQs from '../Sections/FAQs/FAQs';

const Home = () => {
    return (
        <div className="Home">
            <Header></Header>
            <Landing></Landing>
            <Event></Event>
            <FAQs></FAQs>
            <Footer></Footer>
        </div>
    )
}

export default Home;