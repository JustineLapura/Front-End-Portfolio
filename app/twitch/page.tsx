import Project from '@/components/Project'
import React from 'react'
import twitchImg from "/public/twitch.jpg"

const page = () => {
  return (
    <>
      <Project
        projectImg={twitchImg}
        title="Twitch App"
        url='/twitch/demo-1'
        overview="A Twitch app is a software application that allows users to access and interact with the Twitch platform, which is a popular live streaming service primarily focused on video game streaming, eSports events, and creative content. The Twitch app provides a platform for users to watch live streams, engage with streamers and their communities, and discover a wide range of content related to gaming and creative endeavors."
        technologies={[
          "React",
          "Next Js",
          "Tailwind CSS",
          "Typescript",
          "MongoDB",
        ]}
      />
    </>
  )
}

export default page
