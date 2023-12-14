export default function fluid(
  minfs: number,
  maxfs: number,
  minvw: number,
  maxvw: number
): string {
  const REM = ((minfs - ((maxfs - minfs)*minvw/(maxvw - minvw)))/16).toFixed(2),
        VW = ((maxfs-minfs)*100/(maxvw-minvw)).toFixed(2),
        MIN = minfs/16 + 'rem',
        MAX = maxfs/16 + 'rem',
        VAL = 'calc('+REM+'rem + ' + VW + 'vw)',
        Formula = 'clamp(' + MIN + ', ' + VAL + ', ' + MAX + ')'
  return Formula
}