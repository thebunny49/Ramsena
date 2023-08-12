import './Section6.css'
const Section6 = () => {
  return (
    <div style={{backgroundColor: "#ff8811", width:"100%",marginTop:50, overflow:"hidden", display: "flex", justifyContent: "center",flexDirection:'column', alignItems: "center", }}>
    <p className='heading'> Our Team Members </p>
    <div style={{display:'flex',justifyContent: 'center'}}>
    <img src="./item.png" alt="" style={{width:"30%", height:"30%"}} />
    <img src="./item (2).png" alt="" style={{width:"30%", height:"30%"}} />
    <img src="./item (1).png" alt="" style={{width:"30%", height:"30%"}} />
    
    </div>
    <div style={{display:'flex',justifyContent: 'center',marginBottom:50,}}>
    <img src="./item (1).png" alt="" style={{width:"30%", height:"30%"}} />
    <img src="./item.png" alt="" style={{width:"30%", height:"30%"}} />
    <img src="./item (2).png" alt="" style={{width:"30%", height:"30%"}} />
    </div>
    <p className='heading' style={{marginTop:50,}}> Our Team Members </p>
    <img src="./group75.png" alt="" style={{width:"30%", height:"30%" ,marginBottom:50,}} />

<div className="footer" style={{width:"100%", height:200, backgroundColor:"black"}}>
<div className="footmain">
<div className="b1">
<h4 className='head' style={{color:"white"}}>Blockchain</h4>
<p className='s' style={{color:"white"}}>lithium</p>
<p className='s' style={{color:"white"}}>Ethereum API</p>
<p className='s' style={{color:"white"}}>Binance Smart Chain API</p>
<p className='s' style={{color:"white"}}>Polygon API</p>
</div>
<div className="b2">
<h4 className='head' style={{color:"white"}}>Resource</h4>
<p className='s' style={{color:"white"}}>Documentation</p>
<p className='s' style={{color:"white"}}>Guidance</p>
<p className='s' style={{color:"white"}}>Blog</p>
<p className='s' style={{color:"white"}}>lithium</p>
</div>
<div className="b3">
<h4 className='head' style={{color:"white"}}>Company</h4>
<p className='s' style={{color:"white"}}>Pricing</p>
<p  className='s' style={{color:"white"}}>About Us</p>
<p className='s' style={{color:"white"}}>Contact</p>
<p className='s' style={{color:"white"}}>lithium</p>
</div>
</div>
</div>

    </div>
  )
}

export default Section6