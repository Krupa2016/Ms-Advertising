import React from "react";

// import Hero from "./components/Hero/Hero";
// import Products from "./components/Products/Products";
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from "./components/TopProducts/TopProducts";
import Banner from "./components/Banner/Banner";
import Testimonials from "./components/Testimonials/Testimonials";
import GetInTouch from "./components/About/GetInTouch";
import LogoStrip from "./components/Logostrip/LogoStrip";
import FAQSection from "./components/FAQ/faq";
import HorizontalCard from "./components/horizontal-card/HorizontalCard";
import Card from "./components/Card/Card";
import gaware_logo from "../src/assets/gaware_logo.png";
import mahindra_logo from "../src/assets/mahindra_logo.png";

//images
import c1 from "./assets/services/1.png"
import c2 from "./assets/services/2.png"
import c3 from "./assets/services/3.png"
import c4 from "./assets/services/4.png"
import c5 from "./assets/services/5.png"
import c6 from "./assets/services/6.png"
import c7 from "./assets/services/7.png"
import c8 from "./assets/services/8.png"
import c9 from "./assets/services/9.png"

import b1 from "./assets/services/c1.png"
import b2 from "./assets/services/c2.png"
import b3 from "./assets/services/c3.png"
import b4 from "./assets/services/c4.png"

import Img1 from "./assets/Presentation/1.png";
import Img2 from "./assets/Presentation/2.png";
import Img3 from "./assets/Presentation/3.png";

import T1 from "./assets/Testimonial/1.png"
import T2 from "./assets/Testimonial/2.png"
import T3 from "./assets/Testimonial/3.jpg"
import T4 from "./assets/Testimonial/4.jpg"


