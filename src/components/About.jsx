import styles from './About.module.scss'

const About = () => (
  <div id="about">
    <h1 className="text-3xl">About Me</h1>
    <div className="px-7 pt-4 pb-14 max-md:px-2">
      <ul className="list-disc pl-5">
        <li>Software Engineer from Romania🇷🇴</li>
        <li>Passionate about problem solving</li>
        <li>Obsessed with clean code</li>
        <li>Most excited when solving problems others couldn't solve</li>
      </ul>

      <h2 className="text-xl mt-4">Changelog</h2>
      <table className="w-full">
        <tbody>
          <tr className={styles.professional}>
            <td>&bull;</td>
            <td>April 2023</td>
            <td>
              Joined <a href="https://neon.tech" target="_blank" rel="noreferrer"><em>Neon</em></a> 🐘
            </td>
          </tr>
          <tr className={styles.professional}>
            <td>&bull;</td>
            <td>August 2022</td>
            <td>
              Funemployment: created <em>this website</em>,
              contributed to <a href="#w3champions"><em>w3champions.com</em></a>,
              wrote my first <a href="https://medium.com/@georgemarcus92" target="_blank" rel="noreferrer"><em>medium article</em></a>,
              created <a href="#lisudoku"><em>lisudoku.xyz</em></a>
            </td>
          </tr>
          <tr className={styles.personal}>
            <td>&bull;</td>
            <td>July 2022</td>
            <td>Got <em>married</em> 💍</td>
          </tr>
          <tr className={styles.personal}>
            <td>&bull;</td>
            <td>August 2021</td>
            <td>Moved to my own <em>apartment</em> 🏠</td>
          </tr>
          <tr className={styles.personal}>
            <td>&bull;</td>
            <td>April 2019</td>
            <td>Started <em>climbing</em> 🧗</td>
          </tr>
          <tr className={styles.professional}>
            <td>&bull;</td>
            <td>April 2018</td>
            <td>Created <a href="#bucevschibot"><em>BucevschiBot</em></a></td>
          </tr>
          <tr className={styles.professional}>
            <td>&bull;</td>
            <td>October 2017</td>
            <td>Co-published <a href="#playrps"><em>playrps.win</em></a></td>
          </tr>
          <tr className={styles.professional}>
            <td>&bull;</td>
            <td>August 2016</td>
            <td>My first full-time job at <em>Take Off Labs</em> 🚀</td>
          </tr>
          <tr className={styles.professional}>
            <td>&bull;</td>
            <td>July 2016</td>
            <td>Graduated from the <em>West University of Timișoara</em> (MSc)</td>
          </tr>
          <tr className={styles.professional}>
            <td>&bull;</td>
            <td>August 2015</td>
            <td>Internship at <em>Palantir</em> in Palo Alto</td>
          </tr>
          <tr className={styles.professional}>
            <td>&bull;</td>
            <td>July 2015</td>
            <td>Contributed to <a href="#infoarena"><em>infoarena.ro</em></a></td>
          </tr>
          <tr className={styles.professional}>
            <td>&bull;</td>
            <td>May 2014</td>
            <td>Internship at <em>Facebook</em> in London</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
)

export default About
