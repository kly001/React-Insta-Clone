import React, {Component} from 'react';
import dummyData from "./dummy-data.js";
import SearchBar from "./components/SearchBar/SearchBar.js"
import PostContainer from "./components/PostContainer/PostsContainer.js"
import CommentSection from "./components/CommentSection/CommentsSection.js"

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData
    }
  }


render() {
return (
  <div className="App">
  <header className="App-header">
    <SearchBar/>
    <h1>React Insta-Clone</h1>
    <PostContainer/>
    <CommentSection/>
  </header>
</div>
)
}
}



export default App;
