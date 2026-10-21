import { ArrowUpRight, CircleDot, TrendingUp } from "lucide-react";

const bars = [34, 48, 39, 62, 54, 75, 68, 88, 81, 100];

export function HeroArtwork() {
  return (
    <div
      className="hero-artwork"
      role="img"
      aria-label="Illustrative financial data visualisation with a rising trend line and abstract monthly bars"
    >
      <div className="artwork-glow" />
      <div className="artwork-window">
        <div className="artwork-window-top">
          <span className="window-dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span>FINANCIAL OVERVIEW</span>
          <span className="artwork-period">ILLUSTRATIVE</span>
        </div>
        <div className="artwork-heading">
          <div>
            <p>Forecasting & analysis</p>
            <h2>Clearer financial perspective</h2>
          </div>
          <span className="artwork-arrow">
            <ArrowUpRight size={18} aria-hidden="true" />
          </span>
        </div>
        <div className="artwork-chart">
          <div className="chart-labels" aria-hidden="true">
            <span>Forecast</span>
            <span>Actual</span>
          </div>
          <svg viewBox="0 0 430 160" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <linearGradient id="areaFill" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="var(--accent)" stopOpacity=".24" />
                <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0 126 C42 112 53 119 89 101 S143 109 174 78 S228 88 260 57 S316 71 345 40 S396 47 430 16 L430 160 L0 160Z"
              fill="url(#areaFill)"
            />
            <path
              d="M0 126 C42 112 53 119 89 101 S143 109 174 78 S228 88 260 57 S316 71 345 40 S396 47 430 16"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="3"
              vectorEffect="non-scaling-stroke"
            />
            <circle cx="345" cy="40" r="5" fill="var(--accent)" />
          </svg>
        </div>
        <div className="artwork-chart-footer">
          <span>Structured data</span>
          <div className="artwork-bars" aria-hidden="true">
            {bars.map((height, index) => (
              <i key={index} style={{ height: `${height}%` }} />
            ))}
          </div>
          <span>Decision-ready insight</span>
        </div>
      </div>
      <div className="artwork-floating-card artwork-card-top">
        <span className="floating-icon"><TrendingUp size={16} aria-hidden="true" /></span>
        <span>Forecasting<br /><strong>with clarity</strong></span>
      </div>
      <div className="artwork-floating-card artwork-card-bottom">
        <CircleDot size={15} aria-hidden="true" />
        <span>Analysis <strong>with context</strong></span>
      </div>
    </div>
  );
}
