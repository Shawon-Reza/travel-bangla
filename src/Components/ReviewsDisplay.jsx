import React from 'react';
import { TiDeleteOutline } from "react-icons/ti";
import { toast, ToastContainer } from 'react-toastify';
import Swal from 'sweetalert2';


const ReviewsDisplay = ({ data }) => {
    const { firstName, lastName, email, phone, subject, message } = data;
    // console.log(data);

    const handleDeleteReviewPost = (_id) => {

        console.log(_id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {

            if (result.isConfirmed) {
                fetch(`http://localhost:5000/admin/review/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
                    .catch(error => {
                        console.log("Error on Delete Review:", error);
                    })

            }
        });
    }


    return (
        <div>
            <ToastContainer></ToastContainer>
            <div className="max-w-md mx-auto bg-white shadow-lg rounded-2xl p-6 border border-gray-200 font-sans h-72">
                <div className='flex justify-between'>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">{firstName} {lastName}</h2>

                    <span
                        className='text-3xl cursor-pointer'
                        onClick={() => { handleDeleteReviewPost(data._id) }}
                    ><TiDeleteOutline />
                    </span>
                </div>

                <p className="text-sm text-gray-500 mb-4">{email}</p>

                <div className="mb-3">
                    <p><span className="font-semibold text-gray-700">Phone:</span> {phone}</p>
                    <p><span className="font-semibold text-gray-700">Subject:</span> {subject}</p>
                </div>

                <div className="bg-[#80d2d2] p-4 rounded-lg h-24 overflow-auto">
                    <p className="text-gray-700 font-semibold">{message}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewsDisplay;