import React from 'react';
import Post from '../../../../components/Blog/Post';

const SettingUpCustomDomainWithHerokuAndNamecheapPreviewMarkdown = `To set up a custom domain with heroku and namecheap you will have to 
follow these general steps:

## Buy a domain name

Create an account on namecheap and buy a domain name.

## Create an app on Heroku

Create an app hosted on heroku which will be assigned your custom domain name...
`;

const SettingUpCustomDomainWithHerokuAndNamecheapMarkdown = `To set up a custom domain with heroku and namecheap you will have to 
follow these general steps:

## Buy a domain name

Create an account on namecheap and buy a domain name.

## Create an app on Heroku

Create an app hosted on heroku which will be assigned your custom domain name.

## Add your custom domain name to Heroku

#### Sign into Heroku and then go to: 

**Personal Apps > _Your App Name_ > Settings > Domains and Certificates**. 

You may also refer to this [guide](https://devcenter.heroku.com/articles/custom-domains) for more details

## Select Domain List

(Namecheap) From your profile, select 'domain list' on the left sidebar:

![domain list](/images/blog/domain-list.png)

## Select Manage

(Namecheap) From domain list, click on the 'manage' button on the right:

![domain manage](/images/blog/domain-manage.png)

## Select Advanced DNS

(Namecheap) From your domain details, select 'advanced DNS' from namecheap's toolbar:

![advanced dns](/images/blog/advanced-dns.png)

## Add CNAME record

(Namecheap) From advanced DNS, add a new record with:

* type=**CNAME record**
* host=**www**
* value=**&#060;your domain name&#062;.herokudns.com**

![CNAME record](/images/blog/c-name-record.png)

Now you are done!
`;

let SettingUpCustomDomainWithHerokuAndNamecheap = () => (
    <Post 
        link=""
        image="../../../images/blog/heroku-namecheap.jpg" 
        title="Setting Up a Custom Domain with Heroku and Namecheap" 
        created="April 2, 2017" 
        markdown={ SettingUpCustomDomainWithHerokuAndNamecheapMarkdown }
    />
);

let SettingUpCustomDomainWithHerokuAndNamecheapPreview = () => (
    <Post 
        link="/setting-up-custom-domain-with-heroku-and-namecheap"
        image="../../../images/blog/heroku-namecheap.jpg" 
        title="Setting Up a Custom Domain with Heroku and Namecheap" 
        created="April 2, 2017" 
        markdown={ SettingUpCustomDomainWithHerokuAndNamecheapPreviewMarkdown }
    />
);

export { SettingUpCustomDomainWithHerokuAndNamecheap };
export default SettingUpCustomDomainWithHerokuAndNamecheapPreview;