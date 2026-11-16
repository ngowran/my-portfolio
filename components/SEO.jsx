import Head from "next/head";
import { profile } from "../data/profile";

const seo = {
  title: `${profile.name} · ${profile.role} at ${profile.company}`,
  description: `${profile.name} is a ${profile.role} at ${profile.company} in ${profile.location}, building cloud infrastructure, backend systems and observability tooling with C++, C#, .NET and OpenTelemetry.`,
  url: profile.links.website,
  image: `${profile.links.website}logo.png`,
};

export default function SEO() {
  return (
    <Head>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="author" content={profile.name} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
      <meta name="theme-color" content="#09090b" media="(prefers-color-scheme: dark)" />
      <link rel="canonical" href={seo.url} />
      <link rel="icon" href="/favicon.ico" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:site_name" content={profile.name} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: profile.name,
            jobTitle: profile.role,
            worksFor: { "@type": "Organization", name: "Microsoft" },
            alumniOf: "Dublin City University",
            url: seo.url,
            sameAs: [profile.links.linkedin, profile.links.github],
          }),
        }}
      />
    </Head>
  );
}
