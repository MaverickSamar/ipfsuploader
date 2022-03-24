import React from 'react'

const Download = () => {
  return (
        <div>
            <p>Geospatial.txt</p>
              <p>&nbsp;</p>
              <div id="list">
                <p>
                  <iframe src={`https://ipfs.io/ipfs/${this.state.ipfsHash}`} frameborder="0" height="400"
                  width="95%"></iframe></p>
                </div>
        </div>
  )
}

export default Download