export function About() {
  return (
    <section id="about" className="py-12 md:py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-block mb-3 md:mb-4">
            <span className="border-2 border-amber-600 text-amber-600 px-3 py-1.5 md:px-4 md:py-2 rounded text-base md:text-lg font-semibold tracking-wide uppercase">
              About the Event
            </span>
          </div>
          {/* <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900 mb-4 md:mb-6 px-2">
            IndiaAI Pre-Summit Event
          </h2> */}
          
          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-3 md:gap-4 py-3 md:py-4">
            <div className="h-px w-12 md:w-16 bg-amber-600"></div>
            <div className="w-2 h-2 bg-amber-600 rotate-45"></div>
            <div className="h-px w-12 md:w-16 bg-amber-600"></div>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-3 md:space-y-4 text-gray-700 leading-relaxed text-sm md:text-base px-4 text-justify font-[550]">
            <p>
              The "Community-Driven AI: A Roadmap for India's Last Mile" is a
              one-and-a-half-day intensive workshop jointly organised by the 
              Bhagwan Birsa Munda Cell and the School of AI, IIT Delhi.
            </p>
            <p>
              The convening focuses on setting the tone for designing participatory 
              and community-responsive AI ecosystems by centering the lived realities 
              of India's last-mile communities. These include tribal communities, 
              linguistic minorities, informal-sector workers, persons with disabilities, 
              ageing populations, remote and low-connectivity populations, and communities 
              with limited access to digital infrastructure and public services.
            </p>
            <p>
              The event brings together AI researchers, policymakers, civil society 
              leaders, technologists, and community representatives to co-create ethical, 
              participatory, and accountable AI frameworks that are socially grounded, 
              culturally sensitive, and operationally viable.
            </p>
            <p>
              Through a carefully curated mix of keynote addresses, panel discussions, 
              thematic roundtables, and roadmap-drafting sessions, the workshop aims to 
              develop India's first Community-Driven AI Roadmap. The deliberations and 
              outcomes will directly inform a White Paper and policy recommendations to 
              guide responsive AI development and deployment in governance, public service 
              delivery, and community-facing digital systems.
            </p>
          </div>
        </div>

        {/* Vision and Goal Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 md:gap-12">
          {/* Vision Section */}
          <div className="bg-slate-50 p-4 sm:p-6 md:p-8 rounded border-l-4 border-amber-600">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 mb-4 md:mb-6">
              Vision
            </h3>
            <div className="space-y-3 md:space-y-4 text-gray-700 leading-relaxed text-sm md:text-base text-justify font-[550]">
              <p>
                To develop a future-oriented roadmap for community-driven AI systems 
                that respond to last-mile realities in India with relevance for global contexts.
              </p>
              <p>
                To embed community purpose, contextual intelligence, and knowledge into 
                the full lifecycle of AI design, data practices, and governance.
              </p>
              <p>
                To shape responsible AI ecosystems that are transparent and accountable 
                to the communities they are built to serve.
              </p>
              <p>
                To cultivate community stewardship over AI by enabling local ownership, 
                literacy, and participatory governance of emerging technologies.
              </p>
              <p>
                To democratize AI innovation by centering marginalized voices, local 
                knowledge systems, and equitable access in the creation of intelligent technologies.
              </p>
            </div>
          </div>

          {/* Goal Section */}
          <div className="bg-slate-50 p-4 sm:p-6 md:p-8 rounded border-l-4 border-amber-600">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 mb-4 md:mb-6">
              Goal
            </h3>
            <div className="text-gray-700 leading-relaxed text-sm md:text-base text-justify font-[550]">
              <p className="mb-3 md:mb-4">
                The primary goal of the workshop is to brainstorm, synthesize, and 
                articulate a roadmap for developing community-driven AI in India.
              </p>
              <p className="mb-2 md:mb-3 font-semibold">Specifically, the workshop seeks to:</p>
              <ul className="list-disc list-outside ml-5 sm:ml-6 space-y-1.5 md:space-y-2 mb-4 md:mb-6">
                <li>
                  Frame a community-responsive approach to AI problem identification 
                  and prioritisation
                </li>
                <li>
                  Explore participatory AI development lifecycles, from community 
                  engagement to deployment
                </li>
                <li>
                  Identify institutional, regulatory, and design-level enablers 
                  required to support this approach
                </li>
                <li>
                  Develop a white paper and policy recommendations for government, 
                  public agencies, and AI practitioners
                </li>
              </ul>
              <p className="italic text-gray-600 border-l-2 border-amber-600 pl-3 md:pl-4 text-xs md:text-sm">
                Grounded in India's last-mile realities, the roadmap emerging from 
                the workshop is envisioned as scalable across national contexts and 
                relevant for global application, informing not only where AI should 
                be deployed, but how it should be designed, developed, and governed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}