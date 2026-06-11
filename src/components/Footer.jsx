import React from "react";

export default function FooterSection() {
    return (

        <section id="footer" className="boorder-t bg-white">
            <div className="max-w-5xl mx-auto px-4 pt-4 text-xs text-slate-500 flex justify-center">
                <span>&copy; 2026 Jean Will. All rights reserved. </span>
                <a href="//www.instagram.com/jean.will_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-slate-700 ml-2">Created by Elohim </a>
            </div>
        </section>
    )
}