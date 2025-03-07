

import FindFriendPostDisplay from '../Components/FindFriendPostDisplay';
import { useState } from 'react';


const FindFriend = () => {

    // const travelPostDetails = useLoaderData();
const [travelPostDetails, settravelPostDetails] = useState([])

    fetch('http://localhost:5000/travelPostDetails')
    .then(res=>res.json())
    .then(data=>settravelPostDetails(data))

    console.log("Travel details: ", typeof travelPostDetails);
    console.log("Travel details: ",  travelPostDetails);

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