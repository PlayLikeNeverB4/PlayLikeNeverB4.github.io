import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGem } from '@fortawesome/free-solid-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import TicTacToe from './TicTacToe'
import { useContext } from 'react'
import { ThemeContext, RED_FILTER, WHITE_FILTER } from '../theme'

const Skills = () => {
  const theme = useContext(ThemeContext)

  return (
    <div id="skills">
      <h1 className="text-3xl">Skills</h1>
      <div className="flex flex-col gap-y-7 p-7 pt-2">
        <div className="flex flex-wrap justify-center">
          <div className="h-36 w-1/2 sm:w-1/3 md:w-1/6 flex items-center justify-center">
            <img src="/assets/rails.svg"
                  alt="Ruby on Rails"
                  title="Ruby on Rails"
                  style={{
                    filter: RED_FILTER,
                    top: -10,
                  }}
                  className="h-16 relative"
            />
          </div>
          <div className="h-36 w-1/2 sm:w-1/3 md:w-1/6 flex justify-center items-center"
                title="React">
            <FontAwesomeIcon icon={faReact} size="5x" style={{ color: '#61dafb' }} />
          </div>
          <div className="h-36 w-1/2 sm:w-1/3 md:w-1/6 flex justify-center items-center"
                title="Postgres">
            <img src="/assets/postgres.svg" alt="Postgres" className="h-16 w-16" />
          </div>
          <div className="h-36 w-1/2 sm:w-1/3 md:w-1/6 flex justify-center items-center"
                title="jQuery">
            <img src="/assets/jquery.png" alt="jQuery" className="h-16 w-32"
              style={{ filter: theme === 'light' ? '' : WHITE_FILTER }}
            />
          </div>
          <div className="h-36 w-1/2 sm:w-1/3 md:w-1/6 flex justify-center items-center"
                title="C++">
            <img src="/assets/cpp.png" alt="C++" className="w-16" />
          </div>
          <div className="h-36 w-1/2 sm:w-1/3 md:w-1/6 font-bold text-5xl flex justify-center items-center"
                title="Algorithms">
            <div className="relative" style={{ top: -2 }}>
              O(1)
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <TicTacToe
            zero={() => <FontAwesomeIcon icon={faReact} style={{ color: '#61dafb', height: '100%' }} />}
            cross={() => <FontAwesomeIcon icon={faGem} style={{ color: 'red', height: '100%' }} />}
          />
          <svg className="w-28 ml-5" style={{ stroke: 'lightgrey', strokeWidth: 2 }}>
            <line x1="20" y1="70" x2="100" y2="100" />
            <line x1="20" y1="70" x2="27" y2="83" />
            <line x1="19" y1="71" x2="35" y2="67" />
          </svg>
          <span className="relative text-slate-400" style={{ top: '90px' }}>
            click me
          </span>
        </div>
        <div className="h-12 flex justify-center items-end">
          ...and experimented with many more
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="h-28 w-1/2 sm:w-1/3 md:w-1/6 flex justify-center items-center"
                title="node.js">
            <img src="/assets/nodejs.png"
                alt="node.js"
                className="h-16 dark-theme:bg-black" />
          </div>
          <div className="h-28 w-1/2 sm:w-1/3 md:w-1/6 flex items-center justify-center">
            <img src="/assets/mongodb.png"
                  alt="MongoDB"
                  title="MongoDB"
                  className="h-16 dark-theme:bg-black" />
          </div>
          <div className="h-28 w-1/2 sm:w-1/3 md:w-1/6 flex justify-center items-center"
                title="Vue.js">
            <img src="/assets/vuejs.png"
                alt="Vue.js"
                className="h-16 dark-theme:bg-black" />
          </div>
          <div className="h-28 w-1/2 sm:w-1/3 md:w-1/6 flex justify-center items-center"
                title="Rust">
            <img src="/assets/rust.png"
                alt="Rust"
                className="h-16 dark-theme:bg-black" />
          </div>
          <div className="h-28 w-1/2 sm:w-1/3 md:w-1/6 flex justify-center items-center"
                title="Java">
            <img src="/assets/java.png"
                alt="Java"
                className="h-16 dark-theme:bg-black" />
          </div>
          <div className="h-28 w-1/2 sm:w-1/3 md:w-1/6 flex justify-center items-center text-5xl"
                title=".NET">
            .NET
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
