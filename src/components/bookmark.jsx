import React, { useState } from 'react';
import { saveBookmark, getBookmarks, removeBookmark } from '../utils/localStorage';

const BookmarkButton = ({ post }) => {
    const [isBookmarked, setIsBookmarked] = useState(() => {
        const bookmarks = getBookmarks();
        return bookmarks.some((item) => item.url === post.url);
    });

    const handleBookmarkToggle = () => {
        if (isBookmarked) {
            removeBookmark(post.url);
        } else {
            saveBookmark(post);
        }
        setIsBookmarked(!isBookmarked);
    };

    return (
        <button className='bg-gray-300 px-2 py-1 rounded' onClick={handleBookmarkToggle}>
            {isBookmarked ? 'Unbookmark' : 'Bookmark'}
        </button>
    );
};

export default BookmarkButton;