import { useLoaderData } from "react-router-dom";
import Cards from "../../components/Cards/Cards";
import Banner from "../../components/Header/Banner/Banner";

const Home = () => {
    const data = useLoaderData();
    // console.log(JSON.parse(data));
    return (
        <div>
            <Banner></Banner>

            {/* cards part starts from here */}

            <div className="max-w-[75%] lg:max-w-[1320px] mx-auto my-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    JSON.parse(data).map ( card => <Cards key={card.id} card={card}></Cards>)
                }
            </div>
            </div>
        </div>
    );
};

export default Home;