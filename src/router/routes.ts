export interface RouteProps {
  exact?: boolean;
  path: string;
  component?: string;
}

export default [
  { path: '/', component: '/home' },
];
