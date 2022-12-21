export default {
  widgets: [
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
                  buildHookId: '63a2cc8c1643a54e68f2acbe',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-v-3-studio',
                  apiId: 'bf467b30-c3c5-4d0d-903b-e95df7416676'
                },
                {
                  buildHookId: '63a2cc8d4076505600490b7b',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-v-3-web',
                  apiId: '82919e70-dc17-4598-9a52-a394e799d9a5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/esleire/sanity-kitchen-sink-v3',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-v-3-web.netlify.app', category: 'apps'}
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
