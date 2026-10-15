import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Filter, 
  ExternalLink, 
  Plus, 
  Check, 
  SlidersHorizontal, 
  ChevronRight,
  Layers,
  FileText,
  Sparkles
} from 'lucide-react';
import { PRODUCTS_CATALOG, PRODUCT_CATEGORIES } from '../data/companyData';
import { useRFQ } from '../context/RFQContext';

export default function ProductsCatalog({ searchQuery, setSearchQuery }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const { addToRFQ, rfqItems, openProductModal } = useRFQ();

  const filteredProducts = useMemo(() => {
    return PRODUCTS_CATALOG.filter(product => {
      const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesSearch = 
        product.name.toLowerCase().includes(q) ||
        product.subtitle.toLowerCase().includes(q) ||
        product.description.toLowerCase().includes(q) ||
        product.specs.some(s => s.value.toLowerCase().includes(q) || s.label.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="products" className="py-24 px-4 sm:px-8 bg-[#0A111F] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-3">
              <Layers className="w-3.5 h-3.5" />
              16 Complete Technical Divisions
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Products & Engineering Speciality
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              100% verified original equipment specifications, ASTM/ASME standards, pressure ratings up to 30,000 PSI, and materials for MENA operations.
            </p>
          </div>

          {/* Catalog Count Indicator */}
          <div className="text-right">
            <span className="text-xs text-slate-400 font-mono">
              Displaying <strong className="text-amber-400">{filteredProducts.length}</strong> of 16 categories
            </span>
          </div>
        </div>

        {/* Filters and Search Bar Bar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 p-3 rounded-2xl bg-[#0F192E] border border-slate-800 shadow-xl mb-10">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {PRODUCT_CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Filter Search Input */}
          <div className="relative min-w-[280px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter by alloy, standard, pressure..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-2 text-xs sm:text-sm rounded-xl bg-slate-900 border border-slate-700/80 text-white placeholder-slate-400 focus:outline-none focus:border-amber-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                &times;
              </button>
            )}
          </div>

        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16 p-8 rounded-2xl bg-slate-900/40 border border-slate-800">
            <SlidersHorizontal className="w-12 h-12 text-slate-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white">No products found</h3>
            <p className="text-sm text-slate-400 mt-1">Try adjusting your search query or switching categories.</p>
            <button
              onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
              className="mt-4 px-4 py-2 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredProducts.map((product) => {
              const isInRFQ = rfqItems.some(i => i.id === product.id);

              return (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  className="group flex flex-col rounded-2xl bg-[#0F192E] border border-slate-800/90 hover:border-amber-500/50 hover:shadow-2xl hover:shadow-amber-500/5 transition-all overflow-hidden"
                >
                  {/* Product Image Thumbnail */}
                  <div className="relative aspect-[4/3] bg-slate-950 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      onError={(e) => {
                        // Fallback in case of image load delay
                        e.target.src = "/assets/engineering-valves.jpg";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F192E] via-transparent to-transparent opacity-80" />

                    {/* Category & Rating Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-900/90 text-slate-300 border border-slate-700/80 backdrop-blur-md">
                        {product.category}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-amber-500/90 text-slate-950 shadow">
                        {product.badge}
                      </span>
                    </div>
                  </div>

                  {/* Product Details Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="font-display text-base font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-1">
                        {product.name}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                        {product.subtitle}
                      </p>
                    </div>

                    {/* Quick Specs Snippet */}
                    <div className="space-y-1.5 py-2.5 px-3 rounded-xl bg-slate-900/70 border border-slate-800 text-[11px]">
                      {product.specs.slice(0, 2).map((s, idx) => (
                        <div key={idx} className="flex justify-between items-baseline gap-2">
                          <span className="text-slate-400 font-medium shrink-0">{s.label}:</span>
                          <span className="text-slate-200 font-mono text-right truncate">{s.value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Card Actions */}
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <button
                        onClick={() => openProductModal(product)}
                        className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs transition-colors border border-slate-700"
                        title="View complete specifications and standards"
                      >
                        <FileText className="w-3.5 h-3.5 text-amber-400" />
                        <span>Specs</span>
                      </button>

                      <button
                        onClick={() => addToRFQ(product)}
                        className={`flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg font-bold text-xs transition-all ${
                          isInRFQ
                            ? 'bg-emerald-600/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-600/30'
                            : 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-md shadow-amber-500/10'
                        }`}
                        title="Add to Technical RFQ basket"
                      >
                        {isInRFQ ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span>In RFQ</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5" />
                            <span>+ RFQ</span>
                          </>
                        )}
                      </button>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
