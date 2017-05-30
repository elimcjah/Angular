import { NodeAng2ProjPage } from './app.po';

describe('node-ang2-proj App', () => {
  let page: NodeAng2ProjPage;

  beforeEach(() => {
    page = new NodeAng2ProjPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
