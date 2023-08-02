// src/@chakra-ui/gatsby-plugin/theme.js
import { extendTheme } from '@chakra-ui/react';
const theme = {
    colors: {
        primary: 'rebeccapurple',
    },
    fonts: {
        body: "Inter, sans-serif",
        heading: "Inter, sans-serif",
        mono: "Menlo, monospace",
    }
};

export default extendTheme(theme);