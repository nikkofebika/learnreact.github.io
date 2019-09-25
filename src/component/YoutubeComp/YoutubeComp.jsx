import React from 'react';
import './YoutubeComp.css';

const YoutubeComp = (props) => {
  return(
      	<div className="gallery">
		    <img src="https://static.republika.co.id/uploads/images/inpicture_slide/mahasiswa-ubsi-meraih-medali-emas-di-por-provinsi-banten-2018-_181115221424-326.jpg" alt="Cinque Terre" width="600" height="400"/>
		  <p className="desc">{props.desc}</p>
		</div>
    )
}

YoutubeComp.defaultProps = {
	desc: 'Default deskripsi'
}

export default YoutubeComp;