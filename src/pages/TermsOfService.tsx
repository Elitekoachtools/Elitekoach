import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '../components/common/Button';
import { GlassCard } from '../components/common/GlassCard';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-bg">
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-brand-bg/80 border-b border-white/5">
        <div className="section-container flex items-center justify-between h-20">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.dispatchEvent(new CustomEvent('navigate', { detail: 'landing' }))}>
          <svg
            width="168"
            height="24"
            viewBox="0 0 168 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_730_930)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M167.027 12.8708V21.348H163.49V12.9676C163.49 12.2123 163.328 11.6525 163 11.2881C162.674 10.9238 162.131 10.7416 161.373 10.7416C160.337 10.7416 159.587 11.142 159.124 11.9428V21.348H155.589V2.56048H159.124V9.55739C160.061 8.43015 161.241 7.86653 162.659 7.86653C165.529 7.86653 166.985 9.53463 167.027 12.8708ZM101.598 21.504L97.0267 14.359L95.1194 16.4143V21.504H91.4473V3.69573H95.1194V11.7687L96.7306 9.55401L101.268 3.69573H105.783L99.4577 11.6092L105.965 21.504H101.598ZM120.231 19.665C119.1 20.8911 117.58 21.504 115.671 21.504C113.762 21.504 112.238 20.8929 111.099 19.6708C109.964 18.4448 109.397 16.7806 109.397 14.6779V14.5185C109.397 13.2052 109.649 12.0362 110.154 11.0115C110.659 9.98289 111.386 9.18775 112.335 8.62601C113.287 8.06049 114.392 7.77773 115.648 7.77773C117.432 7.77773 118.889 8.32427 120.02 9.41737C121.148 10.5105 121.778 11.9945 121.911 13.8694L121.933 14.7746C121.933 16.8052 121.366 18.4354 120.231 19.665ZM133.205 20.073C132.347 21.0257 131.235 21.502 129.869 21.502C128.571 21.502 127.495 21.1263 126.641 20.3747C125.79 19.6271 125.365 18.6821 125.365 17.5395C125.365 16.1352 125.885 15.0592 126.925 14.3115C127.965 13.56 129.468 13.1805 131.434 13.1729H133.057V12.4157C133.057 11.8046 132.901 11.315 132.59 10.9469C132.275 10.5787 131.78 10.3946 131.104 10.3946C130.508 10.3946 130.041 10.5369 129.704 10.8216C129.362 11.1101 129.191 11.5029 129.191 12.0001H125.656C125.656 11.2334 125.893 10.5237 126.367 9.87085C126.842 9.21804 127.51 8.70565 128.371 8.3337C129.237 7.96174 130.208 7.77577 131.286 7.77577C132.915 7.77577 134.209 8.18567 135.169 9.00549C136.125 9.82531 136.604 10.9772 136.604 12.4613V18.2C136.611 19.4563 136.788 20.407 137.133 21.0522V21.2572H133.558C133.395 20.9383 133.277 20.5436 133.205 20.073ZM149.447 20.7422C148.612 21.1522 147.689 21.3572 146.68 21.3572C144.786 21.3572 143.292 20.7557 142.199 19.5524C141.11 18.3493 140.565 16.6888 140.565 14.5709V14.3375C140.565 12.2993 141.106 10.673 142.188 9.45843C143.273 8.24008 144.761 7.63092 146.651 7.63092C148.31 7.63092 149.638 8.10345 150.636 9.04851C151.635 9.98979 152.141 11.2423 152.157 12.806H148.843C148.828 12.1228 148.615 11.5668 148.205 11.1379C147.799 10.709 147.262 10.4946 146.594 10.4946C145.771 10.4946 145.148 10.7944 144.727 11.3941C144.306 11.9938 144.095 12.9673 144.095 14.3147V14.6791C144.095 16.0416 144.304 17.0208 144.721 17.6167C145.139 18.2089 145.771 18.5049 146.617 18.5049C147.27 18.5049 147.799 18.3265 148.205 17.9698C148.615 17.6091 148.828 17.1328 148.843 16.5408H152.157C152.149 17.4364 151.904 18.2563 151.422 19.0002C150.944 19.7479 150.285 20.3287 149.447 20.7422ZM112.942 14.6278C112.942 15.8842 113.177 16.8444 113.648 17.5086C114.122 18.1727 114.8 18.5049 115.68 18.5049C116.534 18.5049 117.202 18.1766 117.684 17.52C118.166 16.8671 118.407 15.8177 118.407 14.3716C118.407 13.1419 118.166 12.1892 117.684 11.5137C117.202 10.8343 116.527 10.4946 115.657 10.4946C114.792 10.4946 114.122 10.8305 113.648 11.5023C113.177 12.1779 112.942 13.2197 112.942 14.6278ZM130.905 18.54C131.425 18.54 131.906 18.4242 132.346 18.1927C132.786 17.9612 133.112 17.65 133.325 17.259V14.9817H132.004C130.236 14.9817 129.294 15.5928 129.18 16.8149L129.169 17.0255C129.169 17.4659 129.323 17.8283 129.63 18.113C129.941 18.3977 130.366 18.54 130.905 18.54Z"
                fill="#A0FC90"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M77.7855 19.7164C79.0098 20.9081 80.5965 21.504 82.5455 21.504C83.6515 21.504 84.6603 21.2934 85.5718 20.872C86.4795 20.4546 87.2004 19.87 87.7343 19.1186L85.9894 17.1715C85.2191 18.1582 84.1492 18.6516 82.78 18.6516C81.8951 18.6516 81.1647 18.3917 80.5889 17.8718C80.0092 17.3479 79.6621 16.6553 79.5477 15.7937H88.0146V14.3477C88.0146 12.2526 87.4922 10.6338 86.4471 9.49137C85.4059 8.34895 83.9757 7.77773 82.1564 7.77773C80.9435 7.77773 79.8622 8.06239 78.9127 8.63171C77.9668 9.19723 77.2364 10.0038 76.7216 11.0513C76.2066 12.0988 75.9492 13.2868 75.9492 14.6152V14.9625C75.9492 16.9437 76.5614 18.5284 77.7855 19.7164ZM82.0486 10.6322C81.3469 10.6322 80.7767 10.8694 80.338 11.3439C79.8995 11.8145 79.6192 12.4901 79.497 13.3706H84.4342V13.0917C84.4191 12.3098 84.2074 11.7044 83.7993 11.2755C83.3873 10.8466 82.8038 10.6322 82.0486 10.6322ZM50.6241 2.71648H54.1883V21.504H50.6241V2.71648ZM57.4219 4.6055C57.4219 4.07414 57.5993 3.63766 57.9539 3.29608C58.3124 2.95448 58.7986 2.78369 59.4128 2.78369C60.0192 2.78369 60.5017 2.95448 60.8602 3.29608C61.2224 3.63766 61.4037 4.07414 61.4037 4.6055C61.4037 5.14446 61.2206 5.58473 60.8544 5.92633C60.492 6.26791 60.0116 6.4387 59.4128 6.4387C58.8139 6.4387 58.3316 6.26791 57.9654 5.92633C57.603 5.58473 57.4219 5.14446 57.4219 4.6055ZM35.1953 21.504V3.69573H47.1691V6.66757H38.8852V10.909H45.9621V13.784H38.8852V18.5549H47.1921V21.504H35.1953ZM72.5172 21.1851C71.823 21.3978 71.106 21.504 70.3661 21.504C67.8755 21.504 66.6055 20.2515 66.5559 17.7465V10.6186H64.6164V8.02253H66.5559V4.77174H70.1087V8.02253H72.3855V10.6186H70.1087V17.2227C70.1087 17.7124 70.2021 18.0634 70.389 18.276C70.5796 18.4885 70.942 18.5947 71.4759 18.5947C71.8688 18.5947 72.2158 18.5663 72.5172 18.5094V21.1851ZM61.1845 8.26733V21.504H57.6203V8.26733H61.1845Z"
                fill="#A0FC90"
              />
              <path
                d="M20.8844 24H6.19365C2.88199 24 0.0901724 21.006 0.00353043 17.2033C-0.0734854 13.2852 2.67982 10.0794 6.07813 10.0794H24.1191C24.1191 12.1203 22.675 13.7858 20.8844 13.7858H6.15515C4.5667 13.7858 3.20931 15.278 3.23819 17.0975C3.26706 18.8688 4.5282 20.3032 6.07813 20.3032H24.1191C24.1191 22.3442 22.675 24 20.8844 24Z"
                fill="#A0FC90"
              />
              <path
                d="M2.38228 6.96028C0.389499 6.96028 -0.727226 4.29362 0.533905 2.54151C1.65063 0.991575 3.33535 0 5.22223 0H20.038C21.8191 0 23.2727 1.65584 23.2727 3.70638H5.23185C3.66266 3.70638 2.38228 5.16967 2.38228 6.96028Z"
                fill="#A0FC90"
              />
            </g>
            <defs>
              <clipPath id="clip0_730_930">
                <rect width="167.026" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          </div>
          <Button variant="primary" className="!bg-white !text-brand-bg hover:!bg-brand-accent !rounded-lg !py-2 !px-5 !text-[13px] !font-bold">
            Join the Community <ArrowUpRight size={16} />
          </Button>
        </div>
      </nav>

      <main className="pt-32 pb-20">
        <div className="section-container max-w-3xl">
          <div className="mb-12">
            <h1 className="text-brand-accent font-sans uppercase tracking-widest text-xs font-bold mb-4">Terms of Service</h1>
            <h2 className="font-serif-accent italic text-[clamp(2rem,5vw,3.5rem)] font-bold text-white leading-tight">
              Terms & Conditions
            </h2>
            <p className="text-white/60 mt-4 text-lg max-w-2xl">
              Last updated: June 2026
            </p>
          </div>

          <div className="space-y-8 text-white/80 text-[15px] leading-relaxed font-sans">
            <GlassCard>
              <h3 className="text-white font-bold text-lg mb-3 font-sans uppercase tracking-wider">1. Acceptance of Terms</h3>
              <p>By accessing or using EliteKoach's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. We reserve the right to modify these terms at any time, and your continued use constitutes acceptance of updated terms.</p>
            </GlassCard>

            <GlassCard>
              <h3 className="text-white font-bold text-lg mb-3 font-sans uppercase tracking-wider">2. Use of Services</h3>
              <p>Our services are provided for personal, non-commercial use only. You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the service, use of the service, or access to the service without express written permission from EliteKoach.</p>
            </GlassCard>

            <GlassCard>
              <h3 className="text-white font-bold text-lg mb-3 font-sans uppercase tracking-wider">3. User Accounts</h3>
              <p>When you create an account with us, you must provide accurate and complete information. You are responsible for safeguarding the password that you use to access the service and for any activities or actions under your password. You agree not to disclose your password to any third party.</p>
            </GlassCard>

            <GlassCard>
              <h3 className="text-white font-bold text-lg mb-3 font-sans uppercase tracking-wider">4. Intellectual Property</h3>
              <p>The service and its original content, features, and functionality are and will remain the exclusive property of EliteKoach and its licensors. The service is protected by copyright, trademark, and other laws. Our trademarks may not be used in connection with any product or service without the prior written consent of EliteKoach.</p>
            </GlassCard>

            <GlassCard>
              <h3 className="text-white font-bold text-lg mb-3 font-sans uppercase tracking-wider">5. Limitation of Liability</h3>
              <p>In no event shall EliteKoach, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.</p>
            </GlassCard>

            <GlassCard>
              <h3 className="text-white font-bold text-lg mb-3 font-sans uppercase tracking-wider">6. Governing Law</h3>
              <p>These Terms shall be governed and construed in accordance with the laws of the European Union and the Republic of Cyprus, without regard to conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.</p>
            </GlassCard>

            <GlassCard>
              <h3 className="text-white font-bold text-lg mb-3 font-sans uppercase tracking-wider">7. Contact Information</h3>
              <p>If you have any questions about these Terms of Service, please contact us at legal@elitekoach.com or through the contact form on our website.</p>
            </GlassCard>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TermsOfService;
