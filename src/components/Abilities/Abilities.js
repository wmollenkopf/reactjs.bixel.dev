import React from 'react';
import './Abilities.css';
import AbilityRow from './AbilityRow';

const Abilities = ({backgroundClass}) => {
	//const dummy = {"column1":[],"column2":[],"column3":[]}
	const languages = {"column1":["English (Native)"],"column2":["Japanese (~JLPT5)"],"column3":["Indonesian (Beginner)"]};
	const operatingSystems = {"column1":["Windows","Windows Server","Mac"],"column2":["Ubuntu","Arch Linux","Red Hat"],"column3":["OpenVMS","ESXi"]}
	const programmingScripting = {"column1":["PHP","NodeJS","HTML","JavaScript","Oracle PL/SQL","JSON"],"column2":["ASP.NET","XML","JSX","jQuery","Visual Basic.NET","CSS"],"column3":["Java","Visual Basic 6","Fortran 70/90/95","C/C++","Python","Ruby"]}
	const databases = {"column1":["Oracle","MySQL",],"column2":["PostgreSQL","SQL Server"],"column3":["MongoDB","Parse API"]}
	const skills = {"column1":["Bootstrap","ReactJS","UML & Case Diagrams"],"column2":["WordPress", "SASS/SCSS","Command Line Interface"],"column3":["MVC Pattern","Object Oriented Programming"]}
	const tools = {"column1":["Visual Studio Code","Sublime Text 3","Visual Studio", "Unity3D","MonoDevelop","Notepad++","Delphi/RAD Studio"],"column2":["Putty","MobaXTerm","Git","Subversion","SQL Developer","Adobe Photoshop","Paint.NET"],"column3":["Firefox","Webkit Browsers","TOAD Data Moddler","TOAD for Oracle","RTMC Pro","Campbell Loggernet","Microsoft Office"]}

	return (
		<div className={backgroundClass}>
			<div id="abilities" className="abilitiesContainer container">
				<h2>Abilities</h2>
				<blockquote className="blockquote lead">
					<p className="mb-0">&ldquo;Life without knowledge is death in disguise.&rdquo;</p>
					<footer className="blockquote-footer ">Talib Kweli</footer>
				</blockquote>
				<div className="text-center project-referal">
					<a href="https://github.com/wmollenkopf/reactjs.biri.me" className="btn btn-primary" target="_blank" rel="noopener noreferrer">See this project on Github</a>
				</div>
				<hr />

				<AbilityRow abilityName="Languages" abilityDataset={languages} />
				<hr />

				<AbilityRow abilityName="Operating Systems" abilityDataset={operatingSystems} />
				<hr />

				<AbilityRow abilityName="Programming/Scripting" abilityDataset={programmingScripting} />
				<hr />

				<AbilityRow abilityName="Databases" abilityDataset={databases} />
				<hr />

				<AbilityRow abilityName="Skills" abilityDataset={skills} />
				<hr />
				
				<AbilityRow abilityName="Tools" abilityDataset={tools} />
				<hr />
			</div>
		</div>

	);
}

export default Abilities;