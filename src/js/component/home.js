import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import { navBar } from "./navbar.js";
import { Jumbotron } from "./jumbotron.js";
import { Card } from "./card.js";
import { Footer } from "./footer.js";

//create your first component
export function Home() {
	return (
		<div className="container">
			<div className="row">
				<navBar
					brandLink="https://www.hackthebox.eu/profile/141921"
					navImg="https://res-1.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/dgsrzgjf4paklpbom6uj"
					navLink1="https://www.hackthebox.eu/profile/141921"
					nameLink1="HacktheBox"
					navLink2="https://tryhackme.com/"
					nameLink2="TryHackMe!"
					navLink3="https://www.vulnhub.com/"
					nameLink3="Vulhub"
					navLink4="https://www.root-me.org"
					nameLink4="Root-Me"
				/>
			</div>

			<div className="container-fluid mx-0 py-0">
				<div className="row">
					<Jumbotron
						Title="Cybersecurity Rockz!"
						p1="We are the global leader in InfoSec Cyber Security certification programs like Certified Ethical Hacker and Computer Hacking Forensic Investigator"
						alink="https://www.hackthebox.eu/profile/141921"
						linkInfo="Get More Info?"
					/>
				</div>
				<div className="row">
					<div className="card-deck">
						<Card
							imgurl="https://pbs.twimg.com/media/EbO11k6XgAEaMjR.png"
							cardTitle="SANS CYBERSECURTY"
							cardBody="SANS provides intensive, immersion training designed to help you and your staff master the practical steps necessary for defending systems"
							btnUrl="https://www.sans.org/"
							btnInfo="Apply Now!"
						/>
						<Card
							imgurl="https://blog.elearnsecurity.com/wp-content/uploads/2018/06/OG_Image_NP-1024x538.png"
							cardTitle="eLEARN SECURITY PENTESTER"
							cardBody="Trusted by HR departments around the world, our certifications are scenario-based exams that prove your cyber security skills in the job market."
							btnUrl="https://elearnsecurity.com/"
							btnInfo="Apply Now!"
						/>
						<Card
							imgurl="https://hackr.io/blog/media/ec-council-certified-security-analyst-ecsa-penetration-testing.png"
							cardTitle="EC-COUNCIL CERTIFICATION"
							cardBody="Join us at one of the leading cybersecurity credentialing bodies. We have some of the most recognized companies as customers."
							btnUrl="https://www.eccouncil.org/"
							btnInfo="Apply Now!"
						/>
						<Card
							imgurl="https://www.hackerone.com/sites/default/files/_DSC6749_0.jpg"
							cardTitle="HACKERONE TEST YOUR SKILLS NOW!"
							cardBody="Reduce the risk of a security incident by working with the world's largest community of hackers. HackerOne offers bug bounty, VDP, & pentest solutions"
							btnUrl="https://www.hackerone.com/"
							btnInfo="Apply Now!"
						/>
					</div>
				</div>
			</div>
			<div className="myfooter">
				<Footer
					fooCopy="&#169;"
					fooLink="https://www.hackthebox.eu/profile/141921"
					fooText="Cibersecurity Rockz!"
				/>
			</div>
		</div>
	);
}
