import Image from "next/image";
import classes from "./hero.module.css";

function HeroComponent() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        {/* On the running website stuff in public folder is ignored and moved to the root */}
        <Image
          width={300}
          height={300}
          alt={"An image showing Daniil"}
          src={"/images/site/my-photo.jpg"}
        />
      </div>
      <h1>Hi I'm Daniil</h1>
      <p>This my personal website where I talk about my projects.</p>
    </section>
  );
}

export default HeroComponent;
