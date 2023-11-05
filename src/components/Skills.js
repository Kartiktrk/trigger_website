import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>About Us</h2>
                        <p>
                          ACT established in the year 2010, comprises of aspiring students and elite faculty members of the Department of Computer Technology, Anna University, MIT campus. Our association is a rendezvous for all technology enthusiasts to communicate their ideas and excel in the field of computer science. ACT fosters a strong spirit of collaboration and partnering with the industry. Trigger is as an Intra College Technical Fest hosted by Association of Computer Technologists (ACT) under the Department of Computer Technology. It is conducted during the month of August. Students participate in Trigger to show case their talents on both technical and non-technical events which will boost them up in developing their skills. Collaboration among the students from other departments help them in attaining knowledge on various flavors of thrust areas.
                        </p>
                        
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
