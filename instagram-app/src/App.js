import React, {Component} from 'react';
import posts from "./dummy-data.js";
import SearchBar from "./components/SearchBar/SearchBar.js"
import PostsContainer from "./components/PostContainer/PostsContainer.js"
import CommentSection from "./components/CommentSection/CommentsSection.js"

import './App.css';

console.log("Posts in App.js:", posts)
console.log("Number of posts in App.js:", posts.length)

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: posts
    }
  }

render() {
return (
  
  <div className="App">
  <header className="App-header">
    <SearchBar/>
    <h1>React Insta-Clone</h1>
    <PostsContainer posts={posts}/>
    <CommentSection/>
  </header>
</div>
    )
  }
}



export default App;
