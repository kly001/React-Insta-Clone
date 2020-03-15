import React from 'react';
import SearchBar from "./components/SearchBar/SearchBar.js"
import PostContainer from "./components/PostContainer/PostContainer.js"
import CommentSection from "./components/CommentSection/CommentSection.js"

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
