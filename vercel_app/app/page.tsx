'use client'

import { useState } from 'react'

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-lg z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              My Portfolio
            </h1>
            <div className="flex gap-6">
              {['home', 'about', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`capitalize transition-colors ${
                    activeSection === section
                      ? 'text-blue-600 font-semibold'
                      : 'text-gray-600 hover:text-blue-500'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        {activeSection === 'home' && (
          <section className="min-h-screen flex items-center justify-center px-4">
            <div className="text-center">
              <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Welcome to My Portfolio
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Building amazing web experiences with modern technologies
              </p>
              <div className="flex gap-4 justify-center">
                <button
                  onClick={() => setActiveSection('projects')}
                  className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  View Projects
                </button>
                <button
                  onClick={() => setActiveSection('contact')}
                  className="px-8 py-3 border-2 border-blue-500 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Contact Me
                </button>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'about' && (
          <section className="min-h-screen flex items-center justify-center px-4">
            <div className="max-w-3xl text-center">
              <h2 className="text-4xl font-bold mb-6">About Me</h2>
              <p className="text-lg text-gray-600 mb-4">
                I'm a passionate web developer who loves creating beautiful, functional applications
                that solve real-world problems. With expertise in modern web technologies,
                I bring ideas to life through clean code and thoughtful design.
              </p>
              <p className="text-lg text-gray-600">
                My journey in web development has been driven by curiosity and a desire to
                continuously learn and improve. I enjoy working with React, Next.js, and modern
                CSS frameworks to create responsive, user-friendly applications.
              </p>
            </div>
          </section>
        )}

        {activeSection === 'projects' && (
          <section className="min-h-screen px-4 py-20">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: 'E-Commerce Platform', desc: 'Modern online shopping experience' },
                  { title: 'Task Manager', desc: 'Productivity app with real-time updates' },
                  { title: 'Weather Dashboard', desc: 'Beautiful weather forecasting app' },
                  { title: 'Social Media App', desc: 'Connect with friends and share moments' },
                  { title: 'Blog Platform', desc: 'Content management system' },
                  { title: 'Portfolio Website', desc: 'Personal portfolio showcase' }
                ].map((project, index) => (
                  <div key={index} className="bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-gray-600">{project.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {activeSection === 'contact' && (
          <section className="min-h-screen flex items-center justify-center px-4">
            <div className="max-w-md w-full">
              <h2 className="text-4xl font-bold text-center mb-8">Get In Touch</h2>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </section>
        )}
      </main>
    </div>
  )
}
