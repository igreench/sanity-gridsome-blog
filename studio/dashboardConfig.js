export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ed38c7d1c84482d60327a92',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-u8p1dj2m',
                  apiId: 'e70d660c-f946-4658-94e2-0abb4088107b'
                },
                {
                  buildHookId: '5ed38c7d8db2b85ba8dbdd80',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-vncaxwpd',
                  apiId: '370629c5-5505-4634-a889-9063e2f375b6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/igreench/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-vncaxwpd.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
