import React from 'react';

import ProfileContainer from "./ProfileContainer";

import './ProfileSkeleton.css';

export default function ProfileSkeleton() {
  return (
    <ProfileContainer header={false}>
      <div className="ProfileSkeleton">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </ProfileContainer>
  );
}