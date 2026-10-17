import { bodyOf } from '../data/bodies'

/** Bosses grow to a readable 44–56 world-pixel silhouette, never a screen-sized sprite. */
export const bossScale = (dex: number, final = false) => {
  const body = bodyOf(dex)
  return Math.min(3,(final ? 68 : 58)/Math.max(body.bodyW,body.bodyH))
}
