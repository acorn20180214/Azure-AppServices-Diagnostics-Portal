import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeViewComponent } from './components/tree-view/tree-view.component';
import { DiagnosticApiService } from './services/diagnostic-api.service';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { HttpClientModule } from '@angular/common/http';
import { SiteService } from './services/site.service';
import { ContainerAppService } from "./services/containerapp.service";
import { FormsModule } from '@angular/forms';
import { StartupService } from './services/startup.service';
import { ObserverService } from './services/observer.service';
import { GithubApiService } from './services/github-api.service';
import { AseService } from './services/ase.service';
import { ApplensGlobal as ApplensGlobals } from '../applens-global';
import { CacheService } from './services/cache.service';
import { ResourceService } from './services/resource.service';
import { AadAuthGuard } from './auth/aad-auth-guard.service';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import { CaseCleansingApiService } from './services/casecleansing-api.service';
import { ApplensBannerComponent } from './applens-banner/applens-preview-banner.component';
import { ApplensHeaderComponent } from './components/applens-header/applens-header.component';
import { ApplensDiagnosticService } from '../modules/dashboard/services/applens-diagnostic.service';
import { FabButtonModule, FabCalloutModule, FabDialogModule, FabPanelModule, FabToggleModule, FabSearchBoxModule, FabChoiceGroupModule} from '@angular-react/fabric';
import { L1SideNavComponent } from './components/l1-side-nav/l1-side-nav.component';
import { UserSettingService } from '../modules/dashboard/services/user-setting.service';
import { ApplensDocsComponent } from './components/applens-docs/applens-docs.component';
import { StaticWebAppService } from './services/staticwebapp.service';
import { StampService } from './services/stamp.service';
import { DetectorGistApiService } from './services/detectorgist-template-api.service';
import { AlertService } from './services/alert.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    FabPanelModule,
    FabDialogModule,
    FabButtonModule,
    FabSearchBoxModule,
    FabCalloutModule,
    FabToggleModule,
    FabChoiceGroupModule
  ],
  declarations: [TreeViewComponent, LoginComponent, ApplensBannerComponent, L1SideNavComponent, ApplensHeaderComponent, ApplensDocsComponent],
  exports: [TreeViewComponent, ApplensBannerComponent, L1SideNavComponent, ApplensHeaderComponent, ApplensDocsComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        ApplensDiagnosticService,
        DiagnosticApiService,
        ResourceService,
        SiteService,
        ContainerAppService,
        StaticWebAppService,
        StampService,
        AseService,
        ApplensGlobals,
        StartupService,
        ObserverService,
        GithubApiService,
        CacheService,
        AadAuthGuard,
        CaseCleansingApiService,
        UserSettingService,
        DetectorGistApiService,
        AlertService
      ]
    }
  }
}
