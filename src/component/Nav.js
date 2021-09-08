import React from 'react';
import NavLogo from '../assets/logo_gnb.svg';

const Nav = () => {
  return (
    <div className="nav_wrap">
      <div className="nav_category">
        <div className="logo_wrap">
          <img className="nav_logo" src={NavLogo} alt="nav logo" />
        </div>
        <div className="user_profile_wrap">
          {/* <img /> */}
          <span className="user_name">메이커이름</span>
        </div>
      </div>
    </div>
  );
};
export default Nav;
