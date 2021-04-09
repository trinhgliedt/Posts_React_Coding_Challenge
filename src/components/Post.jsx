import React, { useState, useEffect, useRef } from "react";

const Post = (props) => {
  const [isOpened, setIsOpened] = useState(false);
  const ref = useRef();
  useOnClickOutside(ref, (isOpened) => setIsOpened(false));
  const { authorName, authorCatchPhrase, postTitle, postBody, postId } = props;

  function handleClick(postId) {
    setIsOpened(!isOpened);
  }
  return (
    <div
      className="post col-lg-10 col-md-8 col-sm-12 text-white shadow mb-2 p-3 rounded"
      ref={ref}
      onClick={(event) => handleClick(postId)}
    >
      <p
        className={
          isOpened === false ? "text-center text-capitalize" : "text-capitalize"
        }
      >
        {isOpened === false && postId + ". "}
        <span className="font-weight-bold">
          {isOpened && "Post's title:"}
        </span>{" "}
        {postTitle}
      </p>
      {isOpened && (
        <div>
          <p>
            <span className="font-weight-bold">Author's name:</span>{" "}
            {authorName}
          </p>
          <p>
            <span className="font-weight-bold">Author's catch phrase:</span>{" "}
            {authorCatchPhrase}
          </p>
          <p>
            <span className="font-weight-bold">Post's body: </span>
            {postBody}
          </p>
          <div className="text-center">
            <button
              className="btn btn-warning shadow text-white"
              onClick={(event) => setIsOpened(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;

function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, []);
}
