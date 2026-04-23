import React from "react";
import { Link } from "react-router-dom";

/**
 * SiteFooter
 * 浅色玻璃风格,与全站 light 主题一致(此前的"深色面板"被用户反馈与页面割裂)。
 * 使用 hsl 形式 + .site-footer 类配合 index.css 中的 light theme override,
 * 既能保持视觉一致,也能在不同子页面下保留可读性。
 */
export function SiteFooter() {
  const linkColor = "hsl(245 35% 30%)";
  const linkHover = "hsl(245 70% 22%)";
  const headColor = "hsl(245 60% 14%)";
  const muted = "hsl(245 20% 45%)";

  const linkStyle: React.CSSProperties = { color: linkColor, transition: "color .2s" };
  const onEnter = (e: React.MouseEvent<HTMLElement>) =>
    ((e.currentTarget as HTMLElement).style.color = linkHover);
  const onLeave = (e: React.MouseEvent<HTMLElement>) =>
    ((e.currentTarget as HTMLElement).style.color = linkColor);

  return (
    <footer
      className="w-full py-12 px-6 site-footer"
      style={{
        background:
          "linear-gradient(180deg, hsla(245, 60%, 98%, 0.25) 0%, hsla(245, 60%, 94%, 0.45) 100%)",
        borderTop: "1px solid hsla(245, 40%, 70%, 0.12)",
        backdropFilter: "blur(28px) saturate(160%)",
        WebkitBackdropFilter: "blur(28px) saturate(160%)",
      }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10 justify-items-center text-center">
          <div>
            <h4 className="text-sm font-semibold mb-4 tracking-wide" style={{ color: headColor }}>
              服务
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link to="/global" className="text-sm" style={linkStyle} onMouseEnter={onEnter} onMouseLeave={onLeave}>
                  全球汇流
                </Link>
              </li>
              <li>
                <Link to="/japan" className="text-sm" style={linkStyle} onMouseEnter={onEnter} onMouseLeave={onLeave}>
                  日本聚势
                </Link>
              </li>
              <li>
                <Link to="/hopex" className="text-sm" style={linkStyle} onMouseEnter={onEnter} onMouseLeave={onLeave}>
                  程序化广告
                </Link>
              </li>
              <li>
                <Link to="/media" className="text-sm" style={linkStyle} onMouseEnter={onEnter} onMouseLeave={onLeave}>
                  大媒体资源
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4 tracking-wide" style={{ color: headColor }}>
              公司
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link to="/about" className="text-sm" style={linkStyle} onMouseEnter={onEnter} onMouseLeave={onLeave}>
                  关于我们
                </Link>
              </li>
              <li>
                <span className="text-sm cursor-pointer" style={linkStyle} onMouseEnter={onEnter} onMouseLeave={onLeave}>
                  商务合作
                </span>
              </li>
              <li>
                <span className="text-sm cursor-pointer" style={linkStyle} onMouseEnter={onEnter} onMouseLeave={onLeave}>
                  人才招聘
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4 tracking-wide" style={{ color: headColor }}>
              政策
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <span className="text-sm cursor-pointer" style={linkStyle} onMouseEnter={onEnter} onMouseLeave={onLeave}>
                  隐私政策
                </span>
              </li>
              <li>
                <span className="text-sm cursor-pointer" style={linkStyle} onMouseEnter={onEnter} onMouseLeave={onLeave}>
                  社媒指引
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4 tracking-wide" style={{ color: headColor }}>
              联系我们
            </h4>
            <ul className="flex flex-row items-center justify-center gap-4">
              <li>
                <a
                  href="https://www.linkedin.com/company/bytemobi/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="领英"
                  title="领英"
                  className="inline-flex items-center justify-center"
                  style={linkStyle}
                  onMouseEnter={onEnter}
                  onMouseLeave={onLeave}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@bytemobi.net"
                  aria-label="info@bytemobi.net"
                  title="info@bytemobi.net"
                  className="inline-flex items-center justify-center"
                  style={linkStyle}
                  onMouseEnter={onEnter}
                  onMouseLeave={onLeave}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-6 text-center" style={{ borderTop: "1px solid hsla(245, 40%, 60%, 0.15)" }}>
          <p className="text-xs mb-2 footer-muted" style={{ color: muted }}>
            地址:中国陕西省西安市高新技术产业开发区科技路旺座现代城B座23层
          </p>
          <p className="text-xs footer-muted" style={{ color: muted }}>
            © 2026 ByteMobi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
