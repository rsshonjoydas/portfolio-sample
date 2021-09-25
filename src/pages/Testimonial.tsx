import work1 from "../images/work1.jpg";
import work2 from "../images/work2.jpg";
import work3 from "../images/work3.jpg";
import work4 from "../images/work4.jpg";
import work5 from "../images/work5.jpg";
import work6 from "../images/work6.jpg";

const Testimonial = () => {
  return (
    <section className="work section" id="work">
      <h2 className="section-title">Work</h2>

      <div className="work__container bd-grid">
        <div className="work__img">
          <img src={work1} alt="" />
        </div>
        <div className="work__img">
          <img src={work2} alt="" />
        </div>
        <div className="work__img">
          <img src={work3} alt="" />
        </div>
        <div className="work__img">
          <img src={work4} alt="" />
        </div>
        <div className="work__img">
          <img src={work5} alt="" />
        </div>
        <div className="work__img">
          <img src={work6} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
