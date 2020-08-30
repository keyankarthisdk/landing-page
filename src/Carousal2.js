import './custom1.css'
import React from 'react';




const Carousel2 = () => {
  const [selectedIdx, setSelectedIdx] = React.useState(0);
  const [slideOrder, setSlideOrder] = React.useState(['s4', 's5', 's1', 's2', 's3']);
  const [slideStyles, setSlideStyles] = React.useState({});

  const rotate = (slides) => {
    const [s1, s2, s3, s4, s5] = slides;
    setSlideStyles({
      [s1]: { transform: 'translateX(-60rem)', opacity: 0 },
      [s2]: { transform: 'translateX(-30rem)', opacity: 1 },
      [s3]: { transform: 'translateX(0)', opacity: 1 },
      [s4]: { transform: 'translateX(30rem)', opacity: 1 },
      [s5]: { transform: 'translateX(60rem)', opacity: 0 },
    });
    setSlideOrder(slides);
  };

  // rotate slides left by n spaces: e.g. 2 spaces - [1, 2, 3, 4, 5] -> [3, 4, 5, 1, 2]
  const rotateLeft = (spaces = 1) => {
    const s = slideOrder.map((_, i) => slideOrder[(i + spaces) % slideOrder.length]);

    setSelectedIdx((selectedIdx + spaces) % 5);
    rotate(s);
  };

  // rotate slides right by n spaces: e.g. 2 spaces - [1, 2, 3, 4, 5] -> [4, 5, 1, 2, 3]
  const rotateRight = (spaces = 1) => {
    const s = slideOrder.reduce((result, slide, i) => {
      result[(i + spaces) % slideOrder.length] = slide;
      return result;
    }, []);

    setSelectedIdx(4 - ((4 - selectedIdx + spaces) % 5));
    rotate(s);
  };

  const handleDotClick = idx => {
    if (idx > selectedIdx) {
      rotateLeft(idx - selectedIdx);
    } else if (idx < selectedIdx) {
      rotateRight(selectedIdx - idx);
    }
  };

  return (
    <div className="carousel-wrap">
      <div className="carousel-container">
        <button className="carousel-btn prev-btn" onClick={() => rotateLeft()}>
          <i className="carousel-btn__arrow left" />
        </button>
        <ul className="carousel-slide-list">
          {slides.map((slide, i) => (
            <CarouselSlideItem
              key={slide.id}
              slide={slide}
              style={slideStyles[`s${slide.id}`]}
              active={selectedIdx === i}
              className={`carousel-slide-item s${slide.id}`}
            />
          ))}
        </ul>
        <button className="carousel-btn next-btn" onClick={() => rotateRight()}>
          <i className="carousel-btn__arrow right" />
        </button>
      </div>
      <div className="carousel-dots">
        {slides.map((_, i) => {
          const className = selectedIdx === i ? 'dot active' : 'dot';
          return (
            <button
              key={i}
              className={className}
              onClick={() => handleDotClick(i)}
            />
          );
        })}
      </div>
    </div>
  );
};


const CarouselSlideItem = ({ slide, style, className, active }) => (
  <li className={className} style={style}>
    <a className="carousel-slide-item__img-link">
      <img
        src={slide.image}
        className={active ? "active" : ""}
        alt={slide.id}
      />
    </a>
    <div className="carousel-slide-item__body">
      <h4>{slide.title}</h4>
      <p>{slide.desc}</p>
    </div>
  </li>
);

const slides = [
  {
    id: 1,
    
    desc: 'Words with Chai" by Prajakta Hebbar',
    image: "https://static.wixstatic.com/media/87da74_5e32da0fda8a4037a676b5ae10ada19e~mv2.jpeg/v1/fill/w_233,h_233,al_c,q_80,usm_0.66_1.00_0.01/Prajakta.webp"
  },
  {
    id: 2,
   
    desc: '"YNP Diaries" by Yogesh Patil.', 
    image: "https://static.wixstatic.com/media/87da74_4d74ba1137fd42f4b0567759a7b910bb~mv2.png/v1/fill/w_222,h_223,al_c,q_85,usm_0.66_1.00_0.01/Yogesh%20Patil.webp"
  },
  {
    id: 3,

    desc:
      '"Purple Patch Chronicles" by Darryl Paul',

    image: "https://static.wixstatic.com/media/87da74_60d149dba14b41fab46cc3d6bece8a66~mv2.png/v1/fill/w_232,h_233,al_c,q_85,usm_0.66_1.00_0.01/Darryl.webp"
  },
  {
    id: 4,
    
    desc: `Puneri Katta" by Rishi & Dhanashree`,

    image: "https://static.wixstatic.com/media/87da74_f6a60b74ac8a48d9bf58f6d1cefb181b~mv2.jpeg/v1/fill/w_244,h_233,al_c,q_80,usm_0.66_1.00_0.01/Dhanashree-Rishi.webp"
  },
  {
    id: 5,
    
    desc:
      '"Good Food & Vibes" by Ambika Choudhury',

    image: "https://static.wixstatic.com/media/87da74_3d11244c0eb54a1688e969bc0c7c7444~mv2.jpeg/v1/fill/w_236,h_238,al_c,q_80,usm_0.66_1.00_0.01/WhatsApp%20Image%202020-06-01%20at%2021_16_47_jp.webp"
  }
];

export default Carousel2;