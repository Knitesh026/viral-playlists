import React, { useEffect } from 'react';
import { ChevronDown, Plus } from 'lucide-react';

const SEO_KEYWORD_CLUSTERS = [
  {
    category: "Barber Shop & Saloon (नाई की दुकान 90s)",
    keywords: [
      "90s Bollywood Barber Shop Songs",
      "Saloon WTF Playlist",
      "सलून 90s बॉलीवुड गाने",
      "Barber Shop Bangers"
    ],
    query: "dukaan",
    color: "bg-blue-50 text-blue-700 border-blue-200"
  },
  {
    category: "Roadways & Travel (हरियाणा रोडवेज सफर)",
    keywords: [
      "Haryana Roadways WTF Bus Songs",
      "हरियाणा रोडवेज बस सांग्स",
      "Digital Bus Night Journey",
      "ऑटो वाला सबवूफर हिट्स"
    ],
    query: "safar",
    color: "bg-emerald-50 text-emerald-700 border-emerald-200"
  },
  {
    category: "Childhood Nostalgia (बचपन के कार्टून 2000s)",
    keywords: [
      "School Ke Baad 2000s Cartoons",
      "स्कूल के बाद 2000s के कार्टून",
      "Shaka Laka Boom Boom Title",
      "नानी का घर रेडियो पुराने गाने"
    ],
    query: "bachpan",
    color: "bg-purple-50 text-purple-700 border-purple-200"
  },
  {
    category: "Regional Beats (क्षेत्रीय बीट्स & डीजे)",
    keywords: [
      "Telugu Cutting Shop Mass Beats",
      "भोजपुरी रात लाउडस्पीकर",
      "Malayalam Rain Chaya Kada",
      "पहाड़ी उत्तराखंड बस म्यूजिक"
    ],
    query: "kshetriya",
    color: "bg-amber-50 text-amber-700 border-amber-200"
  },
  {
    category: "Wedding & Celebrations (शादी बारात बैंड)",
    keywords: [
      "Baraat Band Wedding Procession",
      "शादी बारात ब्रास बैंड गाने",
      "Dhol Tasha Brass Band DJ"
    ],
    query: "shaadi",
    color: "bg-pink-50 text-pink-700 border-pink-200"
  },
  {
    category: "Late Night & Relax (महफ़िल गज़लें)",
    keywords: [
      "Mehfil Late Night Ghazals",
      "महफ़िल रात की गज़लें",
      "Acoustic Indie Night Songs"
    ],
    query: "raat",
    color: "bg-indigo-50 text-indigo-700 border-indigo-200"
  }
];

const HINDI_SEARCH_TAGS = [
  "वायरल प्लेलिस्ट", "नाई की दुकान के गाने", "हरियाणा रोडवेज", "कटिंग शॉप", 
  "स्कूल के बाद", "नानी का घर", "डिजिटल बस", "भोजपुरी रात", "शादी बारात बैंड", 
  "ऑटो वाला", "मल्यालम चाय दुकान", "उत्तराखंड पहाड़ी बस", "महफ़िल गज़ल", "90s बॉलीवुड"
];

const FAQS = [
  {
    question: "What is Viral Playlists? (वायरल प्लेलिस्ट क्या है?)",
    answer: "Viral Playlists is the curated internet directory of viral music websites (वायरल म्यूजिक वेबसाइट्स). Inspired by iconic viral sites like saloon.wtf and haryanaroadways.wtf, it brings together nostalgia websites, regional beat hubs, and creator-curated music platforms in one place."
  },
  {
    question: "How do I submit my viral playlist site? (अपनी वेबसाइट कैसे सबमिट करें?)",
    answer: "Click '+ Submit Viral Site' at the top of the page, paste your website URL (e.g., https://your-site.vercel.app), add your creator Twitter/Instagram handle, and our system automatically fetches your website screenshot and title preview!"
  },
  {
    question: "Why did sites like saloon.wtf & haryanaroadways.wtf go viral? (ये वेबसाइट्स क्यों वायरल हुई?)",
    answer: "These sites captured authentic cultural nostalgia—from the 90s Bollywood cassette tapes played at Indian barber shops (नाई की दुकान 90s के गाने) to high-speed Haryanvi beats blast on state transport buses (हरियाणा रोडवेज बस गाने)—resonating deeply with millions on Twitter & Instagram."
  },
  {
    question: "Are all site thumbnails fetched automatically from live URLs?",
    answer: "Yes! Every single playlist thumbnail in our directory is generated live from its website URL using high-resolution web screenshot APIs."
  }
];

