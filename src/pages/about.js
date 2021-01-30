import React from 'react';
import Layout from '../components/layout'
import selfie from '../images/selfie.png'

const AboutPage = ()  => (
        <Layout>
        <main className="container relative">   
            <div className="p-4 lg:p-12 lg:w-3/4 mx-auto relative">
                <section className="bg-brown text-white text-center lg:text-left rounded-lg lg:flex p-12 lg:p-20">
                    <img src={selfie} className="h-60 w-60 mx-auto lg:mr-12" alt="portrait" id="about-img"/>
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="mono text-xl my-8 lg:mt-0">Hi! My name is {" "}
                            <span>Nikki</span>
                        </h1>
                        <div className="prose lg:prose-xl text-base">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium molestias, numquam tenetur eum blanditiis qui praesentium ipsa minima itaque iusto nisi libero obcaecati nesciunt amet error doloremque consectetur animi eos sed. Veniam ducimus tempore illo laudantium, nobis ratione cum maiores aperiam nihil. Voluptate, fugit magnam.
                        </div>
                    </div>
                </section>
            </div>
        </main>
        </Layout>
)

export default AboutPage;
