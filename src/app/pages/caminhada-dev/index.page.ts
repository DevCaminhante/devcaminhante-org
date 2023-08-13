import { Component } from '@angular/core'
import { Constant } from '../../core/constants/constants'
import { ContentFile, injectContentFiles } from '@analogjs/content'
import { DataViewModule } from 'primeng/dataview'
import { DateTime } from 'luxon'
import { HeaderRouteText } from '../../core/constants/header-route.constants'
import { NgClass, NgForOf } from '@angular/common'
import { Post } from '../../core/interfaces/post'
import { RouterLink } from '@angular/router'

@Component({
  standalone: true,
  template: `
    <p-dataView
      #dv
      [value]="posts">
      <ng-template pTemplate="header">
        <h1 [ngClass]="{ 'text-center': true }">{{
          HeaderRouteText.CAMINHADA_DEV
        }}</h1>
      </ng-template>
      <ng-template
        let-post
        pTemplate="listItem">
        <div [ngClass]="{ 'col-12 py-2 flex flex-column text-center': true }">
          <h2>
            <a
              [ngClass]="{ 'no-underline': true }"
              [routerLink]="post.attributes['slug']"
              >{{ post.attributes.title }}</a
            >
          </h2>
          <p [ngClass]="{ 'mt-0 text-sm': true }"
            >{{ post.attributes['date'] }} por
            {{ post.attributes['author'] }}</p
          >
        </div>
      </ng-template>
    </p-dataView>
  `,
  imports: [DataViewModule, NgClass, NgForOf, RouterLink]
})
export default class CaminhadaDevIndexPage {
  protected readonly HeaderRouteText = HeaderRouteText
  readonly posts: ContentFile<Post>[] = injectContentFiles<Post>((file) =>
    file.filename.includes(Constant.CAMINHADA_DEV_POSTS_DIRECTORY)
  ).map((post) => {
    const date = DateTime.fromISO(post.attributes.date)
    const dateString = date
      .setLocale('pt-BR')
      .toLocaleString(DateTime.DATE_FULL)

    return {
      ...post,
      attributes: {
        ...post.attributes,
        date: dateString
      }
    }
  })
}
