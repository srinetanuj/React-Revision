import React from 'react'

const Avatar = (props) => {
    const {name,src,rounded,hideName} = props;
  const  style = {
        border:"1px solid red",
        borderRadius: rounded ? "50%" : "15%"
    } 
    // if(rounded){
    //     style.borderRadius="50%"
    // } 
  return (
    <div>
      <img src={src} alt="Avatar_url" width="300px" style={style} />
      {hideName? <h1> </h1> : <h3>{name}</h3>}
    </div>
  )
}

export default Avatar
