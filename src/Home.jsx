import Address from "./Home files/Address";
import Banner from "./Home files/Banner";
import Review from "./Home files/Review";
import Service from "./Home files/Service";
import Expert from "./expert doctor/Expert";
import ExpertCard from "./expert doctor/ExpertCard";



const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Service></Service>
            <Address></Address>
            <Review></Review>
            <Expert></Expert>
            <ExpertCard></ExpertCard>
            
        </div>
    );
};

export default Home;


