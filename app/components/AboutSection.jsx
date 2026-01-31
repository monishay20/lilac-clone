import "./AboutSection.css";

export default function AboutSection() {
  return (
    <section className="about">
      {/* LEFT CONTENT */}
      <div className="about-left">
        <h1>Hi, I’m Lilac.</h1>

        <p>
          I'm committed to providing a safe and supportive environment where we
          can explore your thoughts, feelings, and behaviors. With empathy and
          guidance, we'll work together to navigate the challenges life throws
          your way.
        </p>

        <button className="about-btn">
          LET'S CHAT <span>→</span>
        </button>
      </div>

      {/* RIGHT IMAGES */}
      <div className="about-right">
        <img
          src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/9a77a6f2-1c50-4582-a5c1-5ec0dc2e94e8/daiga-ellaby-Ct6LBZHaOSc-unsplash.jpg?format=2500w"
          alt="flowers"
          className="about-main-img"
        />

        <img
          src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/9f889e1b-ba2b-4a6d-92e9-767dd3db67ae/lilac+template+white+lilac.jpeg?format=2500w"
          alt="flowers"
          className="about-small-img"
        />
      </div>
    </section>
  );
}
