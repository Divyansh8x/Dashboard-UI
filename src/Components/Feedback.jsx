import { feedbacks } from "../Constants/Feeback";

const Feedback = () => {
  return (
    <div className="p-4 w-[450px] relative -right-[470px] bg-gray-800 rounded col-span-1">
      <h2 className="text-xl mb-4 ">Customer's Feedback</h2>
      <div className="space-y-4">
        {feedbacks.map((feedback, index) => (
          <div key={index} className="bg-gray-700 p-4 rounded">
            <div className="flex items-center space-x-4 mb-2">
              <div className="h-8 w-8 bg-gray-600 rounded-full"></div> {/* Placeholder for customer avatar */}
              <span>{feedback.name}</span>
            </div>
            <p className="text-sm">{feedback.feedback}</p>
            <div className="flex mt-2">
              {Array.from({ length: feedback.rating }, (_, i) => (
                <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.205c.969 0 1.371 1.24.588 1.81l-3.405 2.475a1 1 0 00-.364 1.118l1.286 3.974c.3.921-.755 1.688-1.538 1.118L10 13.347l-3.405 2.475c-.783.57-1.838-.197-1.538-1.118l1.286-3.974a1 1 0 00-.364-1.118L2.574 9.4c-.783-.57-.38-1.81.588-1.81h4.205a1 1 0 00.95-.69l1.286-3.974z" />
                </svg>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
