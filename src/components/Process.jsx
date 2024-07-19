import React from 'react'

const Process = () => {
  return (
      <div className='container section-continer process-info'>
          <h3 className='header-text'>Our Process</h3>
          <div className='process-list d-flex align-center justify-space-between'>
              <div className='process-item d-flex align-center justify-center flex-direction-column'>
                  <h4 className='process-step text-align-center font-22 font-w700'>Step 1</h4>
                  <p className='process-desc text-align-center font-18 font-w400'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor </p>
              </div>
              <div className='process-item d-flex align-center justify-center flex-direction-column'>
                  <h4 className='process-step text-align-center font-22 font-w700'>Step 2</h4>
                  <p className='process-desc text-align-center font-18 font-w400'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor </p>
              </div>
              <div className='process-item d-flex align-center justify-center flex-direction-column'>
                  <h4 className='process-step text-align-center font-22 font-w700'>Step 3</h4>
                  <p className='process-desc text-align-center font-18 font-w400'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor </p>
              </div>
          </div>
    </div>
  )
}

export default Process