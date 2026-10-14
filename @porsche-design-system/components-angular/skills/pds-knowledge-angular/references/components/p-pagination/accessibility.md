# p-pagination accessibility integration examples

## Integration examples

### Default English labels on a localized page

#### ❌ Anti-pattern

```html
<html lang="de_DE">
  ...
  <p-pagination [totalItemsCount]="120" [itemsPerPage]="10" [activePage]="1"></p-pagination>
</html>
```

#### ✅ Recommended

```html
<html lang="de_DE">
  ...
  <p-pagination [totalItemsCount]="120" [itemsPerPage]="10" [activePage]="1" [intl]="{'root': 'Seitennavigation', 'prev': 'Vorherige Seite', 'next': 'Nächste Seite', 'page': 'Seite'}"></p-pagination>
</html>
```
