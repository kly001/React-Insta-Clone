import React from 'react';
import SearchBar from "./components/SearchBar/SearchBar.js"
import PostContainer from "./components/PostContainer/Posts.js"
import CommentSection from "./components/CommentSection/Comments.js"

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar/>
        <h1>React Insta-Clone</h1>
        <PostContainer/>
        <CommentSection/>
      </header>
    </div>
  );
}

export default App;
