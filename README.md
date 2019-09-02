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