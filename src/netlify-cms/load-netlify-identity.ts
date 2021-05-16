export async function loadNetlifyIdentity() {
  if (
    typeof window !== "undefined" &&
    window.location.href.includes("#invite_token=")
  ) {
    const script = document.createElement("script");
    script.src = "https://identity.netlify.com/v1/netlify-identity-widget.js";
    script.async = true;
    document.body.appendChild(script);

    while ((window as any).netlifyIdentity === undefined) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }

    (window as any).netlifyIdentity.on("init", (user: any) => {
      if (!user) {
        (window as any).netlifyIdentity.on("login", () => {
          document.location.href = "/admin/";
        });
      }
    });
  }
}
