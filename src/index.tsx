import React from "react";
import { render } from "react-dom";

window['renderSticker'] = async (name: string) => {
  const Component = (await import(
    /* webpackChunkName: "[request]" */
    `./stickers/${name}.tsx`
  )).default;
  render(<Component />, document.getElementById('app'));
}
