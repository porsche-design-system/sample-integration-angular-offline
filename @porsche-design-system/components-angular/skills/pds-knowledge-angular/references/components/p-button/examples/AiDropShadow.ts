import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PorscheDesignSystemModule } from '@porsche-design-system/components-angular';

@Component({
  selector: 'porsche-design-system-app',
  template: `
      <style>
        .custom-ai-shadow {
  --p-button-bg: #fff;
  --p-button-fg: #000;
  box-shadow: var(--p-shadow-lg);
}

.custom-ai-shadow:not(:disabled, :state(loading)):hover {
  --p-button-bg: var(--p-color-frosted-strong);
  --p-button-fg: var(--p-color-primary);
}
      </style>

      <div class="flex flex-wrap gap-static-lg items-start">
        <p-button class="custom-ai-shadow" icon="ai-chat" [hideLabel]="true">
          Ask AI assistant
        </p-button>
        <p-button class="custom-ai-shadow" icon="ai-chat">
          Ask AI assistant
        </p-button>
      </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [PorscheDesignSystemModule], // <-- PDS module is imported here
})
export class ExampleComponent {}
