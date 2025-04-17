import FindFriendPostDisplay from '../Components/FindFriendPostDisplay';
import { useEffect, useState } from 'react';


const FindFriend = () => {

    // const travelPostDetails = useLoaderData();
    const [travelPostDetails, setTravelPostDetails] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/travelPosts')
            .then(res => res.json())
            .then(data => {
                console.log("Fetched data:", data);
                setTravelPostDetails(data);
            })
            .catch(error => {
                console.error("Error fetching travel posts:", error);
            });
    }, []);


    console.log("Travel details: ", typeof travelPostDetails);
    console.log("Travel details: ", travelPostDetails);

    return (
        <>
            {/* <Navbar></Navbar> */}


            <div

                className='pl-5 pt-10 sm:px-15 md:grid gap-5 lg:grid-cols-2 xl:grid-cols-3 md:w-full md:gap- space-x-5 justify-items-center mx-auto space-y-5 md:space-y-0 '>
                {
                    travelPostDetails.map((post) => <FindFriendPostDisplay
                        travelpost={post}

                    ></FindFriendPostDisplay>)
                }
            </div>

            {/* <Footer></Footer> */}

        </>

    );
};

export default FindFriend;