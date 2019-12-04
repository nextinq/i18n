import Polyglot, { PolyglotOptions } from 'node-polyglot';

let polyglot = new Polyglot({ locale: 'cs-CZ' });
let options: PolyglotOptions | null = null;

export function initLocale(opts: PolyglotOptions): void {
  options = opts;
  polyglot = new Polyglot(opts);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getPhrases(): any {
  return options && options.phrases;
}

export function getLocale(): string | null {
  return options?.locale || null;
}

export function t(scope: string, options: {} = {}): string {
  return polyglot.t(scope, options);
}
