import "./i18n.config";

import AppRoutingProvider from "./providers/AppRoutingProvider";
import AppStyleProvider from "./providers/AppStyleProvider";

function App(): JSX.Element {
  return (
    <AppStyleProvider>
      <AppRoutingProvider />
    </AppStyleProvider>
  );
}

export default App;
