import React from 'react';

const BlogContext = React.createContext();

    const blogPosts=[
        {title:"This is blog post # 1"},
        {title:"This is blog post # 2"},
        {title:"This is blog post # 3"},
        {title:"This is blog post # 4"},
        {title:"This is blog post # 5"},
        {title:"This is blog post # 6"},
        {title:"This is blog post # 7"}
    ]
const BlogProvider = ({children}) => {
  return <BlogContext.Provider value={blogPosts}>{children}</BlogContext.Provider>;
};


export {BlogProvider,BlogContext};