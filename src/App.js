// import logo from './logo.svg';
import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Post from "./components/Post";

// Trinh's comments:
// These are the steps I've taken:
// 1. Implement useEffect to fetch the posts and users from the given API at page load, and store them in 2 pieces of object variable state called posts and author.
// 2. The app returns a list of posts (in the posts.map() function). Each post includes the 4 points of information as requested by this assignment.
// To separate concern, I've created a component called Post to define the structure and behaviors of each post
// In the posts.map() function, the information from the posts and authors variable will be passed to each post.

// Post component:
//  - The post title is always on display. Clicking on the title toggles will change the value of state variable "isOpened", which will open/close the content.
//  - The Close button at the end of the post content will close the content. Clicking on the Close button  state variable "isOpened" to false, which will close the content.
// - I had some styling in App.css, and also used Bootstrap for responsive styling
function App() {
  const [posts, setPosts] = useState(null);
  const [authors, setAuthors] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
    axios
      .get("https://jsonplaceholder.typicode.com/users/")
      .then((res) => {
        setAuthors(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  if (posts === null || authors === null) {
    return "Loading...";
  }
  return (
    <div className="App mx-2 blinkBg">
      <h2 className="text-center mb-4">PridePlaces Coding Challenge</h2>
      <div className="postWrapper">
        {posts.map((post) => {
          return (
            <Post
              key={post.id}
              authorName={authors[post.userId - 1].name}
              authorCatchPhrase={authors[post.userId - 1].company.catchPhrase}
              postTitle={post.title}
              postBody={post.body}
              postId={post.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
