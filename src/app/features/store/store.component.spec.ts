import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreComponent } from './store.component';
import { NavComponent } from '../../core/layout/nav/nav.component';

describe('StoreComponent', () => {
    let component: StoreComponent;
    let fixture: ComponentFixture<StoreComponent>;
    let template: HTMLElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [StoreComponent, NavComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(StoreComponent);
        component = fixture.componentInstance;
        template = fixture.nativeElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
