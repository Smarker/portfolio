import React from 'react';
import Post from '../../../../components/Blog/Post';
import ReactMarkdown from 'react-markdown';
import Highlight from 'react-highlight';
import '../../../../../node_modules/highlight.js/styles/ocean.css';
import { Image } from 'semantic-ui-react'

const preview = `This tutorial is meant to give a **high level survey** of what may be involved when making a react meteor app with 
more focus on the meteor elements and how it fits in with react. This post also assumes
that you have a working knowledge of react, but have never worked or briefly worked with meteor before...`;

const rmSummary = `This tutorial is meant to give a **high level survey** of what may be involved when making a react meteor app with 
more focus on the meteor elements and how they fit in with react. This post also assumes
that you have a working knowledge of react, but have never worked or only briefly worked with meteor before.

## What You are Building

The goal of the starter app is to create a _form_ where a user can create posts that will be added to a running _list_ of posts.

The **post** object will contain information such as:

* title
* date created
* author 
* short description
* number of likes 

## Final Product
`;

const installMeteor = `### Install Meteor

To begin, you will need to have meteor installed on your system. You can download meteor [here](https://www.meteor.com/install). 

### Create a Meteor App

Then, choose a directory where you would like to put your app, and run this command in **_command prompt_**:
`;

const createApp = `meteor create <appname>`;

const rmFolder = ` ### Set Up Folder Structure 

We would like to set up the final folder structure as follows:

* **.meteor** - contains meteor configurations
* **client** - contains all code that only runs on the client
* **client/lib** - to store external libraries like semantic
* **node_modules** - contains all the node modules
* **server** - contains all code that only runs on the server
* **imports** - the goal of this folder is to organize the code so that any code in the imports folder will only get run when imported
* **public** - to store your images you upload to your project

Make sure that if you are missing any of these folders, add them to your project. Your folder structure should now look like this:`;

const setUpFiles = `### Set Up Files

Delete everything inside these files: client/main.html, client/main.js, client/main.css and server/main.js.

### Setting Up Dependencies

Referring to the [react meteor guide](https://guide.meteor.com/react.html), install meteor as a npm dependency by running this command
in your **_command prompt_**:`;

const installReact = `meteor npm install --save react react-dom`;

const rmBlaze = `Since I do not want to use Blaze in my project, I will run the following commands: `;

const blaze = `meteor remove blaze-html-templates

meteor add static-html`;

const installSemantic = `Install [semantic ui meteor](https://github.com/Semantic-Org/Semantic-UI-Meteor) for your web components and the css.
 You will need this so that your semantic components are compatible with meteor. Otherwise you may get a sanitation parsing error from meteor.

**_For Meteor 1.3+_**:
 `;

const semantic = `meteor remove standard-minifier-css

meteor add semantic:ui juliancwirko:postcss less jquery`;

const addPackage = `Add this to your project's package.json and then update it though meteor npm install:`

const pack = `\/\/Add the below to your project's **package.json**:
"devDependencies": {
    "autoprefixer": "^6.3.1"
},
"postcss": {
    "plugins": {
        "autoprefixer": {"browsers": ["last 2 versions"]}
    }
}`;

const updatePack = `Run this in the **_command prompt_** to save your changes:`;

const installPack = `meteor npm install`;

const meteorData = `To allow React to respond to data changes in Meteor's tracker system, you will need to install 
[react-meteor-data](https://www.npmjs.com/package/react-meteor-data) and 
[react-addons-pure-render-mixin](https://www.npmjs.com/package/react-addons-pure-render-mixin) in the **_command prompt_**:`;

const meteorDataInstall = `meteor add react-meteor-data

npm install --save react react-addons-pure-render-mixin`;

