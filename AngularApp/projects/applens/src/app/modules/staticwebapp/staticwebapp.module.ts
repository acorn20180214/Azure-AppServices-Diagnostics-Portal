import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { StaticWebAppFinderComponent } from './staticwebapp-finder/staticwebapp-finder.component';

export const StaticWebAppAppModuleRoutes: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    component: StaticWebAppFinderComponent
  }
]);

@NgModule({
  imports: [
    CommonModule,
    StaticWebAppAppModuleRoutes,
    SharedModule
  ],
  declarations: [StaticWebAppFinderComponent]
})
export class StaticWebAppModule { }
