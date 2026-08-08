import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import bannerImg1 from "~/assets/bannerImg/01.jpg";
import bannerImg2 from "~/assets/bannerImg/02.jpg";
import bannerImg3 from "~/assets/bannerImg/03.jpg";
import bannerImg4 from "~/assets/bannerImg/04.jpg";
import bannerImg5 from "~/assets/bannerImg/05.jpg";
import bannerImg6 from "~/assets/bannerImg/06.jpg";

const HeroBanner = () => {

    const bannerImages = [bannerImg1, bannerImg2, bannerImg3, bannerImg4, bannerImg5, bannerImg6];

    return (
        <Carousel
            autoPlay
            infiniteLoop
            showStatus={false}
            showThumbs={true}
            className="text-center"
        >

            {bannerImages.map((img, index) => (
                <div key={index} className="relative h-[80vh] md:h-screen">
                    <img
                        src={img}
                        className="h-full w-full object-cover"
                        alt="banner"
                    />
                </div>
            ))}
        </Carousel>
    )
}
export default HeroBanner