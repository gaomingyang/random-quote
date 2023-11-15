import { useState,useEffect } from 'react';
// import './App.css';
import './App.scss';

function App() {
  //for test
  /*
  function getCurrentDateTimeString() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
  
    const dateTimeString = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  
    return dateTimeString;
  }
  function getCurrentTimestamp() {
    const now = new Date();
    return now.getTime();
  }
  */
  const [quotes,setQuotes] = useState([]);
  const initQuote = {
    text:"A person who never made a mistake never tried anything new.",
    author:"Albert Einstein",
  }
  const [quoteInfo,setQuoteInfo] = useState(initQuote);
  // const [quoteInfo,setQuoteInfo] = useState(null);

  //页面初始化时，请求接口获取所有数据
  const dataSource = "https://raw.githubusercontent.com/gaomingyang/random-quote/master/public/quotes.json"

  //组件挂载时的操作
  useEffect(()=>{
    fetch(dataSource)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then( (data) => {
      let quotes = data.quotes;
      setQuotes(quotes);

      //set a random quote as init quote
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const randomQuote = quotes[randomIndex]
      setQuoteInfo({
        text:randomQuote.quote,
        author:randomQuote.author,
      })
    })
  },[]) // 空依赖数组表示只在组件挂载时执行

  
  
  //更新内容
  function clickNewQuote() {
    //从quotes中随机获取一条quote
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex]
    const newQuote = {
      // text:getCurrentDateTimeString(),
      // author:getCurrentTimestamp(),
      text:randomQuote.quote,
      author:randomQuote.author,
    }
    setQuoteInfo(newQuote)
  }
  return (
    <div className="App">
      <div id="quote-box">
        <i className="fa-solid fa-quote-left"></i>
        <span id="text">
          {quoteInfo.text}
        </span>
        <i className="fa-solid fa-quote-right"></i>

        <div id="author"> - {quoteInfo.author}</div>

        <button id="new-quote" onClick={clickNewQuote}>New Quote</button>
        <div id="share-bar">
          <a id="tweet-quote" href={`https://twitter.com/intent/tweet?hashtags=quotes&text=${quoteInfo.text}`} target="_blank" rel="noreferrer">
            <i className="fa-brands fa-square-x-twitter"></i>
          </a>
        </div>
      </div>
      <div id="footer">
        by <a href='https://github.com/gaomingyang/random-quote'>Mingyang</a>
      </div>
    </div>
  );
}

export default App;
