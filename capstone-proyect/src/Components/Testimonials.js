import React from 'react';
import "./Testimonials.modules.css";

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: 'John Doe',
            comment: 'The food was amazing! I highly recommend this restaurant.',
        },
        {
            id: 2,
            name: 'Jane Smith',
            comment: 'Great service and delicious dishes. Will definitely come back!',
        },
        {
            id: 3,
            name: 'Mike Johnson',
            comment: 'The atmosphere is cozy and the staff is friendly. Loved it!',
        },
    ];

    return (
        <div className='testimonials'>
            <h2>Testimonials</h2>
            {testimonials.map((testimonial) => (
                <div className="testimonial" key={testimonial.id}>
                    <h3>{testimonial.name}</h3>
                    <p>{testimonial.comment}</p>
                </div>
            ))}
        </div>
    );
};

export default Testimonials;