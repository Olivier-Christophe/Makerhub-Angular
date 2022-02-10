import { removeSummaryDuplicates } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SampleIndexComponent } from './pages/sample-index/sample-index.component';
import { CategoryIndexComponent } from './pages/category-index/category-index.component';
import { CategoryAddComponent } from './pages/category/category-add.component';
import { SampleAddComponent } from './pages/sample-add/sample-add.component';
import { SearchComponent } from './pages/search/search.component';
import { SampleEditionComponent } from './pages/sample-edition/sample-edition.component';

const routes: Routes = [
  { path: 'samples', component: SampleIndexComponent  },
  { path: 'categories', component: CategoryIndexComponent  },
  { path: 'categories-add', component: CategoryAddComponent  },
  { path: 'samples-add', component: SampleAddComponent  },
  { path: 'search', component: SearchComponent  },
  { path: 'sample-edition', component: SampleEditionComponent  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
