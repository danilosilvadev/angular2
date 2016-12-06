import { AngularLearningPage } from './app.po';

describe('angular-learning App', function() {
  let page: AngularLearningPage;

  beforeEach(() => {
    page = new AngularLearningPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
