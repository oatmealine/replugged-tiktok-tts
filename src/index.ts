import { Injector, webpack as _webpack } from "replugged";

const inject = new Injector();

export async function start(): Promise<void> {
  /*
  const contextMenu = await webpack.waitForModule<{
    openContextMenu: (test: string) => void;
  }>(webpack.filters.byProps('openContextMenu'));

  if (contextMenu) {
    inject.after(contextMenu, 'openContextMenu', (test) => {
      console.log(test);
    });
  }
  */
}

export function stop(): void {
  inject.uninjectAll();
}
