import { AsyncPipe, NgClass, NgIf, NgStyle } from '@angular/common'
import { Component } from '@angular/core'
import { injectContent, MarkdownComponent } from '@analogjs/content'
import { Post } from '../../core/interfaces/post'
import { postMetaResolver, postTitleResolver } from '../../core/utils/resolvers'
import { RouteMeta } from '@analogjs/router'

export const routeMeta: RouteMeta = {
  title: postTitleResolver,
  meta: postMetaResolver
}

@Component({
  standalone: true,
  template: `
    <div
      *ngIf="post$ | async as post"
      [ngClass]="{ 'mx-4 my-2': true }">
      <h1 [ngClass]="{ 'text-center': true }">{{ post.attributes.title }}</h1>
      <div>
        <analog-markdown [content]="post.content"></analog-markdown>
      </div>
    </div>
  `,
  imports: [AsyncPipe, MarkdownComponent, NgClass, NgIf, NgStyle]
})
export default class CaminhadaDevSlugPage {
  readonly post$ = injectContent<Post>({
    param: 'slug',
    subdirectory: 'caminhada-dev'
  })
}
