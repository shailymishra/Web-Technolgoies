export const navigation = [
  {
    name: 'Employees',
    url: '/demo/dashboard',
    icon: 'icon-speedometer'
  },
  
  {
    name: 'Departments',
    url: '/demo/dashboard',
    icon: 'icon-star',
  },
  {
    name: 'Locations',
    url: '/demo/dashboard',
    icon: 'icon-calculator'
  },
  {
    name: 'Teams',
    url: '/demo/dashboard',
    icon: 'icon-pie-chart'
  },
  {
    name: 'Status',
    url: '/demo/dashboard',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Favourites',
        url: '/demo/dashboard',
        icon: 'icon-puzzle'
      },
      {
        name: 'My Teams',
        url: '/demo/dashboard',
        icon: 'icon-puzzle'
      },
      {
        name: 'My Status',
        url: '/demo/dashboard',
        icon: 'icon-puzzle'
      }
    ]
  }

];
