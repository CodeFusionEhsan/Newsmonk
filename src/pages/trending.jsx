import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import BookmarkButton from '../components/bookmark';

const Trending = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiKey = 'd93baafc986f490c84636201385c2d2d';

  const fetchNews = async () => {
    const allNewsResponse = await fetch('https://api.worldnewsapi.com/top-news?source-country=in&language=en&date=2024-05-29', {
      method: "GET",
      headers: {
        'x-api-key': apiKey
    }
    });
    console.log(allNewsResponse)
    const jsres2 = await allNewsResponse.json()
    console.log(jsres2)
    setNews(jsres2.top_news[0].news);
    setLoading(false)
  };

  useEffect(() => {
    document.title = "NewsMonk - Made By Ehsan Saleem"
    fetchNews();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
        <Navbar />
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-20 text-center">
        <h1 className="text-4xl font-bold">Welcome to NewsMonk.com</h1>
        <p className="text-xl">Stay updated with the latest trending news.</p>
        <p className="mt-4 max-w-xl mx-auto px-4">
          Discover news articles from around the world, tailored to your interests. 
          Bookmark and read your favorite stories whenever you want.
        </p>
      </div>

      {/* News Cards Section */}
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          <div className="text-center col-span-3">Loading...</div>
        ) : (
          news.map((article, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-bold">{article.title}</h2>
                <p className="text-gray-700 mb-4">Author: {article.author}</p>
                <div className="flex justify-between">
                  <button onClick={() => {window.location = article.url}} className="bg-blue-500 text-white px-4 py-2 rounded">Read</button>
                  <BookmarkButton post={article} />
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Trending;
