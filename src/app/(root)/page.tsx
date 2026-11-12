import { basePath } from "@/lib/site";
import { routing } from "@/routing";

/**
 * The bare address has no content of its own: it sends visitors to their
 * language. A static host cannot redirect on the server, so the page does it
 * in the browser — French browsers get /fr/, everyone else the default.
 */
export default function RootPage() {
  const fallback = `${basePath}/${routing.defaultLocale}/`;
  const redirect = `var l=(navigator.language||"").toLowerCase().indexOf("fr")===0?"fr":"${routing.defaultLocale}";location.replace("${basePath}/"+l+"/"+location.hash);`;

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: redirect }} />
      <noscript>
        <meta httpEquiv="refresh" content={`0; url=${fallback}`} />
      </noscript>
      <p style={{ fontFamily: "system-ui, sans-serif", padding: "2rem" }}>
        <a href={`${basePath}/en/`}>English</a> · <a href={`${basePath}/fr/`}>Français</a>
      </p>
    </>
  );
}
