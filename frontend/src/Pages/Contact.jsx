import React from 'react';
import author from '../assets/Ajmal.jpg';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';

const Contact = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 px-4 py-10 mt-20">
      <div className="border-2 rounded-2xl flex flex-col md:flex-row items-center justify-start gap-8 p-6 md:p-10">
        {/* Profile Image */}
        <img src={author} alt="Author" className="h-64 w-64 rounded-3xl object-cover" />

        {/* About + Links */}
        <div className="flex flex-col">
          <p className="text-xl sm:text-2xl font-bold text-primaryText mb-4">👨‍💻 About Me</p>
          <p className="text-base sm:text-lg md:text-xl text-primaryText max-w-xl">
            I'm Ajmal Roshan, a 2025 graduate from the College of Engineering Trivandrum. As an aspiring software developer, I specialize in web development with skills in React, Python, SQL, and cloud fundamentals. I'm passionate about building clean, efficient solutions and continuously learning new technologies.
          </p>

          {/* Social Links */}
          <div className="flex gap-4 mt-6">
            <a href="https://www.linkedin.com/in/ajmal-roshan-av/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" className="w-10 h-10 hover:scale-110 transition" />
            </a>
            <a href="https://github.com/ajmalroshan5476" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="GitHub" className="w-10 h-10 hover:scale-110 transition" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;


