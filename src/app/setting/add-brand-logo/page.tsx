"use client";

import React from "react";

const AddBrandLogo = () => {
  const URL =
    "https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/2.jpg";
  const hanldeDownlode = (url: string) => {
    const createTag = document.createElement("a");
    createTag.href = url;
    createTag.setAttribute("download", "saimun.jpg");
    document.body.appendChild(createTag);
    createTag.click();
    createTag.remove();
  };

  return (
    <div>
      <button onClick={() => hanldeDownlode(URL)}>Downlode</button>
    </div>
  );
};

export default AddBrandLogo;
