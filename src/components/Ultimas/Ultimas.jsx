import React from "react";
import "./Ultimas.css";

import { getClassSourceName } from "../../utils/classSourceName";
import { filterJournal } from "../../utils/filterJournal";
import { formatDate } from "../../utils/formatDate";


// let str = "hello";
// str.split

const Ultimas = ({ artigosGeneral }) => {
  return (
    <section className="ultimas">
      <div className="container">
        <div className="section-heading d-grid">
          <h3 className="title-section">Últimas</h3>
          <div className="line-title-yellow"></div>
        </div>
        <div className="posts-ultimas">
          {artigosGeneral.slice(4, 12).map((item) => {
            if (filterJournal(item)) {
              return (
                <a href={item.url} target="blank" key={item.publishedAt}>
                  <div className="post d-flex">
                    <div className="post-img">
                      <img
                        src={item.image} alt={item.title}
                        width={350} height={195}
                      />
                    </div>
                    <div className="post-content">
                    <span className={`source-name ${getClassSourceName(item.source.name)}`}>{item.source.name}</span>

                      <div className="title-post">
                        <h2>
                        {item.title}
                        </h2>
                      </div>
                      <p className="description">
                      {item.description}
                      </p>
                      <span className="date">{formatDate(item.publishedAt)}</span>
                    </div>
                  </div>
                </a>
              );
            }

            return null;
          })}
        </div>
      </div>
    </section>
  );
};

export default Ultimas;
