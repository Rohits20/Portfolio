import React , { useState }  from 'react'
import "../App.css";

const Footer = () => {
    const [active, setActive] = useState(false);

    const handleMouseOver = () => {
        setActive(true);
      };
    
      const handleMouseOut = () => {
        setActive(false);
      };
    
  return (
    <div style ={{}}>
        <div style ={{height :"0.1px" , width:"100%", backgroundColor:"gray" ,marginTop:"5%", marginBottom:"5%"}}>
        </div>
        <div style ={{fontSize:"17px" , marginBottom:"2%" , color :"white"}}>
        Monster Monster under my bed, come out and play cause I
        </div>
        <div style ={{fontSize:"40px" , marginBottom:"2%" , color :"white"}}>
            Need a friend!
        </div>
        <div style ={{fontSize:"22px" , marginBottom:"2%", color :"white"}}>
        Ever wanna get in touch with me, hire me or just hang out with me? Feel free to contact me any time, it can be by filling a form, emailing me, direct messaging on social media or... Yeah that's it, don't ever call me, I hate smart phones.
        </div>
        <div style ={{height :"0.1px" , width:"100%", backgroundColor:"gray" ,marginTop:"1%", marginBottom:"2%"}}>
        </div>
        <div style ={{width:"100%" , alignItems:"center" ,paddingBottom :"1.5%"}}>
        <div style ={{fontSize:"19px" ,  color :"white" , textAlign :"center" , display:"flex" ,alignItems:"center" , justifyContent:"center"}}>
      <div>
      © 2023 
        </div>
     <a style={{marginLeft:"8px" , marginRight:"8px"}}  onMouseOver={handleMouseOver}
         onMouseOut ={handleMouseOut}
         className={active ? "hoverName" : "unHoverName" } rel="noreferrer" target="_blank" href='https://github.com/Rohits20'>Rohit Singh</a>
     <div>
     All this shit is mine :)
     </div>
      </div>
        </div>
    </div>
  )
}

export default Footer