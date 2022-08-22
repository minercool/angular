import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ListBlogsComponent } from './blogs/list-blogs/list-blogs.component';
import { HttpClientModule } from '@angular/common/http';
import { ShowBlogComponent } from './blogs/show-blog/show-blog.component';
import { CreateBlogComponent } from './blogs/create-blog/create-blog.component';
import { UpdateBlogComponent } from './blogs/update-blog/update-blog.component';
import { ListArticlesComponent } from './articles/list-articles/list-articles.component';
import { CreateArticleComponent } from './articles/create-article/create-article.component';
import { ShowArticleComponent } from './articles/show-article/show-article.component';
import { FormsModule } from '@angular/forms';
import { ListPersonsComponent } from './person/list-persons/list-persons.component';
import { CreatePersonComponent } from './person/create-person/create-person.component';
import { DetailPersonComponent } from './person/detail-person/detail-person.component';
import { UpdatePersonComponent } from './person/update-person/update-person.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListBlogsComponent,
    ShowBlogComponent,
    CreateBlogComponent,
    UpdateBlogComponent,
    ListArticlesComponent,
    CreateArticleComponent,
    ShowArticleComponent,
    ListPersonsComponent,
    CreatePersonComponent,
    DetailPersonComponent,
    UpdatePersonComponent,
    NotFoundComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