const usage = `Following the [usage section](https://github.com/Semantic-Org/Semantic-UI-Meteor) of semantic ui meteor, do these steps:

1. Create an empty **custom.semantic.json** inside a **/client/lib** folder of your project.
    * _Example_: 
        * **/client/lib/semantic-ui/custom.semantic.json**.
2. Start meteor with **_meteor run_** in the **_command prompt_**
3. Edit the file **custom.semantic.json** to select only the definitions and themes you want
    * _Example_: 
        * set themes basic to true, leave default as true
4. Save the file and it will generate Semantic UI

**IMPORTANT: If you are happy with the default values you will NEED to remove .custom.semantic.json to generate Semantic UI. (see Generating Trigger)**

The meteor semantic package you just installed will give you the folders and files needed for semantic, but you will still need 
semantic ui react to use semantic components as react components. Install [react semantic](https://react.semantic-ui.com/usage):
`;

const reactSemantic=`npm install semantic-ui-react --save`;

const settingUpReact = `### Setting Up React for Your App

Add this to **client/main.html:**`;

const mainHTML = `<head>
</head>
<body>
  <div id="app"></div>
</body>`;

const addDummyComponent = `Then, add this to your **client/main.js** file:`;

const dummy = `import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Button } from 'semantic-ui-react';
import React from 'react';

class CheckSemantic extends React.Component {
  render() {
    return (
      <Button>
        Click Here
      </Button>
    );
  }
}

Meteor.startup(() => {
  render(<CheckSemantic />, document.getElementById('app'));
});
`;

const checkWork = `Now, let's see if you properly set up a semantic-styled button. Enter this in the terminal and go to localhost:3000 (or 3002)`;

const check = `meteor run

//or if you would like to run on a different port (like port 3002)
meteor run -p 3002`;

const seeButton = `When you go to localhost:3000, you should just see a button styled with semantic ui:`;

const post = `After you successfully created a button, now it is time to create a post. 

### Creating a React Post Component

Create a new file in the client folder called Post.js and replace its contents with:`;

const postImports = `import React from 'react';
import { Icon, Image, Card, Grid, Label } from 'semantic-ui-react'

export class Post extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Card fluid>
        <Card.Content>
          <Grid columns={4} verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column width={1}>
                <Icon name='thumbs outline up' size='large' /> {this.props.numLikes}
              </Grid.Column>
              <Grid.Column width={3}>
                <Card.Header>
                  {this.props.title}
                </Card.Header>
                <Card.Meta>
                  {this.props.dateCreated}
                </Card.Meta>
                <Label>Rutgers</Label><Label>Computer Science</Label>
              </Grid.Column>
              <Grid.Column width={10}>
                <Card.Description>
                  {this.props.description}
                </Card.Description>
              </Grid.Column>
               <Grid.Column width={2}>
                  <Image src='./flower.jpg' size='tiny' shape='circular' spaced/> {this.props.user}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Card.Content>
      </Card>
    );
  }
}`;

const addImage = `Download this image and save it to your **public** folder. It will be used as a user image in the post:`;

const threePosts = `## What Your App Should Look Like Now`;

const main = `Next, we want to display the posts. Replace the contents of **main.js** with the below code. You should see 3 posts if 
you look at localhost:3000.`;

const mainImports = `import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Button } from 'semantic-ui-react';
import React from 'react';

import { Post } from './Post';

class App extends React.Component {
  render() {
    return (
      <div>
        <Post title="Post Title" dateCreated="4/23/17" user="Smarker" description="Post description" numLikes="0"/>
        <Post title="Post Title2" dateCreated="4/23/17" user="Smarker" description="Post description2" numLikes="0"/>
        <Post title="Post Title3" dateCreated="4/23/17" user="Smarker" description="Post description3" numLikes="0"/>
      </div>
    );
  }
}


Meteor.startup(() => {
  render(<App />, document.getElementById('app'));
});`;

const postForm = `### Creating a React Form Component

This is great, but the data is hardcoded. Now it is time to make a form so that a user can create a post. Refer to this 
[guide](https://facebook.github.io/react/docs/forms.html) to see how react forms are created. 

Create a new file in the **client** folder called **PostForm.js**. Enter the code below in this file. You will still need to 
edit **client/main.js** to see the form.`;

