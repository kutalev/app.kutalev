import { UserRole } from "../utils/auth.roles";

export const defaultMenuType = 'menu-default' // 'menu-default', 'menu-sub-hidden', 'menu-hidden';
export const adminRoot = '/app';
export const searchPath = `${adminRoot}/#`
export const apiUrl = 'https://api.coloredstrategies.com';

export const subHiddenBreakpoint = 1440
export const menuHiddenBreakpoint = 768

export const defaultLocale = 'ru'
export const defaultDirection = 'ltr'
export const localeOptions = [
  { id: 'ru', name: 'Русский', direction: 'ltr' },
  { id: 'en', name: 'English', direction: 'ltr' },
  // { id: 'enrtl', name: 'English RTL', direction: 'rtl' }
]

export const firebaseConfig = {
  apiKey: "AIzaSyDJga_iyXnC24dWMpFRflSOBDqnMx9PVSY",
  authDomain: "app-kutalev.firebaseapp.com",
  databaseURL: "https://app-kutalev.firebaseio.com",
  projectId: "app-kutalev",
  storageBucket: "app-kutalev.appspot.com",
  messagingSenderId: "535964890925",
  appId: "1:535964890925:web:224fc8e1bc45aa803885a4",
  measurementId: "G-7P54KXNDJ8"
};




export const currentUser = {
  id: 1,
  title: 'Илья Куталев',
  img: 'https://sun2-9.userapi.com/impf/c831408/v831408957/5de08/EpkLyju8mAI.jpg?size=50x0&quality=96&crop=601,110,1539,1539&sign=c83cdb4e705a646b7d506b988b7d75a6&ava=1',
  date: 'Last seen today 15:24',
  role: UserRole.Admin
}

export const isAuthGuardActive = true;
export const themeRadiusStorageKey = 'theme_radius'
export const themeSelectedColorStorageKey = 'theme_selected_color'
export const defaultColor = 'dark.greysteel'
export const colors = ['bluenavy', 'blueyale', 'blueolympic', 'greenmoss', 'greenlime', 'purplemonster', 'orangecarrot', 'redruby', 'yellowgranola', 'greysteel']
