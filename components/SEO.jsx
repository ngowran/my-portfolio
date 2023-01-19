import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";

// See object prototype on SEO.jsx page
const seoData = {
    title: "Niamh Gowran",
    description:
        "Niamh Gowran | Software Engineer ",
    author: "Niamh Gowran",
    image: "https://scontent-dub4-1.xx.fbcdn.net/v/t39.30808-6/271202676_3161876300723283_5921081619621184968_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_ohc=rNVN6IzZ_hMAX-lDUq4&_nc_ht=scontent-dub4-1.xx&oh=00_AfCnxWkr6wt-zGmiv0xLwi3chbPFp_5TezpOEGNncLZnnw&oe=63BFECD3",
    url: "https://pentonyds-frontend.vercel.app/",
    keywords: [
        "Niamh Gowran",
        "Software Engineer",
        "FullStack Developer",
        "Frontend Developer",
        "Backend Developer",
        "React Developer",
        "Next.js Developer",
        "JavaScript Developer",
        "Dublin City University",
    ]
}

function SEO() {
    return (
        <Head>
            <title>{seoData.title}</title>
            <meta name="title" content={seoData.title} />
            <meta name="author" content={seoData.author} />
            <meta name="description" content={seoData.description} />
            <meta name="keywords" content={seoData.keywords.join(", ")} />
            <link rel="canonical" href={seoData.url} />
            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={seoData.url} />
            <meta property="og:title" content={seoData.title} />
            <meta property="og:description" content={seoData.description} />
            <meta property="og:image" content={seoData.image} />
            <meta property="og:site_name" content={seoData.title} />
            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={seoData.url} />
            <meta property="twitter:title" content={seoData.title} />
            <meta property="twitter:description" content={seoData.description} />
            <meta property="twitter:image" content={seoData.image} />
            <meta name="robots" content="Index" />
            <link rel="manifest" href="/manifest.json" />
            {/* Favicon */}
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
}

SEO.prototype = {
    data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        author: PropTypes.string,
        description: PropTypes.string,
        image: PropTypes.string,
        url: PropTypes.string,
        keywords: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
};

export default SEO;