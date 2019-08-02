import {observable, action} from 'mobx';

class TestStore {
  @observable loading = true;
  @observable count = 123 ;

  @action loadingCompleted() {
    this.loading = false;
  }

  @action toggleLoading() {
    this.loading = !this.loading; // better use tennary ! for toggle
  }
}

export default new TestStore();