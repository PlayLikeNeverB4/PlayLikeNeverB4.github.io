const Project = ({ id, name, url, imageSrc, imageClass, imageComponent: ImageComponent, children }) => (
  <div id={id} className="flex">
    <a href={url} target="_blank" rel="noreferrer"
    >
      <div className="w-40 h-28 flex justify-center">
        <div className="w-28 flex justify-center items-center">
          {ImageComponent ? <ImageComponent /> : (
            <img src={imageSrc}
              alt={name}
              className={imageClass}
            />
          )}
        </div>
      </div>
    </a>
    <div className="flex flex-col justify-center gap-1">
      <p className="text-2xl">
        <a href={url} target="_blank" rel="noreferrer">
          {name}
        </a>
      </p>
      {children}
    </div>
  </div>
)

const Projects = () => (
  <div id="projects">
    <h1 className="text-3xl">Projects</h1>
    <div className="flex flex-col gap-5 p-7 max-md:p-0">
      <Project id="lisudoku"
               name="lisudoku"
               url="https://lisudoku.xyz"
               imageSrc="/assets/lisudoku.png"
               imageClass="w-32 dark:bg-black"
      >
        <p>
          Created {' '}
          <a href="https://lisudoku.xyz" className="text-blue-400">lisudoku.xyz</a>,
          an <a href="https://github.com/orgs/lisudoku/repositories" className="text-blue-400">open source</a>
          {' '}
          sudoku website.
        </p>
        <p>
          Backend in Ruby on Rails, frontend in React and puzzle solver in Rust.
        </p>
      </Project>

      <Project id="w3champions"
               name="W3Champions"
               url="https://w3champions.com"
               imageSrc="/assets/w3champions.png"
               imageClass="w-32 dark:bg-black text-orange-300"
      >
        <p>
          Contributed to the w3champions.com open source project for 2 months.
        </p>
        <p>
          Touched the .NET and Node.js backends and the Vue.js frontend. Features varied from website changes to in-game changes.
        </p>
      </Project>

      <Project id="bucevschibot"
               name="BucevschiBot"
               url="https://www.facebook.com/BucevschiBot"
               imageSrc="/assets/bucevschibot.jpg"
      >
        <p>
          Created a Facebook Messenger bot that sends people reminders before programming competitions.
        </p>
      </Project>

      <Project id="playrps"
               name="playrps"
               url="https://playrps.win"
               imageComponent={() => (
                 <div className="text-2xl">
                   play
                   <span className="text-orange-300">rps</span>
                   .win
                 </div>
               )}
      >
        <p>
          Created playrps.win with a friend. It is a browser game similar to slither.io, but with Rocks, Papers and Scissors. Implemented most of the Node.js backend.
        </p>
      </Project>

      <Project id="infoarena"
               name="infoarena.ro"
               url="https://infoarena.ro"
               imageSrc="/assets/infoarena.png"
      >
        <p>
          Contributed to the infoarena.ro open source online judge, the most popular Romanian online judge by implementing a feature and preparing problems for contests.
        </p>
        <p>
          You can find the blog post when the feature was launched
          {' '}
          <a href="https://infoarena.ro/blog/statistici-problema" className="text-blue-400">
            here
          </a>
          .
        </p>
      </Project>

    </div>
  </div>
)

export default Projects
