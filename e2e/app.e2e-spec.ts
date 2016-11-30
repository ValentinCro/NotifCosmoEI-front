import { NotifCosmosEIPage } from './app.po';

describe('notif-cosmos-ei App', function() {
  let page: NotifCosmosEIPage;

  beforeEach(() => {
    page = new NotifCosmosEIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
