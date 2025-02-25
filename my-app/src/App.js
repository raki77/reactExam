import React, {useState} from "react";
import logo from './logo.svg';
import './App.css';


function App() {
  
  const sampleVideo = {
    title: "Introduction to React",
    description: "Learn the basics of React in this short video.",
    url: "https://reactjs.org",
    thumbnail: "https://via.placeholder.com/150",
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <MyButton />
      <Video video={sampleVideo} />
    </div>

  );
}

function Video({ video }) {
  return (
    <div className="video-container">
      <Thumbnail video={video} />
      <a href={video.url} target="_blank" rel="noopener noreferrer">
        <h3>{video.title}</h3>
        <p>{video.description}</p>
      </a>
      <LikeButton />
    </div>
  );
}

function Thumbnail({ video }) {
  return <img src={video.thumbnail} alt={video.title} className="thumbnail" />;
}

function LikeButton() {
  //const [likes, setLikes] = React.useState(0);
  const [likes, setLikes] = useState(0);

  return (
    <button onClick={() => setLikes(likes + 1)}>
      👍 {likes} Likes
    </button>
  );
}

function MyButton() {
  return (
    <button className="my-button">I'm a button</button>
  );
}
export default App;
