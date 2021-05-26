import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
    },
    {
        path: 'home',
        loadChildren: () =>
            import('./features/home/home.module').then((m) => m.HomeModule)
    },
    {
        path: 'pokemon/details/:id',
        loadChildren: () =>
            import('./features/pokemon/pokemon.module').then((m) => m.PokemonModule)
    },
    {
        path: '**',
        redirectTo: '',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
