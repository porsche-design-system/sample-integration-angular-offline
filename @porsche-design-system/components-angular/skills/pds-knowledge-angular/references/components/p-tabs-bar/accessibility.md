# p-tabs-bar accessibility integration examples

## Integration examples

### Tabbed interface without tablist label

#### ❌ Anti-pattern

```html
<p-tabs-bar [activeTabIndex]="0">
  <button type="button" id="tab-0" ariaControls="panel-0">
    Overview
  </button>
  <button type="button" id="tab-1" ariaControls="panel-1">
    Equipment
  </button>
</p-tabs-bar>
```

#### ✅ Recommended

```html
<p-tabs-bar [aria]="{'aria-label': 'Porsche 911 configuration sections'}" [activeTabIndex]="0">
  <button type="button" id="tab-0" ariaControls="panel-0">
    Overview
  </button>
  <button type="button" id="tab-1" ariaControls="panel-1">
    Equipment
  </button>
</p-tabs-bar>
```

### Route navigation without landmark label

#### ❌ Anti-pattern

```html
<p-tabs-bar>
  <a href="/models/911">
    911
  </a>
  <a href="/models/taycan">
    Taycan
  </a>
</p-tabs-bar>
```

#### ✅ Recommended

```html
<nav ariaLabel="Porsche model range">
  <p-tabs-bar>
    <a href="/models/911" ariaCurrent="page">
      911
    </a>
    <a href="/models/taycan">
      Taycan
    </a>
  </p-tabs-bar>
</nav>
```
