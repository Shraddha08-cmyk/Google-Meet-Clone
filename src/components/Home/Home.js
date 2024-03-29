import { Button, Divider, InputAdornment, TextField } from '@material-ui/core'
import { Keyboard, VideoCallOutlined } from '@material-ui/icons'
import React from 'react'
import './Home.css'

function Home({setRoomName, handleSubmit}) {

  const handleRoomNameChange = (e) => {
    setRoomName(e.target.value);
  }

  return (
    <div className='hero'>
      <div className="hero__left">
        <div className="hero__featureText">
          <h1 className="hero__title">
            Premium video meetings now free for everyone
          </h1>
          <p className="hero__subtitle">
            We re-engineered the service we built for secure buisness meetings,
            Google Meet, to make sure it free and available for all
          </p>
        </div>
        <div className="hero__buttons">
          <Button color='primary' variant='contained' className='hero__createBTN' onClick={handleSubmit} >
            <VideoCallOutlined />
            <p>New Meeting</p>
          </Button>
          <TextField className='hero__input' variant='outlined' placeholder='Enter a code or a link' onChange={handleRoomNameChange}
          InputProps={{
            startAdornment : (
              <InputAdornment position='start'>
                <Keyboard className='icon' />  
              </InputAdornment>
            )
          }} />
          <Button className='hero__joinBTN' >Join</Button>
        </div>
        <Divider />
        <p className="hero__learnMore">
          Learn more about Google Meet
        </p>
      </div>
      <div className="hero__right">
        <img className='hero__image' 
          src="https://www.gstatic.com/meet/google_meet_marketing_ongoing_meeting_grid_427cbb32d746b1d0133b898b50115e96.jpg" alt="Feature IMG" />
      </div>
    </div>
  )
}

export default Home