import React from 'react';
import { Link } from 'gatsby';

const EventPost = ({ evento, featured }) => {

    return (
        <div key={evento.id} className='mb-4 col'>
            <Link to={evento.link} className='event-post'>
                <div className={`${featured ? 'featured' : ''}`}>
                    <div className='mb-1' style={{ width: '100%', height: 'auto' }}>
                        <img src={evento.image ?? evento.logo} className='img-fluid' alt={evento.title}/>
                    </div>
                    <h2 className='text-dark'>{evento.title}</h2>
                    <p>{evento.date}</p>
                </div>
            </Link>
        </div>
    );
};

export default EventPost;
