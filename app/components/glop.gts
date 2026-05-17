import type { TOC } from '@ember/component/template-only';

export interface GlopSignature {
  // The arguments accepted by the component
  Args: {};
  // Any blocks yielded by the component
  Blocks: {
    default: []
  };
  // The element to which `...attributes` is applied in the component template
  Element: null;
}

<template>
  <marquee>hey</marquee>
</template> satisfies TOC<GlopSignature>;
