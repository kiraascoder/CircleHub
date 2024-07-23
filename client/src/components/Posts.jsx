import React, { useEffect, useState, useContext } from "react";
import SinglePost from "./SinglePost";
import Loader from "./Loader";
import { UserContext } from "../context/userContext";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const { currentUser } = useContext(UserContext);
  const currentUserName = currentUser?.data.name;
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:5000/api/posts/");
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };

    fetchPosts();
  }, []);

  const handleDelete = async (postID) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/posts/${postID}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete post");
      }

      setPosts(posts.filter((post) => post._id !== postID));
    } catch (err) {
      setError(err.message);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="posts-container">
      <section className="posts">
        {error && <p>{error}</p>}
        {!error && posts.length === 0 && <p>No posts available</p>}
        {posts.map(
          ({ _id: id, title, category, desc, img, creator, createdAt }) => {
            return (
              <SinglePost
                key={id}
                postID={id}
                title={title}
                category={category}
                desc={desc}
                img={img}
                authorID={creator}
                createdAt={createdAt}
                onDelete={handleDelete}
                currentUserName={currentUserName}
              />
            );
          }
        )}
      </section>
    </div>
  );
};

export default Posts;
