import React, {Component, Fragment, useState, useEffect} from 'react'

// class Hooks extends Component{
// 	state = {
// 		count: 0
// 	}

// 	tambah = (val) =>{
// 		this.setState({
// 			count: this.state.count + 1
// 		})
// 		// console.log(val)
// 	}

// 	componentDidMount(){
// 		document.title = 'Angka ke : '+this.state.count
// 	}

// 	componentDidUpdate(){
// 		setTimeout(()=>{
// 			document.title = 'Angka ke : '+this.state.count
// 		}, 3000)
// 	}

// 	componentWillUnmount(){
// 		document.title = 'React App'
// 	}

// 	render(){
// 		return(
// 			<Fragment>
// 			<br/>
// 			<br/>
// 				<p>Sekarang angka ke : {this.state.count}</p>
// 				<button onClick={this.tambah}>Tambah 1</button>
// 			</Fragment>
// 		)
// 	}
// }

function Hooks(){
	const [hitung, setHitung] = useState(1)
	const [count, setCount] = useState(0)

	useEffect(()=>{
		// document.title = 'You Clicked '+count+' Times'
		document.title = `You Clicked ${count} Times`
		return()=>{
			document.title = 'React App'
		}
	});

	return(
		<Fragment>
			<br/>
			<br/>
			<p>Sekarang angka ke : {count}</p>
			<p>Sekarang hitungan ke : {hitung}</p>
			<button onClick={()=>setCount(count + 1)}>Tambah 1</button>
			<button onClick={()=>setHitung(hitung + 1)}>Hitung 1</button>
		</Fragment>
	)
}

export default Hooks