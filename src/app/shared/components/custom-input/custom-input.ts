import { Component, forwardRef, input, signal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
type typeForm = 'text' | 'number' | 'password' | 'email';
@Component({
  selector: 'app-custom-input',
  imports: [],
  templateUrl: './custom-input.html',
  styleUrl: './custom-input.css',
   providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInput),
      multi: true
    }
  ]
})
export class CustomInput implements ControlValueAccessor{
  label = input<string>();
  placeholder = input<string>();
  type = input<typeForm>('text');
  messageError = input<string>();
  showError = input(false);


  value = signal<string | null>(null);
  disabled = signal(false);


  //Creamos los métodos de comunicación para angular
  private onChange: (v:string ) => void = () => {};
  private onTouched: () => void = () => {};

  //Capturamos la escritura del cliente
  onInput(event : Event):void{
    const elemento = event.target as HTMLInputElement
    this.value.set(elemento.value);
    this.onChange(elemento.value);
  }

  onBlur(){
    this.onTouched();
  }


  writeValue(value: string): void {
    this.value.set(value || null);
  }
  registerOnChange(fn: (v: string) => void): void {
    this.onChange = fn
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }
}
