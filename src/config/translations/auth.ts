import { provider } from './provider';
import { createI18n } from '@/utils/i18n';

export const auth = createI18n(provider, {
  en: {
    login: 'Sign in',
    'login description': 'Login and start using our bot today',
    login_bn: 'Login with Discord',
  },
  cn: {
    login: 'تسجيل الدخول',
    'login description': 'قم بتسجيل الدخول واستعمال ستيلا بوت',
    login_bn: 'تسجيل الدخول باستعمال الديسكورد',
  },
});
