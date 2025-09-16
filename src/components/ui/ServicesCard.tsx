// import Image from 'next/image';

// interface HoverCardProps {
//   title: string;
//   imageSrc: string;
//   priority?: boolean;
// }

// export default function ServicesCard({ title, imageSrc, priority = false }: HoverCardProps) {
//   return (
//     <div className="relative flex flex-col items-center justify-end w-full md:max-w-[360px] lg:max-w-[416px] h-[450px] lg:h-[508px] rounded-[37px] lg:rounded-[40px] bg-white/10 backdrop-blur-[15px] border border-white/50 hover:bg-[#FD853A] transition-colors duration-300 ease-in-out overflow-hidden cursor-pointer group">
      
//       {/* Title (absolute top) */}
//       <h1 className="absolute top-4 w-full h-[40px] sm:h-[45px] md:h-[50px] lg:h-[65px] flex items-start font-medium text-[20px] md:text-[24px] lg:text-[32px] text-white z-30 border-b-2 border-[#F9FAFB]/30">
//         <span className="relative lg:top-2 left-6">{title}</span>
//       </h1>

//       {/* Decorative Backgrounds */}
//       <div className="absolute w-[80%]  lg:w-[310px] h-[330px]  lg:h-[329px] rounded-[25px] lg:rounded-[35px] bg-[#757575] opacity-50 mb-2 sm:mb-3 md:mb-4 lg:mb-5"></div>
//       <div className="absolute w-[90%]  lg:w-[364px] h-[320px]  lg:h-[329px] rounded-[25px] lg:rounded-[35px]  bg-[#9E9D9D]"></div>

//       {/* Image */}
//       <Image
//         src={imageSrc}
//         alt="Card Image"
//         width={416}
//         height={307}
//         className="object-cover z-20 w-full h-[300px] md:max-h-[360px] lg:max-h-[416px] rounded-[35px]"
//         priority={priority}
//       />
//     </div>
//   );
// }
import Image from 'next/image';

interface CardData {
  title: string;
  imageSrc: string;
  description: string;
}

export const cardData: CardData[] = [
  {
    title: "Digital Marketing Strategy & Execution",
    imageSrc: "https://images.unsplash.com/photo-1556761175-4b46a572b786?fit=crop&w=600&q=80",
    description: "End-to-end campaign planning and optimization"
  },
  {
    title: "Performance Marketing",
    imageSrc: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?fit=crop&w=600&q=80",
    description: "ROI-focused Google Ads, Meta Ads, and LinkedIn Ads"
  },
  {
    title: "Lead Generation & Conversion Optimization",
    imageSrc: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?fit=crop&w=600&q=80",
    description: "Building funnels that bring measurable growth"
  },
  {
    title: "Social Media Marketing",
    imageSrc: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=800&auto=format",
    description: "Creative content, reels, posts, and collaborations for engagement"
  },
  {
    title: "SEO & Content Marketing",
    imageSrc: "https://images.unsplash.com/photo-1505238680356-667803448bb6?fit=crop&w=600&q=80",
    description: "On-page, off-page, and technical SEO strategies to improve visibility"
  },
  {
    title: "Brand Building & Growth Marketing",
    imageSrc: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&auto=format",
    description: "Scaling niche brands through holistic digital efforts"
  },
];

interface HoverCardProps {
  title: string;
  imageSrc: string;
  description: string;
  priority?: boolean;
}

export default function ServicesCard({ title, imageSrc, description, priority = false }: HoverCardProps) {
  return (
    <div className="relative flex flex-col items-center justify-end w-full md:max-w-[360px] lg:max-w-[416px] h-[450px] lg:h-[508px] rounded-[37px] lg:rounded-[40px] bg-white/10 backdrop-blur-[15px] border border-white/50 hover:bg-[#FD853A] transition-colors duration-300 ease-in-out overflow-hidden cursor-pointer group">
      
      {/* Title with improved visibility */}
      <div className="absolute top-0 left-0 w-full z-30 bg-gradient-to-b from-black/60 to-transparent pt-4 pb-6">
        <h1 className="px-6 font-medium text-[20px] md:text-[24px] lg:text-[32px] text-white border-b-2 border-white/40 pb-2">
          <span className="drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">{title}</span>
        </h1>
      </div>

      {/* Decorative Backgrounds */}
      <div className="absolute w-[80%] lg:w-[310px] h-[330px] lg:h-[329px] rounded-[25px] lg:rounded-[35px] bg-[#757575] opacity-50 mb-2 sm:mb-3 md:mb-4 lg:mb-5"></div>
      <div className="absolute w-[90%] lg:w-[364px] h-[320px] lg:h-[329px] rounded-[25px] lg:rounded-[35px] bg-[#9E9D9D]"></div>

      {/* Image */}
      <Image
        src={imageSrc}
        alt={title}
        width={416}
        height={307}
        className="object-cover z-20 w-full h-[300px] md:max-h-[360px] lg:max-h-[416px] rounded-[35px] transition-transform duration-500 group-hover:scale-105"
        priority={priority}
      />
      
      {/* Fixed description overlay - now always visible */}
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-black/40 p-6 z-40">
        <p className="text-white text-sm md:text-base font-medium drop-shadow-[0_1px_1px_rgba(0,0,0,1)]">
          {description}
        </p>
      </div>
    </div>
  );
}

// Example usage in a grid layout
export function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {cardData.map((service, index) => (
        <ServicesCard
          key={index}
          title={service.title}
          imageSrc={service.imageSrc}
          description={service.description}
          priority={index < 3}
        />
      ))}
    </div>
  );
}