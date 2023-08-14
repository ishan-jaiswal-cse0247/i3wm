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
                    <a href="#" onClick={() => pageref.current.scrollTo(1)}>
                      Detail
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={() => pageref.current.scrollTo(2)}>
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="https://play.google.com/store/apps/dev?id=8579111499134615768">
                      Play Store
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
                Scrool Down <br />
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
                    <summary>Let me introduce myself</summary>
                    <p>
                      I am Ishan Jaiswal, as you are already aware. My essence
                      is self-propelled, characterized by an inquisitive
                      disposition. The pursuit of knowledge and the uncharted
                      realms of technology, aimed at enhancing existence,
                      perpetually captivate my enthusiasm. Inclined towards
                      introversion, the tapestry of my moments is woven with
                      contemplations, predominantly dwelling upon technological
                      innovations or matters of a spiritual nature.
                    </p>
                  </details>
                  <details>
                    <summary>Education Qualifications</summary>
                    <p>
                      I recently achieved my Master's degree in Computer
                      Applications with honors, preceded by a Bachelor's degree
                      in Computer Applications from Shri Vaishnav Institute of
                      Management. I secured CGPA scores of 8.1 and 7.0 for my
                      Master's and Bachelor's degrees, respectively. While my
                      Higher and Secondary Education saw scores of 55% and 50%
                      correspondingly, I've made significant improvements in
                      both areas. Through dedicated efforts, I have enhanced my
                      academic performance, reflecting on the upward trajectory
                      of my grades.
                    </p>
                  </details>
                  <details>
                    <summary>Professional Experiences</summary>
                    <p>
                      I possess 6 months of extensive Full Stack development
                      experience from a Fulltime internship, coupled with 6
                      months of dedicated Freelance work focusing on MERN Stack
                      development. Additionally, I bring 6 months of immersive
                      Virtual Internship exposure as a Technology consultant at
                      Deloitte. Through these roles, I have contributed to
                      numerous projects and gained invaluable leadership and
                      volunteering exposure during both my academic and
                      professional journey. My accomplishments extend to
                      encompass various professional certifications and active
                      engagement in extracurricular pursuits. Consistently
                      recognized as a standout team member, I have consistently
                      demonstrated excellence and strong collaborative skills.
                    </p>
                  </details>
                  <details>
                    <summary>Current Status</summary>
                    <p>
                      Having completed my Post Graduation in July 2023, I am
                      actively enhancing my skills, unwilling to remain idle.
                      Although I possess multiple offer letters from top firms
                      and have garnered praise from interviewers for my
                      qualifications and certifications, I find myself
                      discontented with the prospects these roles offer at this
                      early career juncture. I am steadfast in my pursuit of an
                      opportunity that will enable me to fully employ my
                      abilities, propelling my career toward a more substantial
                      triumph across all facets of life.
                    </p>
                  </details>
                  <details>
                    <summary>Why I Love Microsoft</summary>
                    <p>
                      Since my early days, a deep fondness for Microsoft has
                      thrived within me. The allure of working for this tech
                      titan enchanted my childhood dreams, despite my limited
                      understanding of its domain. Now, as I've matured, the
                      vast expanse of Microsoft's influence has unveiled itself
                      an array of products and services crafted to enhance our
                      daily lives. What sets Microsoft apart, capturing my
                      admiration, is its comprehensive portfolio, eclipsing even
                      the amalgamation of other industry giants. The
                      significance of its flagship products is so profound that
                      envisioning a day without them becomes implausible. Beyond
                      innovation, Microsoft distinguishes itself through an
                      unwavering commitment to employees, fostering an
                      exceptional work culture and abundant learning prospects.
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
                    <summary>Unprepared ahead of time</summary>
                    <p>
                      Microsoft has consistently demonstrated a pioneering
                      spirit, evident from its early introduction of tablet
                      technology in the early 2000s. However, despite these
                      advancements, the company faced challenges in resonating
                      with consumers. Windows Vista, a technologically
                      impressive iteration with notable enhancements over its
                      predecessor Windows XP, encountered adoption issues.
                      Similarly, Windows 8 boasted a refined UI, Windows app
                      integration, and improved compatibility with mobile
                      devices, showcasing Microsoft's innovation. Yet, its
                      forward-looking design and functionalities outpaced
                      prevailing user preferences, resulting in limited
                      acceptance. This underscores the significance of aligning
                      technological innovation with prevailing user expectations
                      to ensure widespread adoption. Microsoft's journey
                      highlights the imperative of striking a balance between
                      pushing technological boundaries and understanding the
                      readiness of the market, ultimately shaping the trajectory
                      of successful product integration.
                    </p>
                  </details>
                  <details>
                    <summary>Microsoft Echosystem</summary>
                    <p>
                      Apple is widely recognized for its seamless ecosystem,
                      bolstered by tightly integrated devices such as mobiles,
                      tablets, laptops, and desktops. However, Microsoft, a
                      dominant force in the desktop and laptop market, boasts an
                      extensive range of products that often go unnoticed as
                      part of a unified ecosystem. Its portfolio includes
                      Surface Laptops, Xbox Gaming Consoles, Cloud Gaming via
                      Game Pass, AI Assistant, the versatile Office suite, and
                      several development tools like VSCode. The distinction
                      lies in connectivity: Apple's devices interact seamlessly
                      due to their proprietary software and hardware
                      integration, while Microsoft's diverse offerings stem from
                      various acquisitions and historical product development
                      paths. Despite this, Microsoft's multifaceted suite of
                      products resonates significantly with users, creating a
                      subtle yet powerful ecosystem. This is a testament to
                      Microsoft's ability to serve a wide range of needs while
                      offering users a variety of interconnected tools and
                      experiences, albeit in a manner less visibly integrated
                      than Apple's famed ecosystem.
                    </p>
                  </details>
                  <details>
                    <summary>Open Source Contribution</summary>
                    <p>
                      Microsoft has faced challenges with open-source software
                      due to its history of proprietary software models. While
                      transitioning to a more open approach, the company has
                      faced credibility issues but has progressively embraced
                      open-source initiatives. Some critics argue that
                      Microsoft's contributions can be selective and overshadow
                      smaller community-driven projects. Additionally, the
                      extent of collaboration raises concerns due to the
                      influence of Microsoft's proprietary technologies.
                    </p>
                  </details>
                  <details>
                    <summary>Undertanding Customer</summary>
                    <p>
                      Windows 8 encountered considerable anticipation due to its
                      promising features, but it faltered due to a crucial UI
                      shift that hindered user experience. The absence of a
                      clear option to toggle between two distinct calculator app
                      designs—desktop style and tablet/mobile style—caused
                      confusion and frustration. This marked a departure from
                      the familiar UI of Windows 7, resulting in an unfavorable
                      reception. Similarly, Windows phones, exemplified by
                      models like Lumia 540, 630, and 950XL, boasted superior
                      performance and features, yet diverged significantly from
                      the widely adopted Android interface. This divergence
                      alienated users accustomed to Android's interface, leading
                      to a lack of acceptance despite advancements in-app
                      support and capabilities. The lesson drawn is that while
                      innovation is essential, abrupt UI changes should be
                      complemented by user-friendly options to ensure seamless
                      transitions and to avoid alienating user bases accustomed
                      to prior experiences.
                    </p>
                  </details>
                  <details>
                    <summary>Marketing Strategy Issue</summary>
                    <p>
                      Microsoft possesses a diverse range of products, some
                      garnering substantial recognition, like Windows, Office,
                      and VSCode, while others may require enhanced visibility.
                      Products such as Xbox and Azure face robust competition,
                      with rivals leveraging effective marketing strategies. A
                      prime example is the launch of Windows Vista, initially
                      plagued by bugs that hindered user acceptance. However,
                      Microsoft employed a strategic marketing approach,
                      offering users a revised experience, thereby altering
                      negative perceptions. By allowing users to interact with
                      Windows Vista incognito, favorable opinions developed over
                      time. This strategy paved the way for the successful
                      launch of Windows 7, which built upon the improved Vista
                      foundation, attaining widespread acclaim. This historical
                      perspective underscores Microsoft's capacity to modify
                      product perceptions through strategic marketing
                      initiatives. In the contemporary landscape, lessons from
                      such experiences can guide the company's efforts to
                      elevate awareness and appreciation for products like Xbox
                      and Azure, ensuring their rightful place within the
                      competitive tech ecosystem.
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
                    <summary>Small yet Important things</summary>
                    <p>
                      Microsoft's Windows operating system, a cornerstone of
                      modern computing, has undoubtedly evolved significantly.
                      However, it's worth acknowledging that certain aspects
                      still present opportunities for enhancement. For instance,
                      while Windows PC Manager shows promise, its beta stage
                      indicates room for refinement compared to its
                      long-standing counterparts. The absence of features like
                      app and file/folder locking, notification history, and a
                      built-in screen recorder, which users have come to
                      appreciate in other platforms, leaves potential untapped.
                      These features not only streamline daily tasks but also
                      foster user affinity. As someone intrinsically committed
                      to detail, I aspire to contribute to Microsoft's
                      evolution. Drawing inspiration from diverse sources and
                      amalgamating ideas, I aim to enrich Windows with
                      comprehensive functionality, thus captivating users and
                      solidifying their loyalty.
                    </p>
                  </details>
                  <details>
                    <summary>Enhance before Innovate</summary>
                    <p>
                      Windows Phone 7, 8.1, and 10 each were introduced
                      relatively quickly. This approach aimed to address
                      evolving market trends and user preferences. While the
                      strategy displayed adaptability, it also posed challenges
                      in creating a stable and enduring ecosystem. Brands often
                      refine their visions based on user feedback, as evidenced
                      by industry peers. In the context of a prospective
                      collaboration with Microsoft, my inclination toward
                      learning from both personal and collective mistakes aligns
                      with the ethos of innovation. Combining insights garnered
                      from introspection and market dynamics can lead to
                      remarkable outcomes. By adopting a balanced approach of
                      continuity and transformation, there's potential to craft
                      solutions that resonate with users and withstand shifts in
                      perception. My commitment to learning and improvement
                      positions me favorably to contribute to Microsoft's future
                      endeavors.
                    </p>
                  </details>
                  <details>
                    <summary>Proper Market Analysis</summary>
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
                    <summary>Example of my Thought</summary>
                    <p>
                      Amid Microsoft's discontinuation of Cortana, the current
                      landscape offers a diverse array of AI-driven tools such
                      as Bing chat, Microsoft 365 Copilot, and others. However,
                      the fragmentation can indeed be perplexing for users
                      seeking a unified experience. The desire for a
                      comprehensive AI assistant, analogous to the fictional
                      Jarvis, is evident—a singular entity capable of seamlessly
                      executing tasks across coding, system management, content
                      creation, research, and leisure recommendations. While
                      existing AI personas like J.A.R.V.I.S., F.R.I.D.A.Y.,
                      Karen, and E.D.I.T.H. perform distinct functions, the
                      optimal solution lies in an integrated AI model that
                      harmonizes these capabilities. If the opportunity arises,
                      I am committed to channeling efforts into the development
                      of such an encompassing AI companion, streamlining user
                      interactions and enhancing productivity within a
                      consolidated framework.
                    </p>
                  </details>
                  <details>
                    <summary>My Final Words</summary>
                    <p>
                      As a self-motivated and detail-oriented individual, my
                      aspiration is to contribute my skills and passion to
                      Microsoft. I envision embarking on a transformative
                      journey, aligning with emerging technological trends and
                      advancements. Collaboratively, we can pioneer innovative
                      products that enrich lives. My resolute commitment to
                      excellence and a shared vision of success fuels my desire
                      to join Microsoft's esteemed team. Together, we will craft
                      solutions that empower and enhance our global community.
                      This narrative encapsulates why I want to work with
                      Microsoft, and I extend my gratitude for the prospect of
                      being a part of this impactful journey.
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
                Scrool Down <br />
                <span id="downaero"></span>
              </button>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer className="page" offset={2} speed={0.4}>
          <div id="contactme">
            <div id="contactleft">
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
