import { Briefcase, Clock } from "lucide-react"

import GetInTouch from "./GetInTouch";
export default function About() {
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

  return (
    <section className="w-full py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-6xl font-bold tracking-tight text-orange-600 mb-4 gradient_text">About Ms Advertising</h2>
          <p className="text-gray-600 max-w-3xl font-bold font-saira">
            A family-run business with a passion for design and a legacy of excellence
          </p>
          {/* <div className="w-20 h-1 bg-orange-500 mb-6"></div> */}
        </div>

        {/* Who Are We Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center mb-20">
          <div className="bg-orange-50 p-8 rounded-xl shadow-sm mb-10">
            <h3 className="text-2xl font-bold  mb-4 gradient_texts">Who Are We?</h3>
            <p className="text-gray-700 mb-4 font-saira">
              At Ms Advertising, we are a family-run business with 21 years of experience, dedicated to crafting
              impactful designs that help brands thrive. Over the years, we have successfully completed 10,000 projects,
              delivering high-quality branding, social media graphics, print materials, and advertising solutions.
            </p>
            <p className="text-gray-700 font-saira">
              Our commitment to creativity and precision has earned us the trust of countless clients, from startups to
              established businesses. With a passion for design and a legacy of excellence, we continue to bring ideas
              to life—one project at a time.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-orange-500 flex flex-col items-center justify-center">
              <div className="bg-orange-100 p-3 rounded-full mb-4">
                <Briefcase className="h-8 w-8 text-orange-600" />
              </div>
              <h4 className="text-4xl font-bold text-orange-600 mb-1">10K+</h4>
              <p className="text-gray-600 text-center">Projects Completed</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-orange-500 flex flex-col items-center justify-center">
              <div className="bg-orange-100 p-3 rounded-full mb-4">
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
              <h4 className="text-4xl font-bold text-orange-600 mb-1">20+</h4>
              <p className="text-gray-600 text-center">Years Experience</p>
            </div>
          </div>
        </div>

        {/* What We Do Section */}
        <div className="bg-gradient-to-r from-orange-50 to-white p-8 rounded-xl shadow-sm mb-16"> {/* Added mb-16 here */}
          <h3 className="text-2xl font-bold  mb-6 gradient_texts">What do we do</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-6 font-saira">
                At Ms Advertising, we craft compelling visuals to elevate your brand. From logo design and branding to
                social media graphics, print materials, and ads, we bring creativity to life.
              </p>
              <p className="text-gray-700 font-medium">Let's turn your vision into impactful designs!</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center text-center">
                <div className="bg-orange-100 p-2 rounded-full mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-orange-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                    />
                  </svg>
                </div>
                <h5 className="font-semibold text-gray-800">Branding</h5>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center text-center">
                <div className="bg-orange-100 p-2 rounded-full mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-orange-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h5 className="font-semibold text-gray-800">Social Media</h5>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center text-center">
                <div className="bg-orange-100 p-2 rounded-full mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-orange-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h5 className="font-semibold text-gray-800">Print Design</h5>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center text-center">
                <div className="bg-orange-100 p-2 rounded-full mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-orange-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h5 className="font-semibold text-gray-800">Advertising</h5>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Banner */}

      </div>
      
      <GetInTouch
        headingText="From Here To Everywhere"
        buttonText="Get In Touch"
      />
    </section>
  )
}