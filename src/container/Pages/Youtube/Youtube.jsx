import React, {Component, Fragment} from 'react';
import YoutubeComp from '../../../component/YoutubeComp/YoutubeComp';


export default class Youtube extends Component{
	render(){
		return(
			<Fragment>
				<h3>Youtube</h3>
				<hr/>
				<div>
					<YoutubeComp desc="Deskripsi 1" />
					<YoutubeComp desc="Deskripsi 2" />
					<YoutubeComp desc="Deskripsi 3" />
					<YoutubeComp />
				</div>
			</Fragment>
		)	
	}
}