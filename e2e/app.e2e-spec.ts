import { QaqcPage } from './app.po';

describe('qaqc App', () => {
  let page: QaqcPage;

  beforeEach(() => {
    page = new QaqcPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
