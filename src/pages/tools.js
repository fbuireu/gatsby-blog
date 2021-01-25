import React from 'react';
import SEO from "../components/seo"
import Layout from "../components/layout"

export default function ToolsPage() {

    return (
        <Layout>
        <SEO title="Tools" />
        <main className="flex flex-col bg-brown text-white min-h-screen p-12">
            <section className="w-full md:w-3/4 mx-auto text-base">
                <h1 className="text-4xl mono">Helpful Tools</h1>
                <h2 className="text-lg mb-4">Welcome to my resources page!</h2>
                <p className="text-base mb-12">I've come across a lot of great resources since I began learning web development. In addition to the following books, courses, and programs, I also try to stay current by reading new articles about daily (<a href="https://css-tricks.com/" className="text-pink hover:underline focus:underline">CSS-Tricks</a> is an awesome blog to follow). You can find a lot guides and articles on websites like <a href="https://medium.com/" className="text-pink hover:underline focus:underline">Medium</a> or <a href="https://dev.to" className="text-pink hover:underline focus:underline">Dev.to</a> as well. If you're in need of productivity tools, I'd highly suggest both <a href="https://asana.com/" className="text-pink hover:underline focus:underline">Asana</a> (project management, collaboration) and <a href="https://www.boostedproductivity.com/" className="text-pink hover:underline">Boosted</a> (time-tracking). </p>

                <ul className="my-4 list-none">
                    <h2 className="text-3xl mb-4 border-b-2 border-yellow w-48 leading-loose rounded-sm">Books</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">   
                        <li className="text-base">
                            <img src="https://i.imgur.com/22jWNql.png" alt="" className="relative items-center lg:float-left rounded mx-auto mb-4 lg:mb-0 lg:mr-4"/> 
                            <div className="flex flex-col">
                                <a href="http://javascriptbook.com/" className="mt-4 text-xl font-semibold hover:text-pink focus:text-pink underline">Javascript and JQuery</a>
                                <small>By: Jon Duckett</small>
                                <p>Excellent book to help you refine your Javascript and jQuery skills. Learn about functions, methods, loops, DOM manipulation, events, and much more. Personally, I also really enjoy the typography and design that went into printing this book.</p>
                            </div>
                        </li>
  
                        <li className="text-base">
                            <img src="https://i.imgur.com/31yIJ0P.jpg" alt="" className="relative items-center lg:float-left rounded mx-auto mb-4 lg:mb-0 lg:mr-4"/> 
                            <div className="flex flex-col">
                                <a href="https://eloquentjavascript.net/" className="mt-4 text-xl font-semibold hover:text-pink focus:text-pink underline">Eloquent Javascript</a>
                                <small>By: Marijn Haverbeke</small>
                                <p>This 3rd edition book is a very thorough guide to Javascript. It teaches everything from asynchronous functions to error handling and debugging and includes numerous detailed examples as well as sample projects </p>
                            </div>
                        </li>
                    </div>
                       

                </ul>

                <ul className="my-4">
                    <h2 className="text-3xl mb-4 border-b-2 border-yellow w-48 leading-loose rounded-sm">Top Courses</h2>
                    <li className="my-8">
                        <a href="https://www.udemy.com/course/web-projects-with-vanilla-javascript/" className="text-lg font-bold leading-loose my-4 hover:text-pink hover:underline cursor-pointer">20 Projects with Vanilla Javascript - Udemy, Instructor: Brad Traversy </a>
                        <p className="text-base">Build real projects with vanilla JS such as a video player, lyrics search application, flippable flash cards, expense tracker, infinite scroll posts and more. </p>   
                    </li>
                    <li className="my-8">
                        <a href="https://www.udemy.com/course/the-web-developer-bootcamp/"  className="text-lg font-bold leading-loose my-4 hover:text-pink hover:underline cursor-pointer">The Web Developer Bootcamp - Udemy, Instructor: Colt Steele</a>
                        <p>Recently updated in October 2020. Learn HTML, CSS, and essential Javascript to build responsive websites such as the featured course project, YelpCamp (here is the version I made: <a href="https://intense-mountain-36045.herokuapp.com" className="font-semibold text-pink hover:text-mauve hover:underline">YelpCamp - 2019</a>)</p>
                    </li>
                    <li className="my-8">
                        <a href="https://www.freecodecamp.org/learn"  className="text-lg font-bold leading-loose my-4 hover:text-pink hover:underline cursor-pointer">Responsive Web Design Certification - FreeCodeCamp</a>
                        <p>A great place to start with FreeCodeCamp's extensive curriculum. Learn the fundamentals of building a website. In addition to HTML and CSS, you'll be introduced to accessibility, flexbox, and css grid. </p>
                    </li>
                    <li className="my-8">
                        <a href="https://www.freecodecamp.org/learn"  className="text-lg font-bold leading-loose my-4 hover:text-pink hover:underline cursor-pointer">Front End Libraries Certification - FreeCodeCamp</a>
                        <p>Another great course by FreeCodeCamp that focuses on the Front End of developing websites. This is a good choice if you're ready to branch out and begin using CSS and JS libraries. This course introduces Bootstrap, JQuery, Sass, React, Redux, and has a variety of real projects for you to test your knowledge</p>
                    </li>
                </ul>

                <ul className="my-4">
                    <h2 className="text-3xl mb-4 border-b-2 border-yellow w-64 md:w-80 leading-loose rounded-sm">Learning Platforms</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-start">
                    <li className="flex flex-col pb-2">
                        <a href="https://scrimba.com/" className="text-lg font-bold hover:text-pink hover:underline cursor-pointer">  Scrimba</a>
                        <em>*Free courses available</em>
                    </li>
                    <li className="flex flex-col pb-2">
                        <a href="https://www.freecodecamp.org/learn" className="text-lg font-bold hover:text-pink hover:underline cursor-pointer">  FreeCodeCamp</a>
                        <em>*All courses are free</em>
                    </li>
                    <li><a href="https://www.udemy.com/" className="text-lg font-bold hover:text-pink hover:underline cursor-pointer pb-2">  Udemy</a></li>
                    <li>
                        <a href="https://www.pluralsight.com/" className="text-lg font-bold hover:text-pink hover:underline cursor-pointer pb-2">  Pluralsight</a>
                    </li>
                    <li className="flex flex-col pb-2">
                        <a href="https://www.codecademy.com/" className="text-lg font-bold hover:text-pink hover:underline cursor-pointer">  Codecademy</a>
                        <em>*Free courses available</em>
                    </li>
                    <li><a href="https://frontendmasters.com/" className="text-lg font-bold hover:text-pink hover:underline cursor-pointer pb-2">  Front End Masters</a></li>
                    </div>
                </ul>
            </section>
        </main>
        </Layout>
    )
}
