import React from "react";

export default function HomeePage({ title }) {
  return (
    <div>
      <div className="homepageContainer">{title}</div>
      <div className="startContainer"></div>
    </div>
  );
}
