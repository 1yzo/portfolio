import React, { Component } from 'react';
import AboutSection from './AboutSection'
import Header from './Header';

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<AboutSection />
      		</div>
    	);
 	}
}

export default App;