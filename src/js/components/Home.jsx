import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from './Navbar';
import Footer from './Footer';
import Jumbotron from './Jumbotron';
import Card from './Card';

const Home = () => {
	return (
		<div className="text-center">
	
            <Navbar/> 
		  	<Jumbotron/>
			<div className="d-flex gap-3 mx-3 py-5">
			<Card/>
		    <Card/>
			<Card/>
			<Card/>
			</div>
			<Footer/>
			
		</div>
	);
};

export default Home;