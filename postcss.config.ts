import autoprefixer from 'autoprefixer';
import postcssImport from 'postcss-import';
import postcssMixins from 'postcss-mixins';
import postcssCustomMedia from 'postcss-custom-media';
import postcssNested from 'postcss-nested';
import { Plugin } from 'postcss';

export default {
  plugins: [
    autoprefixer,
    postcssImport() as Plugin,
    postcssMixins() as Plugin,
    postcssCustomMedia() as Plugin,
    postcssNested() as Plugin,
  ],
};
