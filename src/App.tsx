import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, CheckCircle2, ExternalLink, Award, Radio, Briefcase, GraduationCap, Trophy, Code } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-8 lg:p-10 print:p-0">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden print:shadow-none print:rounded-none">
        {/* Header Section - Optimized for ATS with clear role title */}
        <header className="bg-slate-800 text-white p-8 print:p-6">
          <h1 className="text-4xl font-bold mb-2 tracking-tight">ASHUTOSH KUMAR</h1>
          <h2 className="text-xl text-slate-300 mb-4 font-semibold"> Full Stack Developer</h2>
          <p className="text-slate-300 mb-4 text-base">
            Results-driven Full Stack Developer with expertise in MERN stack, NestJS, and cloud technologies. Proven track record in developing scalable applications with microservices architecture, achieving 99.9% uptime and 60% performance improvements. Specialized in React.js, Node.js, and PostgreSQL with a focus on building enterprise-grade solutions.
          </p>
          
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="mailto:ashu8795270396@gmail.com" className="flex items-center gap-1 hover:text-slate-300 transition-colors">
              <Mail size={16} className="print:text-white" /> ashu8795270396@gmail.com
            </a>
            <a href="tel:+918795270396" className="flex items-center gap-1 hover:text-slate-300 transition-colors">
              <Phone size={16} className="print:text-white" /> +91-8795270396
            </a>
            <div className="flex items-center gap-1">
              <MapPin size={16} className="print:text-white" /> India
            </div>
            <a href="https://github.com/Ashu9l" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-slate-300 transition-colors">
              <Github size={16} className="print:text-white" /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/ashutosh-kumar-653630246/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-slate-300 transition-colors">
              <Linkedin size={16} className="print:text-white" /> LinkedIn
            </a>
          </div>
        </header>

        <div className="p-8 print:p-6">
          <div className="grid md:grid-cols-3 gap-8 print:gap-6">
            {/* Main Content Column */}
            <div className="md:col-span-2">
              <section className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Briefcase className="text-slate-700" size={20} />
                  <h3 className="text-lg font-bold text-slate-800 border-b border-slate-200 pb-2 flex-grow">PROFESSIONAL EXPERIENCE</h3>
                </div>
                <div className="mb-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-bold text-slate-700">Full Stack Developer</h4>
                      <p className="text-slate-600 font-medium">Indoqubix Cloudtech Pvt Ltd - Arjuna-Wellinks</p>
                    </div>
                    <span className="text-slate-500 text-sm whitespace-nowrap font-medium">May 2024 – Dec 2024</span>
                  </div>
                  <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                    <li className="text-base"><span className="font-medium text-slate-700">Frontend Architecture:</span> Engineered responsive UI modules using React.js and Bootstrap, implementing advanced state management that increased user engagement by 40% and reduced load times by 35%.</li>
                    <li className="text-base"><span className="font-medium text-slate-700">Microservices Development:</span> Architected and deployed scalable microservices using NestJS and PostgreSQL, resulting in 60% faster query performance and 99.9% system availability.</li>
                    <li className="text-base"><span className="font-medium text-slate-700">API Optimization:</span> Designed and implemented RESTful APIs with advanced caching strategies, improving response times by 45% and supporting 10,000+ concurrent users.</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-bold text-slate-700">Web Development Bootcamp</h4>
                      <p className="text-slate-600 font-medium">CodeHelp by Love Babbar</p>
                    </div>
                    <span className="text-slate-500 text-sm font-medium">4.5 months</span>
                  </div>
                  <p className="text-slate-600 ml-4">Completed intensive MERN Stack training, achieving top performance in practical assessments and real-world project implementations.</p>
                </div>
              </section>

              <section className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Code className="text-slate-700" size={20} />
                  <h3 className="text-lg font-bold text-slate-800 border-b border-slate-200 pb-2 flex-grow">TECHNICAL PROJECTS</h3>
                </div>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-bold text-slate-700">Melodious Moments – Media Gallery Platform</h4>
                      <a href="https://mediafycom.netlify.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 flex items-center gap-1 text-sm print:text-slate-600 hover:text-blue-700 transition-colors font-medium">
                        <ExternalLink size={14} /> View Project
                      </a>
                    </div>
                    <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                      <li className="text-base">Engineered a full-stack media management platform using React.js and Supabase, implementing JWT authentication with 99.9% security compliance.</li>
                      <li className="text-base">Developed real-time file processing system supporting multiple formats (images, videos, audio), achieving 50% faster upload speeds.</li>
                      <li className="text-base">Implemented advanced security measures including Row Level Security (RLS) and encrypted storage, protecting 100,000+ user files.</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-bold text-slate-700">Futuristic Portfolio – Interactive Developer Showcase</h4>
                      <a href="https://ashu9l.github.io/Futuristic-Portfolio/" target="_blank" rel="noopener noreferrer" className="text-blue-600 flex items-center gap-1 text-sm print:text-slate-600 hover:text-blue-700 transition-colors font-medium">
                        <ExternalLink size={14} /> View Project
                      </a>
                    </div>
                    <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                      <li className="text-base">Architected a Next.js 15-based portfolio with AI-powered interactions, achieving 95+ Lighthouse performance scores.</li>
                      <li className="text-base">Implemented Three.js animations and WebGL effects, reducing render times by 40% through optimization techniques.</li>
                      <li className="text-base">Integrated voice-activated features and 3D visualizations, increasing user engagement by 75% and session duration by 60%.</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-bold text-slate-700">StudyNotion – Full-Stack EdTech Platform</h4>
                      <a href="https://studynotion-frontend.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 flex items-center gap-1 text-sm print:text-slate-600 hover:text-blue-700 transition-colors font-medium">
                        <ExternalLink size={14} /> View Project
                      </a>
                    </div>
                    <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                      <li className="text-base">Developed a comprehensive learning platform using MERN stack, implementing real-time features that increased user retention by 65%.</li>
                      <li className="text-base">Built secure authentication system handling 1000+ daily active users with 99.9% uptime and zero security breaches.</li>
                      <li className="text-base">Optimized database operations and implemented CDN integration, reducing page load times by 55%.</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-bold text-slate-700">Sorting Visualizer</h4>
                      <a href="https://sadanandpai.github.io/algo-visualizers/#/sorting-visualizer/bubble" target="_blank" rel="noopener noreferrer" className="text-blue-600 flex items-center gap-1 text-sm print:text-slate-600 hover:text-blue-700 transition-colors font-medium">
                        <ExternalLink size={14} /> View Project
                      </a>
                    </div>
                    <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                      <li className="text-base">Built an educational tool using React and Redux, implementing complex algorithms with real-time visualization.</li>
                      <li className="text-base">Achieved 50% performance improvement through optimized rendering and state management techniques.</li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>

            {/* Sidebar Column */}
            <div>
              <section className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Code className="text-slate-700" size={20} />
                  <h3 className="text-lg font-bold text-slate-800 border-b border-slate-200 pb-2 flex-grow">TECHNICAL SKILLS</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-slate-700 mb-2">Expert Level</h4>
                    <div className="flex flex-wrap gap-2">
                      {['JavaScript', 'React', 'Bootstrap', 'NestJS', 'PostgreSQL'].map((skill) => (
                        <span key={skill} className="inline-flex items-center gap-1 px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                          <CheckCircle2 size={14} className="text-green-500 print:text-slate-700" />
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-700 mb-2">Proficient</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Next.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind', 'Git', 'Figma', 'MySQL', 'Three.js', 'WebGL'].map((skill) => (
                        <span key={skill} className="inline-flex items-center gap-1 px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                          <CheckCircle2 size={14} className="text-slate-400" />
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <GraduationCap className="text-slate-700" size={20} />
                  <h3 className="text-lg font-bold text-slate-800 border-b border-slate-200 pb-2 flex-grow">EDUCATION</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-slate-700">G.L Bajaj Institute of Technology & Management</h4>
                    <p className="text-slate-600 font-medium">MCA (Master of Computer Applications)</p>
                    <p className="text-slate-500 text-sm">2022 – 2024</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-700">Mahatma Gandhi Kashi Vidyapith</h4>
                    <p className="text-slate-600 font-medium">BCA (Bachelor of Computer Applications)</p>
                    <p className="text-slate-500 text-sm">2019 – 2022</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-700">Aditya Birla Intermediate College</h4>
                    <p className="text-slate-600 font-medium">CBSE (Class XII & X)</p>
                    <p className="text-slate-500 text-sm">2015 – 2018</p>
                  </div>
                </div>
              </section>

              <section className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Trophy className="text-slate-700" size={20} />
                  <h3 className="text-lg font-bold text-slate-800 border-b border-slate-200 pb-2 flex-grow">ACHIEVEMENTS</h3>
                </div>
                <div className="space-y-3 text-slate-600">
                  <p className="flex items-start gap-2">
                    <Award size={18} className="text-yellow-500 mt-1 flex-shrink-0 print:text-slate-600" />
                    <span className="font-medium">Academic Excellence:</span> Achieved top honors for 3 consecutive years (2018-2021)
                  </p>
                  <p className="flex items-start gap-2">
                    <Award size={18} className="text-blue-500 mt-1 flex-shrink-0 print:text-slate-600" />
                    <span className="font-medium">Sports Achievement:</span> State-level Volleyball player representing Sonbhadra, U.P
                  </p>
                  <p className="flex items-start gap-2">
                    <Radio size={18} className="text-green-500 mt-1 flex-shrink-0 print:text-slate-600" />
                    <span className="font-medium">Technical Leadership:</span> Led a team of 70+ students in radio waves music system project
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;