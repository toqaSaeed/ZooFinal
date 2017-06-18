import { NgModule } from '@angular/core'
import { Routes , RouterModule } from '@angular/router'
import { FeedbackComponent } from 'app/feedback/feedback.component'
import { FaqComponent } from 'app/faq/faq.component'
import { DidUknowComponent } from 'app/did-uknow/did-uknow.component'
import { ZoosComponent } from 'app/zoos/zoos.component'
import { NewsComponent } from 'app/news/news.component'
import { AnimalsComponent } from 'app/animals/animals.component'
import { AnimalDetailsComponent } from 'app/animal-details/animal-details.component'
import{TicketsComponent} from 'app/tickets/tickets.component'
import{StaffComponent} from 'app/staff/staff.component'
import{TipsComponent} from 'app/tipsforyouvisit/tips.component'
import{PreservesComponent} from 'app/preserves/preserves.component'
import{HeaderComponent} from 'app/header/header.component'
import{FooterComponent} from 'app/footer/footer.component'
import{HomeComponent} from 'app/home/home.component'
import { GalleryComponent } from 'app/gallery/gallery.component'
import { AppComponent } from 'app/app.component'
import { EntertainPlacesComponent } from 'app/entertain-places/entertain-places.component'
import { HistoricalPlacesComponent } from 'app/historical-places/historical-places.component'
import { ContactUsComponent } from 'app/contact-us/contact-us.component'
import { OrganizationsComponent } from 'app/organizations/organizations.component';
import {AboutComponent} from 'app/about/about.component';


const routes: Routes=[

    {path:'',pathMatch:'full', component:HomeComponent},
         {path:'faq',component: FaqComponent},
         {path:'feedback',component:FeedbackComponent},
         { path:'diduknow', component: DidUknowComponent},
         {path:'news', component:NewsComponent},
         {path:'zoos', component:ZoosComponent},
         {path:'animaldetails/:id', component:AnimalDetailsComponent},
         {path:'Animals', component:AnimalsComponent},
         {path:'Tickets', component:TicketsComponent},
         {path:'Staff', component:StaffComponent},
         {path:'Tips', component:TipsComponent},
         {path:'Preserves', component:PreservesComponent},
         {path:'Header', component:HeaderComponent},
         {path:'Footer', component:FooterComponent},
         {path:'gallery', component:GalleryComponent},
         {path:'Home', component:HomeComponent},
         {path:'EntertainmentPlaces', component:EntertainPlacesComponent},
         {path:'HistoricalPlaces', component:HistoricalPlacesComponent},
         {path: 'contact' , component:ContactUsComponent},
         {path: 'org', component:OrganizationsComponent},
         {path: 'about' , component:AboutComponent}
         
         

    ]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

 
export class ZooRoutModule{
    
}