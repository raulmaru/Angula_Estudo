import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './component/test/test.component';

const route: Routes = [
{ path: '', redirectTo: 'home', pathMatch: 'full' },
 {path: 'home', component:TestComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(route)],
    exports: [RouterModule],
})
export class AppRoutingModule {  }
