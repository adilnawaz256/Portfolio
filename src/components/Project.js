import url from "./Projecturl.json";
export default function Project() {
  const mystyle = {
    backgroundColor: "#EDF2FC",
  };
  return (
    <section className="project" id="project" style={mystyle}>
      <div className="container">
        <div className="row">
          <div className="col-12" data-aos="fade-down">
            <h2 className="title">Project</h2>
          </div>
          <div className="row">
            {url.map((items) => {
              return (
                <div
                  className="col-12 col-lg-4"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div className="card mt-20">
                    <a href={items.projecturl} target="_blank"  rel="noreferrer">
                    <img
                      src={items.imageurl}
                      alt={items.alt}
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <button
                        className="btn btn-primary"
                        onClick={() =>
                          window.open(
                            items.projecturl
                          )
                        }
                      >
                        Github
                      </button>
                      
                    </div>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