export default function SeoKeywordsSection({ setSearchQuery, setActiveCategory, onOpenSubmitModal }) {
  const showDirectory = () =>
    document.getElementById('directory')?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  // FAQPage structured data. The same questions are rendered visibly below, as Google requires.
  useEffect(() => {
    const el = document.createElement('script');
    el.type = 'application/ld+json';
    el.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQS.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    });
    document.head.appendChild(el);
    return () => el.remove();
  }, []);

  return (
    <section aria-labelledby="browse-heading" className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 2xl:max-w-7xl">
      {/* Browse by mood */}
      <div className="mb-6 flex flex-wrap items-end justify-between gap-2">
        <div>
          <h2 id="browse-heading" className="font-display text-2xl text-[#17212b] sm:text-3xl">
            Browse by mood <span className="text-[#2489d3]">(मूड से खोजें)</span>
          </h2>
          <p className="mt-1 text-sm font-medium text-[#334155]">
            Pick a vibe, or tap a keyword to search for it.
          </p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SEO_KEYWORD_CLUSTERS.map((cluster) => (
          <article
            key={cluster.query}
            className={`flex flex-col rounded-2xl border p-4 ${cluster.color}`}
          >
            <h3 className="font-display text-lg leading-snug">{cluster.category}</h3>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {cluster.keywords.slice(0, 3).map((kw) => (
                <li key={kw}>
                  <button
                    onClick={() => {
                      setActiveCategory('all');
                      setSearchQuery(kw.split(' ')[0]);
                      showDirectory();
                    }}
                    className="cursor-pointer rounded-full border border-current/20 bg-white/80 px-2.5 py-1 text-xs font-semibold text-[#17212b] transition-colors hover:bg-white"
                  >
                    {kw}
                  </button>
                </li>
              ))}
            </ul>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory(cluster.query);
                showDirectory();
              }}
              className="mt-4 w-fit cursor-pointer text-sm font-bold underline-offset-4 hover:underline"
            >
              See all {cluster.category.split('(')[0].trim()} →
            </button>
          </article>
        ))}
      </div>

      {/* Quick search tags */}
      <div className="mt-8">
        <h3 className="text-xs font-bold uppercase tracking-widest text-[#546575]">Popular searches</h3>
        <ul className="mt-2 flex flex-wrap gap-2">
          {HINDI_SEARCH_TAGS.map((tag) => (
            <li key={tag}>
              <button
                onClick={() => {
                  setActiveCategory('all');
                  setSearchQuery(tag);
                  showDirectory();
                }}
                className="cursor-pointer rounded-full border border-[#dcd8cc] bg-white px-3 py-1 text-xs font-semibold text-[#334155] hover:border-[#2489d3] hover:text-[#2489d3]"
              >
                #{tag}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* FAQ */}
      <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_2fr]">
        <div>
          <h2 className="font-display text-2xl text-[#17212b] sm:text-3xl">
            Questions <span className="text-[#2489d3]">(अक्सर पूछे सवाल)</span>
          </h2>
          <p className="mt-2 text-sm font-medium text-[#334155]">
            Everything about Viral Playlist and getting your own site listed.
          </p>
          <button
            onClick={onOpenSubmitModal}
            className="mt-5 inline-flex cursor-pointer items-center gap-1.5 rounded-full bg-[#17212b] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-colors hover:bg-[#2489d3]"
          >
            <Plus className="h-4 w-4" aria-hidden="true" /> Submit your site
          </button>
        </div>

        <div className="divide-y divide-[#dcd8cc] rounded-2xl border border-[#dcd8cc] bg-white/70">
          {FAQS.map((faq, i) => (
            <details key={faq.question} open={i === 0} className="group px-5 py-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-semibold text-[#17212b] [&::-webkit-details-marker]:hidden">
                {faq.question}
                <ChevronDown className="mt-1 h-4 w-4 shrink-0 text-[#2489d3] transition-transform group-open:rotate-180" aria-hidden="true" />
              </summary>
              <p className="mt-2 text-sm font-medium leading-relaxed text-[#334155]">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
