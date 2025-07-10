import React from 'react'

const Pricing = () => {
  return (
    <div className='w-screen h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center'>
    <div className="p-6 bg-gray-900 rounded-lg text-white w-80 shadow-lg">
      <h3 className="text-xl font-bold">🆓 Free Plan </h3>
      <div className="my-2">
        <span className="text-4xl font-bold">₹</span>
        <span className="text-gray-300">/month</span>
      </div>
      <p className="text-gray-300 mb-6">no trials, no credit cards, no stress</p>

      <ul className="space-y-1.5 mb-6 text-sm">
        {[
          '💬 Real-Time Chatrooms',
          '📤 Direct YouTube Uploads',
          'Priority email support',
          '🎥 Video Previews in Chat',
          '🔍 Freelance Editor Directory',
          '📬 1:1 DMs + Group Rooms',
        ].map((feature) => (
          <li className="flex items-center" key={feature}>
            <svg
              className="h-5 w-5 text-green-400 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-gray-400">{feature}</span>
          </li>
        ))}
      </ul>

      <button className="w-full py-2 px-4 bg-blue-500 rounded hover:bg-blue-600 transition-colors text-sm">
        Get Started
      </button>
    </div>
    </div>
  )
}

export default Pricing
