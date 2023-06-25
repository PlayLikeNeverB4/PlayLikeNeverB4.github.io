import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Footer = () => (
  <footer className="py-7 flex flex-col gap-y-3">
    <div className="text-center">
      &copy; {[ ...new Set([ 2022, new Date().getFullYear() ]) ].join('-')} George Mărcuș
    </div>
    <div className="flex gap-10 justify-center">
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
  </footer>
)

export default Footer
