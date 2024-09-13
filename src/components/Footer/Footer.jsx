import React, { useState } from "react"
import axios from "axios"
import {
  FaTwitter,
  FaInstagram,
  FaTelegram,
  FaFacebookSquare,
  FaYoutube,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(null)

    try {
      const response = await axios.post("/api/subscriber", { email })
      setSuccess(response.data.message)
      setEmail("")
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred")
    } finally {
      setLoading(false)
    }
  }

  return (
    <footer
      className="footer justify-center bg-gradient-180 from-bgColor to-bgColor dark:bg-gradient-0 dark:from-bgColorDark dark:bg-bgColorAltDark px-[5%] sm:px-[2%] 2xl:px-[17%]"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="mx-auto max-w-7xl">
        <div className="m-16 lg:flex lg:items-center lg:justify-between">
          <div>
            {error && <div className="mb-4 text-red-600">{error}</div>}
            {success && <div className="mb-4 text-green-600">{success}</div>}
            <h3 className="text-largest font-semibold leading-6 text-titleColor dark:text-titleColorDark text-center sm:text-left">
              Subscribe to our newsletter
            </h3>
            <p className="mt-2 text-large leading-6 text-gray-300 text-textColor dark:text-textColorDark text-center sm:text-left">
              The latest articles, and advice, sent to your inbox.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="mt-6 sm:flex sm:max-w-md lg:mt-0">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-full border border-solid border-borderColor px-3 py-1.5 text-base shadow-sm sm:w-56 sm:text-sm sm:leading-6 bg-bgColorAlt dark:bg-containerColorDark text-titleColor dark:text-titleColorDark"
              placeholder="Enter your email"
            />
            <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
              <button
                type="submit"
                disabled={loading}
                className='flex items-center justify-around w-full text-titleColor dark:text-titleColorDark text-large gap-2 border-[2px] border-solid border-borderColor dark:border-borderColorDark py-[8px] px-[16px] rounded-[56px] dark:shadow-[5px_5px_rgba(255,255,255,0.1)] shadow-[5px_5px_rgba(0,0,0,0.3)] relative bg-white dark:bg-titleColor before:content-[""] before:absolute before:inset-[2px] before:bg-primaryColor before:rounded-[56px] before:scale-[0.3] before:blur-[10px] before:opacity-0 before:transition-all before:duration-[0.6s] before:ease-[cubic-bezier(0.3,0,0.3,1)] before:z-[1] hover:before:scale-[1] hover:before:blur-0 hover:before:opacity-100'
              >
                <span className="z-[1] text-titleColor dark:text-titleColorDark font-[Jost] font-[700]">
                {loading ? 'Submitting...' : 'Subscribe'}
                </span>
              </button>
            </div>
          </form>
        </div>
        {/* Footer Section Two */}
        <div className="border-t-2 border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.05)] grid lg:grid-cols-3 text-center gap-8 py-16 lg:gap-0">
          {/* Socials icons */}
          <div className="flex justify-center lg:justify-start">
            <div className="flex gap-[20px]">
              {[
                { href: "#", icon: <FaTwitter />, label: "Twitter" },
                { href: "#", icon: <FaFacebookSquare />, label: "Facebook" },
                { href: "#", icon: <FaGithub />, label: "GitHub" },
                { href: "#", icon: <FaInstagram />, label: "Instagram" },
                { href: "#", icon: <FaTelegram />, label: "Telegram" },
                { href: "#", icon: <FaYoutube />, label: "YouTube" },
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-titleColor text-h5Size transition-all duration-75 ease-[cubic-bezier(0.3,0,0.3,1)] hover:text-primaryColor"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
