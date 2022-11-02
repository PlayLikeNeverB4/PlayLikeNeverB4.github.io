import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons'

const App = () => (
  <div>
    <header className="px-5 py-3 border">
      <nav className="flex justify-between">
        <div className="h-10 flex gap-7 items-end">
          <a href="index.html" className="text-4xl font-bold">
            George Mărcuș
          </a>
          <a href="./CVGeorgeMarcus.pdf" target="_blank" className="text-2xl">
            CV
          </a>
          <a href="./about" className="text-2xl">
            About
          </a>
        </div>
        <div className="flex gap-2">
          <a href="https://www.linkedin.com/in/george-marcus-34398478" target="_blank" style={{ color: '#0A66C2' }}>
            <FontAwesomeIcon icon={faLinkedin} size="3x" />
          </a>
          <a href="https://github.com/PlayLikeNeverB4" target="_blank">
            <FontAwesomeIcon icon={faSquareGithub} size="3x" />
          </a>
        </div>
      </nav>
    </header>
    <main className="p-5">
    </main>
  </div>
)

export default App;
