import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons'
import { Collapse } from 'react-collapse'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleClick = () => {
    setIsMenuOpen(open => !open)
  }

  const navItems = (
    <>
      <a href="#about" className="text-xl hover:text-gray-700 w-full md:w-auto">
        About
      </a>
      <a href="#skills" className="text-xl hover:text-gray-700 w-full md:w-auto">
        Skills
      </a>
      <a href="#projects" className="text-xl hover:text-gray-700 w-full md:w-auto">
        Projects
      </a>
      <a href="/CVGeorgeMarcus.pdf"
         target="_blank"
         className="text-xl underline hover:text-gray-700 w-full md:w-auto"
      >
        CV
      </a>
      <div className="flex relative items-end gap-6 md:gap-2 md:ml-auto">
        <a href="mailto:george.marcus922@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>
        <a href="https://www.linkedin.com/in/george-marcus-34398478"
            style={{ color: '#0A66C2' }}
            target="_blank"
            rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://github.com/PlayLikeNeverB4"
            target="_blank"
            rel="noreferrer"
        >
          <FontAwesomeIcon icon={faSquareGithub} size="2x" />
        </a>
      </div>
    </>
  )

  return (
    <header>
      <nav className="px-5 py-3 border-b flex flex-col md:flex-row justify-between">
        <div className="md:h-10 flex flex-col md:flex-row w-full">
          <div className="w-full md:w-auto flex justify-between">
            <a href="/" className="text-3xl font-bold text-black ">
              {'< '}
              George Mărcuș
              {' />'}
            </a>
            <button className="font-bold text-black md:hidden"
                    onClick={handleClick}>
              <FontAwesomeIcon icon={faBars} size="2x" />
            </button>
          </div>
          {/* Regular items */}
          <div className="hidden md:flex gap-7 grow ml-6 items-center">
            {navItems}
          </div>
          {/* Dropdown items */}
          <Collapse isOpened={isMenuOpen}>
            <div className="flex flex-col md:hidden gap-7 mt-6 text-start">
              {navItems}
            </div>
          </Collapse>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
