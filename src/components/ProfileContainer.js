import React from 'react';

import ProfileHeader from './ProfileHeader';

export default function ProfileContainer(props) {
  const header = props.header || true;
  return (
    <div>
      {header &&
        <ProfileHeader {...props} />
      }
      {props.children}
    </div>
  );
}