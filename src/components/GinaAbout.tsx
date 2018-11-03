import * as React from 'react';
import gina from '../static/gina.png';
import { InnerAppWrapper, StyledImg } from './Common';

const GinaAbout: React.SFC<{}> = () => (
  <InnerAppWrapper>
    <div className="light-background">
      <StyledImg>
        <img src={ gina }/>
      </StyledImg>
      <p className="title">My Story</p>
      <p>
        I looked around me to see what type of greatness I could become, only to find a general nervousness, 
        anxiety, and distracting mannerism in the behavior of many people who surrounded me. But because I was 
        paying attention, I was aware enough to notice that this, too, was my behavior. "Yuk! Now why would 
        I want to continue to be like that?" I could feel the yuk in my body and realized that I wasn’t moving 
        so well. So I took a deep breath, journeyed inward to make sure I was viewing things with heart and sensitivity, 
        then remembered that I should always share good personal understanding and kindness with everyone I meet. 
        Ahh… and I’ve been breathing deeply and moving fluidly ever since.
      </p>
      <p>
        Hi, I'm Gina Abrescy CMT, owner and practitioner at 3Energies Massage and Bodywork. I love working with my hands
        and learning about how things work, especially the human body and the mechanics of it all. And even though every 
        body is different, we intrinsically know that we are at our greatest when we are whole. I have confident hands 
        and a distinctive character that communicates clear intention of a respectful massage. Through observation and 
        with an ample understanding of human anatomy I work directly on hypertonic muscles using the necessary pace 
        and skillful technique for an effective release to gain maximum results that relax the whole body.
      </p>
      <p className="tagline">"Be great, be whole"</p>
    </div>
  </InnerAppWrapper>
)

export default GinaAbout;