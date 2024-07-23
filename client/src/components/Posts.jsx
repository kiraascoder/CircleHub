import React, { useEffect, useState } from "react";
import SinglePost from "./SinglePost";
import Loader from "./Loader";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
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
      setLoading(false);
    };

    fetchPosts();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
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
              />
            );
          }
        )}
      </section>
    </div>
  );
};

export default Posts;
