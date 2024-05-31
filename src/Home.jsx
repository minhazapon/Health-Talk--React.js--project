import Address from "./Home files/Address";
import Banner from "./Home files/Banner";
import Contact from "./Home files/Contact";
import Review from "./Home files/Review";
import Service from "./Home files/Service";
import MedicalMechine from "./Mechine/MedicalMechine";
import Expert from "./expert doctor/Expert";
import ExpertCard from "./expert doctor/ExpertCard";



const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Service></Service>
            <MedicalMechine></MedicalMechine>
            <Address></Address>
            <Review></Review>
            <Expert></Expert>
            <ExpertCard></ExpertCard>
            <Contact></Contact>
            
        </div>
    );
};

export default Home;


