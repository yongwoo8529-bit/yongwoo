
import React from 'react';
import { 
  QuoteSection, 
  ImageHeroSection, 
  ChatTestimonialSection, 
  ProfileYellowSection, 
  ProfilePurpleSection, 
  CtaFooter 
} from './components/Sections';

const App: React.FC = () => {
  return (
    <main className="snap-container">
      {/* 1. Black Gradient - 인트로 */}
      <section className="snap-section bg-gradient-to-b from-[#1C60FF] via-[#0D1EB8] to-[#021338]">
        <QuoteSection isDark={true} />
      </section>

      {/* 2. Blue - 히어로 */}
      <section className="snap-section bg-[#1C60FF]">
        <ImageHeroSection />
      </section>

      {/* 3. Blue (요청사항) - 채팅 후기 */}
      <section className="snap-section bg-[#1C60FF]">
        <ChatTestimonialSection isBlueBg={true} />
      </section>

      {/* 4. Peach Gradient (요청사항) - 성공 사례 1 */}
      <section className="snap-section bg-gradient-to-r from-[#3C8AFF] via-[#D0BBEB] to-[#EAB27A]">
        <ProfileYellowSection isPeachBg={true} />
      </section>

      {/* 5. White (요청사항) - 성공 사례 2 */}
      <section className="snap-section bg-[#FFFFFF]">
        <ProfilePurpleSection isDark={false} />
      </section>

      {/* 6. Black Gradient (순환) - 마무리 및 신청 */}
      <section className="snap-section bg-gradient-to-b from-[#1C60FF] via-[#0D1EB8] to-[#021338]">
        <CtaFooter />
      </section>

      {/* 고정 하단 버튼 */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-xs px-4">
        <button className="w-full bg-white text-[#0D1EB8] font-black py-4 rounded-full shadow-2xl transform transition hover:scale-105 active:scale-95 text-lg border-2 border-transparent hover:border-white hover:bg-transparent hover:text-white">
          수익구조 상담하기
        </button>
      </div>
    </main>
  );
};

export default App;
