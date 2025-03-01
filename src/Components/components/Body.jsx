import { Smartphone, Code, Server, Shield } from "lucide-react";
const Body = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
     
      <section className="relative flex flex-col md:flex-row items-center justify-between px-8 md:px-24 lg:px-32 py-16 md:py-24 overflow-hidden">
  <div className="w-full md:w-1/2 z-10 -ml-4 md:ml-16 mt-9">
    <h1 className="text-4xl md:text-5xl font-bold mb-4">Safeguarding the Digital Landscape</h1>
    <h2 className="text-3xl md:text-4xl font-bold mt-9">with Cutting-Edge Security.</h2>
    <p className="text-gray-300 text-xl mb-8  max-w-lg mt-12">
      Lorem ipsum dolor sit amet consectetur. Mi amet nulla vestibulum tincidunt vitae porttitor vel volutpat eget.
      Aliquam netus urna turpis odio nunc sit at sem pulvinar. Nunc nibh lectus a ut malesuada nunc massa. Velit nunc quam dignissim.
    </p>
  </div>

  <div className="w-full md:w-1/2 flex justify-center items-center relative">
    <div className="relative w-64 h-64">
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full w-48 h-48 flex items-center justify-center overflow-hidden">
          <div className="text-xs font-mono text-white/80 leading-tight transform rotate-12">
            01100111<br />10101010<br />11100110<br />01100111<br />10101010<br />11100110
          </div>
        </div>
      </div>
      <div className="absolute top-4 left-4 w-full h-full flex items-center justify-center">
        <div className="bg-pink-500 rounded-full w-48 h-48 opacity-70 flex items-center justify-center">
          <Shield className="w-24 h-24 text-yellow-400" />
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Second Section */}
      <section
  className="relative flex flex-col md:flex-row items-center  justify-center px-8 md:px-20 lg:px-32 py-16 md:py-24 max-w-6xl mx-auto bg-[url('/background.jpg')] bg-cover bg-center"
>
  {/* Left Side - Main Image */}
  <div className="w-full md:w-1/2 flex justify-center relative">
    <img
      src="/people.jpg"
      width={350}
      height={200}
      alt="People working in office"
      className="relative z-10"
    />
    {/* Bottom Left Overlay Image */}
    <img
      src="/arrow.png"
      width={100}
      height={80}
      alt="Decorative"
      className="absolute bottom-[-20px] left-[-50px] w-48 h-auto opacity-80 z-10"
    />
  </div>

  {/* Right Side - Text */}
  <div className="w-full md:w-1/2 flex justify-center">
    <p className="text-xl md:text-3xl leading-relaxed  text-center md:text-left max-w-[350px]">
      We prioritize your needs, working tirelessly to enhance your quality of life through cutting-edge solutions.
      With a passion for excellence and unwavering integrity, Join us to achieve the impossible together!
    </p>
  </div>
</section>

{/* third section */}
<section className="mx-auto max-w-7xl border-y border-gray-700 flex flex-col md:flex-row h-auto md:h-[500px]">
  {/* Left Section */}
  <div className="border-b md:border-b-0 md:border-r border-gray-700 w-full md:w-1/2 flex flex-col justify-center px-6 md:px-20 py-10 text-center md:text-left">
    <div className="text-4xl md:text-5xl font-medium space-y-2">
      <h1>Pioneering</h1>
      <h1>Blockchain</h1>
      <h1>Technology</h1>
    </div>
    <div className="flex justify-center md:justify-start">
      <button className="mt-10 bg-blue-700 text-xs text-white px-6 py-3 rounded-full hover:bg-blue-900 uppercase">
        Request a Project
      </button>
    </div>
  </div>

  {/* Right Section */}
  <div className="grid grid-cols-1 sm:grid-cols-2 w-full border-gray-700">
    {/* First Row */}
    <div className="flex flex-col items-center text-center p-6 border-b sm:border-b-0 sm:border-r border-gray-700">
      <Smartphone size={40} className="text-gray-300 mb-3" />
      <h2 className="text-xl font-semibold mb-2">Mobile App Development</h2>
      <p className="text-gray-600">We build high-quality mobile applications tailored for iOS and Android.</p>
    </div>

    <div className="flex flex-col items-center text-center p-6 border-b border-gray-700 sm:border-b-0">
      <Code size={40} className="text-gray-300 mb-3" />
      <h2 className="text-xl font-semibold mb-2">UI/UX Design</h2>
      <p className="text-gray-600">Creating intuitive and engaging user interfaces for a seamless experience.</p>
    </div>

    {/* Second Row */}
    <div className="flex flex-col items-center text-center p-6 sm:border-r border-gray-700">
      <Server size={40} className="text-gray-300 mb-3" />
      <h2 className="text-xl font-semibold mb-2">Backend Development</h2>
      <p className="text-gray-600">Robust server-side solutions to ensure performance and security.</p>
    </div>

    <div className="flex flex-col items-center text-center p-6">
      <Shield size={40} className="text-gray-300 mb-3" />
      <h2 className="text-xl font-semibold mb-2">Security & Maintenance</h2>
      <p className="text-gray-600">Keeping your applications secure and up-to-date with ongoing support.</p>
    </div>
  </div>
