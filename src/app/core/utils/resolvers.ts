import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router'
import { Constant } from '../constants/constants'
import { injectContentFiles } from '@analogjs/content'
import { MetaTag } from '@analogjs/router'
import { Post } from '../interfaces/post'

function injectActivePostAttributes(route: ActivatedRouteSnapshot): Post {
  const file = injectContentFiles<Post>().find((contentFile) => {
    return (
      contentFile.filename === `/src/content/${route.params['slug']}.md` ||
      contentFile.slug === route.params['slug']
    )
  })

  return file!.attributes
}

export const postTitleResolver: ResolveFn<string> = (route) =>
  `${injectActivePostAttributes(route).title} - Blog - ${
    Constant.APPLICATION_NAME
  }`

export const postMetaResolver: ResolveFn<MetaTag[]> = (route) => {
  const postAttributes = injectActivePostAttributes(route)
  return [
    {
      name: 'description',
      content: postAttributes.description
    },
    {
      name: 'author',
      content: postAttributes.author
    },
    {
      property: 'og:title',
      content: postAttributes.title
    },
    {
      property: 'og:description',
      content: postAttributes.description
    },
    {
      property: 'og:image',
      content: postAttributes.coverImage
    }
  ]
}
