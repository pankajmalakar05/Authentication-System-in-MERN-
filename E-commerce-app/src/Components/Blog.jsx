import React from "react";
import "../App.css";

function Blog() {
  return (
    <>
      {/* -------------------- Hero Section -------------------- */}
      <section id="page-header" className="blog-header">
        <h2>#readmore</h2>
        <p>Read all case studies about our products!</p>
      </section>
      {/* -------------------- Blog Section -------------------- */}
      <section id="blog">
        <div className="blog-box">
          <div className="blog-img">
            <img src="/blog/b1.jpg" alt="Blog 1" />
          </div>
          <div className="blog-details">
            <h4>The Cotton - Jersey Zip-Up Hoodie</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
              qui distinctio, totam dolorum officiis beatae autem non.
            </p>
            <a href="#">CONTINUE READING</a>
          </div>
          <h1>13/01</h1>
        </div>

        <div className="blog-box">
          <div className="blog-img">
            <img src="/blog/b2.jpg" alt="Blog 2" />
          </div>
          <div className="blog-details">
            <h4>The Cotton - Jersey Zip-Up Hoodie</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
              qui distinctio, totam dolorum officiis beatae autem non.
            </p>
            <a href="#">CONTINUE READING</a>
          </div>
          <h1>14/06</h1>
        </div>

        <div className="blog-box">
          <div className="blog-img">
            <img src="/blog/b3.jpg" alt="Blog 3" />
          </div>
          <div className="blog-details">
            <h4>The Cotton - Jersey Zip-Up Hoodie</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
              qui distinctio, totam dolorum officiis beatae autem non.
            </p>
            <a href="#">CONTINUE READING</a>
          </div>
          <h1>15/02</h1>
        </div>

        <div className="blog-box">
          <div className="blog-img">
            <img src="/blog/b4.jpg" alt="Blog 4" />
          </div>
          <div className="blog-details">
            <h4>The Cotton - Jersey Zip-Up Hoodie</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
              qui distinctio, totam dolorum officiis beatae autem non.
            </p>
            <a href="#">CONTINUE READING</a>
          </div>
          <h1>16/07</h1>
        </div>

        <div className="blog-box">
          <div className="blog-img">
            <img src="/blog/b5.jpg" alt="Blog 5" />
          </div>
          <div className="blog-details">
            <h4>The Cotton - Jersey Zip-Up Hoodie</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
              qui distinctio, totam dolorum officiis beatae autem non.
            </p>
            <a href="#">CONTINUE READING</a>
          </div>
          <h1>17/01</h1>
          
        </div>
      </section>
      Pagination
      <section id="pagintion" className="section -p1">
        <a href="">1</a>
        <a href="">2</a>
        <a href=""> 
          <i className="fa-solid fa-arrow-right"></i>
        </a>
      </section>
    </>
  );
}

export default Blog;
