import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { listItem } from 'src/app/utilities/listItem.model';
import { DropdownService } from '../dropdown.service';
import { WorkerCreationDto, WorkerDto } from '../workers.model';
import { WorkersService } from '../workers.service';

@Component({
  selector: 'app-worker-filter',
  templateUrl: './worker-filter.component.html',
  styleUrls: ['./worker-filter.component.css']
})
export class WorkerFilterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, 
    private workerService: WorkersService,
    private dropdownService: DropdownService) { }

  form!: FormGroup;

  universities: listItem[] = [];
  languages: listItem[] = [];
  softSkills: listItem[] = [];
  techSkills: listItem[] = [];

  originalWorkers: WorkerDto[] =  [];

  workers: WorkerDto[] =  [];

  ngOnInit(): void {
    this.workerService.getAll().subscribe(workers =>{
      this.workers = workers;
      this.originalWorkers = this.workers;
    });

    this.dropdownService.getAllFields().subscribe(allFields =>{
      this.universities = allFields.universities.sort().map((x, idx) => ({id: idx, name:x}));
      this.languages = allFields.languages.sort().map((x, idx) => ({id: idx, name:x}));
      this.softSkills = allFields.softSkills.sort().map((x, idx) => ({id: idx, name:x}));
      this.techSkills = allFields.techSkills.sort().map((x, idx) => ({id: idx, name:x}));
    });

    this.form = this.formBuilder.group({
       name:'',
       university:'',
       language:'',
       softSkill:'',
       techSkill:'',
    });

    this.form.valueChanges.subscribe(values => {
      this.workers = this.originalWorkers;

      //Remove null fields
      Object.keys(values).forEach(k => (!values[k] && values[k] !== undefined) && delete values[k]);
      this.filterWorkers(values);
    });
  }

  filterWorkers(values: any){
    this.workers= this.workers.filter(item => this.filterName(item, values['name']) &&
        this.filterUniversities(item, values['university']) &&
        this.filterLanguage(item, values['language']) &&
        this.filterTechSkill(item, values['techSkill']) &&
        this.filterSoftSkill(item, values['softSkill']));
  }

  filterName(worker: WorkerDto, value: string | null): boolean{
    if(value){
      return worker.name.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    }
    return true;
  }

  filterUniversities(worker: WorkerDto, value: string | null): boolean{
    if(value){
      return worker.studyHistory.map(sh=>sh.school).includes(value);
    }
    return true;
  }

  filterLanguage(worker: WorkerDto, value: string | null): boolean{
    if(value){
      return worker.skills.knownLanguages.map(kl=>kl.skill).includes(value);
    }
    return true;
  }

  filterSoftSkill(worker: WorkerDto, value: string | null): boolean{
    if(value){
      return worker.skills.softSkills.map(ss=>ss.skill).includes(value);
    }
    return true;
  }

  filterTechSkill(worker: WorkerDto, value: string | null): boolean{
    if(value){
      return worker.skills.techSkills.map(ts=>ts.skill).includes(value);
    }
    return true;
  }

  clearForm(){
    this.form.reset();
    this.workers = this.originalWorkers;
  }
}
