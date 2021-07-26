import React from 'react';
import './SearchPage.css';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
              <TuneOutlinedIcon/>
              <h2>FILTER</h2>
            </div>
            <hr/>
            <ChannelRow
             image="https://yt3.ggpht.com/ytc/AKedOLSxHOOxxa9Af8Bfb2XMop3lm4tor9bViWiC-d5aaw=s176-c-k-c0x00ffffff-no-rj-mo"
             channel="Traversy Media"
             verified
             subs="1.58M"
             noOfVideos={884}
             description="Traversy Media features the best online web development and programming tutorials for all of the latest web technologies from the building blocks of HTML, CSS & JavaScript to frontend frameworks like React and Vue to backend technologies like Node.js, Python and PHP"
             />
             <hr/>
             <h3>Latest from Traversy Media</h3>
             <br/>
             <VideoRow
             views="22k"
             subs="1.58M"
             description="In this video we will look at Supabase

             https://supabase.io
             "
             channel="Traversy Media"
             title="Supabase Crash Course"
             image="https://i.ytimg.com/an_webp/7uKQBl9uZ00/mqdefault_6s.webp?du=3000&sqp=COrY-IcG&rs=AOn4CLCpxyCkLHT_tU5mCVwlw4eduhqc8A"
             timestamp="3 days ago"
             />
             <VideoRow
             views="40k"
             subs="1.58M"
             description="Create the Hulu homepage with HTML, CSS and a bit of JavaScript."
             channel="Traversy Media"
             title="Hulu Webpage Clone | HTML & CSS"
             image="https://i.ytimg.com/an_webp/9OVLaEjY-Rc/mqdefault_6s.webp?du=3000&sqp=CI7X-IcG&rs=AOn4CLCIGZ87JqK4e-vepJytSactkXtG9Q"
             timestamp="1 week ago"
             />
             <VideoRow
             views="1.9M"
             subs="1.58M"
             description="In this crash course we will go over the fundamentals of JavaScript including more modern syntax like classes, arrow functions, etc. This is the starting point on my channel for learning JS.             "
             channel="Traversy Media"
             title="JavaScript Crash Course For Beginners"
             image="https://i.ytimg.com/an_webp/hdI2bqOjy3c/mqdefault_6s.webp?du=3000&sqp=CMDM-IcG&rs=AOn4CLCAwCZ9NlhT8VY5UsVYklrmIaF6Mw"
             timestamp="2 years ago"
             />
             <VideoRow
             views="1M"
             subs="1.58M"
             description="Get started with React in this crash course. We will be building a task tracker app and look at components, props, state, hooks, working with an API and more.
             "
             channel="Traversy Media"
             title="React JS Crash Course 2021"
             image="https://i.ytimg.com/vi/w7ejDZ8SWv8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDLtqhjnv15Y388joYu5qQ3VjlhZw"
             timestamp="6 months ago"
             />
        </div>
    )
}

export default SearchPage;
