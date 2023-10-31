import React from 'react'

function About() {
  let stl = {
    color: 'white',
  }
  return (
    <div className='container my-3'>
      <h1 style={stl}>About us</h1>
      <p style={stl}>
        Our cutting-edge agricultural solution brings together two crucial stakeholders:
        Farmers and Agricultural Experts. This innovative app and web-based platform
        empower farmers to combat crop diseases effectively while harnessing the
        expertise of professionals.
        Farmers, as primary users, can effortlessly capture images of their afflicted crops
        and provide location details. Our state-of-the-art deep learning model, driven by
        Convolutional Neural Networks (CNNs), rapidly diagnoses diseases and offers
        initial solutions. To ensure accuracy, notifications are dispatched to available
        experts for validation, allowing them to provide alternative solutions if necessary.
        Anticipating the future, we are committed to enhancing user-friendliness. We plan
        to introduce discussion forums for issue-specific collaboration among users and
        implement multilingual support for broader accessibility.
        For the initial six months, we are delighted to offer this service free of charge,
        enabling farmers to experience its transformative benefits. Beyond this period, a
        subscription fee will be introduced to sustain and enhance the platform's
        capabilities.
      </p>
    </div>
  )
}

export default About
