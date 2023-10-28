import React, { useRef, useState } from "react";
import "./UserNavCard.css";
// import { List } from "./List";
import { UserNavData } from "./UserNavData";

const UserNavCard = () => {
  const [open, setOpen] = useState(false);

  const menuRef = useRef();
  const imgRef = useRef();

  window.addEventListener("click", (e) => {
    if (e.target !== menuRef.current && e.target !== imgRef.current) {
      setOpen(false);
    }
  });

  return (
    <div className="container">
      <div className="avatar">
        <button ref={imgRef} onClick={() => setOpen(!open)} />

        {open && (
          <div className="list">
            <ul>
              {UserNavData.map((val, key) => {
                return (
                  <li
                    id="list"
                    key={key}
                    onClick={() => {
                      window.location.pathname = val.link;
                    }}
                  >
                    <h4>{val.title}</h4>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserNavCard;
