import React, { useState } from "react";
import Data from "../data/persos.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import {useParams} from "react-router-dom"
import { Link } from "react-router-dom";

const Propriete = () => {
  const params = useParams()
  const id = params.id
  const data = Data.find((e) => e.uuid === id)

  const [item, setItem] = useState(0);

  return (
    <div className="property bg1">
      <Link to={"/agents"}>
        <FontAwesomeIcon className="icon-retour" icon={faChevronLeft} />
      </Link>

      {
        <div className="card-details">
          <div className="description">
            <div className="artwork">
                <div className="name">
                    <span>{data.displayName}</span>
                    <span>{data.displayName}</span>
                </div>
                <img src={data.bustPortrait} alt={`${data.displayName} portrait`} />
            </div>
            
            <div className="text">
              <h1 className="color2">{data.displayName}</h1>
              <div className="bio">
                <h2>Biographie</h2>
                <p>{data.description}</p>
              </div>
            </div>
          </div>

          <div className="spells">
            <div className="spell c-1">
              <h2 className="spell-name">{data.abilities[item].displayName}</h2>
              <div className="spell-desc">
                {data.abilities[item].description}
              </div>
            </div>
            <div className="illustration">
              <div className="video">
                <video
                  src={data.abilities[0].vid}
                  autoPlay
                  muted
                  loop
                  className={` ${item === 0 ? "active" : "non-active"} `}
                ></video>
                <video
                  src={data.abilities[1].vid}
                  autoPlay
                  muted
                  loop
                  className={` ${item === 1 ? "active" : "non-active"} `}
                ></video>
                <video
                  src={data.abilities[2].vid}
                  autoPlay
                  muted
                  loop
                  className={` ${item === 2 ? "active" : "non-active"} `}
                ></video>
                <video
                  src={data.abilities[3].vid}
                  autoPlay
                  muted
                  loop
                  className={` ${item === 3 ? "active" : "non-active"} `}
                ></video>
              </div>
              <div className="spell-choices">
                <button
                  onClick={() => setItem(0)}
                  className={`ab-1 ${item === 0 ? "bg" : ""}`}
                  value="1"
                >
                  <span>1</span>
                </button>
                <button
                  onClick={() => setItem(1)}
                  className={`ab-2 ${item === 1 ? "bg" : ""}`}
                  value="2"
                >
                  <span>2</span>
                </button>
                <button
                  onClick={() => setItem(2)}
                  className={`ab-3 ${item === 2 ? "bg" : ""}`}
                  value="3"
                >
                  <span>3</span>
                </button>
                <button
                  onClick={() => setItem(3)}
                  className={`ab-4 ${item === 3 ? "bg" : ""}`}
                  value="4"
                >
                  <span>4</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default Propriete;
