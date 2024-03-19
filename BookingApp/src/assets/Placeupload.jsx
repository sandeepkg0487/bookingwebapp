import React from 'react'
const Placeupload = () => {
  return (
    <div>
    <div>
      <label htmlFor="file-upload-helper-text" value="Upload file" />
    </div>
    <FileInput id="file-upload-helper-text" helperText="SVG, PNG, JPG or GIF (MAX. 800x400px)." />
  </div>

  )
}

export default Placeupload
