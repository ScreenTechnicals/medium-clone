import React from "react";

const CommentBox = () => {
  return (
    <div>
      <textarea
        type="text"
        placeholder="Put Your Thoughts Here..."
        className="outline-none border px-5 py-2 rounded-md w-full"
        required
      />
      <div className="w-full text-right">
        <button className="px-5 py-2 bg-green-600 text-white rounded-md mt-2">
          Submit
        </button>
      </div>
    </div>
  );
};

export default CommentBox;
