import React, { useState } from 'react';
import { Volume2, Info, Github, Mail, Users } from 'lucide-react';

interface ComicFrame {
  id: number;
  image: string;
  audio: string;
}

interface TeamMember {
  name: string;
  role: string;
  email: string;
  github: string;
  telegram: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Марія Гараничева",
    role: "Головна кіся",
    email: "mimimashkabumazka@gmail.com",
    github: "https://github.com/haranycheva",
    telegram: "https://t.me/cayydann"
  },
  {
    name: "Ебі Спека",
    role: "Канва ворк",
    email: "evelinchik1987@gmail.com",
    github: "https://github.com/EbiEEYY",
    telegram: "https://t.me/flower_rainer"
  },
  {
    name: "Крамар Олег",
    role: "Просто АЛЄГ",
    email: "olena@example.com",
    github: "https://github.com/olegoleg0080",
    telegram: "https://t.me/MamkinDevOps"
  },
  {
    name: "Бондаренко Марія",
    role: "М'ясо",
    email: "maryallbond@gmail.com",
    github: "https://github.com",
    telegram: "https://t.me/RockMasha"
  }
];

const comicFrames: ComicFrame[] = [
  {
    id: 1,
    image: "https://res.cloudinary.com/dk3syrsg5/image/upload/v1744182062/frame1_k03sdv.jpg",
    audio: "https://res.cloudinary.com/dk3syrsg5/video/upload/v1744182914/frame1_stbcg7.mp3"
  },
  {
    id: 2,
    image: "https://res.cloudinary.com/dk3syrsg5/image/upload/v1744182058/frame2_ouzto3.jpg",
    audio: "https://res.cloudinary.com/dk3syrsg5/video/upload/v1744182913/frame2_qdugmi.mp3"
  },
  {
    id: 3,
    image: "https://res.cloudinary.com/dk3syrsg5/image/upload/v1744182581/photo_2025-04-09_10-09-05_spiyco.jpg",
    audio: "https://res.cloudinary.com/dk3syrsg5/video/upload/v1744182912/frame3_zixkw4.mp3"
  },
  {
    id: 4,
    image: "https://res.cloudinary.com/dk3syrsg5/image/upload/v1744182058/frame4_kuuxdb.png",
    audio: "https://res.cloudinary.com/dk3syrsg5/video/upload/v1744182912/frame4_regctw.mp3"
  },
  {
    id: 5,
    image: "https://res.cloudinary.com/dk3syrsg5/image/upload/v1744182061/frame5_ne0h3x.jpg",
    audio: "https://res.cloudinary.com/dk3syrsg5/video/upload/v1744182912/frame5_ubsxdj.mp3"
  },
  {
    id: 6,
    image: "https://res.cloudinary.com/dk3syrsg5/image/upload/v1744182057/frame6_oneixx.jpg",
    audio: "https://res.cloudinary.com/dk3syrsg5/video/upload/v1744182911/frame6_atskmn.mp3"
  },
  {
    id: 7,
    image: "https://res.cloudinary.com/dk3syrsg5/image/upload/v1744183578/ChatGPT_Image_9_%D0%BA%D0%B2%D1%96%D1%82._2025_%D1%80._10_25_40_j5hfb8.png",
    audio: "https://res.cloudinary.com/dk3syrsg5/video/upload/v1744182911/frame7_uqv1yg.mp3"
  },
  {
    id: 8,
    image: "https://res.cloudinary.com/dk3syrsg5/image/upload/v1744183969/image_2025-04-09_10-30-39_gwulrw.png",
    audio: "https://res.cloudinary.com/dk3syrsg5/video/upload/v1744182910/frame8_fppacb.mp3"
  },
];

