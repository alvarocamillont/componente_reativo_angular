import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  formulario: FormGroup;
  title = 'teste-reativo';

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      filme: [null],
      nota: [null]
    });
  }

  onSubmit() {
    const valueSubmit = Object.assign({}, this.formulario.value);

    console.log(valueSubmit);

    if (this.formulario.valid) {
      alert('Está certo');
    } else {
      alert('Está errado');
    }
  }
}