const formCode = `import React from 'react';
import { Label, Form, Button } from 'semantic-ui-react'

export default class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: '', desc: '', author: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event, type) {
    let s = {};
    s[type] = event.target.value;
    this.setState(s);
  }

  handleSubmit(event) {
    console.log('A title was submitted: ' + this.state.title);
    console.log('A desc was submitted: ' + this.state.desc);
    console.log('A author was submitted: ' + this.state.author);

    event.preventDefault();
  }

  render() {
    return (
      <Form>
        <Form.Field>
          <label>Post Title:</label>
          <input placeholder='title' value={this.state.title} onChange={(event) => {this.handleChange(event, "title")}} />
        </Form.Field>
        <Form.Field>
          <label>Post Description:</label>
          <input placeholder='description' value={this.state.description} onChange={(event) => {this.handleChange(event, "desc")}} />
        </Form.Field>
        <Form.Field>
          <label>Post Author:</label>
          <input placeholder='author' value={this.state.user} onChange={(event) => {this.handleChange(event, "author")}} />
        </Form.Field>
        <Button type='submit' onClick={this.handleSubmit}>Submit</Button>
      </Form>
    );
  }
}
`;

const updateMain = `Update **client/main.js** to include the form component. Replace the contents of **client/main.js** with:`;

const updateMainCode = `import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Button } from 'semantic-ui-react';
import React from 'react';

import { Post } from './Post';
import PostForm from './PostForm';

class App extends React.Component {
  render() {
    return (
      <div>
        <PostForm />
        <Post title="Post Title" dateCreated="4/23/17" user="Smarker" description="Post description" numLikes="0"/>
        <Post title="Post Title2" dateCreated="4/23/17" user="Smarker" description="Post description2" numLikes="0"/>
        <Post title="Post Title3" dateCreated="4/23/17" user="Smarker" description="Post description3" numLikes="0"/>
      </div>
    );
  }
}

Meteor.startup(() => {
  render(<App />, document.getElementById('app'));
});`;

const tryTheForm = `You can try to submit something to the form and see data printed out to the console.`;

const postCollection = `### Create Post Collection

In the **imports** folder, create a file called **Post.js**. This file is going to store your schema for Post and hold the Post collection 
which will be shared between client and server. To create a post schema, Mongo recommends using 
the schema package called [aldeed:simple-schema](https://atmospherejs.com/aldeed/simple-schema). Install this schema package with:`;

const installAldeed = `meteor add aldeed:simple-schema`;

const postSchema = `In **imports/Post** we will need to import Mongo and SimpleSchema. Also, we will need to export the Posts collection 
that will be shared both by client and server. Lastly, we will need to create a new SimpleSchema for posts:`;

const postCode = `import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Posts = new Mongo.Collection("Posts");

Posts.schema = new SimpleSchema({
  title: {type: String},
  dateCreated: {type: String},
  author: {type: String},
  desc: {type: String},
  numLikes: {type: Number, defaultValue: 0}
});`;

const clientPostOperations = `Now, let's update the Post collection to the **client** form. To do this, you need to import the Posts collection 
from the **imports/Post** file. Also, we need to import createContainer from meteor/react-meteor-data. We will need a container to make sure 
that the data in the Post collection is sync'ed with what is on server-side mongo. Next, create a container react component
 for posts called PostsContainer. Meteor should subscribe to Posts to listen to changes to the Posts collection on the server. Then, the 
 PostsContainer should return the entire Posts collection. We want to return the entire Posts collection so that we can render the list 
 of posts on the client.

 Add these snippets of code to **client/Post**:
`;

const clientPost = `import { Posts } from '../imports/Post';
import { createContainer } from 'meteor/react-meteor-data';

export default PostsContainer = createContainer( () => {
	Meteor.subscribe('Posts');
	return { posts: Posts.find().fetch() }
}, Post);`;    

const serverPostOperations = `Now all we need to do is publish updates to the Posts collection from the server. In **server/main.js**, 
import the Posts collection from **imports/Post**. Then, publish the Posts collection to return all posts from the server.`;

const serverPost = `import { Posts } from '../imports/Post';

Meteor.publish('Posts', function() {
  console.log(Posts.find({}).fetch());
  return Posts.find({});
});`;

