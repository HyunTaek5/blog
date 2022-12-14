const navbar = {
  title: '8:20 Dev Log',
  logo: {
    alt: 'HyunTaek Oh Logo',
    src: 'img/favicon.png',
  },

  items: [
    // {
    //     type: 'doc',
    //     docId: 'Hey',
    //     position: 'left',
    //     label: 'Daily Log'
    // },
    {
      to: '/about',
      label: 'About',
      position: 'left',
    },
    {
      to: '/w/dev-log',
      label: 'Dev Log',
      position: 'left',
    },
    {
      to: '/w/projects',
      label: 'Projects',
      position: 'left',
    },
    {
      href: 'https://github.com/HyunTaek5',
      position: 'right',
      label: 'GitHub',
      className: 'navbar-github-link',
      'aria-label': 'GitHub repository',
    },
    {
      href: 'https://linkedin.com/in/dylanoh',
      position: 'right',
      label: 'LinkedIn',
      className: 'navbar-linkedin-link',
      'aria-label': 'LinkedIn Account',
    },
    {
      type: 'localeDropdown',
      position: 'right',
    },
  ],
};

export default navbar;
