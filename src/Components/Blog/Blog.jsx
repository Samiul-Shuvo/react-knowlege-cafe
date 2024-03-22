import PropTypes from 'prop-types'; // ES6
import { BsBookmarks } from "react-icons/bs";


const Blog = ({id,blog,handleAddToBookmark,handleMarkAsRead}) => {
    const {title, cover_img,author,author_img,reading_time ,posted_date,hashtags} = blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8' src={cover_img} alt={`Cover of Title ${title} `} />
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt={`Author Image`} />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handleAddToBookmark(blog)} className='ml-2 text-2xl text-red-500'><BsBookmarks /></button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash,idx) => <span key={idx}><a href="">{hash}</a></span>)
                }
            </p>
            <button onClick={()=>handleMarkAsRead(id,reading_time)} className='text-purple-800 font-bold underline'>Mark As Read</button>
        </div>
    );
};

export default Blog;

Blog.propTypes= {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark : PropTypes.func
}