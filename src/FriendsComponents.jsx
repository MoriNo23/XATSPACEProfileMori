import { useState } from "react";
export function FriendsComponents({ ...monz }) {
  const [show, setShow] = useState(false);
  const backgroundImage = `url(src/assets/friends/${monz.Name}/banner.png)`;
  return (
    <article className="mt-3.5">
      <figure className="flex bg-neutral-600 rounded-3xl overflow-hidden">
        <a href={`https://xat.me/${monz.Name}`} className="m-4">
          <img
            src={monz.avatar}
            alt={monz.Name}
            className="avatar rounded-full w-15"
          />
        </a>
        <figcaption
          className="w-full text-neutral-700 text-shadow-[10px_10px_0px_#d4d4d4,20px_20px_0px_#e21313] font-extrabold bg-no-repeat bg-center bg-cover"
          style={{ backgroundImage }}
          onMouseEnter={() => setShow(false)}
          onMouseLeave={() => setShow(true)}
        >
          {!show && (
            <div className="span_blur">
              <span className="vibrate-3">{monz.Name}</span>
            </div>
          )}
        </figcaption>
      </figure>
    </article>
  );
}
