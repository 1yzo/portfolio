import React from 'react';
import "../styles/contact-section.css";

class ContactSection extends React.Component {
    state = {
        name: '',
        email: '',
        budget: '',
        details: '',
        error: '',
        success: false
    };
    
    handleChange = (e) => {
        const { value, id } = e.target;

        const newState = {
            ...this.state,
        };
        newState[id] = value;

        this.setState(() => newState ); 
    }

    handleSubmit = (e) => {
        e.preventDefault();
        for (let i of Object.keys(this.state)) {
            if (i !== 'error') {
                if (!this.state[i] && !this.state.error.includes(i)) {
                    this.setState((prevState) => ({ error: prevState.error + i }));
                } else if (this.state[i] && this.state.error.includes(i)) {
                    this.setState((prevState) => ({ error: prevState.error.replace(i, '') }));
                }
            }
        }

        if (this.state.name && this.state.email && this.state.budget && this.state.details ) {
            fetch('api/contact', {
                method: 'POST',
                body: JSON.stringify({
                    name: this.state.name,
                    email: this.state.email,
                    message: this.state.details,
                    budget: this.state.budget
                }),
                headers: { 'content-type': 'application/json' }
            }).then(() => this.setState(() => ({ 
                success: true,
                name: '',
                email: '',
                budget: '',
                details: ''
            })));
        }
    };

    resetSuccessStatus = () => {
        if (!this.success) {
            this.setState(() => ({ success: false }));
        }
    }
    
    render() {
        return (
            <div className="contact-section">
                <div className="contact-section__content">
                    <form className="contact-form" onSubmit={this.handleSubmit} onClick={this.resetSuccessStatus}>
                        <label
                            className={"contact-form__input" + (this.state.error.includes('name') ? ' contact-form__input--error' : '')}
                        >
                            Name
                        </label>
                        <input
                            id="name"
                            type="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                        <label
                            className={"contact-form__input" + (this.state.error.includes('email') ? ' contact-form__input--error' : '')}
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            type="text"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                        <label 
                            className={"contact-form__input" + (this.state.error.includes('budget') ? ' contact-form__input--error' : '')}
                        >
                            Project Budget
                        </label>
                        <input
                            id="budget"
                            type="text"
                            value={this.state.budget}
                            onChange={this.handleChange}
                        />
                        <label
                            className={"contact-form__input" + (this.state.error.includes('details') ? ' contact-form__input--error' : '')}
                        >
                            Project Details
                        </label>
                        <textarea
                            id="details"
                            type="text"
                            value={this.state.details}
                            onChange={this.handleChange}
                        />
                        <button className="loading-button">
                            {!this.state.success && 'Send'}
                            {this.state.success && 'Message sent 😄'}
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default ContactSection;