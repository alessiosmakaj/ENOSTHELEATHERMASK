import { ElementRef } from '@angular/core';
import { PlayOnVisibleDirective } from './play-on-visible.directive';

describe('PlayOnVisibleDirective', () => {
  let video: jasmine.SpyObj<HTMLVideoElement>;
  let ioCallback: IntersectionObserverCallback;
  let directive: PlayOnVisibleDirective;

  beforeEach(() => {
    video = jasmine.createSpyObj('video', ['play', 'pause']);
    video.play.and.returnValue(Promise.resolve());
    (window as any).IntersectionObserver = class {
      constructor(cb: IntersectionObserverCallback) { ioCallback = cb; }
      observe() {}
      disconnect() {}
    };
    directive = new PlayOnVisibleDirective(new ElementRef(video));
    directive.ngAfterViewInit();
  });

  it('muta il video prima di osservarlo', () => {
    expect(video.muted).toBeTrue();
  });

  it('parte quando entra in vista', () => {
    ioCallback([{ isIntersecting: true } as IntersectionObserverEntry], {} as IntersectionObserver);
    expect(video.play).toHaveBeenCalled();
  });

  it('si ferma quando esce dalla vista', () => {
    ioCallback([{ isIntersecting: false } as IntersectionObserverEntry], {} as IntersectionObserver);
    expect(video.pause).toHaveBeenCalled();
  });
});
