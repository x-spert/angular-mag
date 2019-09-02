# angular-mag

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-mag)

# HTML is still HTML
1. Gaseste fisierul `app.component.html`
1. Editeaza-l astfel incat sa afiseze `M-ai editat, deci se dezlantuie magia`

#### Bonus
Gaseste fisierul HTML in care AppComponent este reprezentat printr-un tag html.

**Hint**: AppComponent defineste tag-ul HTML in decoratorul `@Component`
___
# 2. Interpolation
## Afisarea unei variable in HTML
Angular ne ofera o sintaxa speciala pentru a include in template (in HTML) date definite in logica componentei (in fisierul .ts)

```javascript
// Component Typescript code
myName = 'Angular Wiz Escu'

// Component template HTML code
<div> Numele meu este {{ myName }} </div>
```

## Task
1. Deschide template-ul componentei AppComponent (`app.component.html`)
1. Gaseste tag-ul `<h1>`
1. Inlocuieste continutul (`Angular`) cu proprietatea `name`
1. Deschide typescript-ul componentei AppComponent (`app.component.ts`)
1. Schimba valoarea proprietatii `name`: observa ca se actualizeaza si pagina

**Hint**: Nu uita sa folosesti interpolarea (`{{name}}`). Altfel va fi afisat string-ul `name` in loc de valoarea lui
___
# 3. More Interpolation
## Afisarea proprietatilor unui obiect
In componenta AppComponent am adaugat proprietatea product ca obiect.
Observati structura.

## Task
1. Deschide template-ul componentei AppComponent
1. Inlocuieste campurile care definesc produsul cu proprietatile obiectului `product` folosind interpolare.
1. Modifica informatii din obiectul product si observa cum se actualizeaza in pagina.
___
# 4.1. Directive Structurale: ng-for
Cum orice magazin are mai mult de un produs, am adaugat un array de produse in AppComponent. Observati structura.

Proprietatea `product` este acum primul element din array-ul `products`.

Dorim sa afisam toate produsele din array.

O varianta ar fi copy/paste al template-ului care defineste produsul si folosirea unei variable pentru fiecare produs.

Angular ofera suport pentru modificarea structurii template-ului (in cazul acesta duplicarea unor elemente din template) cu ajutorul directivelor structurale.

## *ngFor
*ngFor va repeta blocul de HTML pe care este aplicat pentru fiecare element dintr-o colectie.

```javascript
// Component Typescript code
elements = ['one', 'two', 'three']

// Component template HTML code
<div *ngFor="let element of elements"> Element: {{ element }} </div>

// Result
Element: one
Element: two
Element: three
```

## Task
1. Deschide template-ul componentei AppComponent
1. Adauga directiva `*ngFor` astfel incat sa fie afisate toate produsele din array-ul `products`

**Hint**: Nu uita sa folosesti (\*) in fata lui **ngFor**. Aceasta sintaxa indica faptul ca este o directiva structurala: `<div class="product" *ngFor="let product of products">`