const postFormOperations = `Now all we need to do is update the post when a user submits a new post on the post form. 
For this, you will need to import the Posts collection at the top of the **PostForm.js** file.
Edit the handleSubmit function in **PostForm.js** to insert a post into the Posts collection. `;

const postFormChanges = `//add this at top
import { Posts } from '../imports/Post';

//add this to handleSubmit
Posts.insert({
    title: this.state.title, 
    desc: this.state.desc,
    author: this.state.author, 
    dateCreated: "4/24/2017"
});`;

const makePostList = `Let's edit the post component so that it will render a list of posts. Replace **client/Post** with:`;

const makePostListCode = `import React from 'react';
import { Icon, Image, Card, Grid, Label, List } from 'semantic-ui-react'

import { Posts } from '../imports/Post';
import { createContainer } from 'meteor/react-meteor-data';

export class Post extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const postList = this.props.posts.map((post) =>
      <Card fluid key={post._id}>
        <Card.Content>
          <Grid columns={4} verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column width={1}>
                <Icon name='thumbs outline up' size='large' /> 
                {post.numLikes}
              </Grid.Column>
              <Grid.Column width={3}>
                <Card.Header>
                  {post.title}
                </Card.Header>
                <Card.Meta>
                  {post.created}
                </Card.Meta>
                <Label>Rutgers</Label>
                <Label>Computer Science</Label>
              </Grid.Column>
              <Grid.Column width={10}>
                <Card.Description>
                  {post.desc}
                </Card.Description>
              </Grid.Column>
               <Grid.Column width={2}>
                  <Image src='./flower.jpg' size='tiny' shape='circular' spaced/>
                  {post.author}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Card.Content>
      </Card>
    );

    return(
      <List>
        <List.Item>{postList}</List.Item>
      </List>
    );
  }
}

export default PostsContainer = createContainer( () => {
	Meteor.subscribe('Posts');
	return { posts: Posts.find().fetch() }
}, Post);`;

const addContainerToMain = `Add your PostsContainer component to main to remove all the hardcoded posts:`;

const addContainerToMainCode = `import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Button } from 'semantic-ui-react';
import React from 'react';

import { Post } from './Post';
import PostForm from './PostForm';
import PostsContainer from './Post';

class App extends React.Component {
  render() {
    return (
      <div>
        <PostForm />
        <PostsContainer />
      </div>
    );
  }
}

Meteor.startup(() => {
  render(<App />, document.getElementById('app'));
});`;

const closing = `Now you can add posts. Since we did not add delete functionality on the UI, you may want to either build your 
own delete functionality on the posts or delete your posts by entering **meteor mongo** in your **_command prompt_** 
and then entering **db.Posts.drop()** to delete all of your posts.

You also could add 'like a post' functionality and make it so that the date of the post is not hardcoded. 

You should now see the final product:`;

const ReactMeteorTutorialPreview = <ReactMarkdown source={preview} className="blog-style" />

