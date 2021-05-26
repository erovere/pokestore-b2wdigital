import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '@app/core/services';
import { first } from 'rxjs/operators';
import { Location } from '@angular/common';


@Component({
    selector: 'app-pokemon',
    templateUrl: './pokemon.component.html',
    styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
    public loading: boolean;
    public pokemonId: number;
    public pokemonIdsub: any;
    public pokemonDetails;

    constructor(
        private api: ApiService,
        private location: Location,
        private route: ActivatedRoute,
    ) { }

    ngOnInit(): void {
        this.loading = true;
        this.loadPokemonDataByID();
    }

    public handleBack = () => this.location.back();

    public loadPokemonDataByID(): void {
        this.pokemonIdsub = this.route.params.subscribe((params) => {
            const keyId = 'id';
            this.pokemonId = params[keyId];
        });
        if (this.pokemonId) {
            this.api.get('pokemon/' + this.pokemonId)
                .pipe(first())
                .subscribe(
                    (response) => {
                        this.loading = false;
                        this.pokemonDetails = response;
                        console.log('Dados do pokemon selecionado: ', response);
                    },
                    (error) => {
                        this.loading = false;
                        console.log('Erro ao buscar informações do pokemon. ', error);
                    }
                );
        }
    }

    get getPokemonTypes(): any {
        return this.pokemonDetails.types.map(item => item.type.name).join(', ');
    }

    get getPokemonAbility(): any {
        return this.pokemonDetails.abilities.map(item => item.ability.name).join(', ');
    }

    get getPokemonMoves(): any {
        return this.pokemonDetails.moves.map(move => move.move.name).slice(0, 10).join(', ');
    }

    get getPokemonSprites(): any {
        const key = 'front_default';
        return this.pokemonDetails.sprites[key];
    }
}
