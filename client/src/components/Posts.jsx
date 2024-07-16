import React, { useEffect, useState } from "react";
import SinglePost from "./SinglePost";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/posts");
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <section className="posts">
        {error && <p>{error}</p>}
        {!error && posts.length === 0 && <p>No posts available</p>}
        {posts.map(({ _id, title, category, desc, img, creator }) => (
          <SinglePost
            key={_id}
            postID={_id}
            title={title}
            category={category}
            desc={desc}
            img={img}
            authorID={creator}
          />
        ))}
      </section>
    </div>
  );
};

export default Posts;
