import React from 'react';
// GSAP
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

export default function Stacks() {

    useGSAP(()=>{
        gsap.from('.flower-img',{
            rotate: -200,
            scrollTrigger: {
                trigger: '.stack',
                scroller: '.home',
                scrub: 2,
            }
        });

        gsap.from('.technologies',{
            opacity: 0,
            rotateY: 180,
            stagger: 0.1,
            scrollTrigger: {
                trigger: '.techs',
                scroller: '.home',
                start: 'top 65%',
            }
        })
    });

  return (
    <>
    <div className='stack'>
        <div className="flower">
            <div className="flower-img-div">
                <div className="flower-img"></div>
                <div className="flower-text">
                    <p>I Constantly try to Improve</p>
                    <p>My Tech Stack</p>
                </div>
            </div>
        </div>
        <div className="techs">
            <div className="tech-skills">
                <div className="line-one lines">
                    <div className="technologies">
                        <div className="html-icon tech-i"></div>
                        <p>HTML</p>
                    </div>
                    <div className="technologies">
                        <div className="css-icon tech-i"></div>
                        <p>CSS</p>
                    </div>
                    <div className="technologies">
                        <div className="js-icon tech-i"></div>
                        <p>JavaScript</p>
                    </div>
                    <div className="technologies">
                        <div className="react-icon tech-i"></div>
                        <p>ReactJS</p>
                    </div>
                    <div className="technologies">
                        <div className="next-icon tech-i"></div>
                        <p>NextJS</p>
                    </div>
                </div>
                <div className="line-two lines">
                    <div className="technologies">
                        <div className="tailwind-icon tech-i"></div>
                        <p>Tailwind CSS</p>
                    </div>
                    <div className="technologies">
                        <div className="node-icon tech-i"></div>
                        <p>NodeJS</p>
                    </div>
                    <div className="technologies">
                        <div className="firebase-icon tech-i"></div>
                        <p>Firebase</p>
                    </div>
                    <div className="technologies">
                        <div className="gsap-icon tech-i"></div>
                        <p>GSAP</p>
                    </div>
                </div>
                <div className="line-three lines">
                    <div className="technologies">
                        <div className="git-icon tech-i"></div>
                        <p>Git</p>
                    </div>
                    <div className="technologies">
                        <div className="github-icon tech-i"></div>
                        <p>GitHub</p>
                    </div>
                    <div className="technologies">
                        <div className="netlify-icon tech-i"></div>
                        <p>Netlify</p>
                    </div>
                    <div className="technologies">
                        <div className="vercel-icon tech-i"></div>
                        <p>Vercel</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
)
}
