import heroStyles from "@/app/styles/herosection.module.css";
import styles from "@/app/styles/common.module.css";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <main className={heroStyles.main_section}>
      <div className={styles.container}>
        <div className={styles.grid_two_section}>
          <div className={heroStyles.hero_content}>
            <h1>{`LET'S WATCH MOVE TOGETHER`}</h1>
            <p>
              From award-winning dramas to blockbuster action movies, we&apos;ve
              got you covered. Browse our selection of the latest and greatest
              movies, and find your new favorite today.
            </p>
            <Link href="/movie">
              <button>Explore Movies</button>
            </Link>
          </div>
          <div className={heroStyles.hero_image}>
            <Image
              src="/about1.svg"
              alt="Watching netflix"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;