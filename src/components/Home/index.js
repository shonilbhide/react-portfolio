import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'

import './index.scss'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate-hover')
    const nameArray = ['I',' ','a','m',' ','S','h','o','n','i','l',' ','B','h','i','d','e']
    const jobArray = [
        'w',
        'e',
        'b',
        ' ',
        'd',
        'e',
        'v',
        'e',
        'l',
        'o',
        'p',
        'e',
        'r',
        '.',
      ]
    


 return (
    <>
    <div className='container home-page'>
        <div className='text-zone'>
            <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <AnimatedLetters letterClass={letterClass}
            strArray={nameArray}
            idx={13} />
            <br />
            <AnimatedLetters letterClass={letterClass}
            strArray={jobArray}
            idx={22} />
            </h1>
            <h2> Developer / ML enthusiast / Aspiring Data Scientist</h2>
            <Link to='/contact' className='flat-button'>CONTACT ME</Link>
        </div>
    </div>
    </>
 )
}

export default Home