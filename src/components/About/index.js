import { useState } from 'react'
import {
  faGitAlt,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import AWS from '../../assets/images/aws.png'
import TF from '../../assets/images/tf.png'
import Mdb from '../../assets/images/mongodb.png'
import Python from '../../assets/images/python.png'
import SQL from '../../assets/images/sql.png'


const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate-hover')


  return (
    <>
        console.log({setLetterClass})
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a very ambitious front-end developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>
            If I need to define myself in one sentence that would be a family
            person, father of a beautiful daughter, a sports fanatic,
            photography enthusiast, and tech-obsessed!!!
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
            <img className="Python" src={Python} alt='Python' />
            </div>
            <div className="face2">
            <img className="AWS" src={AWS} alt='Amazon Web Services' />
            </div>
            <div className="face3">
            <img className="SQL" src={SQL} alt='sql' />
            </div>
            <div className="face4">
            <img className="mongo" src={Mdb} alt='Mongo DB' />
            </div>
            <div className="face5">
            <img className="tf" src={TF} alt='tensorflow' />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About