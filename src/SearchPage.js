import React from 'react'
import { Link } from 'react-router-dom';
import Search from './Search';
import './SearchPage.css'
import {useStateValue} from './StateProvider'
import useGoogleSearch from './useGoogleSearch';

function SearchPage() {
  const [{term},dispatch]=useStateValue();
  const {data} = useGoogleSearch(term)

  console.log(data)
  return (
    <div className='searchPage'>
      
      <div className='searchPage__header'>
       <Link to="/">
       <img
       className='searchPage__logo'
       src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
       alt=""
       />
       </Link>

       <div className='searchPage__headerBody'>
        <Search hideButtons/>
       </div>
      </div>

{true && (
      <div className='searchPage__results'>
    <p className='searchPage__resultCount'>    
      About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattetSearchTime} seconds) for {term}
    </p>

    {data?.items.map(item => (
        <div className='searchPage__resultTitle'>
            <a href={item.link}>
            <h2>{item.displayLink} </h2>
            </a>
        <p className='searchPage__resultSnippet'>
            {item.snippet}
        </p>
        </div>

    ))

    }
      </div>
)}

    </div>
  )
}

export default SearchPage
