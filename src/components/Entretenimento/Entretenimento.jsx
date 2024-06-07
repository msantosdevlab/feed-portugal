import React from "react";
import "./Entretenimento.css";
import { getClassSourceName } from "../../utils/classSourceName";
import { filterJournal } from "../../utils/filterJournal";
import { formatDate } from "../../utils/formatDate";

const Entretenimento = ({ artigosEntretenimento }) => {
  let i = 0;
  return (
    <section className="entretenimento">
      <div className="container">
        <div className="section-heading d-grid">
          <h3 className="title-section">Entretenimento</h3>
          <div className="line-title-red"></div>
        </div>

        <div className="posts-entret">          
          {artigosEntretenimento && artigosEntretenimento.map((item) => {
            if (filterJournal(item)) {
              if(i < 6) {
                i++;
                return (
                  <a href={item.url} target="blank" key={item.publishedAt}>
                    <div className="post d-flex">
                      <div className="post-img">
                        <img src={item.image} alt={item.title} width={300} />
                      </div>
                      <div className="post-content">
                        <span
                          className={`source-name ${getClassSourceName(
                            item.source.name
                          )}`}
                        >
                          {item.source.name}
                        </span>

                        <div className="title-post">
                          <h2>{item.title}</h2>
                        </div>
                        <span className="date">
                          {formatDate(item.publishedAt)}
                        </span>
                      </div>
                    </div>
                  </a>
                );
              }
            }
            return null;
          })}
        </div>
      </div>
    </section>
  );
};

export default Entretenimento;
