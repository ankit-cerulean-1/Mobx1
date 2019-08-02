import TesStore from './TestStore'

class RootStore {
  constructor() {
    this.tesStore = new TesStore()
  }
}

export const rootStore = new RootStore()
