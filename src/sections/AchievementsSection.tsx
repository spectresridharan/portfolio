import { motion } from 'framer-motion';

const achievements = [
  {
    year: '2026',
    items: [
      { title: 'Top 50 Finalist', event: 'Coimbatore Innovation Hackathon', org: 'Rathina Global University' },
      { title: 'Top 50 Finalist', event: 'HackFusion', org: 'StartupTN / Velalar Institute' }
    ]
  },
  {
    year: '2025',
    items: [
      { title: 'Shortlisted', event: 'Business Incubation Program', org: 'RKVY RAAFTAR, TBI, TNAU Coimbatore' },
      { title: '3rd Place', event: 'Mini Project Expo', org: '' },
      { title: 'Internal Shortlist', event: 'Smart India Hackathon', org: '' },
      { title: '1st Place', event: 'Freshathon', org: '' },
      { title: '1st Place', event: 'EduXire Paper Presentation', org: 'Interofest 2k25' },
      { title: '3rd Place', event: 'Self-E Hackathon', org: '' },
      { title: '1st Place', event: 'Createathon', org: '' },
      { title: '3rd Place', event: 'EduXire Paper Presentation', org: 'Mescia 2k25' },
      { title: '1st Place', event: 'Case Study Presentation', org: 'Mirai' },
      { title: 'Finalist', event: 'Embeddethon', org: '' }
    ]
  }
];

export default function AchievementsSection() {
  return (
    <section className="relative w-full min-h-screen bg-[#050505] py-32 border-b border-eng-gray/20">
      <div className="px-6 md:px-16 lg:px-24 max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="mb-24">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4" data-cursor="READ">
            COMPETITIVE <br /> ENGINEERING
          </h2>
          <p className="text-lg text-eng-gray leading-relaxed font-sans max-w-2xl">
            Building and presenting technical solutions under pressure.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-24">
          {achievements.map((group) => (
            <div key={group.year} className="relative">
              {/* Year Label */}
              <div className="sticky top-24 z-10 bg-[#050505] py-4 mb-8">
                <span className="font-mono text-4xl font-bold text-eng-gray/40">{group.year}</span>
              </div>

              {/* Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                {/* Vertical Line */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-eng-gray/10 -translate-x-1/2 hidden md:block" />
                
                {group.items.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: index * 0.05 }}
                    className={`relative p-6 border border-eng-gray/20 rounded-lg bg-eng-dark hover:border-eng-accent-cyan/50 transition-colors group ${
                      index % 2 === 0 ? 'md:mr-8' : 'md:ml-8 md:col-start-2'
                    }`}
                  >
                    {/* Connecting Dot */}
                    <div className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-eng-dark border-2 border-eng-gray/50 group-hover:border-eng-accent-cyan transition-colors hidden md:block ${
                      index % 2 === 0 ? '-right-[38.5px]' : '-left-[38.5px]'
                    }`} />
                    
                    <div className="font-mono text-xs tracking-widest text-eng-accent-cyan mb-2">
                      {item.title.toUpperCase()}
                    </div>
                    <h3 className="text-lg font-bold text-eng-light">{item.event}</h3>
                    {item.org && (
                      <p className="text-sm font-sans text-eng-gray mt-2">{item.org}</p>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
