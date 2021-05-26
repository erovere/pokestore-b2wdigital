import { Component, OnInit } from '@angular/core';
import { ApiService, ConfigurationService } from '@app/core/services';
import { first } from 'rxjs/operators';

@Component({
    selector: 'app-store',
    templateUrl: './store.component.html',
    styleUrls: ['./store.component.scss'],
})
export class StoreComponent implements OnInit{
    public features: string[];
    public pokemonList;
    public selectedPokemonType;
    public pokemonListFiltered;
    public maxRecordsToShow;
    public recordsRendered;
    public QTD_POKEMONS_TO_SHOW = 21;

    public isCartEmpty = true;

    constructor(
        private configurationService: ConfigurationService,
        private api: ApiService
    ) { }

    ngOnInit(): void {
        const appConfig = this.configurationService.getConfigSync();
        if (appConfig) {
            this.selectedPokemonType = appConfig.name;
            this.features = appConfig.features;
        }
        this.fetchPokemonsByType();
    }

    private fetchPokemonsByType(): void {
        this.api.get(`type/${this.selectedPokemonType}`)
            .pipe(first())
            .subscribe(
                (response) => {
                    this.pokemonList = response.pokemon;
                    this.maxRecordsToShow = this.pokemonList.length;
                    this.mountPokemonsToStore(0);
                },
                (error) => {
                    if (error.customMessages) {
                        console.log('Erro ao buscar pokemons: ', error);
                    }
                }
            );
    }

    private mountPokemonsToStore(showMoreRecords: number): any {
        if (this.recordsRendered == null) {
            this.pokemonListFiltered = this.pokemonList.slice(0, (this.QTD_POKEMONS_TO_SHOW + showMoreRecords)).filter(pokemon => {
                return pokemon.pokemon.name.indexOf('') >= 0;
            });
            this.recordsRendered = (this.QTD_POKEMONS_TO_SHOW + showMoreRecords);
        } else {
            this.pokemonListFiltered = this.pokemonList.slice(0, (this.recordsRendered + showMoreRecords)).filter(pokemon => {
                return pokemon.pokemon.name.indexOf('') >= 0;
            });
            this.recordsRendered = (this.recordsRendered + showMoreRecords);
        }
        console.log('POKEMON FILTRADOS: ', this.pokemonListFiltered);
    }

    public getPokemonIdFromURL(url: string): number {
        return Number(url.split('/')[6]);
    }

    public isFeatureEnabled(key: string): boolean {
        return !!this.features && this.features.includes(key);
    }

    public addToCart(pokemonId: number): void {
        this.isCartEmpty = false;
        console.log('pokemon id selected: ', pokemonId);
    }
 }
