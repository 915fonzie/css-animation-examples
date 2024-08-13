import { useEffect, useRef, useState } from 'react'
import image1 from './assets/1.jpg'
import image2 from './assets/2.png'
import image3 from './assets/3.jpg'
import image4 from './assets/4.jpg'
import image5 from './assets/5.jpg'
import image6 from './assets/6.jpg'
import image7 from './assets/7.png'
import image8 from './assets/8.jpg'
import image9 from './assets/9.jpg'
import image10 from './assets/10.png'
import './css/index.css'
function App() {

  const [isVisible, setIsVisible] = useState(false)
  const bannerRef = useRef()

  useEffect(() => {
    const handleScroll = () => {
      if (bannerRef.current) {
        const rect = bannerRef.current.getBoundingClientRect()
        const {innerHeight} = window
        const isVisible = (
          rect.top <= 0.5 + (innerHeight / 1.5) &&
          rect.left >= 0 &&
          rect.bottom >= 1 + (innerHeight / 1.5)
        );
        setIsVisible(isVisible)
      }
    }
    window.addEventListener('scroll', handleScroll)
    // Initial check on component mount
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <div className={`banner ${!isVisible && "not-visible"}`} ref={bannerRef}>
        <h1>Image Carousel</h1>
        <ul style={{"--quantity": 10}}>
          <li style={{"--index": 1}}><img src={image1} alt='pokemon art'/></li>
          <li style={{"--index": 2}}><img src={image2} alt='pokemon art'/></li>
          <li style={{"--index": 3}}><img src={image3} alt='pokemon art'/></li>
          <li style={{"--index": 4}}><img src={image4} alt='pokemon art'/></li>
          <li style={{"--index": 5}}><img src={image5} alt='pokemon art'/></li>
          <li style={{"--index": 6}}><img src={image6} alt='pokemon art'/></li>
          <li style={{"--index": 7}}><img src={image7} alt='pokemon art'/></li>
          <li style={{"--index": 8}}><img src={image8} alt='pokemon art'/></li>
          <li style={{"--index": 9}}><img src={image9} alt='pokemon art'/></li>
          <li style={{"--index": 10}}><img src={image10} alt='pokemon art'/></li>
        </ul>
      </div>
      <div className="slider">
        <h1>Image slider which stops on focus</h1>
        <ul style={{"--time": "20s", "--quantity": 10}}>
          <li style={{"--index": 1}}><img src={image1} alt='pokemon art'/></li>
          <li style={{"--index": 2}}><img src={image2} alt='pokemon art'/></li>
          <li style={{"--index": 3}}><img src={image3} alt='pokemon art'/></li>
          <li style={{"--index": 4}}><img src={image4} alt='pokemon art'/></li>
          <li style={{"--index": 5}}><img src={image5} alt='pokemon art'/></li>
          <li style={{"--index": 6}}><img src={image6} alt='pokemon art'/></li>
          <li style={{"--index": 7}}><img src={image7} alt='pokemon art'/></li>
          <li style={{"--index": 8}}><img src={image8} alt='pokemon art'/></li>
          <li style={{"--index": 9}}><img src={image9} alt='pokemon art'/></li>
          <li style={{"--index": 10}}><img src={image10} alt='pokemon art'/></li>
        </ul>
      </div>
      <div className="focus">
        <h1>Focus on Image</h1>
        <ul>
          <li><img src={image1} alt='pokemon art'/></li>
          <li><img src={image2} alt='pokemon art'/></li>
          <li><img src={image3} alt='pokemon art'/></li>
          <li><img src={image4} alt='pokemon art'/></li>
          <li><img src={image5} alt='pokemon art'/></li>
        </ul>
      </div>
      <div className="reveal">
        <h1>Reveal on Focus</h1>
        <ul>
          <li><img src={image1} alt='pokemon art'/></li>
          <li><img src={image2} alt='pokemon art'/></li>
          <li><img src={image3} alt='pokemon art'/></li>
          <li><img src={image4} alt='pokemon art'/></li>
          <li><img src={image5} alt='pokemon art'/></li>
          <li><img src={image6} alt='pokemon art'/></li>
          <li><img src={image7} alt='pokemon art'/></li>
          <li><img src={image8} alt='pokemon art'/></li>
          <li><img src={image9} alt='pokemon art'/></li>
          <li><img src={image10} alt='pokemon art'/></li>
        </ul>
      </div>
    </>
  )
}

export default App
