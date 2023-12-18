import { Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const Card = ({ title, description, imageSrc }) => {
  return (
    <article className='card'>
      <div className='image-wrapper'>
        <Image src={imageSrc} />
      </div>
      <div className='content-wrapper '>
        <Heading as='h3' size='sm' marginBottom={4} marginTop={2}>
          {title}
        </Heading>
        <Text marginBottom={2} textColor={'gray.600'} fontSize='sm'>
          {description}
        </Text>
        <button>
          <Text fontSize='xs'>
            See More <FontAwesomeIcon icon={faArrowRight} />
          </Text>
        </button>
      </div>
    </article>
  )
}

export default Card
