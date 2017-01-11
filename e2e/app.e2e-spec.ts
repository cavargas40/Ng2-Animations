import { Ng2AnimationsPage } from './app.po';

describe('ng2-animations App', function() {
  let page: Ng2AnimationsPage;

  beforeEach(() => {
    page = new Ng2AnimationsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
