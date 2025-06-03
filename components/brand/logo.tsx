interface LogoProps {
  width?: number
  height?: number
  className?: string
}

export function Logo({ width = 120, height = 120, className = "" }: LogoProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 背景纹理 - 轻微的竹简纹理 */}
      <rect width="240" height="240" fill="#F9F5F0" />
      <pattern id="bambooPattern" patternUnits="userSpaceOnUse" width="30" height="30" patternTransform="rotate(90)">
        <line x1="0" y1="0" x2="0" y2="30" stroke="#F0EBE2" strokeWidth="8" />
      </pattern>
      <rect width="240" height="240" fill="url(#bambooPattern)" fillOpacity="0.3" />

      {/* 太阳外环 - 渐变光晕 */}
      <circle cx="120" cy="100" r="60" fill="url(#sunGlow)" />

      {/* 太阳内圆 */}
      <circle cx="120" cy="100" r="48" fill="#E94E35" />

      {/* 中式图案元素 - 简化的如意纹 */}
      <path d="M120 70 C110 80, 110 90, 120 100 C130 90, 130 80, 120 70" fill="#F9F5F0" fillOpacity="0.2" />
      <path d="M100 90 C90 100, 90 110, 100 120 C110 110, 110 100, 100 90" fill="#F9F5F0" fillOpacity="0.2" />
      <path d="M140 90 C150 100, 150 110, 140 120 C130 110, 130 100, 140 90" fill="#F9F5F0" fillOpacity="0.2" />

      {/* 三横 - 变成更有中式感的元素 */}
      <rect x="70" y="150" width="100" height="8" rx="2" fill="#E94E35" />
      <rect x="70" y="170" width="100" height="8" rx="2" fill="#E94E35" />
      <rect x="70" y="190" width="100" height="8" rx="2" fill="#E94E35" />

      {/* 装饰元素 - 两侧的点 */}
      <circle cx="60" cy="150" r="3" fill="#E94E35" />
      <circle cx="60" cy="170" r="3" fill="#E94E35" />
      <circle cx="60" cy="190" r="3" fill="#E94E35" />
      <circle cx="180" cy="150" r="3" fill="#E94E35" />
      <circle cx="180" cy="170" r="3" fill="#E94E35" />
      <circle cx="180" cy="190" r="3" fill="#E94E35" />

      {/* 渐变定义 */}
      <defs>
        <radialGradient id="sunGlow" cx="0.5" cy="0.5" r="0.5" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#E94E35" />
          <stop offset="70%" stopColor="#F7941D" />
          <stop offset="100%" stopColor="#F7941D" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  )
}

export function LogoWithText({ width = 240, height = 120, className = "" }: LogoProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 480 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 背景纹理 */}
      <rect width="480" height="240" fill="#F9F5F0" />
      <pattern
        id="bambooPatternWithText"
        patternUnits="userSpaceOnUse"
        width="30"
        height="30"
        patternTransform="rotate(90)"
      >
        <line x1="0" y1="0" x2="0" y2="30" stroke="#F0EBE2" strokeWidth="8" />
      </pattern>
      <rect width="480" height="240" fill="url(#bambooPatternWithText)" fillOpacity="0.3" />

      {/* 标志部分 */}
      <g transform="translate(0, 0)">
        {/* 太阳外环 - 渐变光晕 */}
        <circle cx="120" cy="100" r="60" fill="url(#sunGlowWithText)" />

        {/* 太阳内圆 */}
        <circle cx="120" cy="100" r="48" fill="#E94E35" />

        {/* 中式图案元素 - 简化的如意纹 */}
        <path d="M120 70 C110 80, 110 90, 120 100 C130 90, 130 80, 120 70" fill="#F9F5F0" fillOpacity="0.2" />
        <path d="M100 90 C90 100, 90 110, 100 120 C110 110, 110 100, 100 90" fill="#F9F5F0" fillOpacity="0.2" />
        <path d="M140 90 C150 100, 150 110, 140 120 C130 110, 130 100, 140 90" fill="#F9F5F0" fillOpacity="0.2" />

        {/* 三横 - 变成更有中式感的元素 */}
        <rect x="70" y="150" width="100" height="8" rx="2" fill="#E94E35" />
        <rect x="70" y="170" width="100" height="8" rx="2" fill="#E94E35" />
        <rect x="70" y="190" width="100" height="8" rx="2" fill="#E94E35" />

        {/* 装饰元素 - 两侧的点 */}
        <circle cx="60" cy="150" r="3" fill="#E94E35" />
        <circle cx="60" cy="170" r="3" fill="#E94E35" />
        <circle cx="60" cy="190" r="3" fill="#E94E35" />
        <circle cx="180" cy="150" r="3" fill="#E94E35" />
        <circle cx="180" cy="170" r="3" fill="#E94E35" />
        <circle cx="180" cy="190" r="3" fill="#E94E35" />
      </g>

      {/* 文字部分 - 使用系统字体作为备选 */}
      <g transform="translate(240, 0)">
        {/* 日曜乾元 - 中文 */}
        <text
          x="120"
          y="100"
          fontFamily="var(--font-noto-serif), serif"
          fontSize="48"
          fill="#E94E35"
          textAnchor="middle"
          dominantBaseline="middle"
          fontWeight="bold"
        >
          日曜乾元
        </text>

        {/* RIYAO.COM - 英文 */}
        <text
          x="120"
          y="170"
          fontFamily="var(--font-cinzel), serif"
          fontSize="24"
          fill="#E94E35"
          textAnchor="middle"
          letterSpacing="2"
        >
          RIYAO.COM
        </text>
      </g>

      {/* 渐变定义 */}
      <defs>
        <radialGradient id="sunGlowWithText" cx="0.5" cy="0.5" r="0.5" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#E94E35" />
          <stop offset="70%" stopColor="#F7941D" />
          <stop offset="100%" stopColor="#F7941D" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  )
}

export function LogoIcon({ width = 32, height = 32, className = "" }: LogoProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 简化版标志，用于favicon和小尺寸显示 */}
      <circle cx="60" cy="50" r="30" fill="url(#iconGlow)" />
      <circle cx="60" cy="50" r="24" fill="#E94E35" />

      <rect x="35" y="75" width="50" height="4" rx="1" fill="#E94E35" />
      <rect x="35" y="85" width="50" height="4" rx="1" fill="#E94E35" />
      <rect x="35" y="95" width="50" height="4" rx="1" fill="#E94E35" />

      <defs>
        <radialGradient id="iconGlow" cx="0.5" cy="0.5" r="0.5" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#E94E35" />
          <stop offset="70%" stopColor="#F7941D" />
          <stop offset="100%" stopColor="#F7941D" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  )
}
