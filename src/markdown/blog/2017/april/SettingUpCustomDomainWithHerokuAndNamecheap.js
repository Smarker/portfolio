import React from 'react';
import Post from '../../../../components/Blog/Post';
import ReactMarkdown from 'react-markdown';
import { Image } from 'semantic-ui-react'

/* markdown and images */
const preview = `To set up a custom domain with heroku and namecheap you will have to 
follow these general steps:

## Buy a domain name

Create an account on namecheap and buy a domain name.

## Create an app on Heroku

Create an app hosted on heroku which will be assigned your custom domain name...

`;

const customDomain = `To set up a custom domain with heroku and namecheap you will have to 
follow these general steps:

## Buy a domain name

Create an account on namecheap and buy a domain name.

## Create an app on Heroku

Create an app hosted on heroku which will be assigned your custom domain name.

## Add your custom domain name to Heroku

#### Sign into Heroku and then go to: 

**Personal Apps > _Your App Name_ > Settings > Domains and Certificates**: `;

const domainList = `You may also refer to this [guide](https://devcenter.heroku.com/articles/custom-domains) for more details

## Select Domain List

(Namecheap) From your profile, select 'domain list' on the left sidebar:

`;

const manage = `## Select Manage

(Namecheap) From domain list, click on the 'manage' button on the right:

`;

const dns = `## Select Advanced DNS

(Namecheap) From your domain details, select 'advanced DNS' from namecheap's toolbar:

`;

const cname = `## Add CNAME record

(Namecheap) From advanced DNS, add a new record with:

* type=**CNAME record**
* host=**www**
* value=**&#060;your domain name&#062;.herokudns.com**

`;

const end = `Now you are done!`;

/* JSX elements for markdown and images */
const SettingUpCustomDomainWithHerokuAndNamecheapPreview = <ReactMarkdown source={preview} className="blog-style" />

const SettingUpCustomDomainWithHerokuAndNamecheap = (
    <div>
        <ReactMarkdown source={customDomain} className="blog-style" />
        <Image src="../../../../../images/blog/heroku-custom-domain.png" className="image-style" fluid />
        <ReactMarkdown source={domainList} className="blog-style" />
        <Image src="../../../../../images/blog/domain-list.png" className="image-style" fluid />
        <ReactMarkdown source={manage} className="blog-style" />
        <Image src="../../../../../images/blog/domain-manage.png" className="image-style" fluid />
        <ReactMarkdown source={dns} className="blog-style" />
        <Image src="../../../../../images/blog/advanced-dns.png" className="image-style" fluid />
        <ReactMarkdown source={cname} className="blog-style" />
        <Image src="../../../../../images/blog/c-name-record.png" className="image-style" fluid />
        <ReactMarkdown source={end} className="blog-style" />
    </div>
);

/* Posts */
let SettingUpCustomDomainWithHerokuAndNamecheapPost = () => (
    <Post 
        link=""
        image="../../../images/blog/heroku-namecheap.jpg" 
        title="Setting Up a Custom Domain with Heroku and Namecheap" 
        created="April 2, 2017" 
        content={ SettingUpCustomDomainWithHerokuAndNamecheap }
    />
);

let SettingUpCustomDomainWithHerokuAndNamecheapPreviewPost = () => (
    <Post 
        link="/blog/setting-up-custom-domain-with-heroku-and-namecheap"
        image="../../../images/blog/heroku-namecheap.jpg" 
        title="Setting Up a Custom Domain with Heroku and Namecheap" 
        created="April 2, 2017" 
        content={ SettingUpCustomDomainWithHerokuAndNamecheapPreview }
    />
);

export { SettingUpCustomDomainWithHerokuAndNamecheapPost };
export default SettingUpCustomDomainWithHerokuAndNamecheapPreviewPost;