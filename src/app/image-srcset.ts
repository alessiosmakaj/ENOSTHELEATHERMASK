// Il telefono riceve la variante da 1000px, il desktop quella piena: meno memoria decodificata su mobile.
export const srcsetFor = (src: string): string =>
  `${src.replace(/\.jpg$/, '-m.jpg')} 1000w, ${src} 1400w`;

export const GALLERY_SIZES = '(max-width: 768px) 60vw, 520px';
