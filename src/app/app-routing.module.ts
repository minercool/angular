import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateArticleComponent } from './articles/create-article/create-article.component';
import { ListArticlesComponent } from './articles/list-articles/list-articles.component';
import { ShowArticleComponent } from './articles/show-article/show-article.component';
import { CreateBlogComponent } from './blogs/create-blog/create-blog.component';
import { ListBlogsComponent } from './blogs/list-blogs/list-blogs.component';
import { ShowBlogComponent } from './blogs/show-blog/show-blog.component';
import { UpdateBlogComponent } from './blogs/update-blog/update-blog.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path : '',
    component : HomeComponent
  },
  {
  path : 'list-blogs',
  component : ListBlogsComponent
  },
  {
    path : 'show-blog/:id',
    component : ShowBlogComponent
  },
  {
    path : 'create-blog',
    component : CreateBlogComponent
  },
  {
    path : 'update-blog/:id',
    component : UpdateBlogComponent
  },
  {
    path : 'list-articles',
    component : ListArticlesComponent
  },
  {
    path : 'create-article',
    component : CreateArticleComponent
  },
  {
    path : 'show-article/:id',
    component : ShowArticleComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
