import React from 'react';
import Post from '../../../../components/Blog/Post';
import ReactMarkdown from 'react-markdown';
import { Image } from 'semantic-ui-react'

const preview = `this is where ill talk about vs
`;

const vscode = `this is where ill talk about vs
`;

const VSCodePreview = <ReactMarkdown source={preview} className="blog-style" />

const VSCode = <ReactMarkdown source={vscode} className="blog-style" />

let VSCodePreviewPost = () => (
    <Post 
        link="/vs-code"
        image="../../../images/blog/create-portfolio.jpg" 
        title="Why my Preferred IDE is Visual Studio Code" 
        created="April 19, 2017" 
        content={ VSCodePreview }
    />
);

let VSCodePost = () => (
    <Post 
        link=""
        image="../../../images/blog/create-portfolio.jpg" 
        title="Why my Preferred IDE is Visual Studio Code" 
        created="April 19, 2017" 
        content={ VSCode }
    />
);

export { VSCodePost };
export default VSCodePreviewPost;