import { useState } from 'react';
// import './App.css';
import './App.scss';

function App() {
  const [text,setText] = useState([]);
  //更新内容
  function clickNewQuote(event) {
    console.log("click new quote")
  }
  return (
    <div className="App">
      <div id="quote-box">
        <i className="fa-solid fa-quote-left"></i>
        <span id="text">
          Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.
        </span>
        <i className="fa-solid fa-quote-right"></i>

        <div id="author"> - Robert Frost</div>

        <button id="new-quote" onClick={clickNewQuote}>New Quote</button>
        <div id="share-bar">
          <a id="tweet-quote" href='https://twitter.com/intent/tweet' target="_blank">
            <i className="fa-brands fa-square-x-twitter"></i>
          </a>
        </div>
        
      </div>
    </div>
  );
}

export default App;
