interface NavBadge {
  text: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  class?: string;
  disabled?: boolean;
}

export const navItems: NavData[] = [
  {
    title: true,
    name: 'Title 1'
  },
  {
    name: 'View1',
    url: '/demo/view1',
    icon: 'fa-tachometer-alt',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Title 2'
  },
  {
    name: 'View2',
    icon: 'fa-user',
    url: 'demo/view2',
    children: [
      {
        name: 'Child1',
        url: '/demo/view2/child1',
        icon: 'fa-user-friends'
      },
      {
        name: 'Child2',
        url: '/demo/view2/child2',
        icon: 'fa-user-friends'
      }
    ]
  },
  {
    name: 'Disabled',
    url: '/disabled',
    icon: 'fa-ban',
    disabled: true
  }
];
