import React from 'react'
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'

import './App.css';
function Content() {


return(

<div className="row">
  <div className="column1" >

<span id="content1">Start your own paid community. Starting is absolutely free.</span>
    <span id="content2"> <Button variant="danger" href=''>Register to run your community on Parva</Button></span>
  </div>

  <div className="column2" >

 <Image className='icon3' src="./work_chat.png" rounded />
  </div>
  
 
</div>

	);

}
export default Content;