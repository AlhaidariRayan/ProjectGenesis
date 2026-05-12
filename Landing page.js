// Genesis Landing Page - Core Component
import React from 'react';

const GenesisLanding = () => {
  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-gray-800">
      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center backdrop-blur-md sticky top-0 z-50">
        <div className="text-xl font-bold tracking-tighter">PROJECT GENESIS</div>
        <div className="space-x-8 text-sm text-gray-400">
          <a href="#science" className="hover:text-white transition">SCIENCE</a>
          <a href="#access" className="border border-white/20 px-4 py-2 hover:bg-white hover:text-black transition">REQUEST ACCESS</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-[90vh] flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
          التأريض الثرموديناميكي للبيولوجيا السيادية
        </h1>
        <p className="max-w-2xl text-gray-400 text-lg md:text-xl font-light leading-relaxed">
          نحن لا نتنبأ بالبروتينات، نحن نحسب القوى الفيزيائية التي تجعل وجودها حتمياً. جينيسيس هو نظام التشغيل الجديد للاكتشافات الحيوية.
        </p>
        <div className="mt-12">
          <button className="bg-white text-black px-10 py-4 font-medium hover:bg-gray-200 transition-all">
            استكشف الورقة البيضاء v1.0
          </button>
        </div>
      </section>

      {/* Science Hook */}
      <section id="science" className="py-24 border-t border-white/10 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-light mb-6">ما وراء التوهم البيولوجي</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              عبر دمج محرك TGE، نفرض قيود طاقة جيبس الحرة ($\Delta G < 0$) في كل خطوة توليدية، مما يضمن استقراراً حرارياً لا يمكن للنماذج الإحصائية التقليدية تحقيقه.
            </p>
            <div className="text-2xl font-mono text-blue-400">ΔΔG = -2.4 kcal/mol</div>
          </div>
          <div className="relative aspect-square bg-gradient-to-br from-gray-900 to-black border border-white/5 rounded-2xl flex items-center justify-center">
            {/* مكان عرض البروتين التفاعلي */}
            <span className="text-gray-700 text-xs">DYNAMIC PROTEIN VIEWPORT</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-12 text-center text-gray-600 text-xs tracking-widest border-t border-white/5">
        &copy; 2026 PROJECT GENESIS. ALL RIGHTS RESERVED. SOVEREIGN BIOTECH SYSTEMS.
      </footer>
    </div>
  );
};

export default GenesisLanding;