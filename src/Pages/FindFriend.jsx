
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import UnderConstraction from './../Components/UnderConstraction';
import TravelPost from './../Components/TravelPost';
import { useLoaderData } from 'react-router-dom';
import FindFriendPostDisplay from '../Components/FindFriendPostDisplay';


const FindFriend = () => {

    const travelPostDetails = useLoaderData();
    console.log("Travel detils: ", typeof travelPostDetails);

    return (
        <>
            <Navbar></Navbar>


            <div className='pl-5 pt-10 sm:px-15 md: grid gap-5 lg:grid-cols-2 md:w-full md:gap- space-x-5 justify-items-center mx-auto'>
                {
                    travelPostDetails.map((post) => <FindFriendPostDisplay
                        travelpost={post}

                    ></FindFriendPostDisplay>)
                }
            </div>

            <Footer></Footer>

        </>

    );
};

export default FindFriend;