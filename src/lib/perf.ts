export function isReducedMotion(): boolean {
  try {
    return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  } catch {
    return false;
  }
}

export function isLowPowerDevice(): boolean {
  // Heuristics: low RAM, few cores, or forced via localStorage
  const forced = localStorage.getItem('sc_perf') === 'low';
  // @ts-ignore
  const mem = (navigator as any).deviceMemory || 4;
  const cores = navigator.hardwareConcurrency || 4;
  return forced || mem <= 4 || cores <= 4;
}

export type BackgroundEngine = 'none' | 'three' | 'matter';

export function chooseBackground(): BackgroundEngine {
  if (isReducedMotion()) return 'none';
  if (isLowPowerDevice()) return 'matter';
  return 'three';
}