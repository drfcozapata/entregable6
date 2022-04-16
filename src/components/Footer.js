import React from 'react';
import '../styles/footer.css';

const Footer = () => {
	return (
		<div>
			<footer className="footer">
				<div className="container text-center">
					<h5>
						All rights reserved &copy; {new Date().getFullYear()} by Francisco
						Zapata
					</h5>
					<div>Redes Sociales</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
