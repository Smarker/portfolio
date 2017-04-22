import React from 'react';
import Post from '../../../../components/Blog/Post';
import ReactMarkdown from 'react-markdown';
import { Image } from 'semantic-ui-react';
import Highlight from 'react-highlight';
import '../../../../../node_modules/highlight.js/styles/ocean.css';

const preview = `Visual Studio Code is a free open source IDE that comes with a bunch of features like autocompletion,
integration with git, debugging, and extensions. I have been using this IDE for a while now after realizing that it is much
less laggy than Atom is when editing code. I also like how quickly I can make commits to git right through the editor. Also,
it comes with the ability to download customized extensions like 'Debugger for Chrome' and 'Reactjs code snippets' which 
really speed up development...
`;

const vscode = `Visual Studio Code is a free open source IDE that comes with a bunch of features like autocompletion,
integration with git, debugging, and extensions. I have been using this IDE for a while now after realizing that it is much
less laggy than Atom is when editing code. I also like how quickly I can make commits to git right through the editor. Also,
it comes with the ability to download customized extensions like 'Debugger for Chrome' and 'Reactjs code snippets' which 
really speed up development.

## Adding Extensions

To add an extension like 'Debugger for Chrome' follow these steps:

* Search for the extension in the marketplace within vs code
* Install the extension
* Within the .vscode folder, open up launch.json
* Edit launch.json and add a configuration. You wil need to specify whether you want to run the debugger against a file or url. 
See [here](https://github.com/Microsoft/vscode-chrome-debug) for more information on what to put in the launch.json file.

For example, this is what I used in my launch.json file:

`;

const code = `
    {
        "version": "0.2.0",
        "configurations": [{
            "name": "Chrome",
            "type": "chrome",
            "request": "launch",
            "url": "http://localhost:3000",
            "webRoot": "\${workspaceRoot}/src",
            "userDataDir": "\${workspaceRoot}/.vscode/chrome",
            "sourceMapPathOverrides": {
            "webpack:///src/*": "\${webRoot}/*"
            }
        }]
    }
`;

const VSCodePreview = <ReactMarkdown source={preview} className="blog-style" />

const VSCode = (
    <div>
        <ReactMarkdown source={vscode} className="blog-style" />
        <Highlight className='JavaScript'>
            {code}
        </Highlight>
    </div>
);

let VSCodePreviewPost = () => (
    <Post 
        link="/vs-code"
        image="../../../images/blog/create-portfolio.jpg" 
        title="Adding Extensions Visual Studio Code" 
        created="April 19, 2017" 
        content={ VSCodePreview }
    />
);

let VSCodePost = () => (
    <Post 
        link=""
        image="../../../images/blog/create-portfolio.jpg" 
        title="Adding Extensions Visual Studio Code" 
        created="April 19, 2017" 
        content={ VSCode }
    />
);

export { VSCodePost };
export default VSCodePreviewPost;