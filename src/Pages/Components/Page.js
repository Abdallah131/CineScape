import React from 'react';
import { Link } from 'react-router-dom';

export default function Page(props) {
    return (
      <Link to={`/Main/${props.number}`}>
        <div className='Page'>
          <p>{props.number}</p>
        </div>
      </Link>
    )
}
