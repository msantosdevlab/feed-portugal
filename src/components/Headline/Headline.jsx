import React from "react";
import { useState, useEffect } from "react";
import { getClassSourceName } from "../../utils/classSourceName";
import { filterJournal } from "../../utils/filterJournal";
import { formatDate } from "../../utils/formatDate";

import "./Headline.css";

const Headline = ({ artigosGeneral }) => {
  let pd = 0;
  return (
    <section className="headline">
      <div className="container d-grid">
        {artigosGeneral && artigosGeneral.slice(0, 1).map((item) => (
          <a
            href={item.url}
            target="blank"
            key={item.publishedAt}
          >
            <div
              className="col-principal-new"
              style={{
                backgroundImage: `url(${
                  item.image.slice(item.image.length - 22) ===
                  "?operations=fit(1200:)"
                    ? item.image.slice(0, -22)
                    : item.image
                })`,
              }}
            >
              <div className="overlay d-flex">
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
                  <span className="date">{formatDate(item.publishedAt)}</span>
                </div>
              </div>
            </div>
          </a>
        ))}

        <div className="col-headline-posts d-grid">
          {artigosGeneral && artigosGeneral.slice(1, 6).map((item) => {
            if (filterJournal(item)) {
              if(pd < 3){
                pd++;
              
              return <a href={item.url} target="blank" key={item.publishedAt}>
                  <div className="post">
                    <div className="post-headline">
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

                        <div className="title-post headline-title">
                          <h2>{item.title.substring(0,60)}</h2>
                        </div>
                        <span className="date">
                          {formatDate(item.publishedAt)}
                        </span>
                      </div>
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

export default Headline;
