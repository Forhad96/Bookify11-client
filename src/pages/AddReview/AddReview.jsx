import { useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const AddReview = () => {
  const axios = useAxios();
  const { id } = useParams();
  const { user } = useAuth();
  const { email, displayName, photoURL } = user;
console.log(id);
  const handleAddReview = async (event) => {
    event.preventDefault();
    const from = new FormData(event.target);
    const comment = from.get("comment");

    const rating = from.get("rating");

    const review = {
      author: displayName,
      email,
      photo: photoURL,
      comment,
      rating,
    };

    console.log(review);
    try {
      const res = await axios.post(`/rooms/${id}`,review);
      console.log(res);
      toast.success('Review post successful')
    } catch (error) {
      console.log(error);
      toast.error('something went wrong')
    }
  };


  return (
    <section className="py-10 bg-gray-50 dark:bg-gray-800">
      <Helmet>
        <title>Add review</title>
      </Helmet>
      <div className="max-w-6xl px-4 py-6 mx-auto lg:py-4 md:px-6">
        <div className="lg:grid-cols-[50%,1fr] grid grid-cols-1 gap-6">
          {/* review comp */}
          <div>
            <div className="p-6 bg-gray-100 rounded-md dark:bg-gray-900">
              <h2 className="px-2 mb-6 text-2xl font-semibold text-left text-gray-600 dark:text-gray-400">
                Leave a comment
              </h2>
              <form onSubmit={handleAddReview} className="">
                <div className="px-2 mb-6">
                  <label className="block mb-2 font-medium text-gray-700 dark:text-gray-400">
                    Your review *
                  </label>
                  <textarea
                    type="message"
                    placeholder="write a review"
                    required=""
                    name="comment"
                    className="block w-full px-4 leading-tight text-gray-700 border rounded bg-gray-50 dark:placeholder-gray-500 py-7 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 "
                    defaultValue={""}
                  />
                </div>

                <div className="px-2 mb-6">
                  <label className="block mb-2 font-medium text-gray-700 dark:text-gray-400">
                    Rating
                  </label>
                  <input
                    type="number"
                    placeholder="Rating 1-5"
                    required=""
                    max={5}
                    name="rating"
                    className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 border rounded bg-gray-50 dark:placeholder-gray-500 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 "
                  />
                </div>
                <div className="px-2">
                  <button
                    type="submit"
                    className="px-4 py-2 font-medium text-gray-100 bg-blue-800 rounded shadow hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-700"
                  >
                    Submit Comment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AddReview;
