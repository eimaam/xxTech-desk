import React from 'react'
import { Fade } from 'react-awesome-reveal'

export default function Contact() {

   
  return (
    <div id='contactContainer'>
        <h2>CONTACT US: </h2>
        <div id="contact">
            <div className='contact--div'>
                <Fade direction="left">
                <div>
                    <div class="gmap_canvas">
                        <iframe className='g--map' width="200" height="200" id="gmap_canvas" src="https://maps.google.com/maps?q=Zone%205,%20Standard%20Plaza&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                        </iframe>
                    </div>
                </div>
                </Fade>

                <Fade direction="right">
            {/* Tally Forms */}
                <iframe
                    src="https://tally.so/embed/3NZqQ3?alignLeft=1&hideTitle=1&transparentBackground=1"
                    width="100%"
                    height="600"
                    frameBorder="0"
                    marginHeight="0 "
                    marginWidth="0"
                    title="CONTACT US"
                    className='tally--form'>
                </iframe>
                </Fade>
            </div>
        </div>
    </div>
  )
}
