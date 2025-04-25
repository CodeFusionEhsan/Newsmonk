export const saveBookmark = (post) => {
    const existingBookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    if (!existingBookmarks.some((item) => item.url === post.url)) {
        existingBookmarks.push(post);
        localStorage.setItem('bookmarks', JSON.stringify(existingBookmarks));
    }
};

export const getBookmarks = () => {
    return JSON.parse(localStorage.getItem('bookmarks')) || [];
};

export const removeBookmark = (url) => {
    const existingBookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    const updatedBookmarks = existingBookmarks.filter((item) => item.url !== url);
    localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
};