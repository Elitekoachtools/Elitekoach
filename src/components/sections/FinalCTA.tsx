import React from "react";
import { Button } from "../common/Button";
import { ArrowUpRight } from "lucide-react";

import Bmx from "../../assets/benefits/bmx.png";

const KIT_FORM_ID = "3fc17e1b18";

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 bg-brand-bg border-t border-white/5">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-10">
            <h2 className="section-title">Take the Leap</h2>
            <p className="text-xl text-white/50 max-w-md leading-relaxed">
              Learn from legends. Build your legacy. Start today.
            </p>
            <Button
              data-formkit-toggle={KIT_FORM_ID}
              variant="primary"
              className="!bg-brand-accent !text-brand-bg !rounded-lg !py-4 !px-8 !text-[15px] !font-black !w-fit group"
            >
              Join the Community{" "}
              <ArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Button>
          </div>

          <div className="flex-1 w-full">
            <div className="relative aspect-video rounded-[40px] overflow-hidden border border-white/5 shadow-2xl">
              <img
                src={Bmx}
                alt="BMX Leap"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
