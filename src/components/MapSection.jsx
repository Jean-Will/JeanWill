import React from 'react'

export default function MapSection() {
  return (
    <section id="location" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Localização
            </h2>
            <p className="text-sm md:text-base text-slate-700 mb-8">
                Povoa de Varzim.
            </p>
            <div className="h-64 md:h-96 rounded-xl overflow-hidden shadow-lg">
                {/* Frame */}
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1258.7109111170528!2d-8.748017459341096!3d41.37982139315127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1smariadeira%20povoa%20de%20varzim!5e0!3m2!1spt-PT!2spt!4v1774995096561!5m2!1spt-PT!2spt"  
                className="w-full h-full"
                style= {{   border:0}}
                allowfullscreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

        </div>
    </section>
  )
}
