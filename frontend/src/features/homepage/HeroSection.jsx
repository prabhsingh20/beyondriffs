import LinkCustom from "../../ui/LinkCustom";

function HeroSection() {
  return (
    <section className="bg-black">
      <div className="h-screen bg-hero bg-right bg-no-repeat text-white">
        <div className="flex flex-col gap-3 pl-24 pt-20">
          <h1 className="w-[600px] text-[64px] font-semibold leading-[80.76px] tracking-tight">
            Unlock your <span className="textGradient">Musical</span> Journey
          </h1>
          <p className="w-[590px] tracking-wider">
            We offers expert online courses in musical instruments, for
            beginners and seasoned musicians. Join our community and discover
            the magic of music.
          </p>
          <div className="mt-6 flex gap-8">
            <LinkCustom to="/trial" type="secondary">
              Book free trial
            </LinkCustom>
            <LinkCustom to="/" type="primary">
              Teach with us
            </LinkCustom>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
