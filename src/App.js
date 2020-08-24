import React, { useEffect, useState } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards';
import useStyles from './styles.js'

const alanKey = 'ef3a83c1225ecad0f980a98f2b84936a2e956eca572e1d8b807a3e2338fdd0dc/stage';
const  App = () => {
    // useState section
    const [newsArticles, setNewsArticles] = useState([]);
    const classes = useStyles();

    // <--------------------  useEffect section------------------->
    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command, articles }) => {
                if(command === 'newHeadlines') {
                    setNewsArticles(articles);
                }
            }
        })
    }, [])
    return (

        <div> 
      <div className={classes.logoContainer} > 
      <img src='https://images.unsplash.com/photo-1485115905815-74a5c9fda2f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' className={classes.alanLogo} alt="alan logo" />
      </div>
        <NewsCards articles={newsArticles} />
    </div>
        )
}
export default App;