// @ts-nocheck
import { initLocale, getPhrases, getLocale, t } from '..';

describe('i18n', () => {
  describe('Default behavior', () => {
    it('should work without initialization', () => {
      expect(t('test')).toEqual('test');
    });
  });
  describe('initPhrases', () => {
    it('should init with empty phrases', () => {
      initLocale({ locale: 'cs', phrases: {} });
      expect(getPhrases()).toEqual({});
      expect(getLocale()).toEqual('cs');
    });
    it('should init with empty phrases', () => {
      initLocale({ locale: 'cs', phrases: { hello: 'Ahoj' } });
      expect(getPhrases()).toEqual({ hello: 'Ahoj' });
    });
  });
  describe('t', () => {
    it('Translates', () => {
      initLocale({ locale: 'cs', phrases: { hello: 'Ahoj' } });
      expect(t('hello')).toEqual('Ahoj');
    });
    it('Returns key for missing phrase', () => {
      initLocale({ locale: 'cs', phrases: {}, onMissingKey: (key) => key });
      expect(t('wtf')).toEqual('wtf');
    });
    it('onMissingKey: Calls custom handler on missing key', () => {
      const onMissingKey = (key) => {
        return `Missing: ${key}`;
      };
      initLocale({ locale: 'cs', phrases: {}, onMissingKey });
      expect(t('wtf')).toEqual('Missing: wtf');
    });
  });
});
