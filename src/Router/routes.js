
export const HOME = { route: '/', label: 'home' };
export const USERSTABLE = { route: '/usersTable', label: 'users table' };
export const LOGIN = { route: '/login',label: 'Login'  };
export const SIGNUP = { route: '/signUp', label: 'Sign Up' };
export const ATELIERTYPE = { route: '/atelierType', label: 'Annuaire des prestataires' };
export const FORUM = { route: '/forum', label: 'Forum' };
export const CONTACT={route:'/contactForm', label:'Nous Contacter !'};
export const PROFILE={route:'/profile', label:'Profile'};
export const POST={route:'/post', label:'Post'};
export const ADDSUJET={route:'/addsujet', label:'Add sujet'};


export const SIDE_MENU_ROUTES = [
  HOME,
  USERSTABLE,
  SIGNUP,
  LOGIN,
  ATELIERTYPE,
  FORUM,
  true? CONTACT: null,
  PROFILE,
  
];
export const LAYOUT_ROUTES = [
  HOME,
  USERSTABLE,
  SIGNUP,
  LOGIN,
  ATELIERTYPE,
  FORUM,
  ADDSUJET,
  CONTACT,
  PROFILE,
  POST
  
];
