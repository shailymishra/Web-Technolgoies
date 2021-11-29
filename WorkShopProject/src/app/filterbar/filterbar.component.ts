import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms"
import { FilterbarService } from './filterbar.service';
import { Country } from '../shared/models/country';
import { State } from '../shared/models/state';
import { City } from '../shared/models/city';

@Component({
  selector: 'app-filterbar',
  templateUrl: './filterbar.component.html',
  styleUrls: ['./filterbar.component.css']
})
export class FilterbarComponent implements OnInit {
  countries: Country[];
  allStates: State[];
  allCities: City[];
  states: State[];
  cities: City[];
  radioTest: FormGroup;
  constructor(private fb: FormBuilder, private _filterbarService: FilterbarService) {
  }
  defaultSelection = { 'countryId': 2, 'stateId': 17, 'cityId': 1 };
  ngOnInit() {

    this.countries = this._filterbarService.getCountries();
    this.allStates = this._filterbarService.getStates();
    this.allCities = this._filterbarService.getCities();
    this.radioTest = this.fb.group({
      countryId: [this.defaultSelection.countryId, Validators.required],
      stateId: [this.defaultSelection.stateId, Validators.required],
      cityId: [this.defaultSelection.cityId, Validators.required]
    });
    this.filterStateAndCity(this.defaultSelection.countryId);
    this.filterCity(this.defaultSelection.stateId);
    this.onChanges();
  }
  onChanges(): void {
    this.radioTest.get('countryId').valueChanges.subscribe(countryId => {
      this.filterStateAndCity(countryId);
    });
    this.radioTest.get('stateId').valueChanges.subscribe(stateId => {
      this.filterCity(stateId);
    });
  }

  filterStateAndCity(countryId) {
    this.states = this.allStates.filter(state => state.countryId === countryId);
    this.cities = this.allCities.filter(city => city.countryId === countryId);
  }

  filterCity(stateId) {
    this.cities = this.allCities.filter(city => city.stateId === stateId);
  }

  generate() {
    console.log('obj', this.radioTest.value)
  }
}

