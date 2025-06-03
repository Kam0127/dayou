interface LogoIconProps {
  width?: number
  height?: number
  className?: string
}

export function LogoIcon({ width = 40, height = 40, className = "" }: LogoIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 太阳外环 - 渐变光晕 */}
      <circle cx="50" cy="40" r="30" fill="url(#headerIconGlow)" />

      {/* 太阳内圆 */}
      <circle cx="50" cy="40" r="24" fill="#E94E35" />

      {/* 阴影滤镜定义 */}
      <filter id="barShadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="1" stdDeviation="1" floodOpacity="0.3" />
      </filter>

      {/* 三条横杠 - 更长的白色横杠 */}
      <g filter="url(#barShadow)">
        <rect x="20" y="70" width="60" height="4" rx="2" fill="white" />
        <rect x="20" y="80" width="60" height="4" rx="2" fill="white" />
        <rect x="20" y="90" width="60" height="4" rx="2" fill="white" />
      </g>

      {/* 渐变定义 */}
      <defs>
        <radialGradient id="headerIconGlow" cx="0.5" cy="0.5" r="0.5" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#E94E35" />
          <stop offset="70%" stopColor="#F7941D" />
          <stop offset="100%" stopColor="#F7941D" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  )
}
