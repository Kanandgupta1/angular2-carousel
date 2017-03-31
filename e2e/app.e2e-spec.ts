import { CarouselPage } from './app.po';

describe('carousel App', () => {
  let page: CarouselPage;

  beforeEach(() => {
    page = new CarouselPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
