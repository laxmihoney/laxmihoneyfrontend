import React from 'react';

export const Home = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <header>
        <h1>Welcome to Our Website</h1>
        <p>Your one-stop solution for amazing content</p>
      </header>

      <section style={{ marginTop: '30px' }}>
        <h2>About Us</h2>
        <p>
          We are dedicated to providing the best services and content for our
          users. Explore our website to find exciting and informative articles.
        </p>
      </section>

      <section style={{ marginTop: '30px' }}>
        <h2>Featured Articles</h2>
        <ul>
          <li>How to Build a React App</li>
          <li>Understanding JSX and React Components</li>
          <li>Tips for Better Web Performance</li>
        </ul>
      </section>
    </div>
  );
};