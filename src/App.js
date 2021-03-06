import './App.css';
import Clock from './Clock/Clock'
import React, { useState, useEffect } from 'react'
import PostList from './Post/PostList';
import BetterClock from './BetterClock/BetterClock';
import Hero from './Hero/Hero';


function App() {
  const [show, setShow] = useState(true);
  const [postList, setPostList] = useState([]);

  const [count, setCount] = useState(0);

  useEffect(() => {
    async function fetchPostList() {
      try {
        const requestURL = 'http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1';
        const respone = await fetch(requestURL);
        const responeJSON = await respone.json();
        console.log({ responeJSON });
        const { data } = responeJSON;
        setPostList(data);
      } catch (error) {
        console.log(error);
      }
    }

    console.log('Post list effect');
    fetchPostList();
  }, [])

  useEffect(() => {
    console.log('Todo effect');
  }, [])

  return (
    <div className="App">

      {show && <Clock></Clock>}
      {show && <BetterClock></BetterClock>}

      <button onClick={() => setShow(!show)}>Hide clock</button>

      <PostList posts={postList}></PostList>

      <p>{count}</p>
      <button onClick={() => setCount(count+1)}>Increase</button>
      <Hero name="Cuong" />
    </div>
  );
}

export default App;
