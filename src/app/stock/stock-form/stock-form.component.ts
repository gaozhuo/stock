import {Component, OnInit} from '@angular/core';
import {Stock} from "../stock";
import {ActivatedRoute, Router} from "@angular/router";
import {StockService} from "../stock.service";
import {
  AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors,
  Validators
} from "@angular/forms";
import {ValidateFn} from "codelyzer/walkerFactory/walkerFn";
import {log} from "util";

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {
  stock: Stock;
  formModule: FormGroup;
  categories = ['IT', '互联网', '金融'];

  constructor(private route: ActivatedRoute,
              private stockService: StockService,
              private router: Router,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    let stockId = this.route.snapshot.params['id'];

    this.stock = this.stockService.getStock(stockId);

    this.createForm();
  }

  private resetForm() {
    this.formModule.reset({
      name: [this.stock.name],
      price: [this.stock.price],
      desc: [this.stock.desc],
      categories: this.fb.array(
        [
          new FormControl(this.stock.categories.indexOf(this.categories[0]) != -1),
          new FormControl(this.stock.categories.indexOf(this.categories[1]) != -1),
          new FormControl(this.stock.categories.indexOf(this.categories[2]) != -1)
        ])
    })
  }

  private createForm() {
    this.formModule = this.fb.group({
      name: [this.stock.name, [Validators.required, Validators.minLength(3)]],
      price: [this.stock.price, Validators.required],
      desc: [this.stock.desc],
      categories: this.fb.array(
        [
          new FormControl(this.stock.categories.indexOf(this.categories[0]) != -1),
          new FormControl(this.stock.categories.indexOf(this.categories[1]) != -1),
          new FormControl(this.stock.categories.indexOf(this.categories[2]) != -1)
        ], this.categoriesSelectValidators)
    })
  }

  /**
   * 自定义校验器
   *
   * @param {AbstractControl} control
   * @returns {ValidationErrors}
   */
  categoriesSelectValidators(control: AbstractControl): ValidationErrors | null {
    let formArray: FormArray = control as FormArray;
    for (let c of formArray.controls) {
      if (c.value) {
        return null;
      }
    }

    return {categoriesLength: true};
  }

  cancel() {
    this.router.navigateByUrl("stock");
  }

  save() {
    console.log(this.formModule.value);
    console.log(this.formModule.status);
    console.log(this.formModule.get("name").value)
    console.log(this.formModule.get('name').touched);
    this.router.navigateByUrl("stock");
  }

}
