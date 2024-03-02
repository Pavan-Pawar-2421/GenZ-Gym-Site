import React from 'react';
import './Hero.css';
import Header from '../Header/Header';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';
import { motion } from 'framer-motion';
import NumberCounter from 'number-counter'

const Hero = () => {
  const transition = { type: 'spring', duration: 3 };

  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        <div className="the-best-ad">
          <motion.div
            initial={{ left: '238px' }}
            whileInView={{ left: '8px' }}
            transition={transition}
          ></motion.div>
          <span>The best fitness club in town</span>
        </div>

        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal </span>
            <span>Body</span>
          </div>

          <div>
            <span>
              Here we will help you to shape and build your ideal body and live up your life to fullest
            </span>
          </div>
        </div>

        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={100} delay='6' preFix="+"/>
            </span>
            <span>Expert Coaches</span>
          </div>

          <div>
            <span><NumberCounter end={798} start={578} delay='6' preFix="+"/></span>
            <span>Members Joined</span>
          </div>

          <div>
            <span><NumberCounter end={50} start={30} delay='6' preFix="+"/></span>
            <span>Fitness Programs</span>
          </div>
        </div>

        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>

      <div className="right-h">
        <button className="btn">Join Now</button>
        <motion.div
          className="heart-rate"
          initial={{ x: '80%' }}
          animate={{ x: 0 }}
          transition={{ ...transition, type: 'tween' }}
        >
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116bpm</span>
        </motion.div>
        <img src={hero_image} alt="" className="hero-image" />
        <motion.img
        initial={{right:'11rem'}}
        whileInView={{right:'20rem'}}
        transition={transition}
         src={hero_image_back} alt="" className="hero-image-back" />
        <motion.div
          className="calories"
          initial={{ x: '-80%' }}
          animate={{ x: 0 }}
          transition={{ ...transition, type: 'tween' }}
        >
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned </span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
