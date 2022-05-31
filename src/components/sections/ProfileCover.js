import React from "react";
import cover from "../../images/profile_banner.png";

const ProfileCover = () => {
  return (
    <div className="h-60 w-full">
      <img
        src={cover}
        alt="cover"
        className="w-full h-full object-cover lg:object-center object-left"
      />
    </div>
  );
};

export default ProfileCover;
