import { useEffect, useState } from "react";
import DonationCard from "./DonationCard/DonationCard";

const Donation = () => {

    const [donation, setDonation] = useState([]);
    const [noFound, setNoFound] = useState(false);

    useEffect(() =>{
        const donated = JSON.parse(localStorage.getItem("donated"));
        if(donated){
            setDonation(donated);
        }
        else {
            setNoFound("No donation found");
        }
    },[])
    return (
        <div>
            <div>
                {
                    noFound ? <div><p className="h-[70vh] flex justify-center items-center text-7xl font-bold"> {noFound} </p></div> : <div className="mt-20 max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-4 mb-20">
                        {
                            donation.map (data => <DonationCard key={data.id} data={data}></DonationCard>)
                        }
                    </div>
                }
            </div>
        </div>
    );
};

export default Donation;