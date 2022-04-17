import React from 'react';
import '../styles/footer.css';
import { ReactComponent as GitHub } from '../assets/github.svg';
import { ReactComponent as LinkedIn } from '../assets/linkedin.svg';
import { ReactComponent as Twitter } from '../assets/twitter.svg';
import { ReactComponent as Email } from '../assets/email.svg';

const Footer = () => {
	return (
		<div>
			<footer className="footer">
				<div className="container text-center">
					<h5>
						All rights reserved &copy; {new Date().getFullYear()} by Francisco
						Zapata
					</h5>
					<div className="socials">
						<div>
							<a
								href="https://github.com/drfcozapata"
								rel="noreferrer"
								target="_blank"
							>
								<GitHub />
							</a>
						</div>
						<div>
							<a
								href="https://www.linkedin.com/in/drfcozapata/"
								rel="noreferrer"
								target="_blank"
							>
								<LinkedIn />
							</a>
						</div>
						<div>
							<a
								href="https://twitter.com/drfcozapata"
								rel="noreferrer"
								target="_blank"
							>
								<Twitter />
							</a>
						</div>
						<div>
							<a
								href="mailto:drfcozapata@gmail.com"
								rel="noreferrer"
								target="_blank"
							>
								<Email />
							</a>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
