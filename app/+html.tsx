import { ScrollViewStyleReset } from 'expo-router/html';

export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover" />
        <meta name="theme-color" content="#0a373e" />
        <meta name="description" content="J'adore Ma Loc - Réductions exclusives et suivi de contrats pour locataires" />
        
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="J'adore Ma Loc" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" type="image/png" href="/icon-192.png" />
        
        <title>J'adore Ma Loc</title>

        <ScrollViewStyleReset />

        <style dangerouslySetInnerHTML={{ __html: responsiveBackground }} />
      </head>
      <body>{children}</body>
    </html>
  );
}

const responsiveBackground = `
@import url('https://fonts.cdnfonts.com/css/futura-pt');

body {
  background-color: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
}
@media (prefers-color-scheme: dark) {
  body {
    background-color: #0a373e;
  }
}
.futura-title {
  font-family: 'Futura PT', 'Futura', -apple-system, sans-serif;
  font-weight: 400;
}`;
