import { Inter, Plus_Jakarta_Sans, Raleway } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
});

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
});

const variableConstant = 'variable';
// const fontInterVar = inter.variable.replace(variableConstant, 'Inter');
// const fontPlusJakartaSansVar = plusJakartaSans.variable.replace(variableConstant, 'Plus_Jakarta_Sans');
const fontRalewayVar = raleway.variable.replace(variableConstant, 'Raleway');

export const GlobalFontVariables = () => (
  <style jsx global>{`
    html {
      --font-raleway: ${fontRalewayVar};
    }
  `}</style>
);


// --font-inter: ${fontInterVar};
// --font-plus-jakarta-sans: ${fontPlusJakartaSansVar};