import React from "react";
import customers from "../assets/customers";
import Avatar from "./avatar";

export function Avatars() {
  return (
    <div className="avatar-set">
      {/* <Avatar
        src="/avatars/001.png"
        alt="person with curly hair and a black T-shirt"
      />
      <Avatar src="/avatars/002.png" alt="person wearing a hijab and glasses" />
      <Avatar
        src="/avatars/003.png"
        alt="person with short hair wearing a blue hoodie"
      />
      <Avatar
        src="/avatars/004.png"
        alt="person with a pink mohawk and a raised eyebrow"
      /> */}
      {customers.map((avatar) => (
        <Avatar key={avatar.id} src={avatar.src} alt={avatar.alt} />
      ))}
    </div>
  );
}
