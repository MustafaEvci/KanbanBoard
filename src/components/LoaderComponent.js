import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const LoaderComponent = () => {
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}} >
      <CircularProgress style={{width:"20px",height:"20px"}} />
    </div>
  )
}

export default LoaderComponent