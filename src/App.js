import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Link, Outlet } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Outlet /> {/* Renders the matched child route */}
    </div>
  );
}

// Create the router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

function PostList() {
  const [posts, setPosts] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    fetchPosts();
  }, []); // Fetch posts only once when the component mounts

  const fetchPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching posts:', error));
  };

  const handleLoadMore = () => {
    setStartIndex(prevIndex => prevIndex + 5); // Increment startIndex by 5
  };

  const visiblePosts = posts.slice(0, startIndex + 5);

  return (
    <>
    <RouterProvider router={router} />;
      <h1>Posts</h1>
      <ul>
        {visiblePosts.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
          </li>
        ))}
      </ul>
      {startIndex + 5 < posts.length && <button onClick={handleLoadMore}>Load More</button>}
    </>
  );
}

export default PostList;
