
import React from 'react';

// Section 1: Intro Quotes
export const QuoteSection: React.FC<{ isDark?: boolean }> = ({ isDark }) => {
  return (
    <div className="text-center px-6">
      <div className="mb-6">
        <span className="text-6xl text-blue-300/50 font-serif leading-none">“</span>
      </div>
      <h2 className={`text-3xl md:text-5xl font-black ${isDark ? 'text-white' : 'text-gray-900'} leading-tight mb-8`}>
        열심히 살아도<br />
        왜 늘 여유가 없을까요?
      </h2>
      <h3 className={`text-2xl md:text-3xl font-bold ${isDark ? 'text-blue-100/80' : 'text-gray-800'} mb-12`}>
        노력도 능력도<br />
        문제가 아닙니다.
      </h3>
      <div className="relative inline-block">
        <div className="absolute inset-0 bg-blue-500/20 h-1/2 top-1/2 -z-10 transform translate-y-1"></div>
        <p className="text-2xl md:text-4xl font-black text-white px-2 relative">
          문제는 <span className="text-yellow-300">돈이 벌리는 구조</span> 에<br />있습니다
        </p>
      </div>
    </div>
  );
};

// Section 2: Image Hero
export const ImageHeroSection: React.FC = () => {
  return (
    <div className="w-full h-full relative overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2071" 
        alt="Collaboration" 
        className="w-full h-full object-cover brightness-[0.3]"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6 text-center">
        <div className="mb-4 inline-block px-4 py-1 bg-white/20 rounded-full text-sm font-bold tracking-widest uppercase">
          Digital Revolution
        </div>
        <h2 className="text-4xl md:text-6xl font-black leading-tight drop-shadow-2xl mb-6">
          하루 2시간,<br />
          수익구조가 달라집니다
        </h2>
        <div className="flex gap-3">
          <span className="bg-white/10 px-4 py-2 rounded-lg text-sm border border-white/20 backdrop-blur-sm">#자산구축</span>
          <span className="bg-white/10 px-4 py-2 rounded-lg text-sm border border-white/20 backdrop-blur-sm">#추가수익</span>
        </div>
      </div>
    </div>
  );
};

// Section 3: Chat Bubbles (Blue 배경용)
export const ChatTestimonialSection: React.FC<{ isBlueBg?: boolean }> = ({ isBlueBg }) => {
  const messages = [
    { text: "하루 1~2시간으로 삶의 질이 달라졌어요!", emoji: "💎", align: "left" },
    { text: "부담 없이 시작했는데 결과가 놀라워요.", emoji: "🌈", align: "right" },
    { text: "복잡한 건 못하는데, 시스템이 다 해줍니다.", emoji: "🤖", align: "left" },
    { text: "아이 보면서도 충분히 수익이 나네요!", emoji: "🤱", align: "right" },
  ];

  return (
    <div className="w-full max-w-xl px-6">
      <h2 className={`text-3xl md:text-4xl font-black text-center ${isBlueBg ? 'text-white' : 'text-[#021338]'} mb-12 drop-shadow-sm`}>
        지금 이 순간에도<br />
        수익은 만들어지고 있습니다
      </h2>
      <div className="space-y-6">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.align === 'right' ? 'justify-end' : 'justify-start'}`}>
            <div className={`relative px-6 py-4 rounded-2xl shadow-xl text-lg font-bold border border-white/30 backdrop-blur-md ${
              m.align === 'right' ? 'bg-white text-[#0D1EB8] rounded-tr-none' : 'bg-blue-900/40 text-white rounded-tl-none'
            }`}>
              {m.text}
              <span className="absolute -top-3 -right-3 text-2xl drop-shadow-sm bg-white rounded-full w-8 h-8 flex items-center justify-center text-sm">{m.emoji}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Section 4: Profile 1 (Peach Gradient 배경용)
export const ProfileYellowSection: React.FC<{ isPeachBg?: boolean }> = ({ isPeachBg }) => {
  return (
    <div className="w-full max-w-5xl px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="relative">
        <div className="absolute -inset-4 bg-white rounded-2xl opacity-20 blur-2xl"></div>
        <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] relative z-10">
          <img 
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=2070" 
            alt="Success Case 1" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className={isPeachBg ? 'text-[#021338]' : 'text-gray-900'}>
        <div className={`w-12 h-1 ${isPeachBg ? 'bg-[#1C60FF]' : 'bg-[#1C60FF]'} mb-6`}></div>
        <h3 className="text-3xl font-black mb-4">정OO (29세)</h3>
        <p className="text-xl md:text-2xl leading-relaxed font-medium">
          "퇴근 후 멍하니 유튜브 보던 2시간을 바꿨을 뿐인데,<br />
          <span className="font-black border-b-4 border-[#1C60FF]/20">월급 이상의 고정 수익</span>이 생겼어요.<br />
          이제는 미래가 더 이상 두렵지 않습니다."
        </p>
      </div>
    </div>
  );
};

// Section 5: Profile 2 (White 배경용)
export const ProfilePurpleSection: React.FC<{ isDark?: boolean }> = ({ isDark }) => {
  return (
    <div className="w-full max-w-5xl px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
       <div className="md:order-2 relative">
        <div className="absolute -inset-4 bg-blue-100 rounded-2xl blur-2xl opacity-50"></div>
        <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] relative z-10 border border-gray-100">
          <img 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=2070" 
            alt="Success Case 2" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className={`md:order-1 ${isDark ? 'text-white text-right' : 'text-gray-900 text-left'}`}>
        <div className={`w-12 h-1 bg-[#1C60FF] mb-6 ${isDark ? 'ml-auto' : 'mr-auto'}`}></div>
        <h3 className="text-3xl font-black mb-4">남OO (50세)</h3>
        <p className="text-xl md:text-2xl leading-relaxed font-medium opacity-90">
          "나이 들어서 시작하는 게 망설여졌지만,<br />
          이 시스템은 경험이 없어도 상관없더군요.<br />
          <span className="text-[#1C60FF] font-black">인생 제2막의 주인공</span>이 된 기분입니다."
        </p>
      </div>
    </div>
  );
};

// Section 6: CTA Footer (Black Gradient 배경용)
export const CtaFooter: React.FC = () => {
  return (
    <div className="text-center text-white px-6">
      <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
        지금 이 순간,<br />
        당신의 수익지도를 그리세요
      </h2>
      <p className="text-xl md:text-2xl text-blue-100 mb-12 opacity-80">
        준비된 사람만이 기회를 잡습니다.<br />
        무료 가이드북과 상담을 신청하세요.
      </p>
      <div className="flex justify-center gap-4 mb-16">
        <div className="px-6 py-3 bg-white/10 rounded-xl border border-white/20 backdrop-blur-sm">
           <span className="block text-2xl font-black text-yellow-300">2,481명</span>
           <span className="text-xs opacity-60 uppercase">Total Consulted</span>
        </div>
        <div className="px-6 py-3 bg-white/10 rounded-xl border border-white/20 backdrop-blur-sm">
           <span className="block text-2xl font-black text-green-400">98.4%</span>
           <span className="text-xs opacity-60 uppercase">Satisfaction</span>
        </div>
      </div>
      <div className="pt-12 border-t border-white/10 text-blue-200 text-xs opacity-40">
        <p>© 2024 Revenue Evolution Lab. All rights reserved.</p>
      </div>
    </div>
  );
};
