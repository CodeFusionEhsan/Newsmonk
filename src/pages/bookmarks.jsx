import { useEffect, useState } from 'react';
import { getBookmarks, removeBookmark } from '../utils/localStorage';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const Bookmarks = () => {
    const [bookmarkedPosts, setBookmarkedPosts] = useState([]);

    useEffect(() => {
        setBookmarkedPosts(getBookmarks());
    }, []);

    const handleUnbookmark = (postId) => {
        removeBookmark(postId);
        window.location.reload()
    };

    return (
        <div className="bg-gray-100 min-h-screen mt-8">
        {/* Navbar */}

        <Navbar />
        {/* Carousel */}
       
        <div className="text-center pt-8 my-12">
    <h1 className="text-4xl font-bold text-blue-600">Welcome to NewsMonk</h1>
    <h2 className="text-2xl text-gray-700 my-4">Get the latest news from around the globe</h2>
    <p className="text-gray-500">Stay informed with current events, trends, and stories that matter.</p>
  </div>


        {/* News Grid */}
        <div className="container pt-8 mx-auto grid md:grid-cols-3 gap-6 p-4">
            {bookmarkedPosts.map((news, index) => (
                <div key={news.url} className="bg-white p-4 rounded shadow-lg">
                    <img src={news.image} alt={news.title} className="w-full h-40 object-cover rounded-t"/>
                    <h3 className="font-semibold text-lg">{news.title}</h3>
                    <p className="my-2">Author: {news.author}</p>
                    <div className="flex justify-between mt-4">
                        <button onClick={() => {window.location = news.url}} className="bg-blue-600 text-white px-2 py-1 rounded">Read</button>
                        <button 
                                        onClick={() => handleUnbookmark(news.url)} 
                                        className="bg-blue-600 text-white px-2 py-1 rounded"
                                    >
                                        Unbookmark
                                    </button>
                    </div>
                </div>
            ))}
        </div>

        {/* Hero Section */}
        <div className="bg-blue-600 text-white py-10 text-center">
            <h2 className="text-3xl font-bold">Invite Your Friends</h2>
            <h3 className="text-xl mt-2">Stay Updated With The Latest News</h3>
            <p className="mt-4">Share the joy of reading news with your friends! Encourage them to join NewsMonk.</p>
        </div>
        <Footer />
    </div>
    );
};

export default Bookmarks;