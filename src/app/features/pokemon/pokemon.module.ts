
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonComponent } from './pokemon.component';

@NgModule({
    declarations: [PokemonComponent],
    imports: [SharedModule, PokemonRoutingModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PokemonModule { }
