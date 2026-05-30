import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Welcome to the Wedding of Hardi &amp; Alenda - 06 June 2026',
  description: "Alenda & Hardi Digital Invitation by Viding.co",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="icon" href="https://media.viding.co/dmlkaW5nIGNvIGltYWdlIHByb3h5IGJ5IGZseS5pbw/rs:auto:192:192:1/g:no/.png" sizes="192x192" />
        <link rel="icon" href="https://media.viding.co/dmlkaW5nIGNvIGltYWdlIHByb3h5IGJ5IGZseS5pbw/rs:auto:32:32:1/g:no/.png" sizes="32x32" />
        <link rel="icon" href="https://media.viding.co/dmlkaW5nIGNvIGltYWdlIHByb3h5IGJ5IGZseS5pbw/rs:auto:16:16:1/g:no/.png" sizes="16x16" />
        <link rel="preconnect" href="https://media.viding.co" />
        <link rel="stylesheet" href="https://themes.viding.co/fonts/font.css?v=863150de4d095322119e0332b6ab2b837f531a4c" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.3/css/bootstrap.min.css" integrity="sha512-GQGU0fMMi238uA+a/bdWJfpUGKUkBdgfFdgBm72SUQ6BeyWjoY/ton0tEjH+OSH9iP4Dfh+7HM0I9f5eR0L/4w==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <link rel="stylesheet" href="https://themes.viding.co/theme_133/assets/css/styles.css?v=313d2b9d18acfe89372e4fa0d5b84890bc29ba5f" />
        <link rel="stylesheet" href="https://themes.viding.co/assets/css/gift_registry.css?v=2743170fec6571fc960f890d3c163b13875e515d" />
        <link rel="stylesheet" href="https://themes.viding.co/assets/css/navbar_style.css?version=e61ec69c86b4738d6fce7e1d99949e7e171452a2" />
        <link rel="stylesheet" href="https://themes.viding.co/assets/css/gallery_style.css?version=01a15835716ae67e71575c8fac011dc124cfd3e7" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css" integrity="sha256-5uKiXEwbaQh9cgd2/5Vp6WmMnsUr3VZZw0a8rKnOKNU=" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.min.css" integrity="sha512-+EoPw+Fiwh6eSeRK7zwIKG2MA8i3rV/DGa3tdttQGgWyatG/SkncT53KHQaS5Jh9MNOT3dmFL0FjTY08And/Cw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.0/css/all.min.css" integrity="sha512-10/jx2EXwxxWqCLX/hHth/vu2KY3jCF70dCQB8TSgNjbCVAC/8vai53GfMDrO2Emgwccf2pJqxct9ehpzG+MTw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/splidejs/3.6.11/css/splide.min.css" integrity="sha512-hGONuXHBHHk8XNhp8rFRsrsal02f/gSfBHz7BkpfkIA5LoL34oywr3l0V/zBt0b2/cFtcPTJDmaVpJmmpaI3dQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <link rel="stylesheet" href="https://themes.viding.co/theme_133/assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="https://themes.viding.co/frontend/libraries/icofont/icofont.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/izitoast/1.4.0/css/iziToast.css" integrity="sha512-DIW4FkYTOxjCqRt7oS9BFO+nVOwDL4bzukDyDtMO7crjUZhwpyrWBFroq+IqRe6VnJkTpRAS6nhDvf0w+wHmxg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
