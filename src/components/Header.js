import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons'
import { Box, HStack } from '@chakra-ui/react'

const socials = [
  {
    icon: faEnvelope,
    url: 'https://www.linkedin.com/',
  },
  {
    icon: faGithub,
    url: 'https://github.com',
  },
  {
    icon: faLinkedin,
    url: 'https://www.linkedin.com/',
  },
  {
    icon: faMedium,
    url: 'https://medium.com/',
  },
  {
    icon: faStackOverflow,
    url: 'https://stackoverflow.com/',
  },
]

const Header = () => {
  const [direction, setDirection] = useState('')
  const position = useRef(0)

  const handleClick = (anchor) => {
    const id = `${anchor}-section`
    const element = document.getElementById(id)
    // const yOffset = -96;
    // const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
      // window.scrollTo({top: y, behavior: 'smooth'})
    }
  }

  const handleScroll = () => {
    const dir = position.current - window.scrollY < 0 ? 'down' : 'up'
    setDirection(dir)
    position.current = window.scrollY
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Box
      position='fixed'
      top={0}
      left={0}
      right={0}
      transform={'auto'}
      translateY={direction === 'down' ? -200 : 0}
      transitionProperty='transform'
      transitionDuration='.8s'
      transitionTimingFunction='ease-in-out'
      backgroundColor='#18181b'
    >
      <Box color='white' maxWidth='1280px' margin='0 auto'>
        <HStack
          px={16}
          py={4}
          justifyContent='space-between'
          alignItems='center'
        >
          <nav>
            <ul className='social-media-links'>
              {socials.map((social, index) => (
                <li key={index}>
                  <a href={social.url} target='_blank'>
                    <FontAwesomeIcon icon={social.icon} size='2x' />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href='#projects' onClick={() => handleClick('projects')}>
                Projects
              </a>
              <a href='#contact-me' onClick={() => handleClick('contactme')}>
                Contact Me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  )
}
export default Header
