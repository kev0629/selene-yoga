import React, { useEffect, useState } from "react";
import img from "../Images/daniel-roe-lpjb_UMOyx8-unsplash.jpg";
import StarButton from "./StarButton";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useDimension } from "../hooks/useDimension";
import { Card } from "./Card";
import Link from "next/link";

type Props = {
  posts: Article[];
};

export type CardProps = {
  img: any;
  title: string;
  subTitle: string;
  link?: any;
  id?: string;
};

type Article = {
  id: string;
  slug: string;
  coverImage: {
    url: string;
  };
  title: string;
  excerpt: string;
};

const News = ({ posts }: Props) => {
  const [percent, setPercent] = useState(100);
  const [center, setCenter] = useState(false);
  const [fullScreen, setFullScreen] = useState(false);

  const windowsWidth = useDimension();
  useEffect(() => {
    if (windowsWidth >= 1280) {
      setCenter(true);
      setPercent(25);
      setFullScreen(true);
    }
    if (windowsWidth >= 1024 && windowsWidth < 1280) {
      setCenter(true);
      setPercent(33);
      setFullScreen(false);
    }
    if (windowsWidth >= 768 && windowsWidth < 1024) {
      setCenter(true);
      setPercent(50);
      setFullScreen(false);
    } else if (windowsWidth < 768) {
      setCenter(false);
      setPercent(100);
      setFullScreen(false);
    }
  }, [windowsWidth]);
  return (
    <section>
      <Carousel
        showStatus={false}
        showThumbs={false}
        showIndicators={fullScreen ? false : true}
        emulateTouch={fullScreen ? false : true}
        showArrows={false}
        centerMode={center}
        centerSlidePercentage={percent}
      >
        {posts.slice(0, 4).map((post) => (
          <Card
            key={post.slug}
            img={post.coverImage.url}
            title={post.title}
            subTitle={post.excerpt}
            link={post.slug}
            id={post.id}
          />
        ))}
      </Carousel>
      <div className="flex justify-center">
        <Link href="/posts">
          <StarButton title="Voir plus d'articles" className="px-6 py-3 mt-4" />
        </Link>
      </div>
    </section>
  );
};

export default News;
