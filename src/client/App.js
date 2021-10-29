import React, { useState } from 'react';

import Metadata from './Metadata';
import './styles/App.css';

export default () => {
  const [posts] = useState([
    {
      id: 1,
      name: 'Permpoon',
    },
    {
      id: 2,
      name: 'Wiraphorn',
    },
  ]);

  return (
    <Metadata>
      <div className="red-text">
        Hello
        {
        posts.map((post) => (
          <div>
            {post.id}
            {' '}
            <br />
            {post.name}
          </div>
        ))
      }
      </div>
    </Metadata>
  );
};
