import React, { Component } from 'react';
import AboutSection from './AboutSection'
import Header from './Header';
import SkillsSection from './SkillsSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<AboutSection />
				<SkillsSection />
				<ProjectsSection />
				<ContactSection />
      		</div>
    	);
 	}
}

export default App;