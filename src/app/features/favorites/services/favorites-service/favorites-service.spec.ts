import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesService } from './favorites-service';

describe('FavoritesService', () => {
  let component: FavoritesService;
  let fixture: ComponentFixture<FavoritesService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoritesService],
    }).compileComponents();

    fixture = TestBed.createComponent(FavoritesService);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
