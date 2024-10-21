import React from "react";

export default function CardWithImgOverlay({
  imgSrc,
  title,
  description,
  click,
}) {
  return (
    <div className="card bg-base-100 image-full w-66 shadow-xl hover:shadow-2xl">
      <figure>
        <img src={imgSrc} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="font-bold">{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={click}>
            Go ➡️
          </button>
        </div>
      </div>
    </div>
  );
}
