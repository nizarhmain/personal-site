import { Prism } from "prism-react-renderer";

(typeof global !== "undefined" ? global : window).Prism = Prism;

require("prismjs/components/prism-bash");

// Solved thanks to this from here https://github.com/PrismJS/prism/issues/3458
require("prismjs/components/prism-java");
require("prismjs/components/prism-scala");
