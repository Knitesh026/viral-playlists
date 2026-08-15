import React, { useState } from 'react';
import { Sparkles, Tag, HelpCircle, Flame, ArrowRight, Globe } from 'lucide-react';

export default function SeoKeywordsSection({ playlists, setSearchQuery, setActiveCategory, onOpenSubmitModal }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

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

  return (
    <section 
      aria-label="Viral Playlists SEO Directory and Search Index"
      className="sr-only font-sans"
    >
      {/* SEO Section Header */}
      <div>
        <span>VIRAL PLAYLIST DIRECTORY & BILINGUAL SEO HUB</span>

        <h2>
          Trending Viral Music Keywords (वायरल संगीत कीवर्ड्स)
        </h2>

        <p>
          Search, filter, and discover the internet's most viral music playlist websites in Hindi & English (हिंदी और अंग्रेजी वायरल प्लेलिस्ट डायरेक्टरी).
        </p>
      </div>

      {/* SEO Topic Clusters Matrix (Bilingual) */}
      <div>
        {SEO_KEYWORD_CLUSTERS.map((cluster, idx) => (
          <article key={idx}>
            <div>
              <h3>
                {cluster.category}
              </h3>
              <span>
                {cluster.keywords.length} Topics
              </span>

              <div>
                {cluster.keywords.map((kw, kIdx) => (
                  <button
                    key={kIdx}
                    onClick={() => setSearchQuery(kw.split(' ')[0])}
                  >
                    <span>{kw}</span>
                  </button>
                ))}
              </div>
            </div>

            <button onClick={() => setActiveCategory(cluster.query)}>
              <span>Explore {cluster.category.split('(')[0]}</span>
            </button>
          </article>
        ))}
      </div>

      {/* Hindi & English Search Index Tags Cloud */}
      <div>
        <h3>
          Hindi & English Search Tags (हिंदी वायरल टैग्स)
        </h3>
        <p>
          Click any Hindi or English tag to instantly filter playlist sites:
        </p>

        <div>
          {HINDI_SEARCH_TAGS.map((tag, tIdx) => (
            <button key={`h-${tIdx}`} onClick={() => setSearchQuery(tag)}>
              #{tag}
            </button>
          ))}
          {[
            "saloon.wtf", "haryanaroadways.wtf", "cuttingshop.lol", "schoolkebaad.fun", "nani-ka-ghar", 
            "digitalbus.me", "bhojpuri-raat", "baraat-band", "auto-waala", "kappiyumpaattum"
          ].map((tag, tIdx) => (
            <button key={`e-${tIdx}`} onClick={() => setSearchQuery(tag)}>
              #{tag}
            </button>
          ))}
        </div>
      </div>

      {/* SEO Frequently Asked Questions (FAQ Accordion for Featured Snippets) */}
      <div>
        <div>
          <h3>
            Frequently Asked Questions (अक्सर पूछे जाने वाले सवाल)
          </h3>
          <p>
            Everything you need to know about Viral Playlists and submitting your site.
          </p>
        </div>

        <div>
          {FAQS.map((faq, fIdx) => (
            <article key={fIdx}>
              <h4>{faq.question}</h4>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>

      {/* Bottom SEO Submission CTA */}
      <div>
        <h3>अपनी वायरल म्यूजिक वेबसाइट सबमिट करें 🚀</h3>
        <p>Get your viral music website indexed on top of Google. Submit your link and get featured instantly!</p>
        <button onClick={onOpenSubmitModal}>
          Submit Your Viral Website Now (साइट सबमिट करें)
        </button>
      </div>

    </section>
  );
}
