import { useEffect, useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'

function App() {
  const [bookmarks,setBookmarks] = useState([]);
  const handleAddToBookmark = blog =>{
    const newBookMark = [...bookmarks,blog]
    setBookmarks(newBookMark);
  }
  const [readingTime,setReadingTime] =useState(0);

  const handleMarkAsRead = (id, time) =>{
    const newReadingTime = readingTime+time;
    setReadingTime(newReadingTime)
    // ?Remove BookMark
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(remainingBookmarks)
  }
  return (
    <>
    <Header></Header>  
    <div className='md:flex max-w-6xl mx-auto'>
     <Blogs 
      handleAddToBookmark={handleAddToBookmark}
      handleMarkAsRead={handleMarkAsRead}
     ></Blogs> 
     <Bookmarks 
     readingTime={readingTime}
     bookmarks={bookmarks}    
     ></Bookmarks>  
    </div> 
    </>
  )
}

export default App
