import React from 'react';

const GoogleMap = () => {
    return (
        <div mt={10}>
            <div mt={4} mb={2} pl={4}>
        <div style={{ position: "relative" }}>
        <iframe
            title="This is a unique title"
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.646982604753!2d90.37067137516505!3d23.795582078639484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0cd02b0dc33%3A0x78371568fcfaed84!2sKrishibid%20Group!5e0!3m2!1sen!2sbd!4v1684823276760!5m2!1sen!2sbd" width="600" height="450"  style={{border:0}} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">

            </iframe>
        </div>
      </div>
        </div>
    );
};

export default GoogleMap;