const ReactMeteorTutorial = (
    <div>
        <ReactMarkdown source={rmSummary} className="blog-style" />
        <Image src="../../../../../images/blog/ReactMeteor/final-product.png" className="image-style" fluid />
        <ReactMarkdown source={installMeteor} className="blog-style" />
        <Highlight className='JavaScript'>
            {createApp}
        </Highlight>
        <ReactMarkdown source={rmFolder} className="blog-style" />
        <Image src="../../../../../images/blog/ReactMeteor/file-structure.png" className="image-style" fluid />
        <ReactMarkdown source={setUpFiles} className="blog-style" />
        <Highlight className='JavaScript'>
            {installReact}
        </Highlight>
        <ReactMarkdown source={rmBlaze} className="blog-style" />
        <Highlight className='JavaScript'>
            {blaze}
        </Highlight>
        <ReactMarkdown source={installSemantic} className="blog-style" />
        <Highlight className='JavaScript'>
            {semantic}
        </Highlight>
        <ReactMarkdown source={addPackage} className="blog-style" />
        <Highlight className='JavaScript'>
            {pack}
        </Highlight>
        <ReactMarkdown source={updatePack} className="blog-style" />
        <Highlight className='JavaScript'>
            {installPack}
        </Highlight>
        <ReactMarkdown source={meteorData} className="blog-style" />
        <Highlight className='JavaScript'>
            {meteorDataInstall}
        </Highlight>
        <ReactMarkdown source={usage} className="blog-style" />
        <Highlight className='JavaScript'>
            {reactSemantic}
        </Highlight>
        <ReactMarkdown source={settingUpReact} className="blog-style" />
        <Highlight className='JavaScript'>
            {mainHTML}
        </Highlight>
        <ReactMarkdown source={addDummyComponent} className="blog-style" />
        <Highlight className='JavaScript'>
            {dummy}
        </Highlight>
        <ReactMarkdown source={checkWork} className="blog-style" />
        <Highlight className='JavaScript'>
            {check}
        </Highlight>
        <ReactMarkdown source={seeButton} className="blog-style" />
        <Image src="../../../../../images/blog/ReactMeteor/button.png" className="image-style" fluid />
        <ReactMarkdown source={post} className="blog-style" />
        <Highlight className='JavaScript'>
            {postImports}
        </Highlight>
        <ReactMarkdown source={addImage} className="blog-style" />
        <Image src="../../../../../images/blog/ReactMeteor/flower.jpg" style={{'height': '100px', 'width':'100px'}} className="image-style" fluid />
        <ReactMarkdown source={main} className="blog-style" />
        <Highlight className='JavaScript'>
            {mainImports}
        </Highlight>
        <ReactMarkdown source={threePosts} className="blog-style" />
        <Image src="../../../../../images/blog/ReactMeteor/post.png" className="image-style" fluid />
        <ReactMarkdown source={postForm} className="blog-style" />
        <Highlight className='JavaScript'>
            {formCode}
        </Highlight>
        <ReactMarkdown source={updateMain} className="blog-style" />
        <Highlight className='JavaScript'>
            {updateMainCode}
        </Highlight>
        <ReactMarkdown source={tryTheForm} className="blog-style" />
        <Image src="../../../../../images/blog/ReactMeteor/form.png" className="image-style" fluid />
        <ReactMarkdown source={postCollection} className="blog-style" />
        <Highlight className='JavaScript'>
            {installAldeed}
        </Highlight>
        <ReactMarkdown source={postSchema} className="blog-style" />
        <Highlight className='JavaScript'>
            {postCode}
        </Highlight>
        <ReactMarkdown source={clientPostOperations} className="blog-style" />
        <Highlight className='JavaScript'>
            {clientPost}
        </Highlight>
        <ReactMarkdown source={serverPostOperations} className="blog-style" />
        <Highlight className='JavaScript'>
            {serverPost}
        </Highlight>
        <ReactMarkdown source={postFormOperations} className="blog-style" />
        <Highlight className='JavaScript'>
            {postFormChanges}
        </Highlight>
        <ReactMarkdown source={makePostList} className="blog-style" />
        <Highlight className='JavaScript'>
            {makePostListCode}
        </Highlight>
        <ReactMarkdown source={addContainerToMain} className="blog-style" />
        <Highlight className='JavaScript'>
            {addContainerToMainCode}
        </Highlight>
        <ReactMarkdown source={closing} className="blog-style" />
        <Image src="../../../../../images/blog/ReactMeteor/final-product.png" className="image-style" fluid />
    </div>
);

let ReactMeteorTutorialPreviewPost = () => (
    <Post 
        link="/react-meteor-tutorial"
        image="../../../images/blog/meteor-guide.jpg" 
        title="React Meteor Tutorial with Semantic UI Meteor and MongoDB" 
        created="April 23, 2017" 
        content={ ReactMeteorTutorialPreview }
    />
);

let ReactMeteorTutorialPost = () => (
    <Post 
        link=""
        image="../../../images/blog/meteor-guide.jpg" 
        title="React Meteor Tutorial with Semantic UI Meteor and MongoDB" 
        created="April 23, 2017" 
        content={ ReactMeteorTutorial }
    />
);

export { ReactMeteorTutorialPost };
export default ReactMeteorTutorialPreviewPost;