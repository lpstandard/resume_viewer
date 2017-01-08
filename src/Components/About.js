import React, { Component } from 'react';

class About extends Component {
	render() {
		if(this.props.data){
      var name = this.props.data.name;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
      var resumedownload = this.props.data.resumedownload;
    }
		return (
			<section id="about">
			<div className="row">
				 <div className="three columns">
				 </div>
				 <div className="nine columns main-col">
						<h2>About Me</h2>
						<p>
							{bio}
						</p>
						<div className="row">
							 <div className="columns contact-details">
									<h2>Contact Me</h2>
									<p className="address">
										 <span>{email}</span>
						      </p>
							 </div>
							 <div className="columns download">
									<p>
										 <a href={resumedownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
									</p>
							 </div>
						</div> 
				 </div>
			</div>
	 </section>
		);
	}
}

export default About;
