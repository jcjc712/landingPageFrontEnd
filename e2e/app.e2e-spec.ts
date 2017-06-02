import { SociallandPage } from './app.po';

describe('socialland App', () => {
  let page: SociallandPage;

  beforeEach(() => {
    page = new SociallandPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
