import {createSharedPathnamesNavigation} from 'next-intl/navigation';
import { languages } from './constants/language';

export const locales = languages;
export const localePrefix = 'always'; //Default
 
export const {Link, redirect, usePathname, useRouter} =
  createSharedPathnamesNavigation({locales, localePrefix});