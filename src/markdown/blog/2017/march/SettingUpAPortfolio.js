import React from 'react';
import Post from '../../../../components/Blog/Post';
import ReactMarkdown from 'react-markdown';


const preview = `A developer portfolio is a chance to showcase your programming projects and share your
aspirations with others. A portfolio's goal could be to market yourself to potential employers, to share your experiences
or advice you have on different technologies, or to demonstrate your skills. Given that many people already have Github and LinkedIn accounts,
a developer portfolio is a great way to set yourself apart from others. Also, it allows you to be able to create a more detailed story about
yourself. You can express more about the topics you are interested in through posts you make on your portfolio...
`;

const developerPortfolio = `A developer portfolio is a chance to showcase your programming projects and share your
aspirations with others. A portfolio's goal could be to market yourself to potential employers, to share your experiences
or advice you have on different technologies, or to demonstrate your skills. Given that many people already have Github and LinkedIn accounts,
a developer portfolio is a great way to set yourself apart from others. Also, it allows you to be able to create a more detailed story about
yourself. You can express more about the topics you are interested in through posts you make on your portfolio.

Given that you know a little more about what a developer portfolio is and why it's important,
let's get into the steps that you may need to take to make your portfolio.

## Determining Your Audience

When creating a developer portfolio, it is good to first consider your audience. To determine your audience, think about what work or projects 
are most interesting to you. What are your long-term goals? How do you want others to perceive you? You want to tailor your portfolio so 
that it draws the "right" kind of people to you. Then, given your audience, tailor the structure of your site and projects around them. 
If you made sure to pick the right audience, then the projects and content that you are putting on your site should be things you are 
interested in.

For example, I determined that the audience of my portfolio would be people that enjoy working on personal projects in their free time. 
I want the people I work with to genuinely be interested in what they are working on and to strive to keep learning every day. I 
want them to be curious and not to be afraid to take risks. My goals would be to have a career where I will be challenged and given 
the freedom to work on new technologies while sharing my viewpoint. I want to help others with their projects by sharing my experiences. 
I want others to perceive me as someone who really enjoys what they are doing and as someone who is knowlegable on a wide variety of 
concepts. I am not someone who is complacent with doing the minimum. Given these goals, I would need to construct my portfolio 
so that it appeals to an audience that is also interested in working on side projects in their spare time and one that is knowledgable 
on a wide variety of topics.

## Planning the Structure of Your Portfolio

Given that you found your audience, now it is time to plan the structure of your site. If you are interested in sharing your 
experiences with others, maybe include a blog section where you can provide your input on technologies you worked with on a project. 
Maybe you are more interested in web development, so you use your portfolio as a medium to show your creativity. Perhaps you are 
interested in machine learning or AI, so you more strongly focus on the projects that you worked on related to those fields. Or maybe 
you are interested in a combination of these, and include multiple of these elements on your site.

In my case, I determined that I wanted a developer portfolio that would show my projects and skills,
while also providing a place for a tech blog. Looking at examples of others'
developer portfolios helped me figure out how I wanted to lay out my site. Pretty much all the sites content for an about and projects 
section and a few also contained a tech blog. Below is what I chose as the final structure of my site.

#### My Portfolio's Structure:

* Home + Tech Blog
* About
* Projects

## Determining What Technologies to Use

Think about what functionality you need for the site, when considering what technologies to use. A lot depends on how big or small you 
want your site to be. Do you need to store anything? How much do you want to spend on your site? Do you want to do most of the work for 
setting the site up yourself or purchase a service to help do some of the work for you.

To determine the technologies needed for my site, I considered the functionality I needed for the site. 
I also thought of what technologies I needed to deploy a minimum viable product (MVP). I valued getting the site deployed quickly 
and I did not want to spend a lot of money on services, since I was fine with setting up most of the architechture myself. Since 
I wanted to have a blog, I would need a database to store comments that others may have on my posts. 

I chose Heroku for web hosting, because had a free web hosting plan and was easy to use. I picked Namecheap for my domain name, since it had
cheaper domain names than GoDaddy. I decided to use React as my web framework, because it would enable me to create my site 
quickly and easily. I liked how React encourages you split pieces of functionality into re-usable components. Semantic UI for React 
allowed me to create a site friendly for computers, tablets, and mobile devices. I chose MongoDB as the database, since I felt that 
it was more suited than a relational database to store comments.

#### How I Set Up My Site:

#### Front End

* Semantic UI React
* React

#### Back End
* Node
* Express
* MongoDB

#### Web Hosting
* Heroku

#### Domain
* Namecheap

## Deploying Your Portfolio

You want to make sure that you deploy your developer portfolio as soon as you can. That way, you will be able to see if the 
technologies you chose make sense. Also, it would provide feedback on your plan for your site. Maybe when you deploy your site, 
you realize that you want to use a different framework. Luckily, if you deployed early, you don't have to rewrite much code 
to make that happen. You probably want to at least make one view for your site to make sure that you are committed before 
purchasing a service or domain. 

In my case, I bought a domain and deployed my portfolio after I completed the home and about page.

## Improving the Usability and Appearance of Your Dev Portfolio

[77% of mobile searches happen at home or at work](https://developers.google.com/webmasters/mobile-sites/) so it is really 
important that you make your site with mobile in mind.

You can make sure that your site is mobile friendly by checking it with Google's
[mobile friendly test](https://search.google.com/search-console/mobile-friendly).

## Keeping Track of Site Visitors

You can keep track of the number of visitors to your site, visitor demographics, number of active users,
etc. with [Google Analytics](https://analytics.google.com/). All it takes to set this up is adding a short snippet of 
code to your html. 

## Next Steps 

These are not the only steps that you can do to make your portfolio successful. Make sure to look at others' portfolios and 
see what works for them. Good luck!
`;

const SettingUpAPortfolioPreview = <ReactMarkdown source={preview} className="blog-style" />

const SettingUpAPortfolio = <ReactMarkdown source={developerPortfolio} className="blog-style" />

let SettingUpAPortfolioPreviewPost = () => (
    <Post 
        link="/creating-a-developer-portfolio"
        image="../../../images/blog/create-portfolio.jpg" 
        title="Creating a Developer Portfolio" 
        created="March 27, 2017" 
        content={ SettingUpAPortfolioPreview }
    />
);

let SettingUpAPortfolioPost = () => (
    <Post 
        link=""
        image="../../../images/blog/create-portfolio.jpg" 
        title="Creating a Developer Portfolio" 
        created="March 27, 2017" 
        content={ SettingUpAPortfolio }
    />
);

export { SettingUpAPortfolioPost };
export default SettingUpAPortfolioPreviewPost;