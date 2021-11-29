import { GithubDemoAppPage } from './app.po';

describe('github-demo-app App', () => {
  let page: GithubDemoAppPage;

  beforeEach(() => {
    page = new GithubDemoAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
