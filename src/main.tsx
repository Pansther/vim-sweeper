import { ViteReactSSG } from "vite-react-ssg/single-page";

import App from "./pages/landing/index.tsx";

import "./index.scss";
import "./tailwind.css";
import "@fontsource/nunito";

export const createRoot = ViteReactSSG(<App />);
