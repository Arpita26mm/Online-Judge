export const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>
                FROM HELLO WORLD!!! TO BECOMING WARRIORS IN YOUR CODING JOURNEY
              </p>
              <h1>WELCOME TO CODIFY</h1>
              <h2>LET'S CODIFY IT</h2>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                asperiores reprehenderit, provident incidunt deleniti cum et
                repellat! At ratione unde culpa, recusandae voluptatum ipsam
                nihil magni sint, dicta laborum distinctio.
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">connect now</button>
                </a>
                <a href="/services">
                  <button className="btn secondary-btn">Learn more</button>
                </a>
              </div>
            </div>
            {/*hero images*/}
            <div className="hero-image">
              <img
                src="/images/logo.jpg"
                alt="coding together"
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>
      {/*2nd section*/}
      <section className="section-analytics">
        <div className="container grid grid-four-cols">
          <div className="div1">
            <h2>50+</h2>
            <p>registered companies</p>
          </div>
          <div className="div1">
            <h2>1000+</h2>
            <p>Happy Clients</p>
          </div>
          <div className="div1">
            <h2>500+</h2>
            <p>Well Known Developers</p>
          </div>
          <div className="div1">
            <h2>24/7</h2>
            <p>Service</p>
          </div>
        </div>
      </section>
      {/*3rd section*/}
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          {/*hero images*/}
          <div className="hero-image">
            <img
              src="/images/logo.jpg"
              alt="coding together"
              width="400"
              height="500"
            />
          </div>
          {/*hero content*/}
          <div className="hero-content">
            <p>
              FROM HELLO WORLD!!! TO BECOMING WARRIORS IN YOUR CODING JOURNEY
            </p>
            <h1>WELCOME TO CODIFY</h1>
            <h2>LET'S CODIFY IT</h2>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              asperiores reprehenderit, provident incidunt deleniti cum et
              repellat! At ratione unde culpa, recusandae voluptatum ipsam nihil
              magni sint, dicta laborum distinctio.
            </p>
            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">connect now</button>
              </a>
              <a href="/services">
                <button className="btn secondary-btn">Learn more</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
