import React from 'react'

export default function Footer() {
  return (
      <footer className="py-8 w-full">
          <div className="container mx-auto flex justify-between items-center">
              <div className="w-1/4">
                  <h1 className="text-2xl font-bold text-red-600 uppercase">Netflix</h1>
              </div>
              <nav className="w-1/2">
                  <ul className="flex justify-between">
                      <li>
                          <a href="#" className="text-gray-400 hover:text-white">
                              Home
                          </a>
                      </li>
                      <li>
                          <a href="#" className="text-gray-400 hover:text-white">
                              TV Shows
                          </a>
                      </li>
                      <li>
                          <a href="#" className="text-gray-400 hover:text-white">
                              Movies
                          </a>
                      </li>
                      <li>
                          <a href="#" className="text-gray-400 hover:text-white">
                              New & Popular
                          </a>
                      </li>
                      <li>
                          <a href="#" className="text-gray-400 hover:text-white">
                              My List
                          </a>
                      </li>
                  </ul>
              </nav>
              <div className="w-1/4 text-right">
                  <button className="bg-red-600 py-2 px-4 rounded-md hover:bg-red-700">Sign In</button>
              </div>
          </div>
      </footer>
  );
}
