import React, { useState, useEffect } from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'
import NewsCards from './components/NewsCards/NewsCards'

const alanKey = '3194abb58c2dd4ed6af2d98bce1343782e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === 'newHeadlines') {
          setNewsArticles(articles);
        }
      },

    })
  }, [])

  return (
    <div>
      <h1 style={h1Style}>Alan AI News Application</h1>
      <NewsCards articles={newsArticles} />
    </div>
  );
}

const h1Style = {
  textAlign: 'center',
  fontFamily: 'Impact',
  fontWeight: 100,
  margin: '5% 0 2% 0'
}

export default App
