import React from 'react';
import "../styles/contact-section.css";

class ContactSection extends React.Component {
    state = {
        name: '',
        email: '',
        budget: '',
        details: ''
    };
    
    handleChange = (e) => {
        const { value, id } = e.target;

        const newState = {
            ...this.state,
        };
        newState[id] = value;

        this.setState(() => newState ); 
    }
    
    render() {
        return (
            <div className="contact-section">
                <div className="contact-section__content">
                    <form className="contact-form">
                        <label>Name</label>
                        <input
                            id="name"
                            type="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                        <label>Email</label>
                        <input
                            id="email"
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                        <label>Project Budget</label>
                        <input
                            id="budget"
                            type="text"
                            value={this.state.budget}
                            onChange={this.handleChange}
                        />
                        <label>Project Details </label>
                        <textarea
                            id="details"
                            type="text"
                            value={this.state.details}
                            onChange={this.handleChange}
                        />
                        <button>Send</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default ContactSection;