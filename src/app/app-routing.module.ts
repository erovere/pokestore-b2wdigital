import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./features/store/store.module').then((m) => m.StoreModule)
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
