import './App.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useRef, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import emailjs from '@emailjs/browser';

export default function App() {
  const pageref = useRef();
  const formref = useRef();
  const [Contacted, setContacted] = useState(false);
  const contactme = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_4odtz0h',
        'template_g09krna',
        e.target,
        'xriXp5YWk6Y4UAgFT'
      )
      .then(
        (result) => {
          console.log(result.text);
          setContacted(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <Parallax pages={3} ref={pageref}>
        <ParallaxLayer speed={0} className="page">
          <div id="hello">
            <div id="navbar">
              <nav>
                <a href="#">
                  <h2>Work with Microsoft</h2>
                </a>
                <ul>
                  <li>
                    <a href="#" onClick={() => pageref.current.scrollTo(0)}>
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={() => pageref.current.scrollTo(1)}>
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={() => pageref.current.scrollTo(2)}>
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div id="helloleft">
              <p>
                Hi' there my name is <h2>ISHAN JAISWAL</h2>
                and here is everything about Why I Want to Work with
                <b>
                  <i> Microsoft</i>
                </b>
                .
                <br />
                <br />
                <div id="socialbar">
                  <a href="mailto:ishanjaiswal047@gmail.com">
                    <img src="./assets/outlook.png" alt="Mail" />
                  </a>
                  <a href="https://www.linkedin.com/in/ishan-jaiswal-cse0247/">
                    <img src="./assets/linkedin.png" alt="LinkedIn" />
                  </a>
                  <a href="https://github.com/ishan-jaiswal-cse0247">
                    <img src="./assets/github.png" alt="GitHub" />
                  </a>
                  <a href="https://www.credly.com/users/ishan-jaiswal-cse0247/badges">
                    <img src="./assets/credly.png" alt="Credly" />
                  </a>
                  <a href="https://play.google.com/store/apps/dev?id=8579111499134615768">
                    <img src="./assets/google-play.png" alt="Play Store" />
                  </a>
                </div>
              </p>
            </div>
            <div id="helloright">
              <video autoPlay loop muted id="hello_avtar">
                <source
                  src="./assets/hello_avtar.mp4"
                  type="video/mp4"
                  alt="Hello"
                />
              </video>
            </div>
            <div className="scrolldown">
              <button
                className="scrollbutton"
                onClick={() => pageref.current.scrollTo(1)}
              >
                Tap to Scroll <br />
                <span id="downaero"></span>
              </button>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer className="page" offset={1} speed={0.4}>
          <div id="maindiv">
            <Tabs defaultIndex={0} disableUpDownKeys={true} id="maintab">
              <TabList id="tablist">
                <Tab>
                  <img
                    className="tab-icon"
                    src="./assets/ishan.png"
                    alt="ishan"
                  />
                </Tab>
                <Tab>
                  <img
                    className="tab-icon"
                    src="./assets/microsoft.png"
                    alt="Microsoft"
                  />
                </Tab>
                <Tab>
                  <img
                    className="tab-icon"
                    src="./assets/together.png"
                    alt="Together"
                  />
                </Tab>
              </TabList>
              <TabPanel id="tabpanel">
                <div className="leftside">
                  <h2>Everything about Myself</h2>
                  <br />
                  <details>
                    <summary>
                      <div className="first-point"></div>Let me introduce Myself
                    </summary>
                    <p>
                      I am Ishan Jaiswal and am strongly curious about
                      Technology and Psychology. I dedicate most of my time to
                      exploring and learning new things. I used to face
                      confusion and inefficiency, which affected my academic
                      performance, but then one of my teachers taught me that
                      knowledge is the greatest strength. Having complete
                      knowledge would help me pursue your goals with clarity. I
                      followed this advice and it improved my results
                      significantly. I also embraced discipline and some
                      principles from my other mentors and now thanks to them I
                      am advancing every day.
                    </p>
                  </details>
                  <details>
                    <summary>
                      <div className="second-point"></div>Education
                      Qualifications
                    </summary>
                    <p>
                      I recently achieved my Master's in Computer Applications
                      final year result with honors, preceded by a Bachelor's
                      degree in Computer Applications from Shri Vaishnav
                      Institute of Management, Indore. I secured CGPA scores of
                      8.1 and 7.0 for my Master's and Bachelor's degrees,
                      respectively. While my Higher and Secondary Education
                      scores were 55% and 50% respectively, I've made
                      significant improvement. Through dedicated efforts, I have
                      enhanced my academic performance, reflecting on the upward
                      trajectory of my grades and I will continue to do so.
                    </p>
                  </details>
                  <details>
                    <summary>
                      <div className="third-point"></div>Professional
                      Experiences
                    </summary>
                    <p>
                      I possess 6 months of extensive Full Stack Development
                      experience as a Fulltime intern from Trinabh Infotech Pvt
                      Ltd, coupled with 6 months of dedicated Freelance work
                      focusing on MERN Stack Development from Buliwear
                      Enterprises. Additionally, I bring 6 months of immersive
                      Virtual Internship exposure as a Technology Consultant
                      from Deloitte. Through these roles, I have contributed to
                      numerous projects and gained invaluable leadership and
                      volunteering exposure during both my academic and
                      professional journey. My accomplishments extend to
                      encompass various professional certifications and active
                      engagement in extracurricular pursuits.
                    </p>
                  </details>
                  <details>
                    <summary>
                      <div className="forth-point"></div>Why to join Microsoft
                    </summary>
                    <p>
                      As a child, I loved Microsoft and its products. I was
                      inspired by my classmates’ elder siblings who worked
                      there. However, I wasn’t focused on my studies, so I
                      thought I would never be able to get into Microsoft. But
                      my recent academic and professional performance
                      improvement encourages me that maybe I can be a part of
                      Microsoft if I try my best. Additionally, by following a
                      Microsoft ex-employee Shradha Khapra and Love Babbar on
                      YouTube, I realized how Microsoft can improve your
                      lifestyle and provide you the opportunity to shape your
                      career. Despite having several offer letters from
                      industry-recognized companies, I am still learning about
                      the things that I left during my academics and hoping to
                      get placed in Microsoft soon.
                    </p>
                  </details>
                </div>
                <div className="rightside">
                  <video autoPlay loop muted id="hello_avtar">
                    <source
                      src="./assets/me_avtar.mp4"
                      type="video/mp4"
                      alt="Thankyou"
                    />
                  </video>
                </div>
              </TabPanel>
              <TabPanel id="tabpanel">
                <div className="leftside">
                  <h2>What Microsoft is Lacking</h2>
                  <br />
                  <details>
                    <summary>
                      <div className="first-point"></div>Unprepared ahead of
                      Time
                    </summary>
                    <p>
                      Microsoft is known for its innovation, like introducing
                      tablets in the early 2000s. But sometimes, their advanced
                      products didn't catch on with users. For example, Windows
                      Vista had impressive features, but people didn't adopt it
                      easily. Similarly, Windows 8 had a great interface,
                      integrated with Windows apps, and worked well on mobile
                      devices, but it was ahead of what users wanted, so it
                      didn't succeed widely. This shows the importance of
                      matching tech innovation with what users want. Microsoft's
                      journey teaches us that it's crucial to strike a balance
                      between pushing technological boundaries and understanding
                      what the market is ready for. This balance shapes the
                      success of a product in the market.
                    </p>
                  </details>
                  <details>
                    <summary>
                      <div className="second-point"></div>Unestablished
                      Echosystem
                    </summary>
                    <p>
                      Apple is known for its devices working well together, like
                      iPhones, iPads, Macs, and more. On the other hand,
                      Microsoft has a wide range of products, like Surface
                      Laptops, Xbox, AI Assistant, Office, and several
                      development tools. The key difference is how they connect.
                      Apple's devices work smoothly because they use their own
                      software and hardware. Microsoft's products come from
                      different sources, but they still make a strong ecosystem.
                      Microsoft's ecosystem might not be as tightly integrated
                      as Apple's, but it offers a lot of useful tools for
                      different needs. This shows Microsoft's ability to cater
                      to a wide range of users with various connected tools, but
                      still needs some major improvement.
                    </p>
                  </details>
                  <details>
                    <summary>
                      <div className="third-point"></div>Misunderstood Customers
                    </summary>
                    <p>
                      Windows 8 had great features but tripped up because it
                      changed the user interface too abruptly. Users were
                      confused by the new calculator app, which didn't let them
                      switch between desktop and tablet styles easily, unlike
                      Windows 7. This change made people unhappy. Similarly,
                      Windows phones like Lumia 540, 630, and 950XL were
                      powerful, but they looked very different from Android,
                      which most people were used to. This made Android users
                      uncomfortable, even though Windows had good apps and
                      capabilities. The lesson here is that while innovation is
                      important, big changes in how things look and work should
                      come with user-friendly options. This helps people
                      transition smoothly and avoids making long-time users feel
                      left behind.
                    </p>
                  </details>
                  <details>
                    <summary>
                      <div className="forth-point"></div>Marketing Strategy
                      Issue
                    </summary>
                    <p>
                      Microsoft has many products, like Windows, Office, and
                      VSCode, that are well-known. But some, like Xbox and
                      Azure, face tough competition. For example, when Windows
                      Vista came out, it had problems, but Microsoft used smart
                      marketing to make it better. They let people try it
                      without knowing it was Vista, and that changed how people
                      saw it. This helped Windows 7, which was built on the
                      improved Vista, become very popular. This shows that
                      Microsoft can change how people see their products through
                      good marketing. Today, they can use these lessons to make
                      products like Xbox and Azure more well-known and
                      appreciated in the competitive tech world.
                    </p>
                  </details>
                </div>
                <div className="rightside">
                  <video autoPlay loop muted id="hello_avtar">
                    <source
                      src="./assets/shock_avtar.mp4"
                      type="video/mp4"
                      alt="Thankyou"
                    />
                  </video>
                </div>
              </TabPanel>
              <TabPanel id="tabpanel">
                <div className="leftside">
                  <h2>We Together can Achive</h2>
                  <br />
                  <details>
                    <summary>
                      <div className="first-point"></div>Detailed Orientation
                    </summary>
                    <p>
                      As a detail-oriented person, I believe that small yet
                      significant features can make our customers fall in love
                      with our product. While Windows has many amazing features,
                      it still lacks some minor things like a screen recorder,
                      folder/file/application lock, notification history, Always
                      on Display, Digital Wellbeing and etc. These features not
                      only streamline daily tasks but also foster user affinity.
                      By loading our products with these small features, we can
                      make our bond stronger with our customers. By
                      incorporating these features into our products, we can
                      provide a more comprehensive and delightful experience to
                      our users.
                    </p>
                  </details>
                  <details>
                    <summary>
                      <div className="second-point"></div>Innovate like Engineer
                    </summary>
                    <p>
                      I worked as a full-stack developer, where my main role is
                      to create tailored computer programs that cater to the
                      specific needs of businesses. My long-term objective is to
                      grow into a software engineer who handles intricate
                      projects and ensures smooth functioning. I am constantly
                      learning and gaining experience to prepare myself for this
                      role. My vision is to create inventive solutions that
                      benefit both end-users and Microsoft. However, there is
                      still room for improvement in this area. Microsoft should
                      concentrate on predicting the future needs of its
                      customers rather than merely developing what they demand
                      right now. Together, we can achieve this goal.
                    </p>
                  </details>
                  <details>
                    <summary>
                      <div className="third-point"></div>Analyze competitors
                    </summary>
                    <p>
                      Market analysis stands as a crucial pillar in product
                      development, furnishing insights into a product's
                      potential performance even prior to its conception. Take
                      the Microsoft Surface Duo, launched amid Samsung's foray
                      into foldable smartphones. While the product's merit is
                      undisputed, the prevailing market discourse centered on
                      foldable screens rather than dual-screen setups. This
                      instance underscores the need for individuals attuned to
                      the pulse of the latest technological trends. I, while not
                      a specialist in any singular domain, possess a
                      comprehensive grasp of diverse technologies. My vigilant
                      tracking of cutting-edge tech news and active pursuit of
                      new experiences equip me to offer valuable perspectives,
                      making me an asset in identifying market-aligned product
                      directions.
                    </p>
                  </details>
                  <details>
                    <summary>
                      <div className="forth-point"></div>My Final Words
                    </summary>
                    <p>
                      It seems like we both have areas where we can improve.
                      I've been working hard to fill in any gaps in my education
                      and stay up to date with the latest trends and
                      technologies. Meanwhile, Microsoft has a lot of room for
                      improvement in various aspects. I've seen some ads for
                      Bing AI introducing new features like palm reading, but
                      many things still need to be addressed before that. Also
                      please do not rush towards implementing AI everywhereThis
                      is just one product, and Microsoft has many, so there's a
                      lot of work to be done. Although this process will take
                      time, I'm hopeful we can work together to make the
                      necessary improvements. Looking forward to hearing back
                      from you.
                    </p>
                  </details>
                </div>
                <div className="rightside">
                  <video autoPlay loop muted id="hello_avtar">
                    <source
                      src="./assets/together_avtar.mp4"
                      type="video/mp4"
                      alt="Thankyou"
                    />
                  </video>
                </div>
              </TabPanel>
            </Tabs>
            <div className="scrolldown">
              <button
                className="scrollbutton"
                onClick={() => pageref.current.scrollTo(2)}
              >
                Tap to Scroll <br />
                <span id="downaero"></span>
              </button>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer className="page" offset={2} speed={0.4}>
          <div id="contactme">
            <div id="contactleft">
              <br />
              <h2>
                Send me your thoughts and I will be regularly updating the
                details.
              </h2>
              <br />
              <form ref={formref} onSubmit={contactme} id="contact-form">
                <input
                  type="text"
                  placeholder="Full Name"
                  name="full_name"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  name="email_address"
                  required
                />
                <textarea
                  type="text"
                  cols="4"
                  rows="4"
                  placeholder="Message"
                  name="message"
                  required
                />
                <button type="submit">Send Message</button>
                <br />
                <br />
                {Contacted && (
                  <h4>Thank you for being a part of my journy :-)</h4>
                )}
              </form>
            </div>
            <div id="contactright">
              <video autoPlay loop muted id="hello_avtar">
                <source
                  src="./assets/end_avtar.mp4"
                  type="video/mp4"
                  alt="Thankyou"
                />
              </video>
            </div>
            <div className="scrolldown">
              <button
                className="scrollbutton"
                onClick={() => pageref.current.scrollTo(0)}
              >
                <span id="upaero"></span>
                <br />
                Back to Top
              </button>
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </>
  );
}
