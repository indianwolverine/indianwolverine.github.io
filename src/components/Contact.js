import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <div className="contact container">
        <iframe
          title="contact"
          className="contact-form"
          src="https://docs.google.com/forms/d/e/1FAIpQLSdWx6C6dl6t7xium62XboaF58KcJjbH7PWW_i32zxEzbPVKsQ/viewform?embedded=true"
          width="760"
          height="1000"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading...
        </iframe>
      </div>
    );
  }
}

export default Contact;
