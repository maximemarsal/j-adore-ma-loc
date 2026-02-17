import { ScrollViewStyleReset } from 'expo-router/html';

export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="description" content="J'adore Ma Loc - Réductions exclusives et suivi de contrats pour locataires" />
        
        {/* iOS PWA */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="J'adore Ma Loc" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Android PWA */}
        <meta name="mobile-web-app-capable" content="yes" />
        
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" type="image/png" href="/icon-192.png" />
        
        <title>J'adore Ma Loc</title>

        <ScrollViewStyleReset />

        <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
      </head>
      <body>{children}</body>
    </html>
  );
}

const globalStyles = `
@import url('https://fonts.cdnfonts.com/css/futura-pt');

* {
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
}

html, body, #root {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
}

body {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

@supports (padding: env(safe-area-inset-bottom)) {
  body {
    padding-top: env(safe-area-inset-top);
    padding-bottom: env(safe-area-inset-bottom);
    padding-left: env(safe-area-inset-left);
    padding-right: env(safe-area-inset-right);
  }
}

.futura-title {
  font-family: 'Futura PT', 'Futura', -apple-system, sans-serif;
  font-weight: 400;
}`;
