import React, { useState } from 'react'
import {
  Box,
  Card,
  Image,
  Heading,
  Text
} from 'rebass'
import { Flex, Box, Text, Heading, Image } from "rebass/styled-components";
import { videos } from './Videos'

export const WebDev = () => {
  const [isModal, setIsModal] = useState(false);

  return (
    <Flex mx={-2}>
    {videos.map(({ videoId, alt, className, src, copy }, i) =>
    <Box width={1 / 2} px={2}>
    <Text p={1} color='background' bg='primary'>
         
    </Text>
      </Box>
    )}
    </Flex>

  )
}

function Modal(props) {
  return (
    <div id='webDev'>
      <div id='Modal' className='modal'>
        <div className='video'>
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: '0' }}>
            <iframe src={`https://www.loom.com/embed/${props.currentModal}`} frameBorder="0" style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}></iframe>
          </div>
        </div>
        <button className='headerButton' id='closeModalButton' onClick={props.closeModal}>Close</button>
      </div>
    </div >
  )
}


/*
 <div id='web-dev-container'>
        <div id='web-dev'>
          <img
            id='baf453d4db5947d5b653480175c4c934'
            alt='twinthread-pricing-thumb'
            className='webdev-thumb'
            onClick={this.openModal}
            src='Images/twinthreadPricing.png'>
          </img>
          <div className='item-description'>
            <h4>TwinThread.com pricing page and submission form</h4>
          </div>

          <div className='more-to-come'>
            <h3 id='more-on-the-way'>More on the way, stay tuned...</h3>
          </div>
        </div>
        {this.state.modalDisplay ? <Modal closeModal={this.closeModal} currentModal={this.state.currentModal} /> : null}
      </div>

*/


