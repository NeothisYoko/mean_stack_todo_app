export interface DataToDelete<T> {
  object : T; //Si object était any ne peut pas être tout non plus donc type générique.
  index : number;
}
