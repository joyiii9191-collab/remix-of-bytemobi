import React from "react";
import { Link } from "react-router-dom";

export function SiteFooter() {
  return (
    <footer
      className="w-full py-12 px-6"
      style={{
        background: "rgba(10, 5, 20, 0.95)",
        borderTop: "1px solid rgba(168, 130, 255, 0.1)",
      }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div>
            <h4 className="text-white/80 text-sm font-semibold mb-4 tracking-wide">公司</h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link to="/about" className="text-white/50 text-sm hover:text-white/80 transition-colors">
                  关于我们
                </Link>
              </li>
              <li>
                <span className="text-white/50 text-sm hover:text-white/80 transition-colors cursor-pointer">
                  商务合作
                </span>
              </li>
              <li>
                <span className="text-white/50 text-sm hover:text-white/80 transition-colors cursor-pointer">
                  人才招聘
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white/80 text-sm font-semibold mb-4 tracking-wide">服务</h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link to="/global" className="text-white/50 text-sm hover:text-white/80 transition-colors">
                  全球汇流
                </Link>
              </li>
              <li>
                <Link to="/hopex" className="text-white/50 text-sm hover:text-white/80 transition-colors">
                  程序化广告
                </Link>
              </li>
              <li>
                <Link to="/media" className="text-white/50 text-sm hover:text-white/80 transition-colors">
                  大媒体资源
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white/80 text-sm font-semibold mb-4 tracking-wide">政策</h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <span className="text-white/50 text-sm hover:text-white/80 transition-colors cursor-pointer">
                  隐私政策
                </span>
              </li>
              <li>
                <span className="text-white/50 text-sm hover:text-white/80 transition-colors cursor-pointer">
                  社媒指引
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white/80 text-sm font-semibold mb-4 tracking-wide">联系我们</h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a
                  href="https://www.linkedin.com/company/bytemobi/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 text-sm hover:text-white/80 transition-colors flex items-center gap-1.5"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  领英
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@bytemobi.net"
                  className="text-white/50 text-sm hover:text-white/80 transition-colors flex items-center gap-1.5"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@bytemobi.net
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <p className="text-white/30 text-xs mb-2">
            地址：中国陕西省西安市高新技术产业开发区科技路旺座现代城B座23层
          </p>
          <p className="text-white/30 text-xs">© 2026 ByteMobi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
