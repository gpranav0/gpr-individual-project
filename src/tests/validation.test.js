import { validateEmail, validateUsername, validatePassword } from '../utils/validation';

describe('Validation Functions', () => {
  describe('validateEmail', () => {
    it('shows error for invalid email', () => {
      expect(validateEmail('invalid-email')).toBe('Invalid email format');
      expect(validateEmail('test@')).toBe('Invalid email format');
      expect(validateEmail('test@com')).toBe('Invalid email format');
    });

    it('returns empty string for valid email', () => {
      expect(validateEmail('test@example.com')).toBe('');
    });
  });

  describe('validateUsername', () => {
    it('requires minimum 3 characters', () => {
      expect(validateUsername('ab')).toBe('Username must be at least 3 characters');
      expect(validateUsername('abc')).toBe('');
    });
  });

  describe('validatePassword', () => {
    it('requires minimum 8 characters', () => {
      expect(validatePassword('1234567')).toBe('Password must be at least 8 characters');
      expect(validatePassword('12345678')).toBe('');
    });
  });
});
