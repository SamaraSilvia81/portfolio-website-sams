import { colors } from '../data/tokens'

export default function Footer() {
  return (
    <footer style={{ borderTop: `1px solid ${colors.rule}`, padding: '20px 0' }}>
      <div className="container" style={{
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', flexWrap: 'wrap', gap: 12,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <span className="fm" style={{ fontSize: 12, color: colors.muted }}>© 2026 devs_sams.sh</span>
          <span style={{ color: colors.rule }}>·</span>
          <span className="fm" style={{ fontSize: 11, color: colors.muted }}>all rights reserved</span>
        </div>
        <span className="fm" style={{ fontSize: 11, color: colors.muted, display: 'flex', alignItems: 'center', gap: 6 }}>
          crafted with intent <span style={{ color: colors.phosphor, fontSize: 8 }}>●</span>
        </span>
      </div>
    </footer>
  )
}
