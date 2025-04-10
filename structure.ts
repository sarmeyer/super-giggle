import {StructureBuilder} from 'sanity/structure'

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      // Content Management
      S.listItem()
        .title('Blog')
        .child(
          S.list()
            .title('Blog Content')
            .items([
              S.documentTypeListItem('post').title('Posts'),
              S.documentTypeListItem('category').title('Categories'),
            ])
        ),
      
      // Store Information
      S.listItem()
        .title('Store')
        .child(
          S.list()
            .title('Store Information')
            .items([
              S.documentTypeListItem('location').title('Store Locations'),
              S.documentTypeListItem('person').title('Team Members'),
            ])
        ),
      
      // Content Components
      S.divider(),
      S.documentTypeListItem('blockContent').title('Content Blocks'),
    ]) 