function App() {
  const [activeAudio, setActiveAudio] = useState<HTMLAudioElement | null>(null);
  const [showTooltip, setShowTooltip] = useState(true);

  const handleFrameClick = (frame: ComicFrame) => {
    if (activeAudio) {
      activeAudio.pause();
      activeAudio.currentTime = 0;
    }
    
    const audio = new Audio(frame.audio);
    audio.play();
    setActiveAudio(audio);
    setShowTooltip(false);
  };

  return (
    <div className="min-h-screen bg-[#8b8b9e] text-white">
      {/* Logo Section */}
      <div className="bg-gradient-to-b from-[#4a00e0]/20 to-transparent py-8">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center">
          <div className="w-40 h-40 bg-gradient-to-br from-[#4a00e0] to-[#8e2de2] rounded-full flex items-center justify-center">
            <img className='rounded-full' src="https://res.cloudinary.com/dk3syrsg5/image/upload/v1744182056/logo_uxl2co.jpg" alt="" />
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="max-w-4xl mx-auto text-center py-8 px-4">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#4a00e0] to-[#8e2de2]">
          Штучний інтелект: помічник чи заміна?
        </h1>
        <p className="text-[#8e2de2] text-lg">
          Інтерактивний комікс про взаємодії людини та ШІ
        </p>
      </header>

      {/* Tooltip */}
      {showTooltip && (
        <div className="fixed top-4 right-4 bg-[#4a00e0] text-white p-4 rounded-lg shadow-lg animate-bounce flex items-center gap-2 z-50">
          <Volume2 className="w-5 h-5" />
          <span>Натисни на кадр, щоб почути озвучку!</span>
        </div>
      )}

      {/* Comic Grid - Marvel Style */}
      <div className="max-w-4xl mx-auto px-4 mb-20">
        <div className="grid grid-cols-12 gap-2">
          {/* Row 1 */}
          <div className="col-span-4">
            <div 
              className="relative group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:z-10 hover:rotate-1"
              onClick={() => handleFrameClick(comicFrames[0])}
            >
              <img 
                src={comicFrames[0].image} 
                alt="Frame 1" 
                className="w-full aspect-square rounded-lg shadow-lg border-2 border-[#4a00e0]/20"
              />
              <div className="absolute bottom-2 right-2 bg-[#4a00e0] p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Volume2 className="w-4 h-4" />
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <div 
              className="relative group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:z-10 hover:-rotate-1"
              onClick={() => handleFrameClick(comicFrames[1])}
            >
              <img 
                src={comicFrames[1].image} 
                alt="Frame 2" 
                className="w-full aspect-square rounded-lg shadow-lg border-2 border-[#4a00e0]/20"
              />
              <div className="absolute bottom-2 right-2 bg-[#4a00e0] p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Volume2 className="w-4 h-4" />
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <div 
              className="relative group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:z-10 hover:rotate-1"
              onClick={() => handleFrameClick(comicFrames[2])}
            >
              <img 
                src={comicFrames[2].image} 
                alt="Frame 3" 
                className="w-full aspect-square rounded-lg shadow-lg border-2 border-[#4a00e0]/20"
              />
              <div className="absolute bottom-2 right-2 bg-[#4a00e0] p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Volume2 className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="col-span-6">
            <div 
              className="relative group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:z-10 hover:-rotate-1"
              onClick={() => handleFrameClick(comicFrames[3])}
            >
              <img 
                src={comicFrames[3].image} 
                alt="Frame 4" 
                className="w-full aspect-square rounded-lg shadow-lg border-2 border-[#4a00e0]/20"
              />
              <div className="absolute bottom-2 right-2 bg-[#4a00e0] p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Volume2 className="w-4 h-4" />
              </div>
            </div>
          </div>
          <div className="col-span-6">
            <div 
              className="relative group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:z-10 hover:rotate-1"
              onClick={() => handleFrameClick(comicFrames[4])}
            >
              <img 
                src={comicFrames[4].image} 
                alt="Frame 5" 
                className="w-full aspect-square rounded-lg shadow-lg border-2 border-[#4a00e0]/20"
              />
              <div className="absolute bottom-2 right-2 bg-[#4a00e0] p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Volume2 className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Row 3 */}
          <div className="col-span-6">
            <div 
              className="relative group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:z-10 hover:-rotate-1"
              onClick={() => handleFrameClick(comicFrames[5])}
            >
              <img 
                src={comicFrames[5].image} 
                alt="Frame 6" 
                className="w-full aspect-square rounded-lg shadow-lg border-2 border-[#4a00e0]/20"
              />
              <div className="absolute bottom-2 right-2 bg-[#4a00e0] p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Volume2 className="w-4 h-4" />
              </div>
            </div>
          </div>
          <div className="col-span-6">
            <div 
              className="relative group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:z-10 hover:rotate-1"
              onClick={() => handleFrameClick(comicFrames[6])}
            >
              <img 
                src={comicFrames[6].image} 
                alt="Frame 7" 
                className="w-full aspect-square rounded-lg shadow-lg border-2 border-[#4a00e0]/20"
              />
              <div className="absolute bottom-2 right-2 bg-[#4a00e0] p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Volume2 className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Row 4 */}
          <div className="col-span-12">
            <div 
              className="relative group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:z-10 hover:-rotate-1"
              onClick={() => handleFrameClick(comicFrames[7])}
            >
              <img 
                src={comicFrames[7].image} 
                alt="Frame 8" 
                className="w-full aspect-[2/1] object-cover rounded-lg shadow-lg border-2 border-[#4a00e0]/20"
              />
              <div className="absolute bottom-2 right-2 bg-[#4a00e0] p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Volume2 className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-[#16162a] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#4a00e0] to-[#8e2de2]">
            Наша Команда
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-[#1a1a2e] rounded-xl p-6 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 border border-[#4a00e0]/20">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-[#8e2de2]">{member.role}</p>
                </div>
                <div className="flex justify-center space-x-4">
                  <a href={`mailto:${member.email}`} className="text-gray-400 hover:text-[#8e2de2] transition-colors">
                    <Mail className="w-5 h-5" />
                  </a>
                  <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#8e2de2] transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={member.telegram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#8e2de2] transition-colors">
                    <span className="font-bold">t</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;