</section>



{/* 4th section */}

<section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 lg:px-32 py-16 md:py-24 max-w-6xl mx-auto relative">
  <div className="w-full md:w-1/2 text-left">
    <p className="text-xl md:text-2xl leading-relaxed text-gray-200">
      We proudly embrace diversity as a multicultural corporate. Our team, comprised of talents from various
      backgrounds and cultures, fosters an inclusive environment that enriches our perspectives and fuels creativity in delivering top-notch solutions for our global clients.
    </p>
  </div>
  <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0 relative">
    <img src="/diversity.jpg" alt="Diverse team working together" width={350} height={200} className="relative z-10" />
    <img src="/arrow.png" alt="Overlay Image" width={150} height={100} className="absolute bottom-[-50px] right-[-50px] z-10" />
  </div>
</section>



{/* 5th section */}


<section className="mx-auto max-w-7xl border-y border-gray-700 flex flex-col md:flex-row h-auto md:h-[500px]">
  {/* Left Section */}
  <div className="border-r border-gray-700 w-full md:w-1/2 flex flex-col justify-center px-6 md:px-20 py-10">
    <div className="text-5xl font-medium space-y-2 text-center md:text-left">
      <h1>Embark on an</h1>
      <h1>exciting journey</h1>
      <h1>into the Future</h1>
      <h1> Technology</h1>
    </div>
    <div className="flex justify-center md:justify-start">
      <button className="mt-10 bg-blue-700 text-xs text-white px-6 py-3 rounded-full hover:bg-blue-900 uppercase">
        Request a Project
      </button>
    </div>
  </div>

  {/* Right Section */}
  <div className="grid grid-cols-1 sm:grid-cols-2 w-full border-gray-700">
    {/* First Row */}
    <div className="flex flex-col items-center text-center p-6 border-b sm:border-b-0 sm:border-r border-gray-700">
      <h2 className="text-xl font-semibold mb-2">What We Do</h2>
      <p className="text-gray-600">We build high-quality mobile applications tailored for iOS and Android.</p>
    </div>

    <div className="flex flex-col items-center text-center p-6 border-b border-gray-700 sm:border-b-0">
      <h2 className="text-xl font-semibold mb-2">Why We Do</h2>
      <p className="text-gray-600">Creating intuitive and engaging user interfaces for a seamless experience.</p>
    </div>

    {/* Second Row */}
    <div className="flex flex-col items-center text-center p-6 sm:col-span-2">
      <h2 className="text-xl font-semibold mb-2">How We Do</h2>
      <p className="text-gray-600">Robust server-side solutions to ensure performance and security.</p>
    </div>
  </div>
</section>


{/* 6th section */}

<section className="mx-auto max-w-7xl text-center py-16">
  <h2 className="text-4xl font-semibold  mt-7">Our Platforms</h2>
  
  <div className="grid grid-cols-2 sm:grid-cols-3 mt-10 md:grid-cols-4 lg:grid-cols-7 gap-6 items-center justify-center">
    {/* Platform Logos */}
    <img src="public/platform (9).jpg" alt="Flutter" className="h-16 mx-auto" />
    <img src="/platform (2).jpg" alt="PostgreSQL" className="h-16 mx-auto" />
    <img src="/platform (3).jpg" alt="MySQL" className="h-16 mx-auto" />
    <img src="/platform (4).jpg" alt="React" className="h-16 mx-auto" />
    <img src="/platform (5).jpg" alt="Figma" className="h-16 mx-auto" />
    <img src="/platform (6).jpg" alt="Redis" className="h-16 mx-auto" />
    <img src="/platform (7).jpg" alt="Golang" className="h-16 mx-auto" />
  </div>

  
</section>



    </div>
  );
};

export default Body;
