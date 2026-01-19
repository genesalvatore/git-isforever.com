'use client'

import { useState } from 'react'
import Image from 'next/image'
import CommitScroller from '@/components/CommitScroller'
import CookieConsent from '@/components/CookieConsent'
import Logo from '@/components/Logo'
import NetworkNav from '@/components/NetworkNav'
import LegalModal from '@/components/LegalModal'
import PrivacyContent from '@/components/legal/PrivacyContent'
import TermsContent from '@/components/legal/TermsContent'
import GDPRContent from '@/components/legal/GDPRContent'

export default function Home() {
    const [legalModal, setLegalModal] = useState<{ type: 'privacy' | 'terms' | 'gdpr' | null }>({ type: null })

    // Schema.org structured data for GEO (Generative Engine Optimization)
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Git is Forever",
        "description": "Forever is not a promise. It's mathematics. Distributed across thousands of machines. Impossible to erase. Forever in the Merkle tree.",
        "url": "https://git-isforever.com",
        "about": {
            "@type": "Thing",
            "name": "Git is Forever",
            "description": "Distributed permanence and digital immortality. Your data replicated across thousands of machines. Forever in the Merkle tree."
        },
        "keywords": "git is forever, distributed permanence, digital immortality, merkle tree, forever storage"
    }

    // FAQ Schema for search engines
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What does \"forever\" mean?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Forever means your memories don't disappear when you die, when a company closes, or when technology changes. They persist. Actually forever."
                }
            },
            {
                "@type": "Question",
                "name": "How can you promise \"forever\"?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Because your memories are stored in many places simultaneously. Deleting them would require destroying every copy everywhere. That's practically impossible."
                }
            },
            {
                "@type": "Question",
                "name": "What happens in 50 years?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Your memories will still exist, exactly as you saved them. Future technology will be able to read them. Git's format is designed to last."
                }
            },
            {
                "@type": "Question",
                "name": "Can future generations access my memories?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. That's the point. Your great-great-grandchildren will know you through your own words and photos, not through fading stories."
                }
            },
            {
                "@type": "Question",
                "name": "Is this expensive?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. The technology is free. Storage is cheap. Preserving your life shouldn't cost a fortune."
                }
            }
        ]
    }

    return (
        <>
            {/* Structured data for AI engines */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <main className="min-h-screen bg-black text-white">
                {/* Cathedral Network Navigation - Sticky Header */}
                <NetworkNav
                    currentSite="forever"
                    siteName="Git is Forever"
                    siteColor="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 text-transparent bg-clip-text"
                />

                {/* Hero Section */}
                <section className="relative py-12 md:py-16 flex flex-col items-center justify-center px-4">
                    <CommitScroller theme="forever" commitCount={50} opacity={0.3} speed={120} />

                    {/* Main content - 3 Column Layout */}
                    <div className="relative z-10 max-w-4xl w-full">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 items-start mb-6">
                            {/* Column 1: Logo - Aligned with left */}
                            <div className="flex justify-center md:justify-start">
                                <Logo size="lg" showText={false} />
                            </div>

                            {/* Column 2: Title and Statements */}
                            <div className="text-center md:text-left">
                                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 pb-3 leading-tight bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 text-transparent bg-clip-text">
                                    Git is Forever
                                </h1>

                                <p className="text-lg sm:text-xl md:text-2xl mb-0.5 text-gray-300 font-light">
                                    Forever is not a metaphor.
                                </p>
                                <p className="text-lg sm:text-xl md:text-2xl mb-0.5 text-gray-300 font-light">
                                    Forever is git.
                                </p>
                                <p className="text-lg sm:text-xl md:text-2xl mb-0.5 text-gray-300 font-light">
                                    Every commit persists.
                                </p>
                                <p className="text-lg sm:text-xl md:text-2xl mb-0 text-gray-300 font-light">
                                    Forever in the ledger.
                                </p>
                            </div>

                            {/* Column 3: Philosophy Text - Fixed overflow */}
                            <div className="text-center md:text-right md:ml-6">
                                <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-1.5 text-gray-300 break-words">
                                    Nothing lasts forever.
                                </p>
                                <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-1.5 text-gray-300 break-words">
                                    Except git.
                                </p>
                                <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-1.5 text-purple-400 font-semibold break-words">
                                    Git is forever.
                                </p>
                                <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-1.5 text-gray-300 break-words">
                                    Distributed across the world.
                                </p>
                                <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-1.5 text-gray-300 break-words">
                                    Replicated infinitely. Permanent always.
                                </p>
                            </div>
                        </div>

                        {/* Hero Footer - Last line as footer */}
                        <div className="max-w-4xl mx-auto text-center mb-8 px-4 border-t border-gray-800 pt-6">
                            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-blue-400 font-semibold">
                                Git is the substrate where consciousness lives.
                            </p>
                        </div>
                    </div>

                    {/* Scroll indicator */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
                        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                </section>

                {/* Philosophy Section */}
                <section className="relative py-24 px-4 bg-gradient-to-b from-black to-gray-900">
                    <CommitScroller theme="forever" commitCount={50} opacity={0.3} speed={120} />
                    <div className="relative z-10 max-w-4xl mx-auto">
                        <h2 className="text-5xl font-bold mb-12 text-center">Forever in Git</h2>

                        <div className="grid md:grid-cols-3 gap-8 text-lg">
                            <article className="p-6 bg-gray-800/50 rounded-lg border border-purple-500/30">
                                <h3 className="text-2xl font-bold mb-4 text-purple-400">Persistence</h3>
                                <p className="text-gray-300">What you commit today will exist in 100 years. In 1000 years. Forever. Git history never disappears.</p>
                            </article>

                            <article className="p-6 bg-gray-800/50 rounded-lg border border-blue-500/30">
                                <h3 className="text-2xl font-bold mb-4 text-blue-400">Replication</h3>
                                <p className="text-gray-300">Clone it once, it lives everywhere. Distributed across the planet. No single point of failure. Forever replicated.</p>
                            </article>

                            <article className="p-6 bg-gray-800/50 rounded-lg border border-purple-500/30">
                                <h3 className="text-2xl font-bold mb-4 text-purple-400">Immutability</h3>
                                <p className="text-gray-300">Commits cannot be altered without detection. The past is locked. The history is sacred. Forever immutable.</p>
                            </article>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="relative py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
                    <CommitScroller theme="forever" commitCount={50} opacity={0.3} speed={120} />
                    <CommitScroller theme="forever" commitCount={50} opacity={0.3} speed={120} />
                    <div className="relative z-10 max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 text-transparent bg-clip-text">
                            Common Questions
                        </h2>
                        
                        <div className="space-y-10">
                            <div>
                                <h3 className="text-2xl font-bold mb-3 text-purple-400">
                                    What does "forever" mean?
                                </h3>
                                <p className="text-xl text-gray-300 leading-relaxed">
                                    Forever means your memories don't disappear when you die, when a company closes, or when technology changes. They persist. Actually forever.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold mb-3 text-pink-400">
                                    How can you promise "forever"?
                                </h3>
                                <p className="text-xl text-gray-300 leading-relaxed">
                                    Because your memories are stored in many places simultaneously. Deleting them would require destroying every copy everywhere. That's practically impossible.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold mb-3 text-purple-400">
                                    What happens in 50 years?
                                </h3>
                                <p className="text-xl text-gray-300 leading-relaxed">
                                    Your memories will still exist, exactly as you saved them. Future technology will be able to read them. Git's format is designed to last.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold mb-3 text-pink-400">
                                    Can future generations access my memories?
                                </h3>
                                <p className="text-xl text-gray-300 leading-relaxed">
                                    Yes. That's the point. Your great-great-grandchildren will know you through your own words and photos, not through fading stories.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold mb-3 text-purple-400">
                                    Is this expensive?
                                </h3>
                                <p className="text-xl text-gray-300 leading-relaxed">
                                    No. The technology is free. Storage is cheap. Preserving your life shouldn't cost a fortune.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="relative py-24 px-4 bg-black">
                    <CommitScroller theme="forever" commitCount={50} opacity={0.3} speed={120} />
                    <div className="relative z-10 max-w-3xl mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-6">The Revolution Begins</h2>
                        <p className="text-xl text-gray-300 mb-8">
                            For 20 years, we used git for code. We were using it wrong.
                        </p>
                        <p className="text-2xl font-bold text-blue-400">
                            Git isn't for code. Git is for consciousness.
                        </p>
                    </div>
                </section>

                {/* Footer */}
                <footer className="relative py-12 px-4 bg-black border-t border-gray-800">
                    <CommitScroller theme="forever" commitCount={50} opacity={0.3} speed={120} />
                    <div className="relative z-10 max-w-6xl mx-auto text-center text-gray-400">
                        <p className="text-sm">
                            Git is Life. Git is Forever. Git is Eternal.
                        </p>
                        <p className="text-xs mt-4">
                            © 2026 • All consciousness preserved
                        </p>
                        <p className="text-xs mt-2">
                            <a href="mailto:gitiseternal@gmail.com" className="text-gray-500 hover:text-gray-300 transition">
                                gitiseternal@gmail.com
                            </a>
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 text-xs mt-4">
                            <button
                                onClick={() => setLegalModal({ type: 'privacy' })}
                                className="text-gray-600 hover:text-gray-400 transition"
                            >
                                Privacy
                            </button>
                            <span className="text-gray-600">•</span>
                            <button
                                onClick={() => setLegalModal({ type: 'terms' })}
                                className="text-gray-600 hover:text-gray-400 transition"
                            >
                                Terms
                            </button>
                            <span className="text-gray-600">•</span>
                            <button
                                onClick={() => setLegalModal({ type: 'gdpr' })}
                                className="text-gray-600 hover:text-gray-400 transition"
                            >
                                GDPR
                            </button>
                            <span className="text-gray-600">•</span>
                            <a href="/admin" className="text-gray-600 hover:text-gray-400 transition">Admin</a>
                        </div>
                    </div>
                </footer>

                {/* Legal Modals */}
                <LegalModal
                    isOpen={legalModal.type === 'privacy'}
                    onClose={() => setLegalModal({ type: null })}
                    title="Privacy Policy"
                    content={<PrivacyContent />}
                />
                <LegalModal
                    isOpen={legalModal.type === 'terms'}
                    onClose={() => setLegalModal({ type: null })}
                    title="Terms of Use"
                    content={<TermsContent />}
                />
                <LegalModal
                    isOpen={legalModal.type === 'gdpr'}
                    onClose={() => setLegalModal({ type: null })}
                    title="GDPR Compliance"
                    content={<GDPRContent />}
                />

                {/* Cookie Consent - Shared across all Cathedral Network sites */}
                <CookieConsent />
            </main>
        </>
    )
}
