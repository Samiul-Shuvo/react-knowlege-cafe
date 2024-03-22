import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-300 mt-4 rounded-xl ml-4 pt-4">
            <div>
                <h3 className="text-4xl">Reading Time : {readingTime}</h3>
            </div>
            <h1 className="text-3xl text-center  mt-4 rounded-lg">Bookmarks Blogs: {bookmarks.length}</h1>
            {
                bookmarks.map((bookmark,idx)=> <Bookmark key={idx} bookmark={bookmark} ></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;