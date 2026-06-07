import React from 'react';

export const EditorialQuote: React.FC = () => {
  return (
    <section className="bg-brand-accent overflow-hidden">
      <div className="grid md:grid-cols-2 items-stretch">
        <div className="p-12 md:p-24 lg:p-32 flex flex-col justify-center items-start text-brand-bg">
          <svg width="48" height="38" viewBox="0 0 48 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-12 opacity-80">
            <path d="M12.4 37.6C9.2 37.6 6.53333 36.4667 4.4 34.2C2.26667 31.9333 1.2 29.1333 1.2 25.8C1.2 21.6667 2.4 17.6667 4.8 13.8C7.2 9.8 10.4 6.33333 14.4 3.4L18.4 8.6C15.6 10.8667 13.4667 13.4 12 16.2C10.5333 19 9.8 21.6 9.8 24C10.8667 23.4667 12.0667 23.2 13.4 23.2C15.9333 23.2 18.0667 24.1333 19.8 26C21.5333 27.7333 22.4 29.9333 22.4 32.6C22.4 34.0667 22.0667 35.3333 21.4 36.4C20.7333 37.2 19.8 37.6 18.6 37.6H12.4ZM37.2 37.6C34 37.6 31.3333 36.4667 29.2 34.2C27.0667 31.9333 26 29.1333 26 25.8C26 21.6667 27.2 17.6667 29.6 13.8C32 9.8 35.2 6.33333 39.2 3.4L43.2 8.6C40.4 10.8667 38.2667 13.4 36.8 16.2C35.3333 19 34.6 21.6 34.6 24C35.6667 23.4667 36.8667 23.2 38.2 23.2C40.7333 23.2 42.8667 24.1333 44.6 26C46.3333 27.7333 47.2 29.9333 47.2 32.6C47.2 34.0667 46.8667 35.3333 46.2 36.4C45.5333 37.2 44.6 37.6 43.4 37.6H37.2Z" fill="currentColor"/>
          </svg>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8 max-w-lg">
            A great coach can bring out the best in you—someone who challenges you to be better and holds you accountable.
          </h2>
          
          <span className="text-sm font-display font-bold uppercase tracking-widest">
            Serena Williams
          </span>
        </div>
        
        <div className="relative min-h-[500px] md:min-h-0">
          <img 
            src="https://images.pexels.com/photos/16559924/pexels-photo-16559924.jpeg" 
            alt="Serena Williams"
            className="absolute inset-0 w-full h-full object-cover grayscale brightness-90"
          />
        </div>
      </div>
    </section>
  );
};
