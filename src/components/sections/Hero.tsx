import React from 'react';
import { Button } from '../common/Button';
import { ArrowUpRight } from 'lucide-react';

import tiktokImg from '../../assets/tiktok.png';
import youtubeImg from '../../assets/youtube.png';
import boxingImg from '../../assets/boxing.png';
import instaImg from '../../assets/insta.png';
import spotifyImg from '../../assets/spotify.png';
import businessmanImg from '../../assets/businessman.png';

import tiktokIcon from '../../assets/tiktok-icon.png';
import youtubeIcon from '../../assets/youtube-icon.png';
import instaIcon from '../../assets/insta-icon.png';
import spotifyIcon from '../../assets/spotify-icon.png';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-brand-bg">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/80?u=user${i}`}
                    className="w-10 h-10 rounded-full border-2 border-brand-bg object-cover"
                    alt=""
                  />
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex gap-0.5 text-brand-accent">
                    {[1, 2, 3, 4, 5].map(s => <span key={s} className="text-[10px]">★</span>)}
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-white/40">
                  Join +10,000 strong community
                </span>
              </div>
            </div>

            <h1 className="nike-heading">
              Learn Directly <br />
              From Your <br />
              Favourite <span className="text-brand-accent">Stars</span>
            </h1>

            <p className="text-brand-muted text-lg max-w-md leading-relaxed">
              Access elite coaches who've been there, done that and can help you do it too.
            </p>

            <Button variant="primary" className="!bg-brand-accent !text-brand-bg !rounded-lg !py-4 !px-8 !text-[15px] !font-black !w-fit group">
              Join the Community <ArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Button>
          </div>

          <div className="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-4">
            {/* Card 1: TikTok */}
            <div className="relative aspect-[4/5] sm:aspect-[4/3] rounded-3xl overflow-hidden group transform rotate-[-3deg] hover:rotate-0 transition-all duration-500 shadow-2xl">
                <img src={tiktokImg} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Theater" />
                <div className="absolute bottom-4 left-4 w-10 h-10 rounded-xl overflow-hidden border border-white/20 bg-brand-bg/50 backdrop-blur-sm p-1">
                    <img src={tiktokIcon} className="w-full h-full object-contain" alt="TikTok" />
                </div>
            </div>

            {/* Card 2: YouTube */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group transform translate-y-4 hover:translate-y-0 transition-all duration-500 shadow-2xl">
                <img src={youtubeImg} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Vlogger" />
                <div className="absolute top-4 right-4 w-10 h-10 rounded-xl overflow-hidden border border-white/20 bg-brand-bg/50 backdrop-blur-sm p-1">
                    <img src={youtubeIcon} className="w-full h-full object-contain" alt="YouTube" />
                </div>
            </div>

            {/* Card 3: Boxing */}
            <div className="relative aspect-[4/5] sm:aspect-[4/3] rounded-3xl overflow-hidden group transform rotate-[2deg] hover:rotate-0 transition-all duration-500 shadow-2xl">
                <img src={boxingImg} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Boxing" />
            </div>

            {/* Card 4: Insta */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group transform translate-x-4 hover:translate-x-0 transition-all duration-500 shadow-2xl">
                <img src={instaImg} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Instagram Model" />
                <div className="absolute top-4 left-4 w-10 h-10 rounded-xl overflow-hidden border border-white/20 bg-brand-bg/50 backdrop-blur-sm p-1">
                    <img src={instaIcon} className="w-full h-full object-contain" alt="Instagram" />
                </div>
            </div>

            {/* Card 5: Spotify */}
            <div className="relative aspect-square rounded-full overflow-hidden group transform -translate-y-8 rotate-[-5deg] hover:rotate-0 transition-all duration-500 shadow-2xl border-4 border-brand-bg">
                <img src={spotifyImg} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Singer" />
                <div className="absolute top-1/2 right-4 -translate-y-1/2 w-10 h-10 rounded-xl overflow-hidden border border-white/20 bg-brand-bg/50 backdrop-blur-sm p-1">
                    <img src={spotifyIcon} className="w-full h-full object-contain" alt="Spotify" />
                </div>
            </div>

            {/* Card 6: Businessman */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group transform translate-y-2 rotate-[3deg] hover:rotate-0 transition-all duration-500 shadow-2xl">
                <img src={businessmanImg} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Coach" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
