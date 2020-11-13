import { padding } from "./number";

export const msToTime = (ms: number) => {
  const hh = Math.floor(ms / (1000 * 60 * 60));
  const mm = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
  const ss = Math.floor((ms % (1000 * 60)) / 1000);
  return `${hh ? `${padding(hh, 2)}:` : ""}${padding(mm, 2)}:${padding(ss, 2)}`;
};
