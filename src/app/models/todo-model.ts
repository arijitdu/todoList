export class TodoModel {
  name!: string;
  isChecked!: boolean;
  constructor(name: string, isChecked: boolean) {
    this.name = name;
    this.isChecked = isChecked;
  }
}
