import React from "react";
import { getClassSourceName } from "../../utils/classSourceName";
import { filterJournal } from "../../utils/filterJournal";
import { formatDate } from "../../utils/formatDate";
import "./Desporto.css";

const Desporto = ({ artigosDesporto }) => {
  let pd = 0;
  return (
    <section className="desporto">
      <div className="container">
        <div className="section-heading d-grid">
          <h3 className="title-section">Desporto</h3>
          <div className="line-title-green"></div>
        </div>

        <div className="posts-desporto">
            {artigosDesporto && artigosDesporto.slice(0, 5).map((item) => {
              if (filterJournal(item)) {
                if(pd < 4){
                  pd++;
                  return <a href={item.url} target="blank" key={item.publishedAt}>
                  <div className="post">
                    <div className="post-img post-img-desporto">
                      <img
                        src={item.image} alt={item.title}
                        width={400}
                      />
                    </div>
                    <div className="post-content">
                      <span className={`source-name ${getClassSourceName(item.source.name)}`}>{item.source.name}</span>
                      <div className="title-post">
                        <h2>
                        {item.title}
                        </h2>
                      </div>
                      <span className="date">{formatDate(item.publishedAt)}</span>
                    </div>
                  </div>
                </a>
                }

              }
              return null;
            })}
          </div>
      </div>
    </section>
  );
};

export default Desporto;