const App = () => {
  const imgstrip= [gaware_logo,mahindra_logo];
  const ProductsData = [
    {
      id: 1,
      img: Img1,
      title: " Simplify Complex Ideas",
      description:
        "Break down difficult concepts using visuals that make them easy to understand.",
    },
    {
      id: 2,
      img: Img2,
      title: "Communicate with Clarity",
      description:
        "Use impactful visuals and clever copy to deliver your message clearly and memorably.",
    },
    {
      id: 3,
      img: Img3,
      title: "Build Brand Credibility",
      description:
        "Structured design, strong messaging, and consistent branding boost trust and professionalism.",
    },
  ];

  
  const cards = [
    {
      image: c1,
      title: "Next-Gen Ventures",
      text: "We design bold, visionary presentations that capture the innovative energy and fast-paced momentum of next-gen ventures—clearly articulating their mission, disruption, and market potential.",
      
    },
    {
      image: c2,
      title: "Finance",
      text: "Precision meets elegance in our finance presentations. We translate data-heavy content into compelling visual narratives that build credibility and communicate insight with authority.",
      
    },
    {
      image: c3,
      title: "Industrial",
      text: "We craft presentations that showcase industrial strength, innovation, and sustainability—highlighting core capabilities and technological advancements in a compelling visual format.",
      
    },
    {
      image: c4,
      title: "Technology",
      text: "From startups to tech giants, we simplify the complex. Our presentations decode innovation, making technical ideas visually engaging and easy to understand for any audience.",
      
    },
    {
      image: c5,
      title: "Fashion & Retail",
      text: "Trend-driven and visually captivating, our fashion and retail presentations tell your brand’s story in style—capturing the essence of your collections and the pulse of your audience.",
      
    },
    {
      image: c6,
      title: "International",
      text: "Global brands need presentations that resonate across cultures. We design with sensitivity and style, creating content that bridges borders and connects with diverse audiences.",
      
    },
    {
      image: c7,
      title: "Healthcare",
      text: "Our designs simplify complex medical information into clear, accessible visuals—empowering healthcare brands to connect with audiences through clarity, trust, and precision.",
      
    },
    {
      image: c8,
      title: "Food & Beverages",
      text: "We bring flavor to your story with visually rich presentations that highlight your brand’s uniqueness, market appeal, and sensory identity—blending strategy with creative flair.",
      
    },
    {
      image: c9,
      title: "Philanthropy",
      text: "We design with purpose. Our philanthropic presentations evoke emotion, tell powerful stories, and rally support by clearly communicating mission, impact, and vision.",
      
    },
  
  
  ];

  const faqData = [
    {
      question: "What is a brand identity?",
      answer:
        "Brand identity refers to the visual elements and design assets that represent your brand, such as logos, colors, typography, and imagery.",
    },
    {
      question: "Why is brand identity important?",
      answer:
        "It helps create a strong impression, builds trust with your audience, and ensures consistency in communication across all platforms.",
    },
    {
      question: "How can I create a memorable brand identity?",
      answer:
        "Focus on unique visuals, consistent messaging, and designs that resonate with your target audience's preferences and values.",
    },
    {
      question: "How does brand identity affect customer loyalty?",
      answer:
        "A strong brand identity fosters emotional connections with customers, encouraging them to remain loyal to your brand.",
    },
    {
      question: "What are the key elements of a brand identity?",
      answer:
        "Key elements include your logo, color palette, typography, imagery style, tone of voice, and overall design consistency.",
    },
    {
      question: "Can I update my brand identity over time?",
      answer:
        "Yes! Brands often evolve their identities to stay relevant or reflect changes in their mission or audience preferences.",
    },
  ];


  const featuredCards = [
    {
      id: 1,
      title: "Brand Discovery & Strategic Alignment",
      description:
        "We begin with a collaborative deep-dive into your brand’s personality, objectives, and audience. This stage helps us uncover design opportunities, align on direction, and shape a focused creative roadmap for your illustration and iconography needs.",
      imageUrl: b1,
    },
    {
      id: 2,
      title: "Creative Exploration & Visual Development",
      description:
        "Grounded in strategic insight, we bring concepts to life through thoughtful design. Every icon and illustration is crafted with purpose—infused with your brand essence and tailored to resonate within your specific industry and user context.",
      imageUrl: b2,
    },
    {
      id: 3,
      title: "Feedback-Driven Refinement",
      description:
        "Your vision remains central throughout. We encourage transparent, iterative collaboration—refining designs across multiple rounds to ensure every asset aligns with your expectations and strengthens your visual identity.",
      imageUrl: b3,
    },
    {
      id: 4,
      title: "Delivery & Design Enablement",
      description:
        "Once finalized, we provide you with high-resolution, platform-ready assets—organized, optimized, and scalable. These visuals become a key part of your design toolkit, empowering consistent and compelling brand communication.",
      imageUrl: b4,
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "...",
      img: T1,
    },
    {
      id: 2,
      name: "...",
      img: T2,
    },
    {
      id: 3,
      name: "...",
      img: T3,
    },
    {
      id: 4,
      name: "...",
      img: T4,
    },
  ]


  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className=" dark:bg-gray-900 dark:text-white duration-200">
      <div className="video-container">
      <video autoPlay muted loop playsInline>
        <source src="/public/services_bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Banner
  heading="Presentation"
  gradientWord="Design"
  subheading="Presentations shouldn’t just inform—they should impress. At MS Advertising, we turn ordinary slides into powerful visual stories that command attention and deliver impact. Our presentation design team combines clean aesthetics with clear communication to help you present your ideas with confidence and clarity. Whether it's for a pitch, report, or keynote, we design presentations that engage your audience, reflect your brand, and leave a lasting impression."
  formTitle="Kickstarting Your Brand’s Next Chapter"
      />

    </div>
      

<LogoStrip images={imgstrip}/>

      <TopProducts products={ProductsData} handleOrderPopup={handleOrderPopup} />
      <div className="text-center mb-16 max-w-2xl mx-auto font-saira">
          <h1
            data-aos="fade-up"
            className="text-5xl text-gray-600 font-extrabold leading-snug break-words font-libreBaskerville"
          >
           Built For <span className="bg-gradient-to-r from-[#f12f24] via-[#f46121] to-[#f78f1e] bg-[length:200%_100%] bg-left bg-clip-text text-transparent bg-gradient-to-r from-[#f12f24] via-[#f46121] to-[#f78f1e] bg-[length:200%_100%] bg-left">Versatility</span> <br/>Designed For <span className="bg-gradient-to-r from-[#f12f24] via-[#f46121] to-[#f78f1e] bg-[length:200%_100%] bg-left bg-clip-text text-transparent bg-gradient-to-r from-[#f12f24] via-[#f46121] to-[#f78f1e] bg-[length:200%_100%] bg-left">Impact</span>
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-gray-600 dark:text-gray-300 mt-4 text-lg font-bold "
          >
           Guided by experience, driven by data, we help brands grow in dynamic market environments
          </p>
        </div>


  <div className="card-container">
      {cards.map((card, index) => (
        <Card
        key={index}
        image={card.image}
        title={card.title}
        text={card.text}
        />
      ))}
    </div>

    <FAQSection faqs={faqData} />
    <HorizontalCard cards={featuredCards} />

      {/* <ServicesSection/> */}
      <Testimonials testimonials={testimonials} />

      <GetInTouch
        headingText="From Here To Everywhere"
        buttonText="Get In Touch"
      />
    </div>
  );
};

export default App;

{/* <Hero handleOrderPopup={handleOrderPopup} />
<Products /> */}